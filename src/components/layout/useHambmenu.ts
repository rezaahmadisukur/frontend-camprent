import { create } from "zustand";

interface HambMenuState {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  toogle: () => void;
  close: () => void;
}

export const useHambMenuStore = create<HambMenuState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => {
    console.log(value);
    set((state) => ({
      isOpen: typeof value === "function" ? value(state.isOpen) : value
    }));
  },
  toogle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false })
}));
