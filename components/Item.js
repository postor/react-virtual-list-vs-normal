const T = ({arr})=>{
  return (<span>
    <span>{arr.length}</span>
    {arr.map((x,i)=>(<T key={i} arr={arr.slice(1)}/>))}
  </span>)
}

const arr =  Array.apply(null, {length: 6}).map(Number.call, Number)

export default ()=>(<T arr={arr}/>)