import React, { useState, memo } from 'react';
import style, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNewId, CREATE } from '../TodoContext';

//hover와 active를 이용해 10%씩 밝고 어두운 효과를 내도록 하였다.
const CreateButton = style.button`
    background: #38D9A9;
    &:hover {
        background: #63E6BE;
    }
    &active {
        background: #20C997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;

    ${props =>
        props.isCreate &&
        css`
            background: #FF6B6B;
            &:hover {
                background: #FF8787;
            }
            &:active {
                background: #FA5252;
            }

            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`;

const InsertFormBlock = style.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = style.form`
    background: #F8F9FA;
    padding: 32px 32px 72px 32px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #E9ECEF;
`;

const InputString = style.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #DEE2E6;
    widtht: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const TodoCreate = () => {
    const [isCreate, setCreate] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const newId = useTodoNewId();

    const handleClickIcon = () => setCreate(!isCreate);
    const handleValueChange = event => setValue(event.target.value);
    const handleSubmitEvent = event => {
        event.preventDefault();

        dispatch({
            type: CREATE,
            todo: {
                id: newId.current,
                content: value,
                isFinish: false
            }
        });

        //할일 생성이 완료된 후 입력창을 초기화해준다.
        setValue('');
        setCreate(false);
        newId.current++;
    };

    return (
        <>
            {isCreate && (
                <InsertFormBlock>
                    <InsertForm onSubmit={handleSubmitEvent}>
                        <InputString 
                            autoFocus
                            placeholder='할 일을 입력 후 Enter를 눌러주세요.' 
                            onChange={handleValueChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormBlock>
            )}
            <CreateButton onClick={handleClickIcon} isCreate={isCreate}>
                <MdAdd />
            </CreateButton>
        </>
    );
};

export default memo(TodoCreate);