// ** how to get store access

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      {/* -- Step1 */}
      <UserContextProvider>
        {/* now all children components have access */}
        <Login />
        <Profile />

      </UserContextProvider>
    </>
  )
}

export default App
