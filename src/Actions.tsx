import {
  AdjustmentsHorizontalIcon,
  PencilIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  HandRaisedIcon
} from '@heroicons/react/24/solid'

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => (
  <button className="flex flex-col items-center cursor-pointer hover:opacity-80">{props.children}</button>
)

export function Actions() {
  return (
    <div className="flex justify-evenly w-96 text-sm opacity-50 gap-4 py-4">
      <Button>
        <AdjustmentsHorizontalIcon className="w-8" /> Adjustments
      </Button>
      <Button>
        <ArrowsPointingOutIcon className="w-8" /> Expand
      </Button>
      <Button>
        <PencilIcon className="w-8" /> Annotations
      </Button>
      <Button>
        <HandRaisedIcon className="w-8" /> Rotate
      </Button>
      <Button>
        <LockClosedIcon className="w-8" /> Synched
      </Button>
    </div>
  )
}
