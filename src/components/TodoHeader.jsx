import React from 'react';
import style from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeaderBlock = style.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #E9ECEF;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343A40;
    }
    .day {
        margin-top: 1rem;
        color: #868E96;
        font-size: 21px;
    }
    .remaining-work {
        color: #20C997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const TodoHeader = () => {
    const works = useTodoState();
    console.log(works);

    return (
        <TodoHeaderBlock>
            <h1>2019년 12월 10일</h1>
            <div className="day">수요일</div>
            <div className='remaining-work'>할 일이 2개 남았습니다.</div>
        </TodoHeaderBlock>
    );
};

export default TodoHeader;