import React, { useState } from "react";
import MyContex from "./componets/context/Mycontex";

function Root(props) {
  const [state, setState] = useState({ auth: false });

  const context = {
    state: state,
    changeContext: (value) => {
      setState(value);
    },
  };

  return (
    <MyContex.Provider value={context}>{props.children}</MyContex.Provider>
  );
}

export default Root;
