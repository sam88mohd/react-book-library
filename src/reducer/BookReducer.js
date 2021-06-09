import uuid from 'uuid/v1';

export const BookReducer = (state, action) => {
    switch (action.type){
        case 'ADD_BOOK':
            return [...state, {id: uuid(), title: action.book.title, author: action.book.author, page: action.book.page, status: action.book.status }]
        case 'DELETE_BOOK':
            return state.filter(book => book.id !== action.id)
        case 'TOGGLE_STATUS':
            return state.map(book => book.id === action.id ? {...book, status: !book.status } : book)
        default:
            return state
    }
}
