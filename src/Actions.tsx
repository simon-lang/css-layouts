import {
  AdjustmentsHorizontalIcon,
  PencilIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  HandRaisedIcon
} from '@heroicons/react/24/solid'

export function Actions() {
  return (
    <div className="flex justify-evenly w-full text-sm">
      <div className="flex flex-col items-center">
        <AdjustmentsHorizontalIcon className="w-10" /> Adjustments
      </div>
      <div className="flex flex-col items-center">
        <ArrowsPointingOutIcon className="w-10" /> Expand
      </div>
      <div className="flex flex-col items-center">
        <PencilIcon className="w-10" /> Annotations
      </div>
      <div className="flex flex-col items-center">
        <HandRaisedIcon className="w-10" /> Rotate
      </div>
      <div className="flex flex-col items-center">
        <LockClosedIcon className="w-10" /> Synched
      </div>
    </div>
  )
}
