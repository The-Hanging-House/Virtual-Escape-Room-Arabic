import React, { useState, useCallback } from "react";
import Dustbin from "./Dustbin";
import Box from "./Box";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";

var showHint = "Leaving trash behind in nature pollutes the environment and is harmful to wildlife.";

var count = 0
var ddd = 'hidden'

export const Container = () => {
  const [garbageDone, setGarbageDone] = useState(false)
  // var canProceed = ['visible', 'hidden']

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
  setInterval(function(){
    if(count > 5){
      // ddd = canProceed[0]
      setGarbageDone(true);
    }
  }, 5000);
  
  if(garbageDone){

    setTimeout(function(){
      var scene1 = new Date().getTime();
      localStorage.setItem('scene1', scene1);
      
      window.location.href = '/scene3';  
    }, 6000)
  }
  // function Tset(){
  // }
  // console.log("scene1",count);
  return (

    <div>
      <div style={{ dispaly: 'none'}}>
        <div style={{ textAlign: 'center', fontSize: '1rem', display: garbageDone? 'none' : 'block' }}>{showHint}</div>
        <div style={{ overflow: "hidden", clear: "both", display: garbageDone? 'none' : 'flex', justifyContent: 'center'}}>
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

        <div style={{ overflow: 'hidden', clear: 'both', top: '100%', bottom: '100%', position: 'relative', display: garbageDone? 'none' : 'block', left: '70px'}}>
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
      <div style={{display: garbageDone? 'block' : 'none'}}>
        <div>
          <h2 style={{textAlign: 'center', fontFamily: 'Dubai W23, sans-serif'}}>Good job not leaving any trash behind! Have you found your keys?</h2>
          <br/>
        </div>
        {/* <div style={{  clear: "both", display: 'flex', justifyContent: 'center' }}>
              <button className="btn btn-primary3" onClick={Tset} style={{ width: "auto", height: "auto", textAlign: 'center'}}>
                  Proceed
              </button>
        </div> */}
      </div>
    </div>
  );
};