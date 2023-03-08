import { create } from 'zustand'

export interface DemoState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useDemoStore = create<DemoState>((set) => ({
  count: 7,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
