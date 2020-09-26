// Custom implementation of redux-promise middleware.
export default ({dispatch}) => next => action => {
    // Check if the action.payload property is a promise
    // If yes wait for it to resolve
    // else pass it on to next middleware

    if(!action.payload || !action.payload.then) {
        return next(action);
    }  
    
    // we want to wait for the promise to resolve
    // once resolved we need to create a new action
    // with the data and dispatch it.

    action.payload.then((response) => {
        dispatch({...action, payload: response})
    })
}