import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Step1 from './pages/containers/step1'
import Step2 from './pages/containers/step2'
import Error404 from './pages/containers/error404'

class Routes extends Component {
  render = () => (
    <main role="application">
      <Switch>
        {/* Step 1 */}
        <Route
          path="/"
          exact
          title="Paso 1"
          component={Step1}
        />
        {/* Step 2 */}
        <Route
          path="/step2"
          exact
          title="Paso 2"
          component={Step2}
        />
        {/* Error 404 */}
        <Route component={Error404} />
      </Switch>
    </main>
  )
}

export default Routes