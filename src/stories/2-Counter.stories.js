import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import Counter from '../Components/Counter';

export default {
  title: 'Counter',
};

export const Base = () => {
  const [value, setValue] = useState(0);

  return <Counter value={value} setValue={newValue => {
    action('setValue')(newValue);
    setValue(newValue)
  }} />
}

export const StepIsTwo = () => {
  const [value, setValue] = useState(0)

  return <Counter step={2} value={value} setValue={newValue => {
    action('setValue')(newValue);
    setValue(newValue)
  }} />
}
