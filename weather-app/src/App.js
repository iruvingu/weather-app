import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import ToolBar from '@material-ui/core/Toolbar'
import { Flex, Box } from 'reflexbox'
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'

const cities = [
  "Tokyo,jp",
  "Osaka,jp",
  "Hiroshima,jp",
  "Kyoto,jp",
  "Mexico City,mx"
]

class App extends Component {
  render() {
    return (
      <Flex column m={0}  >
        <Box m={0}>
          <AppBar position='relative'>
            <ToolBar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </ToolBar>
          </AppBar>
        </Box>
        <Flex wrap justify='center'>
          <Box
          w={[ 1, 1/2, 1/4 ]}
          p={[ 1, 2, 3 ]}
          m={[ 1, 2, 3 ]}
          style={{
            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
            background: '#cf6044',
            borderRadius: '5px'}}>
            <div className="App">
              <LocationListContainer cities={cities} />
            </div>
          </Box>
          <Box
          w={[ 1, 1/2, 1/4 ]}
          p={[ 1, 2, 3 ]}
          m={[ 1, 2, 3 ]}
          style={{boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', borderRadius: '5px', height: '100vh', overflow: 'auto'}}>
            <Paper elevation={4}>
              <ForecastExtendedContainer />
            </Paper>
          </Box>
        </Flex>
      </Flex>
    )
  }
}

export default App
