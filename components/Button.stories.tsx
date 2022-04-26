import React from 'react';
import {Button} from './Button';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    children: 'Hello world',
  },
};

export const Basic = args => <Button {...args} />;
export const Added = () => <Button children="tests" />;
