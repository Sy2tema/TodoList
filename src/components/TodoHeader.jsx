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
    const todos = useTodoState();

    //filter는 객체가 아닌 배열에 적용되는 메소드이기 때문에 initialState내부 요소를 객체에서 배열로 교체해주었다.
    const worksCount = todos.filter(work => !work.isFinish);
    
    const today = new Date();

    //toLocaleDateString()메소드를 활용해 각 문화권에 맞는 날짜를 불러오도록 했다.
    const resultString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const weekDay = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <TodoHeaderBlock>
            <h1>{resultString}</h1>
            <div className="day">{weekDay}</div>
            <div className='remaining-work'>할 일이 {worksCount.length}개 남았습니다.</div>
        </TodoHeaderBlock>
    );
};

export default TodoHeader;