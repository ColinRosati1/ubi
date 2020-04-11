import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchWrapper from './index';

const stories = storiesOf('components/dedicated/SearchWrapper', module);

stories.add('Preview', () => <SearchWrapper />, {
  options: {
    showAddonPanel: false,
  },
});
