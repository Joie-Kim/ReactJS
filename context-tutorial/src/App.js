import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./context/color";

const App = () => {
  // Provider를 사용하면 Context의 값을 변경할 수 있음
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
