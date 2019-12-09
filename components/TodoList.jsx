import React from 'react';
import style from 'styled-components';

//flex속성을 통해 컨테이너들 간의 크기 비율을 조절할 수 있다. 이 값에는 auto, initial, none이나 양의 숫자를 입력해야 한다.
//overflow-y속성을 통해 박스의 내용이 y축으로 넘쳤을 때 자동으로 스크롤 바가 생기도록 만들어준다.
const TodoListBlock = style.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray; //크기 확인용 임시 색
`;

const TodoList = () => {
    return <TodoListBlock>할일 목록</TodoListBlock>
};

export default TodoList;