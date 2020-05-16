

const boxReducer = (state, action) => {
    const width = `${action.width}px`
    const height = `${action.height}px`
    switch(action.type){
        case 'ADD_BOX': 
            return [...state, {backgroundColor: action.color, width, height}];
        default:
            return state
    }
}

export default boxReducer;