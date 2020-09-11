import React from 'react'
import { DragSource } from 'react-dnd'


const backgroundsList = {
  trash:
    '/trash1.png',
  trash2:
  '/trash2.png',
  trash1:
    '/trash.png',
  trash3:
    '/trash1.png',
  trash4:
  '/trash2.png',
  trash5:
    '/trash.png'
  
};


const style = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100px',
  backgroundColor: 'transparent',
  padding: '0.5rem 1rem',
  marginRight: '1rem',
  marginLeft: '1rem',
  marginTop: '1rem',
  marginBottom: '1px',
  cursor: 'move',
  float: 'left',
  width: "calc((20% - 60px) - 1px)" 
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