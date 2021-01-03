import { createContext } from "react";

// 파라미터에는 Context의 기본 상태를 지정한다.
const ColorContext = createContext({ color: "black" });

export default ColorContext;
