import React, { useReducer, createContext, useContext, useRef } from 'react';


const initialState = {
    data: [{
        id: 1,
        content: '컴포넌트 토대 완성하기',
        isFinish: true
    }, {
        id: 2,
        content: '내부 동작 코드 구현하기',
        isFinish: false
    }, {
        id: 3,
        content: '컴포넌트들에 대한 css부분 완성하기',
        isFinish: false
    }, {
        id: 4,
        content: 'Git 버전 관리하기',
        isFinish: true
    }]
};

export const CREATE = 'CREATE';
export const TOGGLE = 'TOGGLE';
export const DELETE = 'DELETE';

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                data: {
                    todo: action.todo
                }
            };
            case TOGGLE:
            return state.map(todo => 
                todo.id === action.id ? {...todo, isFinish: !todo.isFinish} : todo  
            );
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
            default:
                throw new Error(``);
    }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNewIdContext = createContext();

//useContext를 사용하는 custom Hook을 만들어준다.
//useContext를 사용할 해당 컴포넌트에서 불러와도 무방하다.
export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    
    if (!context) {
        throw new Error('TodoState를 찾을 수 없습니다.');
    }
    return context;
}
export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);

    if (!context) {
        throw new Error('TodoDispatch를 찾을 수 없습니다.');
    }
    return context;
}
export const useTodoNewId = () => {
    const context = useContext(TodoNewIdContext);

    if (!context) {
        throw new Error('TodoNewId를 찾을 수 없습니다.');
    }
    return context;
}

//파일 이름과 같은 이름으로 함수를 지정해 index에서 인식하지 못하는 오류가 발생했다.
//파일 이름과 별개의 이름으로 설정하자 문제가 해결되었다.
//파일 이름과 일치시키고자 한다면 const대신 default를 활용하면 간단하다.
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const newId = useRef(5);
    
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNewIdContext.Provider value={newId}>
                    {children}
                </TodoNewIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};