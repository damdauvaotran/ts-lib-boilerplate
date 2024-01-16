import React from 'react';
import { renderToString } from 'react-dom/server';

import { useHello } from '../useForm';

describe('useForm with SSR', () => {
  it('should not output error', () => {
    const Component = () => {
      useHello();
      return (
        <div>
          <input />
        </div>
      );
    };

    const spy = jest.spyOn(console, 'error');

    expect(renderToString(<Component />)).toEqual('<div><input/></div>');

    expect(spy).not.toHaveBeenCalled();
  });
});
