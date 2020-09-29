import React from 'react'
import { DragSource, useDrag } from 'react-dnd'


const backgroundsList = {
  trash:
    '/trash1.png',
  trash2:
    '/trash2.png',
  trash1:
    '/trash3.png',
  trash3:
    '/trash4.png',
  trash4:
    '/trash5.png',
  trash5:
    '/trash6.png'
  
};


const style = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '108px',
  // backgroundColor: 'blue',
  padding: '0.5rem 1rem',
  marginRight: '1rem',
  marginLeft: '1rem',
  marginTop: '1rem',
  marginBottom: '1px',
  cursor: 'grab',
  float: 'left',
  // width: "calc((28% - 60px) - 1px)" ,
  width: "120px" ,
  alignItems: 'center',
  transform: 'translate(0 , 0)'
}


export const Box = ({ name, isDropped, type, isDragging, connectDragSource, bgImageName }) => {
  // const opacity = isDragging ? 1 : 1
  const [{ opacity }, drag] = useDrag({
    item: { name, type},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  const backgroundColor = isDragging ? 'transparent' : 'transparent'
  const visibility = isDropped ? 'hidden' : 'vissible'
  let backgroundImage = `url(${backgroundsList[bgImageName]})`;
  return connectDragSource(
    <div 
      ref={drag}
      style={{ 
      ...style, 
      opacity, 
      backgroundColor,
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