import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { range } from 'lodash'
import { Actions } from './Actions'
import { useDemoStore } from './store'

export function Dm() {
  const { sidebarOpen } = useDemoStore()
  return (
    <div id="dm" className="h-screen bg-black">
      {sidebarOpen && <Sidebar />}
      <SidebarHandle />
      <Workspace />
    </div>
  )
}

const Sidebar = () => (
  <div className="">
    <SidebarHeader />
    <Encounter />
    <Encounter />
  </div>
)

const SidebarHandle = () => {
  const { sidebarOpen, toggleSidebar } = useDemoStore()
  return (
    <div className="">
      <div className="" onClick={toggleSidebar}>
        {sidebarOpen ? <ChevronLeftIcon className="w-5" /> : <ChevronRightIcon className="w-5" />}
      </div>
    </div>
  )
}

const SidebarHeader = () => (
  <div className="flex">
    <div className="items-center h-full self-center">
      <ChevronLeftIcon className="w-5" />
    </div>
    <div>
      <div className="text-2xl">Patient Name</div>
      <div className="">Patient ID | 14/06/1990 | MALE</div>
    </div>
    <div className=""></div>
    <Button>Upload Images</Button>
  </div>
)

const Encounter = () => {
  const { increment } = useDemoStore()
  return (
    <div className="">
      <div className="">
        <div>MAR</div>
        <div>8</div>
        <div>2023</div>
      </div>
      <div className="">
        <div className="">
          <div className="">10:35AM</div>
          <Badge>OCT</Badge>
          <Badge>FI</Badge>
          <Badge>VF</Badge>
        </div>
        <div className="" onClick={increment}>
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
        <a className="">New Mosaic</a>
      </div>
    </div>
  )
}

const Workspace = () => {
  const { count } = useDemoStore()
  return (
    <div className="h-screen">
      <Actions></Actions>
      <div className="">
        {range(count).map((n) => {
          const src = n % 2 === 0 ? 'eye.jpg' : 'eye2.jpg'
          return <WorkspaceItem src={src} />
        })}
      </div>
    </div>
  )
}

const WorkspaceItem = ({ src }: { src: string }) => {
  const { decrement, rotate, flip } = useDemoStore()
  return (
    <div className="w-36">
      <XMarkIcon className="w-12" onClick={decrement} />
      <img src={src} className={`${flip && '-scale-x-100'} ${rotate && 'rotate-90'}`} />
    </div>
  )
}

const Button = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <button className="py-1 px-1 border border-slate-200 rounded hover:opacity-80">{props.children}</button>
)

const Badge = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="">{props.children}</div>

export const Thumbnail = () => <div className=""></div>
