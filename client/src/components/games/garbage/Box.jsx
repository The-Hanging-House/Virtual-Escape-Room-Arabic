import React from 'react'
import { DragSource } from 'react-dnd'


const backgroundsList = {
  trash:
    '/trash1.png',
  trash2:
  '/trash2.png',
  trash1:
    '/trash.png'
  
};


const style = {
  backgroundSize: 'cover',
  height: '160px',
  width: '180px',
  backgroundColor: 'transparent',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const Box = ({ name, isDropped, isDragging, connectDragSource, bgImageName }) => {
  const opacity = isDragging ? 0.4 : 1
  const visibility = isDropped ? 'hidden' : 'vissible'
  let backgroundImage = `url(${backgroundsList[bgImageName]})`;
  return connectDragSource(
    <div style={{ 
      ...style, 
      opacity, 
      visibility, 
      backgroundImage
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
