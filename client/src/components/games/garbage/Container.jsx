import React, { useState, useCallback } from "react";
import Dustbin from "./Dustbin";
import Box from "./Box";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";

var showHint = "Drag and drop the trash to its designated trash bins.";
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
    { name: "   ", type: ItemTypes.FOOD, bgImageName: "trash1" }
    
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
  if(count > 1){
    ddd = canProceed[0]
    var scene1 = new Date().getTime();
    localStorage.setItem('scene1', scene1);
    console.log("scene1",scene1);
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>{showHint}</div>
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

      <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center' }}>
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
      <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center', visibility: ddd  }}>
          <a href="/scene3">
            <button className="btn btn-primary3">
                Proceed
            </button>
          </a>
      </div>
    </div>
  );
};