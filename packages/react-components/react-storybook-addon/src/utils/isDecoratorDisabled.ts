import { getParametersConfig, type IqvizyonParameters, type IqvizyonStoryContext } from '../hooks';

type DecoratorName = NonNullable<NonNullable<IqvizyonParameters['reactStorybookAddon']>['disabledDecorators']>[number];

export function isDecoratorDisabled(context: IqvizyonStoryContext, decoratorName: DecoratorName): boolean {
  return getParametersConfig(context)?.disabledDecorators?.includes(decoratorName) ?? false;
}
