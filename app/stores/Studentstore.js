import { create } from "zustand";

const useStore = create((set) => ({
  activeStudent: null,
  setActiveStudent: (student) => set({ activeStudent: student }),
}));

export default useStore;
