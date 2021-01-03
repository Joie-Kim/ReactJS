import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: auto;
  }
`;

// 특정 컴포넌트에 styled-components를 사용할 때는 styled(컴포넌트 이름)``과 같은 형식을 사용한다.
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &:active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  // 전체보기의 경우 /all 대신에 /로 설정했음
  // to 값이 /을 가리키고 있을 때, exact 값을 true로 해 주어야 함
  // 이 값을 설정하지 않으면, 다른 카테고리가 선택되었을 때도 전체보기 링크에 active 스타일이 적용됨
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
