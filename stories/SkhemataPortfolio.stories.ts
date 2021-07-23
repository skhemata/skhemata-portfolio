import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-portfolio';

export default {
  title: 'General/SkhemataPortfolio',
  component: 'skhemata-portfolio',
  argTypes: {
    configData: { control: 'object' },
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
}

const portfolioData = [
  {
    title: 'Project One',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    title: 'Project Two',
    imageUrl: 'https://picsum.photos/600/800',
    siteLink: 'https://www.devradius.com',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
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

const element = ({ configData }: any) => html`
  <skhemata-portfolio .configData=${configData}> </skhemata-portfolio>
`;

const Template: Story<ArgTypes> = ({ configData }: ArgTypes) =>
  element({ configData });

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
