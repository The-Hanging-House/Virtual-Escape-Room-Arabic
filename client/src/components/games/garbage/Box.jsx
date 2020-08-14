import React from 'react'
import { DragSource } from 'react-dnd'


import Trash from './images/trash.png'


const style = {
  height: '13rem',
  width: '20rem',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
  backgroundImage : `url(${Trash})`,
}
export const Box = ({ name, isDropped, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1
  const visibility = isDropped ? 'hidden' : 'vissible'
  return connectDragSource(
    <div style={{ 
      ...style, 
      opacity, 
      visibility 
    }}
    >
      {isDropped ? <s>{name}</s> : name}
    </div>
  )
}
export default DragSource(
  (props) => props.type,
  {
    beginDrag: (props) => ({ name: props.name }),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
