import React from 'react'
import { DragSource, useDrag } from 'react-dnd'


const backgroundsList = {
  p1:
    '/p1.png',
  p2:
    '/p2.png',
  p3:
    '/p3.png',
  p4:
    '/p4.png',
  p5:
    '/p5.png',
  p6:
    '/p6.png',
  
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
  cursor: 'grab',
  float: 'left',
  webkitUserSelect: 'text',
  width: "calc((30% - 10px) - 1px)" 
}

export const Box = ({ name, isDropped, isDragging, type, connectDragSource, bgImageName }) => {
  // const opacity = isDragging ? 0.4 : 1
  const [{ opacity }, drag] = useDrag({
    item: { name, type},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  const visibility = isDropped ? 'hidden' : 'visible'
  // const visibility = 'visible'
  let backgroundImage = `url(${backgroundsList[bgImageName]})`;
  return connectDragSource(
    <div 
      ref={drag}
      style={{ 
      ...style, 
      opacity, 
      visibility, 
      backgroundImage
    }}
    >
      {/* {isDropped ? <s>{name}</s> : name} */}
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
