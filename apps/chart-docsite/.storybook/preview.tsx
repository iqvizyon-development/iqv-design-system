import type { Preview } from '@storybook/react-webpack5';
import React from 'react';

import * as rootPreview from '../../../.storybook/preview';

const chartTranslations: Record<string, { description: string }> = {
  'Charts/AreaChart': {
    description: 'Alan Grafiği (AreaChart), zaman içindeki değişimleri ve niceliksel verilerin hacmini göstermek için kullanılır.'
  },
  'Charts/DonutChart': {
    description: 'Halka Grafiği (DonutChart), kategorilerin bütün içindeki oranlarını dairesel bir halkanın dilimleri olarak gösterir.'
  },
  'Charts/LineChart': {
    description: 'Çizgi Grafiği (LineChart), veri noktalarının düz çizgilerle birleştirilmesiyle zaman içindeki eğilimleri ve değişimleri gösterir.'
  },
  'Charts/VerticalBarChart': {
    description: 'Dikey Çubuk Grafiği (VerticalBarChart), farklı kategoriler arasındaki niceliksel verileri dikey sütunlar halinde karşılaştırır.'
  },
  'Charts/HorizontalBarChart': {
    description: 'Yatay Çubuk Grafiği (HorizontalBarChart), özellikle kategori adları uzun olduğunda verileri yatay çubuklar halinde karşılaştırmak için mükemmeldir.'
  },
  'Charts/GaugeChart': {
    description: 'Gösterge Grafiği (GaugeChart), tek bir değerin belirli bir hedef veya aralık içindeki durumunu hız göstergesi benzeri bir kadran üzerinde gösterir.'
  },
  'Charts/HeatMapChart': {
    description: 'Isı Haritası Grafiği (HeatMapChart), iki boyutlu bir matris üzerindeki değerleri renk yoğunluklarıyla gösterir.'
  },
  'Charts/SankeyChart': {
    description: 'Sankey Grafiği (SankeyChart), bir sistem içindeki akışları, transferleri ve bunların miktarlarını görselleştirir.'
  },
  'Charts/ScatterChart': {
    description: 'Saçılım Grafiği (ScatterChart), iki değişken arasındaki ilişkiyi veya korelasyonu kartezyen koordinat sistemindeki noktalarla gösterir.'
  },
  'Charts/GanttChart': {
    description: 'Gantt Grafiği (GanttChart), bir projenin zaman çizelgesini, iş paketlerini ve bunların başlangıç-bitiş tarihlerini gösterir.'
  }
};

const preview: Preview & { parameters: import('@iqvizyonui/react-storybook-addon').IqvizyonParameters } = {
  ...rootPreview,
  decorators: [
    (Story: any, context: any) => {
      const locale = context.globals.locale || 'en';
      if (typeof document !== 'undefined') {
        document.documentElement.lang = locale;
        document.querySelectorAll('.docs-story').forEach(el => el.setAttribute('lang', locale));
      }

      if (context.parameters && context.parameters.docs) {
        const translation = chartTranslations[context.title];
        if (translation) {
          if (locale === 'tr') {
            if (!context.parameters.docs._originalDescription) {
              context.parameters.docs._originalDescription = context.parameters.docs.description?.component;
            }
            context.parameters.docs.description = context.parameters.docs.description || {};
            context.parameters.docs.description.component = translation.description;
          } else if (context.parameters.docs._originalDescription) {
            context.parameters.docs.description.component = context.parameters.docs._originalDescription;
          }
        }
      }

      return <Story />;
    },
    ...(rootPreview.decorators || []),
  ],
  globalTypes: {
    locale: {
      name: 'Language',
      description: 'Global language/locale for components',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'tr', title: 'Türkçe' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    ...rootPreview.parameters,
    docs: {
      ...rootPreview.parameters.docs,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Packages'],
      },
    },
    reactStorybookAddon: { docs: true },
  },
};

export const tags = ['autodocs'];

export default preview;
