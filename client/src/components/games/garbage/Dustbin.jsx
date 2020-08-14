import React from 'react'
import { DropTarget } from 'react-dnd'

import Bin1 from './images/bin1.png'

// const array = ['bin1', 'bin2', 'bin3'];

// const images = array.map(image => {
//   return <img key={image} url={require(`./images/${image}.png`)} className='img-responsive' alt='bins' />
// })

const style = {
  height: '20rem',
  width: '15rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  backgroundImage : `url(${Bin1})`
}
export const Dustbin = ({
  accepts,
  isOver,
  canDrop,
  connectDropTarget,
  lastDroppedItem,
}) => {
  const isActive = isOver && canDrop
  let backgroundColor = 'transparent'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return connectDropTarget(
    <div style={{ ...style, backgroundColor }}>
      {isActive}
    </div>,
  )
}
export default DropTarget(
  (props) => props.accepts,
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItem())
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(Dustbin)