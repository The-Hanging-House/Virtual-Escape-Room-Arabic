import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";
import bin1 from '../../../img/bin1.png'
// import bin2 from '../../../img/bin2.png'
// import bin3 from '../../../img/bin3.png'
import { Button } from "react-bootstrap";


export const Container = () => {
  const [dustbins] = useState([
    { accepts: [ItemTypes.GLASS] },
    { accepts: [ItemTypes.FOOD] },
    { accepts: [ItemTypes.PAPER] }
  ]);
  const [boxes] = useState([
    { name: "Bottle1", type: ItemTypes.GLASS },
    { name: "Banana1", type: ItemTypes.FOOD },
    { name: "Magazine1", type: ItemTypes.PAPER }
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
    }
    // [droppedBoxNames, dustbins]
  );
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accepts={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
      <Button href='scene3'>Proceed</Button>
    </div>
  );
};
