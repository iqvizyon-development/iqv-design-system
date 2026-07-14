/*
 * @jest-environment node
 */

// 👆 this is intentionally to test in SSR like environment

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { resetIdsForTests } from '@iqvizyonui/react-utilities';
import { IqvizyonProvider } from './IqvizyonProvider';
import * as prettier from 'prettier';
import { createDOMRenderer } from '@griffel/core';
import { RendererProvider } from '@griffel/react';
import type { PartialTheme } from '@iqvizyonui/react-theme';

jest.mock('@iqvizyonui/react-utilities', () => ({
  ...jest.requireActual('@iqvizyonui/react-utilities'),
  ...jest.requireActual('../../testing/createUseIdMock').createUseIdMock(),
}));

const parseHTMLString = (html: string) => {
  return prettier.format(html, { parser: 'html' });
};

describe('IqvizyonProvider (node)', () => {
  const testTheme: PartialTheme = {
    colorNeutralForeground1: 'black',
    colorNeutralBackground1: 'white',
  };

  afterEach(() => {
    resetIdsForTests();
  });

  it('should render CSS variables as inline style', () => {
    const html = renderToStaticMarkup(<IqvizyonProvider theme={testTheme} />);

    expect(parseHTMLString(html)).toMatchInlineSnapshot(`
      "<div
        dir="ltr"
        class="iui-IqvizyonProvider iui-IqvizyonProvider1"
      >
        <style id="iui-IqvizyonProvider1">
          .iui-IqvizyonProvider1 {
            --colorNeutralForeground1: black;
            --colorNeutralBackground1: white;
          }
        </style>
      </div>"
    `);
  });

  it('renders nonce with SSR style element', () => {
    const nonce = 'random';
    const renderer = createDOMRenderer(undefined, {
      styleElementAttributes: { nonce },
    });

    const html = renderToStaticMarkup(
      <RendererProvider renderer={renderer}>
        <IqvizyonProvider theme={testTheme} />
      </RendererProvider>,
    );

    expect(parseHTMLString(html)).toMatchInlineSnapshot(`
      "<div
        dir="ltr"
        class="iui-IqvizyonProvider iui-IqvizyonProvider1"
      >
        <style nonce="random" id="iui-IqvizyonProvider1">
          .iui-IqvizyonProvider1 {
            --colorNeutralForeground1: black;
            --colorNeutralBackground1: white;
          }
        </style>
      </div>"
    `);
  });
});
