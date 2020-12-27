import React, { Component } from 'react';

class RefSample extends Component {
  // createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주어야 함
  input = React.createRef();

  handleFocus = () => {
    // ref를 설정한 DOM에 접근하려면 this.input.current를 조회하면 됨
    this.input.current.focus();
  };

  render() {
    return (
      // 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 ref 설정 완료
      // 만약 createRef가 아니라, 콜백 함수를 사용한다면
      /*
      <input ref={(ref) => {this.input=ref}} />
      */
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
