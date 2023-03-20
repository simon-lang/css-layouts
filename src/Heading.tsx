import { Divider } from './Divider'

export function Heading(props: any) {
  return (
    <>
      <h2 className="text-5xl p-8 border-b-slate-600 bg-black bg-opacity-5">{props.children}</h2>
      <Divider />
    </>
  )
}
