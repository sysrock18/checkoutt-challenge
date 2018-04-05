import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'

const homeContainer = document.getElementById('home-container')

render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    homeContainer
)