export function Demo() {
  return (
    <div id="demo" className="h-screen bg-slate-800 text-white text-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="flex">
            <div>&lt;</div>
            <div>
              <div>Patient Name</div>
              <div>Patient ID | DOB | MALE</div>
            </div>
            <div className="flex-basis"></div>
            <button>Upload Images</button>
          </div>
        </div>
        <div className="col-span-8 bg-black h-screen">Workspace</div>
      </div>
    </div>
  )
}
