import { create, StateCreator } from "zustand";

interface LoadingOverLayState {
  open: boolean;
  isReady: boolean;
  initialLoad: (time?: number) => Promise<void>;
  trigger: (time?: number) => Promise<void>;
}

const store: StateCreator<LoadingOverLayState> = (set, get) => ({
  open: false,
  isReady: false,
  initialLoad: async (time = 2000) => {
    const state = get();
    let openValue = state.open;
    let readyValue = state.isReady;
    openValue = true;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        openValue = false;
        resolve();
      }, time);
    });
    readyValue = true;
    return set((state) => ({ ...state, open: openValue, isReady: readyValue }));
  },
  trigger: async (time = 2000) => {
    const state = get();
    let openValue = state.open;
    openValue = true;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        openValue = false;
        resolve();
      }, time);
    });
    return set((state) => ({ ...state, open: openValue }));
  },
});

const useLoadingOverlayStore = create(store);

export default useLoadingOverlayStore;
