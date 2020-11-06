function categoriesReducer(currentState = [{id:0, name:'No Category'}], action){
    if (action.type === 'ADD_CATEGORY')
        return [...currentState, action.payload];
    return currentState;
}

export default categoriesReducer;