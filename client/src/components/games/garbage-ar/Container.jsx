import React, { useState, useCallback } from "react";
import Dustbin from "./Dustbin";
import Box from "./Box";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";
import correct from "../../../audio/correct.mp3";
import drop from "../../../audio/drop.mp3";

var showHint =
  ".إن ترك القمامة في الطبيعة يلوث البيئة ويضر بالحياة البرية";

var count = 0;
// var ddd = 'hidden'
var flag = 0;
// var gState = 0;

export const Container = () => {
  const [garbageDone, setGarbageDone] = useState(false);
  // var canProceed = ['visible', 'hidden']

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null, bgImageName: "bin1" },
    {
      accepts: [ItemTypes.FOOD],
      lastDroppedItem: null,
      bgImageName: "avocado",
    },
    {
      accepts: [ItemTypes.PAPER],
      lastDroppedItem: null,
      bgImageName: "snowman",
    },
  ]);
  const [boxes] = useState([
    { name: " ", type: ItemTypes.GLASS, bgImageName: "trash" },
    { name: "  ", type: ItemTypes.GLASS, bgImageName: "trash1" },
    { name: "   ", type: ItemTypes.PAPER, bgImageName: "trash4" },
    { name: "    ", type: ItemTypes.FOOD, bgImageName: "trash2" },
    { name: "     ", type: ItemTypes.FOOD, bgImageName: "trash3" },
    { name: "      ", type: ItemTypes.GLASS, bgImageName: "trash5" },
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
              $set: item,
            },
          },
        })
      );
      new Audio(drop).play();

      // setInterval(() => {
      //   gState = localStorage.getItem('gState')
      //   console.log("gState: ", gState);
      //   if(gState === '0'){
      //     count = 0;
      //   }
      // }, 1000);

      // if(gState === '1'){
      count = count + 1;
      // }
    },
    [droppedBoxNames, dustbins]
  );
  setInterval(function () {
    if (count > 5) {
      // ddd = canProceed[0]
      setGarbageDone(true);
      if (flag === 0) {
        new Audio(correct).play();
        flag = 1;
      }
    }
  }, 5000);

  if (garbageDone) {
    setTimeout(function () {
      var scene1 = new Date().getTime();
      localStorage.setItem("scene1", scene1);

      window.location.href = "/scene3-ar";
    }, 6000);
  }
  // function Tset(){
  // }
  // console.log("scene1",count);
  return (
    <div>
      <div style={{ dispaly: "none" }}>
        <div
          style={{
            overflow: "hidden",
            clear: "both",
            display: garbageDone ? "none" : "flex",
            justifyContent: "center",
          }}
        >
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

        <div
          style={{
            overflow: "hidden",
            clear: "both",
            top: "100%",
            bottom: "100%",
            position: "relative",
            display: garbageDone ? "none" : "block",
            left: "70px",
          }}
        >
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
      <div
        style={{
          textAlign: "center",
          fontSize: "21px",
          color: "black",
          letterSpacing: "1px",
          fontWeight: "bold",
          fontFamily: "Dubai W23, sans-serif",
          display: garbageDone ? "none" : "block",
          lineHeight: "1.1"
        }}
      >
        {showHint}
      </div>
      <div style={{ display: garbageDone ? "block" : "none" }}>
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "black",
              letterSpacing: "0px",
              fontWeight: "bold",
              fontFamily: "Dubai W23, sans-serif",
              fontSize: "21px",
            }}
          >
            أحسنت لأنك لم تترك أي قمامة! هل وجدت مفاتيحك؟
          </h2>
          <br />
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
