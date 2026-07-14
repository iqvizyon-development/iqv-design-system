import * as React from 'react';
import { SplitButton, type MenuButtonProps } from '@iqvizyonui/react-button';
import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@iqvizyonui/react-menu';
import { Spinner } from '@iqvizyonui/react-spinner';
import { Toast, Toaster, ToastTitle, useToastController } from '@iqvizyonui/react-toast';
import { useId } from '@iqvizyonui/react-utilities';
import { makeStyles } from '@griffel/react';
import { bundleIcon, MarkdownFilled, MarkdownRegular } from '@fluentui/react-icons';
import { useIqvizyon_unstable as useIqvizyon } from '@iqvizyonui/react-shared-contexts';

const MarkdownIcon = bundleIcon(MarkdownFilled, MarkdownRegular);

const useStyles = makeStyles({
  button: {
    marginInlineStart: 'auto',
  },
});

export interface CopyAsMarkdownProps {
  storyId?: string;
}

export const CopyAsMarkdownButton = ({ storyId = '' }: CopyAsMarkdownProps) => {
  const { targetDocument } = useIqvizyon();
  const targetWindow = targetDocument?.defaultView;
  const styles = useStyles();
  const toastId = useId('copy-toast');
  const toasterId = useId('toaster');
  const { dispatchToast, updateToast } = useToastController(toasterId);

  const markdownContentCache = React.useRef<string | null>(null);
  const abortControllerRef = React.useRef<AbortController | null>(null);

  const markdownUrl = React.useMemo(() => {
    return targetWindow ? convertStoryIdToMarkdownUrl(targetWindow, storyId) : '';
  }, [storyId, targetWindow]);

  React.useEffect(() => {
    markdownContentCache.current = null;
  }, [storyId]);

  React.useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const resolveMarkdownContent = React.useCallback(
    async (signal: AbortSignal): Promise<string> => {
      if (markdownContentCache.current) {
        return markdownContentCache.current;
      }

      if (targetWindow && markdownUrl) {
        try {
          const remoteMarkdown = await fetchMarkdownContent(targetWindow, markdownUrl, signal);
          markdownContentCache.current = remoteMarkdown;
          return remoteMarkdown;
        } catch (error) {
          if (signal.aborted) {
            throw error;
          }
        }
      }

      if (!targetDocument) {
        throw new Error('Unable to access page content');
      }

      const localMarkdown = extractMarkdownFromDocsPage(targetDocument);
      markdownContentCache.current = localMarkdown;
      return localMarkdown;
    },
    [markdownUrl, targetDocument, targetWindow],
  );

  const copyPageContentToClipboard = React.useCallback(async () => {
    if (abortControllerRef.current && !abortControllerRef.current.signal.aborted) {
      return;
    }

    if (!targetWindow) {
      return;
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    dispatchToast(
      <Toast>
        <ToastTitle media={<Spinner />}>Copying page content...</ToastTitle>
      </Toast>,
      {
        toastId,
        intent: 'info',
        timeout: -1,
      },
    );

    try {
      const markdown = await resolveMarkdownContent(abortController.signal);
      await targetWindow.navigator.clipboard.writeText(markdown);

      updateToast({
        content: (
          <Toast>
            <ToastTitle>Page content copied to clipboard!</ToastTitle>
          </Toast>
        ),
        intent: 'success',
        toastId,
        timeout: 3000,
      });
    } catch (error) {
      if (abortController.signal.aborted) {
        return;
      }

      const errorMessage = error instanceof Error ? error.message : String(error);

      updateToast({
        content: (
          <Toast>
            <ToastTitle>Failed to copy page content: {errorMessage}</ToastTitle>
          </Toast>
        ),
        intent: 'error',
        toastId,
        timeout: 3000,
      });
    } finally {
      abortControllerRef.current = null;
    }
  }, [dispatchToast, updateToast, toastId, resolveMarkdownContent, targetWindow]);

  const openInNewTab = React.useCallback(async () => {
    if (!targetWindow) {
      return;
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const markdown = await resolveMarkdownContent(abortController.signal);
      const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
      const objectUrl = targetWindow.URL.createObjectURL(blob);
      targetWindow.open(objectUrl, '_blank');
      targetWindow.setTimeout(() => targetWindow.URL.revokeObjectURL(objectUrl), 60_000);
    } catch {
      if (markdownUrl) {
        targetWindow.open(markdownUrl, '_blank');
      }
    } finally {
      abortControllerRef.current = null;
    }
  }, [markdownUrl, resolveMarkdownContent, targetWindow]);

  if (!storyId) {
    return null;
  }

  return (
    <>
      <Menu positioning="below-end">
        <MenuTrigger disableButtonEnhancement>
          {(triggerProps: MenuButtonProps) => (
            <SplitButton
              className={styles.button}
              menuButton={triggerProps}
              primaryActionButton={{
                appearance: 'secondary',
                icon: <MarkdownIcon />,
                onClick: copyPageContentToClipboard,
                'aria-label': 'Copy page content as markdown to clipboard',
              }}
              aria-label="Copy page as markdown"
            >
              Copy Page
            </SplitButton>
          )}
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem icon={<MarkdownIcon />} onClick={openInNewTab}>
              View as Markdown
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
      <Toaster toasterId={toasterId} />
    </>
  );
};

const STORYBOOK_VARIANT_SUFFIX_PATTERN = /--[\w-]+$/;

function getStorybookMarkdownApiBaseUrl(targetWindow: Window): string {
  const pathname = targetWindow.location.pathname.replace(/\/[^/]*\.html$/, '').replace(/\/$/, '');
  return `${targetWindow.location.origin}${pathname}/llms/`;
}

function convertStoryIdToMarkdownUrl(targetWindow: Window, storyId: string): string {
  const fileName = storyId.replace(STORYBOOK_VARIANT_SUFFIX_PATTERN, '') + '.txt';
  return `${getStorybookMarkdownApiBaseUrl(targetWindow)}${fileName}`;
}

async function fetchMarkdownContent(
  targetWindow: Window,
  url: string,
  signal: AbortSignal | undefined,
): Promise<string> {
  const response = await targetWindow.fetch(url, {
    headers: {
      Accept: 'text/plain',
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch markdown: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

function extractMarkdownFromDocsPage(targetDocument: Document): string {
  const content =
    targetDocument.querySelector<HTMLElement>('#storybook-docs .sbdocs-content') ??
    targetDocument.querySelector<HTMLElement>('.sbdocs-content') ??
    targetDocument.querySelector<HTMLElement>('#storybook-docs');

  if (!content) {
    throw new Error('Unable to find page content to copy');
  }

  const clone = content.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll(
      'button, script, style, noscript, .toc-list, [aria-label="Copy page as markdown"], [aria-label="Copy page content as markdown to clipboard"]',
    )
    .forEach(element => element.remove());

  return htmlToMarkdown(clone).trim();
}

function htmlToMarkdown(root: HTMLElement): string {
  const parts: string[] = [];

  const walk = (node: Node, listDepth = 0) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.replace(/\s+/g, ' ');
      if (text?.trim()) {
        parts.push(text);
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element = node as HTMLElement;
    const tag = element.tagName.toLowerCase();

    if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5' || tag === 'h6') {
      const level = Number(tag[1]);
      parts.push(`\n\n${'#'.repeat(level)} ${element.textContent?.trim() ?? ''}\n\n`);
      return;
    }

    if (tag === 'p') {
      parts.push(`\n\n${element.textContent?.trim() ?? ''}\n\n`);
      return;
    }

    if (tag === 'br') {
      parts.push('\n');
      return;
    }

    if (tag === 'hr') {
      parts.push('\n\n---\n\n');
      return;
    }

    if (tag === 'pre') {
      const code = element.textContent ?? '';
      const languageClass = element.querySelector('[class*="language-"]')?.className ?? '';
      const languageMatch = languageClass.match(/language-([^\s]+)/);
      const language = languageMatch?.[1] ?? '';
      parts.push(`\n\n\`\`\`${language}\n${code.replace(/\n$/, '')}\n\`\`\`\n\n`);
      return;
    }

    if (tag === 'code' && element.parentElement?.tagName.toLowerCase() !== 'pre') {
      parts.push(`\`${element.textContent ?? ''}\``);
      return;
    }

    if (tag === 'strong' || tag === 'b') {
      parts.push(`**${element.textContent ?? ''}**`);
      return;
    }

    if (tag === 'em' || tag === 'i') {
      parts.push(`_${element.textContent ?? ''}_`);
      return;
    }

    if (tag === 'a') {
      const href = element.getAttribute('href');
      const label = element.textContent?.trim() ?? '';
      if (href && !href.startsWith('#') && label) {
        parts.push(`[${label}](${href})`);
      } else if (label) {
        parts.push(label);
      }
      return;
    }

    if (tag === 'li') {
      parts.push(`\n${'  '.repeat(listDepth)}- `);
      Array.from(element.childNodes).forEach(child => {
        if (
          child.nodeType === Node.ELEMENT_NODE &&
          ['UL', 'OL'].includes((child as HTMLElement).tagName)
        ) {
          walk(child, listDepth + 1);
        } else {
          walk(child, listDepth);
        }
      });
      return;
    }

    if (tag === 'ul' || tag === 'ol') {
      Array.from(element.childNodes).forEach(child => walk(child, listDepth));
      parts.push('\n');
      return;
    }

    if (tag === 'table') {
      parts.push(`\n\n${tableToMarkdown(element)}\n\n`);
      return;
    }

    if (tag === 'blockquote') {
      const quote = (element.textContent ?? '')
        .trim()
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');
      parts.push(`\n\n${quote}\n\n`);
      return;
    }

    Array.from(element.childNodes).forEach(child => walk(child, listDepth));
  };

  walk(root);
  return parts.join('').replace(/\n{3,}/g, '\n\n');
}

function tableToMarkdown(table: HTMLElement): string {
  const rows = Array.from(table.querySelectorAll('tr'));
  if (rows.length === 0) {
    return '';
  }

  const matrix = rows.map(row =>
    Array.from(row.querySelectorAll('th, td')).map(cell => (cell.textContent ?? '').trim().replace(/\|/g, '\\|')),
  );

  const header = matrix[0];
  const separator = header.map(() => '---');
  const body = matrix.slice(1);

  return [
    `| ${header.join(' | ')} |`,
    `| ${separator.join(' | ')} |`,
    ...body.map(row => `| ${row.join(' | ')} |`),
  ].join('\n');
}
