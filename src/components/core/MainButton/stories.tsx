import React from 'react';
import { storiesOf } from '@storybook/react';
import MainButton from './index';

const stories = storiesOf('components/core/MainButton', module);

stories.add('Preview', () => <MainButton />, {
  options: {
    showAddonPanel: false,
  },
});
