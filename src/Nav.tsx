export function Nav({ prev, next }: any) {
  return (
    <>
      <a href={`#${prev}`} className="p-4 pt-32 pr-32 absolute bottom-4 left-4 text-xl hover:opacity-70">
        Back
      </a>
      <a href={`#${next}`} className="p-4 pt-32 pl-32 absolute bottom-4 right-8 text-xl hover:opacity-70">
        Next
      </a>
    </>
  )
}
