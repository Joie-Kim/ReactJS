import React from "react";
import qs from "qs";

const About = ({ location }) => {
  // 쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이라는 점에 주의 해야 한다.
  // 논리 자료형(boolean)이나 숫자(int) 모두 문자열이다.
  // 따라서 만약 숫자를 받아 와야 한다면 parseInt 함수를 통해 꼭 숫자로 면환해 줘야 한다.
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열
  return (
    <div>
      <h1>About</h1>
      <p>About is the page describing this project</p>
      {showDetail && <p>detail is True ~~!!!</p>}
    </div>
  );
};

export default About;
