import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './pages/Root'
import Route from './routers/Route'
import About from './pages/About'
import Router from './routers/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={<Root/>} />
      <Route path='/about' component={<About/>} />
    </Router>
  </React.StrictMode>,
)
