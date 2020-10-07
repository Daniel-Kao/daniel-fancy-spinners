const React = require('react')
const { renderToString } = require('react-dom/server')
const express = require('express')
const { Rolling } = require('daniel-fancy-spinners')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = renderToString(React.createElement(Rolling))
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          ${html}
      </body>
    </html>
  `)
})

app.listen(port)
