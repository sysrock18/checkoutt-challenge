import React from 'react'

function Layout(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </head>
      <body>
        <section id="home-container">
          {props.children}
        </section>
      </body>
    </html>
  )
}

export default Layout