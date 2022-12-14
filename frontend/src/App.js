import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'> 
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
