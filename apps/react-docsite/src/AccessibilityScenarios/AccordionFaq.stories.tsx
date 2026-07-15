import * as React from 'react';

import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from '@iqvizyonui/react-components';

import { Scenario } from './utils';

export const FAQAccordion: React.FunctionComponent = () => {
  return (
    <Scenario pageTitle="FAQ accordion">
      <h1>Frequently asked questions about Iqvizyon UI</h1>
      <Accordion multiple>
        <AccordionItem value="faq1">
          <AccordionHeader as="h2">What is Iqvizyon UI?</AccordionHeader>
          <AccordionPanel>
            <p>
              Iqvizyon UI is a set of React components, web components, and charting libraries built for product teams.
              It provides accessible, themeable building blocks you can use across web apps.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="faq2">
          <AccordionHeader as="h2">How do I install Iqvizyon UI React?</AccordionHeader>
          <AccordionPanel>
            <p>Install the main package in your app, then wrap your tree with IqvizyonProvider.</p>
            <ol>
              <li>Run yarn add @iqvizyonui/react-components in your project.</li>
              <li>Import IqvizyonProvider and a theme such as webLightTheme.</li>
              <li>Place IqvizyonProvider at the root of your app and pass the theme prop.</li>
            </ol>
            <p>
              See the documentation at iqvizyon.com for setup guides, component APIs, and Storybook examples.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="faq3">
          <AccordionHeader as="h2">Where can I find support and examples?</AccordionHeader>
          <AccordionPanel>
            <p>
              You can browse component docs and examples on iqvizyon.com, open issues on the Iqvizyon UI GitHub
              repository, and review accessibility scenarios in this Storybook to validate keyboard and screen reader
              behavior.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Scenario>
  );
};
