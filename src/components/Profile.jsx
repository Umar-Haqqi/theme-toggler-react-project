import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {

    // ** how to extract values from UserContext **
    const { user } = useContext(UserContext)

    // conditional return
    if (!user) return <div> No user found </div>
    return (
        <div>
            <h2>Welcome {user.userName}</h2>
        </div>
    )
}

export default Profile
