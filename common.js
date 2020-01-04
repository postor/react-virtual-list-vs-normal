export const getList = (total = 1000000) => {
  let rtn = []
  for (let i = 0; i < total; i++) {
    rtn.push(i)
  }
  return rtn
}

export const smallItemListSize = 1000000