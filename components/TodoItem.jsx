import React from 'react';
import style, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

//styled-components라이브러리의 Component Selector기능을 사용했다.
//&:hover하의 코드는 해당 컴포넌트 위에 커서가 있을 때 WorkRemove컴포넌트를 보여주라는 뜻이다.
const WorkRemove = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #DEE2E6;
    font-size: 24px;
    cursor: pointer;
    display: none;
    &:hover {
        color: #FF6B6B;
    }
`;

const WorkItemBlock = style.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${WorkRemove} {
            display: initial;
        }
    }
`;

const CheckedIcon = style.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #CED4DA;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
        props.isFinish &&
        css`
            border: 1px solid #38D9A9;
        `
    }
`;

const InternalContent = style.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => 
        props.isFinish &&
        css`
            color: #CED4DA;
        `
    }
`;

const TodoItem = ({ id, isFinish, content }) => {
    return (
        <WorkItemBlock>
            <CheckedIcon isFinish={isFinish}>{isFinish && <MdDone />}</CheckedIcon>
            <InternalContent isFinish={isFinish}>{content}</InternalContent>
            <WorkRemove>
                <MdDelete />
            </WorkRemove>
        </WorkItemBlock>
    );
};

export default TodoItem;