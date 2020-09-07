import React from 'react'
import { DropTarget } from 'react-dnd'

var backgroundsList = {
  bin1:
    '/bg1.png',
  bin2:
    '/bg2.png',
  bin3:
    '/bg3.png',
  bin4:
    '/bg4.png',
  bin5:
    '/bg5.png',
  bin6:
    '/bg6.png',
  telephone:
    '/telephone.png',
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
  marginRight: '1px',
  color: 'white',
  textAlign: 'center',
  float: 'left',
  flexWrap: 'wrap',
  width: "calc(100% * (1/3) - 10px - 1px)",
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
  // if (isActive) {
  //   backgroundColor = 'darkgreen'
  // } else if (canDrop) {
  //   backgroundColor = 'darkkhaki'
  // }
  if (lastDroppedItem !== null){
    if (lastDroppedItem["name"] === 'Bottle'){
      // console.log(lastDroppedItem["name"]);
      backgroundsList["bin1"] = '/p1.png';
    }
    if (lastDroppedItem["name"] === 'Bottle1'){
      // console.log(lastDroppedItem["name"]);
      backgroundsList["bin2"] = '/p2.png';
    }
    if (lastDroppedItem["name"] === 'Magazine1'){
      // console.log(lastDroppedItem["name"]);
      backgroundsList["bin3"] = '/p3.png';
    }
    if (lastDroppedItem["name"] === 'Banana1'){
      // console.log(lastDroppedItem["name"]);
      backgroundsList["bin4"] = '/p4.png';
    }
    if (lastDroppedItem["name"] === 'Magazine'){
      // console.log(lastDroppedItem["name"]);
      backgroundsList["bin5"] = '/p5.png';
    }
    if (lastDroppedItem["name"] === 'Banana'){
      // console.log(lastDroppedItem["name"]);
      backgroundsList["bin6"] = '/p6.png';
    }
  }
  // console.log("t", lastDroppedItem);

  let backgroundImage = `url(${backgroundsList[bgImageName]})`;
  return connectDropTarget(
    <div className="solvedboard" style={{ ...style, backgroundColor, backgroundImage }}>
      {/* {isActive
        ? 'Release to drop'
        : `This dustbin accepts: ${accepts.join(', ')}`} */}

      {/* {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )} */}
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
