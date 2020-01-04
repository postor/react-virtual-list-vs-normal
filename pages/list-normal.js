import { getList, smallItemListSize } from '../common'

export default () => {
  if (typeof window === 'undefined') {
    return (<span />)
  }
  const arr = getList(smallItemListSize)
  return (<div style={{ height: '600px', overflowX: 'hidden', overflowY: 'scroll' }}>
    {arr.map((x, i) => (<div style={
      {
        height: '42px',
        overflow: 'hidden',
      }
    } key={i}>
      值为{x}，这是第{i}个li

    </div>))}
  </div>)
}