// ** how to get store access

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
    {/* -- Step1 */}
      <UserContextProvider>
        {/* now all children components have access */}

      </UserContextProvider>
    </>
  )
}

export default App
