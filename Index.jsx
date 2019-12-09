import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoBackground from './components/TodoBackground';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

//styled-component라이브러리를 활용하면 별도의 css파일 없이 스타일을 쉽게 지정할 수 있다.
const GlobalStyle = createGlobalStyle`
    body {
        background: #E9ECEF;
    }
`;

const Index = () => {
    return (
        <>
            <GlobalStyle />
            <TodoBackground>
                <TodoHeader />
                <TodoList />
            </TodoBackground>
        </>
    );
};

export default Index;