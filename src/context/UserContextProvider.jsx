// -- Step3
import React from "react";
import UserContext from "./UserContext";


// -- Step4
const UserContextProvider = ({ children }) => { // nothing special about children

    // -- to pass data 
    const [user, setUser] = React.useState(null);

    return (
        // -- Step6
        <UserContext.Provider
        
            // -- Step7, giving data access
            value={{ user, setUser }}>   

            {children}
        </UserContext.Provider>
    )
}

// -- Step5
export default UserContextProvider;