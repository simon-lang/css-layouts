type BoxProps = {
  children?: React.ReactNode
  n?: number
}

export function Box({ style, className, n, children }: BoxProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{
        ...style
      }}
      className={`py-2 px-4 bg-black bg-opacity-20 text-zinc-200 text-4xl text-center ${className}`}
    >
      {n || children || 'x'}
    </div>
  )
}
