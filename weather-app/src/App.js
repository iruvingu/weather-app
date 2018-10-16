import React, { Component } from 'react';
import './App.css';
import { Flex, Box } from 'reflexbox'
import LocationList from './components/LocationList';
import Fill from './reflexbox/Fill'
import Text from './reflexbox/Text'

const cities = [
  "Tokyo,jp",
  "Osaka,jp",
  "Hiroshima,jp",
  "Kyoto,jp",
  "Mexico City,mx"
]

class App extends Component {

  handleSelectedLocation = city => {
    console.log('handleSelectedLocation')
  }

  render() {
    return (
      <Flex column m={1}  >
        <Text my={0} f={2} children='Weather App' align='center'></Text>
        <Flex wrap justify='center'>
          <Box
          w={[ 1, 1/2, 1/4 ]}
          p={[ 1, 2, 3 ]}
          m={[ 1, 2, 3 ]}
          style={{
            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
            background: '#cf6044'}}>
            <div className="App">
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation} />
            </div>
          </Box>
          <Box
          w={[ 1, 1/2, 1/4 ]}
          p={[ 1, 2, 3 ]}
          m={[ 1, 2, 3 ]}
          style={{boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'}}>
            Campo
          </Box>
        </Flex>
      </Flex>
    )
  }
}

export default App;
