import express from 'express'
import Home from './dist/home'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from './dist/server/app'
import Layout from './src/pages/components/layout'

const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
  const context = {}

  res.write(renderToStaticMarkup(
    <Layout
      title="Checkout Challenge"
    >
        <StaticRouter location={req.url} context={context}>
            <Routes />
        </StaticRouter>
    </Layout>
  ))
  res.end()
})

app.listen(3000)