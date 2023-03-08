export const Thumbnail = () => <div className="bg-neutral-900 h-24 cursor-pointer hover:bg-neutral-800"></div>

export const SidebarHeader = () => (
  <div className="flex">
    <div className="flex items-center px-2 font-bold text-2xl cursor-pointer">&lt;</div>
    <div>
      <div>Patient Name</div>
      <div>Patient ID | DOB | MALE</div>
    </div>
    <div className="grow"></div>
    <button>Upload Images</button>
  </div>
)

export const Sidebar = () => (
  <div className="h-screen p-4" style={{ background: '#1f2532', maxWidth: '452px' }}>
    <SidebarHeader />

    <div className="grid grid-cols-3 gap-2">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  </div>
)

export function Demo() {
  return (
    // background: '#1f2532 url(dm.png) top center no-repeat'

    <div id="demo" className="h-screen text-white text-lg" style={{ background: '#0f1318' }}>
      <Sidebar />
    </div>
  )
}
