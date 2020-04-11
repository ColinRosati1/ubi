import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import IndexBody from './index';

const stories = storiesOf('components/dedicated/IndexBody', module);
stories
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('Preview', () => <IndexBody />, {
    options: {
      showAddonPanel: false,
    },
  });
