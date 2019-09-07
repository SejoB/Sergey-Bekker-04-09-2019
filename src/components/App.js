import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './Header'
import Forecast from './Forecast'
import theme from '../theme'

class App extends Component {

  
  render(){ 
  return (
        <MuiThemeProvider theme={theme}>
          <Header />
          <Forecast />
        </MuiThemeProvider>
  )
}
}

export default App
