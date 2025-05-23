import { create } from 'zustand';

type FeedbackFormState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const useFeedbackForm = create<FeedbackFormState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen })
}));