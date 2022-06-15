import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-portfolio';

export default {
  title: 'General/SkhemataPortfolio',
  component: 'skhemata-portfolio',
  argTypes: {
    configData: {
      name: 'config-data',
      control: 'object',
      description: 'Array of portfolio data',
      table: {
        category: 'HTML Attributes',
        type: 'object'
      }
    },
    portfolioBackgroundColor: {
      name: '--skhemata-portfolio-background-color',
      control: 'color',
      defaultValue: 'rgb(255, 193, 7)',
      description: 'Color of the portfolio background',
      table: {
        category: 'CSS Properties',
        type: 'string'
      }
    },
    portfolioTextColor: {
      name: '--skhemata-portfolio-text-color',
      control: 'color',
      defaultValue: 'rgb(255, 255, 255)',
      description: 'Color of the portfolio text',
      table: {
        category: 'CSS Properties',
        type: 'string'
      }
    },
  },
  parameters: {
    widgetCode: `
      <skhemata-portfolio config-src="https://cdn.jsdelivr.net/npm/@skhemata/skhemata-portfolio@latest/demo/projects.json"></skhemata-portfolio>

      <script type="module" src="https://cdn.jsdelivr.net/npm/@skhemata/skhemata-portfolio@latest/build/index.js"></script> 
    `,
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  parameters?: any;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  configData: any;
  portfolioBackgroundColor?: string;
  portfolioTextColor?: string;
}

const portfolioData = [
  {
    title: 'Project One',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    siteName: "my new site"
  },
  {
    title: 'Project Two',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    siteName: "my new site"
  },
  {
    title: 'Project Three',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    title: 'Project Four',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    title: 'Project Five',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    title: 'Project Six',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const element = ({ configData, portfolioBackgroundColor, portfolioTextColor }: any) => html`
  <style>
  body {
      --skhemata-portfolio-background-color: ${portfolioBackgroundColor};
      --skhemata-portfolio-text-color: ${portfolioTextColor};
  }
  </style>
  <skhemata-portfolio .configData=${configData}> </skhemata-portfolio>
`;

const Template: Story<ArgTypes> = ({ configData, portfolioBackgroundColor, portfolioTextColor }: ArgTypes) =>
  element({ configData, portfolioBackgroundColor, portfolioTextColor });

export const Default = Template.bind({});
Default.args = {
  configData: portfolioData,
};
Default.parameters = {
  docs: {
    source: {
      code: `<skhemata-portfolio config-data="${JSON.stringify(
        Default.args.configData,
        null,
        2
      )}"> </skhemata-portfolio>`,
    },
  },
};

// Extra example stories
/*
export const Example1 = Template.bind({});
Example1.args = {
  configData: {}
};
*/
