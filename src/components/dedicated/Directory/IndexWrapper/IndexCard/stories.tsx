import React from 'react';
import { storiesOf } from '@storybook/react';
import IndexCard from './index';

const stories = storiesOf('components/core/IndexCard', module);

const dumbyData = {
  effects: [''],
  date: {
    endDate: '12',
    startDate: '43',
  },
  funding: 'text',
  income: {},
  incomeType: 'text',
  isActive: true,
  label: ' label',
  location: 'text',
  organization: 'text',
  sample: 'text',
  sampleAge: '666',
  src: ['src'],
  title: 'title',
};

stories.add('Preview', () => <IndexCard {...dumbyData} />, {
  options: {
    showAddonPanel: false,
  },
});
