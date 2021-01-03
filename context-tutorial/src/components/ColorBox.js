import React from "react";
import { ColorConsumer } from "../context/color";

const ColorBox = () => {
  // Consumer를 사용해서 Context를 사용할 수 있음
  // Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어 줌
  // 이런 패턴을 Function as a child 또는 Render Props라고 한다.
  return (
    <ColorConsumer>
      {({ state }) => (
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
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
