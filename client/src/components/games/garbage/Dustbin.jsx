import React from 'react'
import { DropTarget } from 'react-dnd'
import bin1 from '../../../img/bin1.png'
import bin2 from '../../../img/bin2.png'
import bin3 from '../../../img/bin3.png'

const bins = [
  {
      photo: {bin1},
      alt: 'bin1'
  },
  {
      photo: {bin2},
      alt: 'bin2'
  },
  {
      photo: {bin3},
      alt: 'bin3'
  }
]

const style = {
  height: '12rem',
  width: '12rem',
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
}) => {
  const isActive = isOver && canDrop
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return connectDropTarget(
    <div style={{ ...style, backgroundColor, backgroundImage: bins.map(photo => `url(${bin1})`) }}>
      {isActive
        }

      {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )}
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
