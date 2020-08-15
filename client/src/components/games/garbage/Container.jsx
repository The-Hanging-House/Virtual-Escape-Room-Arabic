import React, { useState, useCallback } from "react";
import Dustbin from "./Dustbin";
import Box from "./Box";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";




export const Container = () => {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
    { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
    { accepts: [ItemTypes.PAPER], lastDroppedItem: null }
  ]);
  const [boxes] = useState([
    { name: "Bottle", type: ItemTypes.GLASS },
    { name: "Banana", type: ItemTypes.FOOD },
    { name: "Magazine", type: ItemTypes.PAPER }
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
    },
    [droppedBoxNames, dustbins]
  );
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accepts={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center' }}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
      <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center' }}>
          <button to="scene3" className="btn btn-primary3">
              Proceed
          </button>
      </div>
    </div>
  );
};
