const bg: Record<string, string> = {
  outline: 'bg-sky-800',
  intro: 'bg-sky-900',
  position: 'bg-cyan-900',
  floats: 'bg-blue-900',
  flex: 'bg-indigo-900',
  grid: 'bg-violet-900'
}

export const Slide = ({ id, children }: any) => (
  <div id={id} className={`h-screen relative ${bg[id] ? bg[id] : ''}`}>
    {children}
  </div>
)
