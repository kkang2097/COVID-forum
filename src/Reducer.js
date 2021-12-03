export const initialState = {
    isLoggedIn: false,
    name: null,
    numPersons: null,
    state: null,
    person1RiskScore: null,
    person1Name: null,
    person2RiskScore: null,
    person2Name: null,
    person3RiskScore: null,
    person3Name: null,    
  };
  
  const reducer = (state, action) => {
    console.log("Reducer at work: ", action);
  
    switch (action.type) {

      case "UPDATE_USER":
          return{
            ...state,
            isLoggedIn: true,
            name: action.name,
            numPersons: action.numPersons,
            state: action.state,
            person1RiskScore: action.person1RiskScore,
            person1Name: action.person1Name,
            person2RiskScore: action.person2RiskScore,
            person2Name: action.person2Name,
            person3RiskScore: action.person3RiskScore,
            person3Name: action.person3Name,  
          }

      default:
        return state;
    }
  };
  
  export default reducer;
 