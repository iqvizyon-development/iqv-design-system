import { isConformant as baseIsConformant } from '@iqvizyonui/react-conformance';

import type { IsConformantOptions, TestObject } from '@iqvizyonui/react-conformance';
import griffelTests from '@iqvizyonui/react-conformance-griffel';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
): void {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    tsConfig: { configName: 'tsconfig.spec.json' },
    componentPath: require.main?.filename.replace('.test', ''),
    extraTests: griffelTests as TestObject<TProps>,
  };

  baseIsConformant(defaultOptions, testInfo);
}
