import React from "react";

// ** context is a global variable.

// -- Step1: create context is a method just like useState and useEffect
const UserContext = React.createContext();

// -- Step2:export context
export default UserContext; 

// ** context gives a provider. 