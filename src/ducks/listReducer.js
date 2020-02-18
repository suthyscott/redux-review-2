const initialState = {
    list: ['dummy item', `it's not real things`, 'punk']
}

const ADD_ITEM = 'ADD_ITEM';

export function addItem(item){
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case ADD_ITEM:
            return {...state, list: [...state.list, payload]}
        default:
            return state
    }
}