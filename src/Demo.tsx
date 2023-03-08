import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Actions } from './Actions'

export const Thumbnail = () => <div className="bg-darkblue h-24 cursor-pointer hover:bg-opacity-50"></div>

export function Demo() {
  return (
    <div id="demo" className="h-screen bg-darkblue text-lg flex">
      <Sidebar />
      <SidebarHandle />
      <Workspace />
    </div>
  )
}

const Workspace = () => (
  <div className="h-screen grow overflow-hidden xopacity-0">
    <Actions></Actions>
    <div className="grid grid-cols-2 gap-4">
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
    </div>
  </div>
)

export const WorkspaceItem = () => (
  <div className="bg-black h-full w-full relative">
    <XMarkIcon className="w-8 cursor-pointer absolute top-2 right-2" />
    <img src="eye.jpg" />
  </div>
)

const Sidebar = () => (
  <div className="h-screen p-4 bg-brand w-[452px] min-w-[452px] overflow-y-hidden">
    <SidebarHeader />
    <Encounter />
    <Encounter />
  </div>
)

const SidebarHandle = () => (
  <div className="h-screen flex items-center">
    <div className="bg-brand p-2 py-4 rounded-tr rounded-br cursor-pointer">
      <ChevronLeftIcon className="w-5" />
    </div>
  </div>
)

const SidebarHeader = () => (
  <div className="flex mb-8">
    <div className="flex items-center px-2 mr-2 font-bold text-2xl cursor-pointer">
      <ChevronLeftIcon className="w-5" />
    </div>
    <div>
      <div>Patient Name</div>
      <div className="text-sm">Patient ID | 14/06/1990 | MALE</div>
    </div>
    <div className="grow"></div>
    <Button>Upload Images</Button>
  </div>
)

const Encounter = () => (
  <div className="flex mb-24">
    <div className="pr-4 mr-4 border-r border-r-slate-700 border-dashed text-sm">
      <div>MAR</div>
      <div>8</div>
      <div>2023</div>
    </div>
    <div className="grow">
      <div className="flex gap-2 w-full mb-2">
        <div className="text-sm mr-auto">10:35AM</div>
        <Badge>OCT</Badge>
        <Badge>FI</Badge>
        <Badge>VF</Badge>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
      <a className="text-sm cursor-pointer">New Mosaic</a>
    </div>
  </div>
)

const Button = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <button className="py-2 px-4 border border-slate-200 rounded hover:opacity-80">{props.children}</button>
)

const Badge = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="py-1 px-2 text-sm bg-slate-700 rounded">{props.children}</div>
)
