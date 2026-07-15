import { AST_NODE_TYPES } from '@typescript-eslint/utils';

import { createRule } from './utils/create-rule';

export const RULE_NAME = 'prefer-react-components';

type Options = Array<{}>;

type MessageIds = 'replaceLegacyImport' | 'replaceIconWithJsx' | 'replaceStackWithFlex' | 'replaceFocusZoneWithTabster';

export const rule = createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Prefer `@iqvizyonui/react-components` over the legacy `@iqvizyonui/react` package.',
    },
    schema: [],
    messages: {
      replaceLegacyImport: `Avoid importing {{ legacy }} from '@iqvizyonui/react'. Import {{ replacement }} from '{{ package }}' instead.`,
      replaceIconWithJsx: `Avoid using Icon from '@iqvizyonui/react'. Use a JSX SVG icon from '@fluentui/react-icons' instead.`,
      replaceStackWithFlex: `Avoid using Stack from '@iqvizyonui/react'. Use native CSS flexbox instead.`,
      replaceFocusZoneWithTabster: `Avoid using {{ legacy }} from '@iqvizyonui/react'. Use the equivalent [Tabster](https://tabster.io/) hook instead.`,
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration(node) {
        const source = node.source.value;
        const isLegacyReactImport = source === '@iqvizyonui/react' || source.startsWith('@iqvizyonui/react/');

        if (!isLegacyReactImport) {
          return;
        }

        for (const specifier of node.specifiers) {
          if (
            specifier.type === AST_NODE_TYPES.ImportSpecifier &&
            specifier.imported.type === AST_NODE_TYPES.Identifier
          ) {
            const name = specifier.imported.name;

            switch (name) {
              case 'Icon':
                context.report({ node, messageId: 'replaceIconWithJsx' });
                break;
              case 'Stack':
                context.report({ node, messageId: 'replaceStackWithFlex' });
                break;
              case 'FocusTrapZone':
              case 'FocusZone':
                context.report({ node, messageId: 'replaceFocusZoneWithTabster', data: { legacy: name } });
                break;
              default:
                if (isReplacement(name)) {
                  const replacement = REPLACEMENTS[name];

                  context.report({
                    node,
                    messageId: 'replaceLegacyImport',
                    data: {
                      legacy: name,
                      replacement: replacement.import,
                      package: replacement.package,
                    },
                  });
                }
            }
          }
        }
      },
    };
  },
});

const REPLACEMENTS = {
  makeStyles: { import: 'makeStyles', package: '@iqvizyonui/react-components' },
  ActionButton: { import: 'Button', package: '@iqvizyonui/react-components' },
  Announced: { import: 'useAnnounce', package: '@iqvizyonui/react-components' },
  Breadcrumb: { import: 'Breadcrumb', package: '@iqvizyonui/react-components' },
  Button: { import: 'Button', package: '@iqvizyonui/react-components' },
  Calendar: { import: 'Calendar', package: '@iqvizyonui/react-calendar-compat' },
  Callout: { import: 'Popover', package: '@iqvizyonui/react-components' },
  Checkbox: { import: 'Checkbox', package: '@iqvizyonui/react-components' },
  ChoiceGroup: { import: 'RadioGroup', package: '@iqvizyonui/react-components' },
  Coachmark: { import: 'TeachingPopover', package: '@iqvizyonui/react-components' },
  ComboBox: { import: 'Combobox', package: '@iqvizyonui/react-components' },
  CommandBar: { import: 'Toolbar', package: '@iqvizyonui/react-components' },
  CommandBarButton: { import: 'Toolbar', package: '@iqvizyonui/react-components' },
  CommandButton: { import: 'MenuButton', package: '@iqvizyonui/react-components' },
  CompoundButton: { import: 'CompoundButton', package: '@iqvizyonui/react-components' },
  ContextualMenu: { import: 'Menu', package: '@iqvizyonui/react-components' },
  ContextualMenuItem: { import: 'MenuItem', package: '@iqvizyonui/react-components' },
  DatePicker: { import: 'DatePicker', package: '@iqvizyonui/react-datepicker-compat' },
  DefaultButton: { import: 'Button', package: '@iqvizyonui/react-components' },
  DetailsList: { import: 'DataGrid', package: '@iqvizyonui/react-components' },
  Dialog: { import: 'Dialog', package: '@iqvizyonui/react-components' },
  DocumentCard: { import: 'Card', package: '@iqvizyonui/react-components' },
  DocumentCardTitle: { import: 'CardHeader', package: '@iqvizyonui/react-components' },
  DocumentCardPreview: { import: 'CardPreview', package: '@iqvizyonui/react-components' },
  Dropdown: { import: 'Dropdown', package: '@iqvizyonui/react-components' },
  Fabric: { import: 'IqvizyonProvider', package: '@iqvizyonui/react-components' },
  Facepile: { import: 'AvatarGroup', package: '@iqvizyonui/react-components' },
  FocusTrapZone: { import: 'Tabster', package: '@iqvizyonui/react-components' },
  FocusZone: { import: 'Tabster', package: '@iqvizyonui/react-components' },
  GroupedList: { import: 'Tree', package: '@iqvizyonui/react-components' },
  HoverCard: { import: 'Popover', package: '@iqvizyonui/react-components' },
  IconButton: { import: 'Button', package: '@iqvizyonui/react-components' },
  Image: { import: 'Image', package: '@iqvizyonui/react-components' },
  Keytips: { import: 'Keytips', package: '@fluentui-contrib/react-keytips' },
  Label: { import: 'Label', package: '@iqvizyonui/react-components' },
  Layer: { import: 'Portal', package: '@iqvizyonui/react-components' },
  Link: { import: 'Link', package: '@iqvizyonui/react-components' },
  List: { import: 'List', package: '@iqvizyonui/react-components' },
  MessageBar: { import: 'MessageBar', package: '@iqvizyonui/react-components' },
  Modal: { import: 'Dialog', package: '@iqvizyonui/react-components' },
  Nav: { import: 'Nav', package: '@iqvizyonui/react-components' },
  OverflowSet: { import: 'Overflow', package: '@iqvizyonui/react-components' },
  Overlay: { import: 'Portal', package: '@iqvizyonui/react-components' },
  Panel: { import: 'Drawer', package: '@iqvizyonui/react-components' },
  PeoplePicker: { import: 'TagPicker', package: '@iqvizyonui/react-components' },
  Persona: { import: 'Persona', package: '@iqvizyonui/react-components' },
  PersonaPresence: { import: 'Persona', package: '@iqvizyonui/react-components' },
  Pivot: { import: 'TabList', package: '@iqvizyonui/react-components' },
  PivotItem: { import: 'Tab', package: '@iqvizyonui/react-components' },
  ProgressIndicator: { import: 'ProgressBar', package: '@iqvizyonui/react-components' },
  Rating: { import: 'Rating', package: '@iqvizyonui/react-components' },
  SearchBox: { import: 'SearchBox', package: '@iqvizyonui/react-components' },
  Separator: { import: 'Divider', package: '@iqvizyonui/react-components' },
  Shimmer: { import: 'Skeleton', package: '@iqvizyonui/react-components' },
  Slider: { import: 'Slider', package: '@iqvizyonui/react-components' },
  SpinButton: { import: 'SpinButton', package: '@iqvizyonui/react-components' },
  Spinner: { import: 'Spinner', package: '@iqvizyonui/react-components' },
  SplitButton: { import: 'SplitButton', package: '@iqvizyonui/react-components' },
  Stack: { import: 'StackShim', package: '@iqvizyonui/react-components' },
  SwatchColorPicker: { import: 'SwatchPicker', package: '@iqvizyonui/react-components' },
  TagPicker: { import: 'TagPicker', package: '@iqvizyonui/react-components' },
  TeachingBubble: { import: 'TeachingPopover', package: '@iqvizyonui/react-components' },
  Text: { import: 'Text', package: '@iqvizyonui/react-components' },
  TextField: { import: 'Input', package: '@iqvizyonui/react-components' },
  TimePicker: { import: 'TimePicker', package: '@iqvizyonui/react-timepicker-compat' },
  Toggle: { import: 'Switch', package: '@iqvizyonui/react-components' },
  ToggleButton: { import: 'ToggleButton', package: '@iqvizyonui/react-components' },
  Tooltip: { import: 'Tooltip', package: '@iqvizyonui/react-components' },
  TooltipHost: { import: 'Tooltip', package: '@iqvizyonui/react-components' },
};

const isReplacement = (name: string): name is keyof typeof REPLACEMENTS => name in REPLACEMENTS;
