import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NbButton from '../src/NbButton';
import NbInput from '../src/NbInput';


storiesOf('basic components', module)
  .add('Button', () => <NbButton handleOnclick={action('clicked')}/>)
  .add('NbInput', () => <NbInput handleOnclick={action('clicked')}/>);