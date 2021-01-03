import React, { useContext } from "react";
import ColorContext from "../context/color";

const ColorBox = () => {
  // 함수형 컴포넌트에서만 사용 가능
  const { state } = useContext(ColorContext);
  // Render Props 패턴을 사용하지 않아도 됨
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
