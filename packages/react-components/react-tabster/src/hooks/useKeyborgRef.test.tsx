import { useIqvizyon_unstable } from '@iqvizyonui/react-shared-contexts';
import { renderHook } from '@testing-library/react-hooks';
import { createKeyborg, disposeKeyborg } from 'keyborg';

import { useKeyborgRef } from './useKeyborgRef';

jest.mock('keyborg', () => ({
  createKeyborg: jest.fn(),
  disposeKeyborg: jest.fn(),
}));

jest.mock('@iqvizyonui/react-shared-contexts', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  useIqvizyon_unstable: jest.fn(),
}));

const createKeyborgMock = createKeyborg as jest.Mock;
const disposeKeyborgMock = disposeKeyborg as jest.Mock;
const useIqvizyonMock = useIqvizyon_unstable as jest.Mock;

describe('useKeyborgRef', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call createKeyborg() if a window is available', () => {
    const mockKeyborg = { foo: 'bar' };

    useIqvizyonMock.mockReturnValueOnce({ targetDocument: document });
    createKeyborgMock.mockReturnValueOnce(mockKeyborg);

    const { result } = renderHook(() => useKeyborgRef());

    expect(createKeyborg).toHaveBeenCalledWith(window);
    expect(result.current.current).toBe(mockKeyborg);
  });

  it('should not call createKeyborg() targetDocument is not available', () => {
    useIqvizyonMock.mockReturnValueOnce({ targetDocument: null });

    const { result } = renderHook(() => useKeyborgRef());

    expect(createKeyborg).not.toHaveBeenCalled();
    expect(result.current.current).toBeNull();
  });

  it('should not call createKeyborg() targetWindow is not available', () => {
    useIqvizyonMock.mockReturnValueOnce({ targetDocument: { defaultView: null } });

    const { result } = renderHook(() => useKeyborgRef());

    expect(createKeyborg).not.toHaveBeenCalled();
    expect(result.current.current).toBeNull();
  });

  it('should dispose keyborg instance on unmount', () => {
    const mockKeyborg = { foo: 'bar' };

    useIqvizyonMock.mockReturnValueOnce({ targetDocument: document });
    createKeyborgMock.mockReturnValueOnce(mockKeyborg);

    const { unmount } = renderHook(() => useKeyborgRef());

    unmount();
    expect(disposeKeyborgMock).toHaveBeenCalledWith(mockKeyborg);
  });

  it('should recreate keyborg when targetDocument changes', () => {
    const mockDocumentA = { defaultView: { devicePixelRatio: 1 } as Window } as Document;
    const mockDocumentB = { defaultView: { devicePixelRatio: 0.5 } as Window } as Document;

    useIqvizyonMock.mockReturnValueOnce({ targetDocument: mockDocumentA });

    const { rerender } = renderHook(() => useKeyborgRef());

    expect(createKeyborg).toHaveBeenCalledWith(mockDocumentA.defaultView);
    expect(disposeKeyborg).not.toHaveBeenCalled();

    jest.clearAllMocks();

    useIqvizyonMock.mockReturnValueOnce({ targetDocument: mockDocumentB });
    rerender({});

    expect(disposeKeyborg).toHaveBeenCalled();
    expect(createKeyborg).toHaveBeenCalledTimes(1);
    expect(createKeyborg).toHaveBeenCalledWith(mockDocumentB.defaultView);
  });
});
