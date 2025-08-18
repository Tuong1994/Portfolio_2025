import { create, StateCreator } from "zustand";

interface LoadingOverLayState {
  open: boolean;
  isReady: boolean;
  initialLoad: (time?: number) => Promise<void>;
  trigger: (time?: number) => Promise<void>;
}

const store: StateCreator<LoadingOverLayState> = (set) => ({
  open: false,
  isReady: false,
  initialLoad: async (time = 2000) => {
    set((state) => ({ ...state, open: true }));
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        set((state) => ({ ...state, open: false }));
        resolve();
      }, time);
    });
    set((state) => ({ ...state, isReady: true }));
  },
  trigger: async (time = 2000) => {
    set((state) => ({ ...state, open: true }));
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        set((state) => ({ ...state, open: false }));
        resolve();
      }, time);
    });
  },
});

const useLoadingOverlayStore = create(store);

export default useLoadingOverlayStore;
