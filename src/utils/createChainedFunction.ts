type Func<Args extends unknown[]> = (...args: Args) => void

const createChainedFunction = <Args extends unknown[]>(
  ...funcs: Array<Func<Args> | null | undefined>
): Func<Args> => {
  return funcs.reduce(
    (acc: Func<Args>, func) => {
      if (!func) {
        return acc
      }

      return (...args: Args) => {
        acc.apply(this, args)
        func.apply(this, args)
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
  )
}

export default createChainedFunction
