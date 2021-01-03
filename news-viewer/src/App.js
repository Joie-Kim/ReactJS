import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  /*
  const onClick = () => {
    axios
      // 파라미터로 전달된 주소에 GET 요청을 해 준다.
      .get('https://jsonplaceholder.typicode.com/todos/1')
      // 그에 대한 결과는 .then을 통해 비동기적으로 확인할 수 있다.
      .then((response) => {
        setData(response.data);
      });
  };
  */
  // async 적용 하기
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=9925a95b351140a89f4a965fb08d13e5',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
