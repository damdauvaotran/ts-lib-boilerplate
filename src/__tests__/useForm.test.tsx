import { act, renderHook } from '@testing-library/react-hooks';

import { useHello } from '../useForm';

jest.useFakeTimers();

describe('useForm', () => {
  describe('when component unMount', () => {
    it('should call unSubscribe', () => {
      const { result, unmount } = renderHook(() => useHello());

      act(() => {
        result.current.setState('test');
      });

      unmount();

      expect(result.current.state).toEqual('test');
    });
  });
});
