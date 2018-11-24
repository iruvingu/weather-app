import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ForecastExtended from '../components/ForecastExtended'

class ForecastExtendedContainer extends Component {
  render() {
    const { city } = this.props
    return (
      city &&
      <ForecastExtended city={city} />
    )
  }
}

ForecastExtendedContainer.PropTypes = {
  city: PropTypes.string.isRequired,
}

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer)