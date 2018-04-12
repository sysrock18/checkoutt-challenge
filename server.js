import express from 'express'
import Home from './dist/home'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from './dist/server/app'
import Layout from './src/pages/components/layout'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './src/store'


const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
  const context = {}

  res.write(renderToStaticMarkup(
    <Layout
      title="Checkout Challenge"
    >
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
            <Routes />
        </StaticRouter>
      </Provider>
    </Layout>
  ))
  res.end()
})

app.listen(3000)