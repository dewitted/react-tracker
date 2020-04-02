import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { Container } from './components/shared/Container/Container'
import Nav from './components/Nav'
import classes from './App.module.css'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:4000/categories')
      const categories = await response.json()
      dispatch({ type: 'UPLOAD_CATEGORIES', categories })
    }
    fetchCategories()
  }, [])
  return (
    <BrowserRouter>
      <Container>
        <main className={classes.setDimensions}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={() => <route.component />}
                exact={route.isExact}
              />
            ))}
            <Redirect from='*' to='/404' />
          </Switch>
        </main>
        <Nav />
      </Container>
    </BrowserRouter>
  )
}

export default App
