# context-tutorial

```
🤟 실습을 따라하면서 지운 부분도 있기 때문에 책에 있는 내용이 코드에 없을 수도 있습니다.
```

## 공부한 내용
### 15장 Context API
**Context API**는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능이다.<br>
> 이를테면 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등 여러 데이터가 있다.
리액트 관련 라이브러리에서도 많이 사용되고 있는데, 앞서 배운 리액트 라우터나 styled-components 뿐만 아니라 리덕스도 Context API 기반으로 구현되어 있다.

1. Context API를 사용한 전역 상태 관리 흐름 이해하기
    - 프로젝트 내에서 전역적으로 필요한 상태를 관리해야 할 때, 주로 최상위 컴포넌트인 `App`의 `state`에 넣어 관리한다.
    - 실제 리액트 프로젝트에서는 컴포넌트의 수가 매우 많고, 다뤄야 하는 데이터의 수도 많다. 따라서 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 `props`로 원하는 상태와 함수를 전달하는 방식을 사용하면 유지 보수성이 낮아질 수 있다.
    - Context API를 사용하면 Context를 만들어 한 번에 원하는 값을 받아와 사용할 수 있다.
2. Context API 사용법 익히기
    - Context를 생성할 때는 `creteContext` 함수를 사용한다.
    > 파라미터로 Context의 기본값을 넣어준다.
    - Context를 사용할 때는 `Consumer`를 사용한다.
    - Context의 값을 변경할 때는 `Provider`를 사용한다.
    > createContext 함수에서 지정한 기본값은 Provider를 사용하지 않을 때만 사용된다. 만약 **Provider를 사용하고 value를 명시하지 않으면 오류가 발생**한다.
    - Function as a child (또는 Render Props)<br>
    : 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 것
    ```jsx
    import React from 'react';

    const RenderPropsSample = ({ children }) => {
        return <div>결과: {children(5)}</div>
    };

    export default RenderPropsSample;
    ```
    위와 같은 컴포넌트가 있다면 추후 사용할 때 다음과 같이 사용할 수 있다.
    ```jsx
    <RenderPropsSample>{value => 2 * value}</RenderPropsSample>
    ```
    `RenderPropsSample`에게 children props로 파라미터에 2를 곱해서 반환하는 함수를 전달하면 해당 컴포넌트에서는 이 함수에 5를 인자로 넣어서 <u>결과: 10</u>을 렌더링한다.
3. 동적 Context 사용하기
    - Context의 value에 무조건 상태값만 있어야 하는 건 아니다. 함수도 전달이 가능하다.
    - state와 actions 객체를 따로 분리하면 다른 컴포넌트에서 사용할 때 편하다.
4. Consumer 대신 Hook 또는 static contextType 사용하기
    - `Hook`은 함수형 컴포넌트에서만 사용할 수 있고, 클래스형 컴포넌트에서는 사용할 수 없다.