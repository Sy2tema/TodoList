import React from 'react';
import style from 'styled-components';
import WorkItem from './TodoItem';

//flex속성을 통해 컨테이너들 간의 크기 비율을 조절할 수 있다. 이 값에는 auto, initial, none이나 양의 숫자를 입력해야 한다.
//overflow-y속성을 통해 박스의 내용이 y축으로 넘쳤을 때 자동으로 스크롤 바가 생기도록 만들어준다.
//Module not found: Error: Can't resolve 'babel-runtime/helpers/extends'문제가 발생했다.
//확인 결과 babel-runtime라이브러리를 설치하지 않아 발생한 문제였으며 해당 라이브러리를 설치하자 문제가 해결되었다.
const TodoListBlock = style.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    return (
        <TodoListBlock>
            <WorkItem content='컴포넌트 토대 완성하기' isFinish/>
            <WorkItem content='내부 동작 코드 구현하기' isFinish={false}/>
            <WorkItem content='컴포넌트들에 대한 css부분 완성하기' isFinish={false}/>
            <WorkItem content='Git 버전 관리하기' isFinish={false}/>
        </TodoListBlock>
    );
};

export default TodoList;