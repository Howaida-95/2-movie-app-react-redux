/* we wrap this in try & catch block because it's possible when dealing with local storage 
depending on the browser setting for instance privacy mode , it won't store to localStorage */  
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state) // this will be the stringify version of state 
    localStorage.setItem('state', serializedState) 
  }
  catch (error) {
    console.log(error)
    return undefined;
  }
}

export const loadState = () => { // this func load the localStorage into our redux state 
  try {
    const serializedState = localStorage.getItem('state')
/* return defined here because react redux isn't expected null value 
it's expectiting either undefined value or a value */    
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  }
  catch (err) {
    console.log(err);
    return undefined;
  }
}

