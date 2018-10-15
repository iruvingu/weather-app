import React, { Component } from 'react';
import './App.css';
import { Flex, Box } from 'reflexbox'
import LocationList from './components/LocationList';
import Fill from './reflexbox/Fill'
import Text from './reflexbox/Text'
import Btn from './reflexbox/Btn'
import Pre from './reflexbox/Pre'

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
      <Flex align='center' justify='center' style={{height: '100vh'}}>
        <Box>
          <Box
            mt={4}
            style={{
              textTransform: 'uppercase',
              letterSpacing: '.3em',
              boxShadow: '0 0 0 3px'
            }}>
            <Flex>
              <Fill p={2}
                color='white'>
                <h1 style={{ margin: 0 }}>Reflex</h1>
              </Fill>
              <Box p={2}>
                <h1 style={{ margin: 0 }}>Box</h1>
              </Box>
            </Flex>
          </Box>
          <Box my={2}>
            <Text f={3}
              children='Responsive React Flexbox Grid System'
            />
          </Box>
          <Text my={1} f={3} children='Second children'></Text>
          <Flex mb={4} align='center'>
            <Btn
              href='https://github.com/jxnblk/reflexbox'
              children='GitHub'
              style={{
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, .75)',
                borderRadius: '8px',
                mixBlendMode: 'multiply'
              }}
            />
            <Box ml='auto' />
            <Pre children='npm i reflexbox' />
          </Flex>
        </Box>
      </Flex>
      // <div style={{ height: '100vh' }}>      
      //   <Flex
      //   justify='space-around'
      //   style={{ height: '100vh' }}
      //   >
      //     <Box p={4}>1/3</Box>
      //     <Box p={4} style={{background: 'green'}}>1/3</Box>
      //     <Box p={4} style={{background: 'blue'}}>1/3</Box>
        
      //   </Flex>
      // </div>
      // <div className="App">
      //   <LocationList cities={cities}
      //     onSelectedLocation={this.handleSelectedLocation} />
      // </div>
    )
  }
}

export default App;
