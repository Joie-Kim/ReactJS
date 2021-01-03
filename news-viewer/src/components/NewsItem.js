// 각 뉴스 정보를 보여 주는 컴포넌트
// article이라는 객체를 props로 통째로 받아 와서 사용한다.

import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_black" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;

// rel: 현재 문서와 링크된 문서 사이의 연관관계(relationship)을 나타낸다.
// noreferrer: 사용자가 하이퍼링크를 클릭 했을 때, HTTP 리퍼러 헤더를 전송해서는 안 됨
// noopener: 하이퍼링크를 따라 연결되는 어떠한 브라우저 컨텍스트도 오프너여서는 안 됨
