import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSelectedCity } from '../actions'
import LocationList from '../components/LocationList'

class LocationListContainer extends Component {

  handleSelectedLocation = city => {
    this.props.city(city)
  }

  render() {
    const { cities } = this.props
    console.log(cities)
    return (
      <LocationList 
        cities={cities}
        onSelectedLocation={this.handleSelectedLocation} />
    )
  }
}

LocationListContainer.PropTypes = {
  city: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
  city: payload => dispatch(setSelectedCity(payload))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)
