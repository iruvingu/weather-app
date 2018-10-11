import React, { Component } from 'react';
import './App.css';
import { Flex, Box } from 'reflexbox'
import LocationList from './components/LocationList';

const cities = [
  "Tokyo,jp",
  "Osaka,jp",
  "Hiroshima,jp",
  "Kyoto,jp",
  "Mexico City,mx"
]

const Border = props => {
  console.log(props)
  return (
  <Box
    {...props}
    style={{
      ...props.style,
      boxShadow: 'inset 0 0 0 3px',
      background: 'red'
    }}
  />
)}

class App extends Component {

  handleSelectedLocation = city => {
    console.log('handleSelectedLocation')
  }

  render() {
    return (
      <Flex column>
        <Border p={1}>1/3</Border>
        <Box p={1} style={{background: 'blue'}}>1/3</Box>
        <Box p={1} style={{background: 'green'}}>1/3</Box>
      
      </Flex>
      // <div className="App">
      //   <LocationList cities={cities}
      //     onSelectedLocation={this.handleSelectedLocation} />
      // </div>
    )
  }
}

export default App;
