import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Navbar from './components/navbar'
import Home from './components/home'
import Explore from './components/explore'
import Stay from './components/stay'
import Plan from './components/plan'
import Eat from './components/eat'
import Footer from './components/footer'

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes className='main'>
        <Route path='/' element={<Home />} />
        <Route path='/plan' element={<Plan />}/>
        <Route path='/stay' element={<Stay />}/>
        <Route path='/eat' element={<Eat />}/>
        <Route path='/explore' element={<Explore />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App