import React from 'react'
import { DropTarget } from 'react-dnd'

// import Bin1 from '../garbage/images/bin1.png'


const backgroundsList = {
  bin1:
    '/bin1.png',
  avocado:
    '/bin2.png',
  snowman:
    '/bin3.png'
};


const style = {
  backgroundSize: 'cover',
  height: '250px',
  width: '200px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Dustbin = ({
  accepts,
  isOver,
  canDrop,
  connectDropTarget,
  lastDroppedItem,
  bgImageName
}) => {
  const isActive = isOver && canDrop
  let backgroundColor = 'transparent'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  let backgroundImage = `url(${backgroundsList[bgImageName]})`; 
  return connectDropTarget(
    <div style={{ ...style, backgroundColor, backgroundImage }}>
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