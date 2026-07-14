import { AST_NODE_TYPES } from '@typescript-eslint/utils';

import { createRule } from './utils/create-rule';

export const RULE_NAME = 'prefer-fluentui-v9';

type Options = Array<{}>;

type MessageIds = 'replaceFluent8With9' | 'replaceIconWithJsx' | 'replaceStackWithFlex' | 'replaceFocusZoneWithTabster';

export const rule = createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'This rule ensures the use of Iqvizyon UI v9 counterparts for Iqvizyon UI v8 components.',
    },
    schema: [],
    messages: {
      replaceFluent8With9: `Avoid importing {{ fluent8 }} from '@iqvizyonui/react', as this package has started migration to Iqvizyon UI 9. Import {{ fluent9 }} from '{{ package }}' instead.`,
      replaceIconWithJsx: `Avoid using Icon from '@iqvizyonui/react', as this package has already migrated to Iqvizyon UI 9. Use a JSX SVG icon from '@fluentui/react-icons' instead.`,
      replaceStackWithFlex: `Avoid using Stack from '@iqvizyonui/react', as this package has already migrated to Iqvizyon UI 9. Use native CSS flexbox instead. More details are available at https://react.fluentui.dev/?path=/docs/concepts-migration-from-v8-components-flex-stack--docs`,
      replaceFocusZoneWithTabster: `Avoid using {{ fluent8 }} from '@iqvizyonui/react', as this package has already migrated to Iqvizyon UI 9. Use the equivalent [Tabster](https://tabster.io/) hook instead.`,
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration(node) {
        const source = node.source.value;
        const isFluentV8Import = source === '@iqvizyonui/react' || source.startsWith('@iqvizyonui/react/');

        if (!isFluentV8Import) {
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
                context.report({ node, messageId: 'replaceFocusZoneWithTabster', data: { fluent8: name } });
                break;
              default:
                if (isMigration(name)) {
                  const migration = MIGRATIONS[name];

                  context.report({
                    node,
                    messageId: 'replaceFluent8With9',
                    data: {
                      fluent8: name,
                      fluent9: migration.import,
                      package: migration.package,
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

/**
 * Migrations from Fluent 8 components to Fluent 9 components.
 * @see https://react.fluentui.dev/?path=/docs/concepts-migration-from-v8-component-mapping--docs
 */
const MIGRATIONS = {
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
  HoverCard: { import: 'Popover', package: '@iqvizyonui/react-components' }, // Not a direct equivalent; but could be used with custom behavior.
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

/**
 * Checks if a component name is in the MIGRATIONS list.
 * @param name - The name of the component.
 * @returns True if the component is in the MIGRATIONS list, false otherwise.
 */
const isMigration = (name: string): name is keyof typeof MIGRATIONS => name in MIGRATIONS;
