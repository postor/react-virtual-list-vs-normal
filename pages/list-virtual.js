import VirtualList from 'react-tiny-virtual-list';
import Item from '../components/Item'


export default ()=>{
  if(typeof window ==='undefined'){
    return (<span/>)
  }
  const arr =  Array.apply(null, {length: 10000}).map(Number.call, Number)
  return (<VirtualList
    width='100%'
    height={600}
    itemCount={arr.length}
    itemSize={42} // Also supports variable heights (array or function getter)
    renderItem={({index, style}) =>(<div style={style} key={index}>
      值为{arr[index]}，这是第{index}个li
      
    </div>)
    }
  />)
}