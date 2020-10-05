import React from 'react';
import Main from './Main'
import Alert from './alert/Alert'

export const AlertContext = React.createContext();

function App() {
  return (
    <AlertContext>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertContext>
  )
}

export default App;