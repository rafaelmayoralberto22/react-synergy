export const isEmpty = (record: Record<string, Function>) => {
  return !Object.keys(record).length
}

