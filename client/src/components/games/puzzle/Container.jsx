import React, { useState, useCallback } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import { ItemTypes } from './ItemTypes'
import update from 'immutability-helper'

import completedPuzzle from '../../../img/completedPuzzle1.png'


var count = 0
var ddd = 'hidden'
// var boxDisplay = 'block'
var text = 'Conservationists are tracking Houbara #324 but the pieces of the map are missing.'
var flag = 0;
var flag2 = 0;

export const Container = () => {
  var canProceed = ['visible', 'hidden']
  var stateText = ["Conservationists are tracking Houbara #324 but the pieces of the map are missing.", "Thank you for helping us identify the Houbara's migrating pattern. We wish you all the best in your endeavors. Call 800-CWN for help."]

  const [boxDisplay, setBoxDisplay] = useState(false)
  const [checkAfter, setCheckAfter] = useState(false)

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null, bgImageName: "bin1"},
    { accepts: [ItemTypes.GLASS1], lastDroppedItem: null, bgImageName: "bin2" },
    { accepts: [ItemTypes.PAPER1], lastDroppedItem: null, bgImageName: "bin3" },
    { accepts: [ItemTypes.FOOD1], lastDroppedItem: null, bgImageName: "bin4" },
    { accepts: [ItemTypes.PAPER], lastDroppedItem: null, bgImageName: "bin5" },
    { accepts: [ItemTypes.FOOD], lastDroppedItem: null, bgImageName: "bin6" },
  ])
  const [boxes] = useState([
    { name: 'Bottle', type: ItemTypes.GLASS, bgImageName: "p1" },
    { name: 'Banana', type: ItemTypes.FOOD, bgImageName: "p6" },
    { name: 'Magazine', type: ItemTypes.PAPER, bgImageName: "p5" },
    { name: 'Bottle1', type: ItemTypes.GLASS1, bgImageName: "p2" },
    { name: 'Banana1', type: ItemTypes.FOOD1, bgImageName: "p4" },
    { name: 'Magazine1', type: ItemTypes.PAPER1, bgImageName: "p3" },
  ])
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
      count = count + 1;
    },
    [droppedBoxNames, dustbins],
  );
  if(count > 4){
    ddd = canProceed[0];
    text = stateText[1];
    localStorage.setItem('forCheck', "1");
    if(flag === 0){
      setBoxDisplay(true);
      flag = 1;
      localStorage.setItem('puzzleComplete', "1");
    }
    setInterval(function(){
      if(localStorage.getItem('forCheck')==="1"){
        setCheckAfter(true);
        console.log("KK");
      }
    }, 500);
  }
  return (
    <>
    <div style={{ display: checkAfter? 'block' : 'none'}}>
      <img src={completedPuzzle} style={{height: "60vh", width: "50vw", position: 'relative'}} />
    </div>
    <div style={{ display: checkAfter? 'none' : 'block'}}>
    <div className="puzzle" >
      <div>
        <div className="solvedboard" style={{ display: boxDisplay? 'none' : 'block'}}>
        {/* <div className="solvedboard" > */}
          {dustbins.map(({ accepts, lastDroppedItem, bgImageName }, index) => (
            <Dustbin
              accepts={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={(item) => handleDrop(index, item)}
              key={index}
              bgImageName={bgImageName}
            />
          ))}
        </div>
        <div style={{ display: boxDisplay? 'block' : 'none'}}>
          <img src={completedPuzzle} style={{height: "60vh", width: "50vw", position: 'relative', left: '-10%'}} />
        </div>

        </div>
      </div>
      {/* <div style={{ fontSize: '1rem', marginTop: '10px' }}>
        <p style={{ justifyContent: 'center' }}>
          {text}
        </p>
      </div> */}
      <div style={{ overflow: 'hidden', clear: 'both', top: '100%', display: boxDisplay? 'none' : 'block', position: 'relative'}}>
        {boxes.map(({ name, type, bgImageName }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
            bgImageName={bgImageName}
          />
        ))}
      </div>
      </div>
    {/* </div> */}
    </>
  )
}