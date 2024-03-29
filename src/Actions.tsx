import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
  PencilIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  HandRaisedIcon
} from '@heroicons/react/24/solid'
import { useDemoStore } from './store'

const Button = ({ children, onClick }: React.HTMLAttributes<HTMLButtonElement>) => (
  <button onClick={onClick} className="flex flex-col w-10 items-center cursor-pointer hover:opacity-80">
    {children}
  </button>
)

export function Actions() {
  const { toggleRotate, toggleFlip, expand, zoom, toggleZoom } = useDemoStore()
  return (
    <div className="flex text-sm text-gray-400 gap-4 py-4">
      <Button>
        <AdjustmentsHorizontalIcon className="w-8" />
      </Button>
      <Button onClick={expand}>
        <ArrowsPointingOutIcon className="w-8" />
      </Button>
      <Button onClick={toggleFlip}>
        <ArrowPathRoundedSquareIcon className="w-8" />
      </Button>
      <Button onClick={toggleZoom}>
        <HandRaisedIcon className={`w-8 ${zoom && 'text-sky-400'}`} />
      </Button>
      <Button>
        <PencilIcon className="w-8" />
      </Button>
      <Button onClick={toggleRotate}>
        <ArrowPathIcon className="w-8" />
      </Button>
      <Button>
        <LockClosedIcon className="w-8" />
      </Button>
    </div>
  )
}
