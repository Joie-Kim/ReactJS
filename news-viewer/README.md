# news-viewer

```
🤟 실습을 따라하면서 지운 부분도 있기 때문에 책에 있는 내용이 코드에 없을 수도 있습니다.
```

## 공부한 내용
### 14장 외부 API를 연동하여 뉴스 뷰어 만들기
1. 비동기 작업의 이해
    - 공부한 내용을 <u>[블로그](https://joie-kim.github.io/Callback-Promise-Async-await/)</u>에 정리해뒀다!
2. axios로 API 호출해서 데이터 받아오기
    - axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트이다. 이 라이브러리의 특징은 HTTP 요청을 Promise 기반으로 처리한다는 점이다.
3. newsapi API 키 발급
    - `https://newsapi.org/s/south-korea-technology-news-api`에서 받아옴
4. 뉴스 뷰어 UI 만들기
    - `styled-components` 모듈 이용
5. 데이터 연동하기
    - useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API 요청
    > useEffect에 등록하는 함수에 `async` 붙이면 안 됨!<br>
    useEffect에서 반환해야 하는 값은 **뒷정리 함수**이기 때문임..<br>
    만약 useEffect 내부에 async/await를 사용하고 싶다면 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어 사용해야 함
6. 카테고리 기능 구현하기
    - 카테고리 선택하면 그에 맞는 뉴스 기사 나오도록
7. 리액트 라우터 적용하기