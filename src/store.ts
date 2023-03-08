import { create } from 'zustand'

export interface DemoState {
  zoom: boolean
  toggleZoom: () => void
  rows: number
  expand: () => void
  flip: boolean
  toggleFlip: () => void
  rotate: boolean
  toggleRotate: () => void
  sidebarOpen: boolean
  toggleSidebar: () => void
  count: number
  increment: () => void
  decrement: () => void
}

export const useDemoStore = create<DemoState>((set) => ({
  zom: false,
  toggleZoom: () => set((state) => ({ zoom: !state.zoom })),
  rows: 2,
  expand: () => set((state) => (state.rows === 2 ? { sidebarOpen: false, rows: 1 } : {sidebarOpen: true, rows: 2})),
  flip: false,
  toggleFlip: () => set((state) => ({ flip: !state.flip })),
  rotate: false,
  toggleRotate: () => set((state) => ({ rotate: !state.rotate })),
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
