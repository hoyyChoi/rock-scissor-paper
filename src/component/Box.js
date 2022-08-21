import React from 'react'

const Box = (props) => {
    console.log('props',props)
    return (
    <div className='Box'>
    <h1>{props.name}</h1>
    <img className='item-img' src={props.item && props.item.img}/>
    <div>{props.result}</div>
    </div>
  )
}

export default Box