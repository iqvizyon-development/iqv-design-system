import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Persona } from '@iqvizyonui/react-components';
import type { PersonaProps } from '@iqvizyonui/react-components';

export const Default = (props: Partial<PersonaProps>): JSXElement => {
  return (
    <Persona
      name="Kevin Sturgis"
      secondaryText="Available"
      presence={{ status: 'available' }}
      avatar={{
        image: {
          src: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png',
        },
      }}
      {...props}
    />
  );
};
