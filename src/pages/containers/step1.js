import React, { Component } from 'react'
import { connect } from 'react-redux'
import getItems from '../../api'

class Step1 extends Component {
  componentDidMount = async () => {
    const items = await getItems()

    this.props.dispatch({
      type: 'LOAD_ITEMS',
      payload: items
    })
  }

  render = () => (
    <div>Step 1</div>
  )
  
}

function mapStateToProps(state, props) {
  return {
    items: state.get('items')
  }
}

export default connect(mapStateToProps)(Step1)