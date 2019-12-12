import React from 'react';
import style from 'styled-components';
import WorkItem from './TodoItem';
import { useTodoState } from '../TodoContext';

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
    const todos = useTodoState();
    //map메소드를 사용할 때는 unique한 요소를 하나정도 key로 지정해주는 것이 좋다.
    return (
        <TodoListBlock>
            {todos.map(value => (
                <WorkItem 
                    key={value.id}
                    id={value.id}
                    content={value.content}
                    isFinish={value.isFinish}
                />
            ))}
        </TodoListBlock>
    );
};

export default TodoList;