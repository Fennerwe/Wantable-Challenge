import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('*', (req, res, next) => {
  req.url = req.url.substr(req.url.indexOf('?') + 1, req.url.length)
  next()
  res.send()
})

app.listen(4200, () => {
  // eslint-disable-next-line no-console
  console.log('CORS-enabled web server listening on port 4200')
})
