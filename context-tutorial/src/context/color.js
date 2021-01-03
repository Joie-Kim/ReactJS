import { createContext, useState } from "react";

// Context의 value에는 무조건 상태 값만 있어야 하는 건 아님. 함수 전달 가능
// 기본값을 Provider의 value에 넣는 객체의 형태와 일치해줌
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// 상태는 state, 업데이트 함수는 actions로 묶어서 전달
// state와 actions 객체를 따로따로 분리해 주면 나중에 다른 컴포넌트에서 Context 값을 사용할 때 편하다.
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 뜻
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
