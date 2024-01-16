import React from 'react';

export const useHello = () => {
  const [state, setState] = React.useState('hello');
  return { state, setState };
};
