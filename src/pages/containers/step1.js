import React, { Component } from 'react'
import { connect } from 'react-redux'
import getItems from '../../api'
import Header from '../components/header'
import Logo from '../components/logo'
import { List as list } from 'immutable'
import Foods from '../components/foods'

class Step1 extends Component {
  componentDidMount = async () => {
    const items = await getItems()

    this.props.dispatch({
      type: 'LOAD_ITEMS',
      payload: items
    })
  }

  render = () => (
    <section id="step1">
      <Header>
        <Logo />
      </Header>
      <Foods items={this.props.items} />
    </section>
  )
  
}

function mapStateToProps(state, props) {
  let itemsResult = list()
  const items = state.get('items')

  if (items) {
    itemsResult = items
  }

  return {
    items: itemsResult
  }
}

export default connect(mapStateToProps)(Step1)