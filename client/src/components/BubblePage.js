import React, { useState, useEffect } from "react";
import {axiosWithAuth as axios} from "../axiosConfig";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

    useEffect(()=> {
        axios().get('/colors').then(res => setColorList(res.data)).catch(err=>console.log(err.response));
    }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
