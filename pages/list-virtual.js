import VirtualList from 'react-tiny-virtual-list'
import { getList, smallItemListSize } from '../common'


export default () => {
  if (typeof window === 'undefined') {
    return (<span />)
  }
  const arr = getList(smallItemListSize)
  return (<VirtualList
    width='100%'
    height={600}
    itemCount={arr.length}
    itemSize={42} // Also supports variable heights (array or function getter)
    renderItem={({ index, style }) => (<div style={style} key={index}>
      值为{arr[index]}，这是第{index}个li

    </div>)
    }
  />)
}