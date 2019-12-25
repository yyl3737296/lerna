import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NbInputButton from '../src/NbInputButton';


storiesOf('composite', module)
  .add('NbInputButton', () => <NbInputButton handleOnclick={action('clicked')}/>);