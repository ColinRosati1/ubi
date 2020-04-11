import React from 'react';
import { storiesOf } from '@storybook/react';
import IndexCard from './index';

const stories = storiesOf('components/core/IndexCard', module);

stories.add('Preview', () => <IndexCard />, {
  options: {
    showAddonPanel: false,
  },
});
