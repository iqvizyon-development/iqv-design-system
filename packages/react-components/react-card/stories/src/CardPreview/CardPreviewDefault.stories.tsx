import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { CardPreview } from '@iqvizyonui/react-components';
import { resolveAsset } from '../resolveAsset';


export const Default = (): JSXElement => (
  <CardPreview>
    <img src={resolveAsset('doc_template.png')} alt="Preview of a document" />
  </CardPreview>
);
