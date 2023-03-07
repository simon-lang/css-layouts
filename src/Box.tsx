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
      className={`py-2 px-4 border-2 border-zinc-500 text-zinc-200 text-4xl text-center ${className}`}
    >
      {n || children || 'x'}
    </div>
  )
}
