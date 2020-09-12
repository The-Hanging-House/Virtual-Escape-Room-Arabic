import React, { useState, useCallback } from "react";
import Dustbin from "./Dustbin";
import Box from "./Box";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";

var showHint = "SEGREGATE THE TRASH TO THE CORRECT BINS IN THE LEAST TIME POSSIBLE.";

var count = 0
var ddd = 'hidden'

export const Container = () => {
  var canProceed = ['visible', 'hidden']

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null, bgImageName: "bin1" },
    {
      accepts: [ItemTypes.FOOD],
      lastDroppedItem: null,
      bgImageName: "avocado"
    },
    {
      accepts: [ItemTypes.PAPER],
      lastDroppedItem: null,
      bgImageName: "snowman"
    }
  ]);
  const [boxes] = useState([
    { name: " ", type: ItemTypes.PAPER, bgImageName: "trash2" },
    { name: "  ", type: ItemTypes.GLASS, bgImageName: "trash" },
    { name: "   ", type: ItemTypes.FOOD, bgImageName: "trash1" },
    { name: "    ", type: ItemTypes.PAPER, bgImageName: "trash3" },
    { name: "     ", type: ItemTypes.GLASS, bgImageName: "trash4" },
    { name: "      ", type: ItemTypes.FOOD, bgImageName: "trash5" }
    
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item
            }
          }
        })
      );
      count = count + 1;

    },
    [droppedBoxNames, dustbins]
  );
  setInterval(() => {
    if(count > 5){
      ddd = canProceed[0]
      var scene1 = new Date().getTime();
      localStorage.setItem('scene1', scene1);
      
      window.location.href = '/scene3';
    }
  }, 2000);
  console.log("scene1",count);
  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: '1rem' }}>{showHint}</div>
      <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center'}}>
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

      <div style={{ overflow: 'hidden', clear: 'both', top: '100%', bottom: '100%', position: 'relative'}}>
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
      {/* <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center', visibility: ddd  }}>
          <a href="/scene3">
            <button className="btn btn-primary3">
                Proceed
            </button>
          </a>
      </div> */}
    </div>
  );
};