import {
  AdjustmentsHorizontalIcon,
  PencilIcon,
  LockClosedIcon,
  ArrowsPointingOutIcon,
  HandRaisedIcon
} from '@heroicons/react/24/solid'

export function Actions() {
  return (
    <div className="flex justify-evenly w-96 text-sm opacity-50 gap-4 py-4">
      <div className="flex flex-col items-center">
        <AdjustmentsHorizontalIcon className="w-8" /> Adjustments
      </div>
      <div className="flex flex-col items-center">
        <ArrowsPointingOutIcon className="w-8" /> Expand
      </div>
      <div className="flex flex-col items-center">
        <PencilIcon className="w-8" /> Annotations
      </div>
      <div className="flex flex-col items-center">
        <HandRaisedIcon className="w-8" /> Rotate
      </div>
      <div className="flex flex-col items-center">
        <LockClosedIcon className="w-8" /> Synched
      </div>
    </div>
  )
}
