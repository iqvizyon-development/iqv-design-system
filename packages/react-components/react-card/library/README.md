# @iqvizyonui/react-card

**React Card components for [Iqvizyon UI React](https://iqvizyon-development.github.io/iqv-design-system/react/)**

A card is a container that holds information and actions related to a single concept or object, like a document or a contact.

## Usage

To import React Card components:

```js
import { Card, CardPreview, CardHeader, CardFooter } from "@iqvizyonui/react-components';
```

Example Card usage:

![example of a Card component in usage](./docs/assets/card-example.png)

```jsx
import { Share16Regular, ArrowReply16Regular } from '@fluentui/react-icons';
import { Button, Body1, Caption1 } from '@iqvizyonui/react-components';
import { Card, CardHeader, CardPreview, CardFooter } from '@iqvizyonui/react-components';

const App = () => (
  <>
    <Card>
      <CardHeader
        image={
          <img
            src="https://raw.githubusercontent.com/iqvizyon-development/iqv-design-system/main/packages/react-components/react-card/stories/src/assets/avatar_elvia.svg"
            alt="Face of a person"
          />
        }
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />
      <CardPreview>
        <img
          src="https://raw.githubusercontent.com/iqvizyon-development/iqv-design-system/main/packages/react-components/react-card/stories/src/assets/doc_template.png"
          alt="Preview of a document"
        />
      </CardPreview>
      <CardFooter>
        <Button icon={<ArrowReply16Regular />}>Reply</Button>
        <Button icon={<Share16Regular />}>Share</Button>
      </CardFooter>
    </Card>
  </>
);
```

## Specification

See the [Spec.md](./Spec.md) file for background information on the design/engineering decisions of the component.

## API

For information about the components, please refer to the [API documentation](https://iqvizyon-development.github.io/iqv-design-system/react/?path=/docs/preview-components-card--default).
