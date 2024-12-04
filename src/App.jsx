import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tous from './composant/Tous'
import Enfants from './composant/Enfants'
import Femme from './composant/Femme'
import Chariot from './composant/Chariot'
import Vente from './composant/Vente'
import Hommes from './composant/Hommes'
import Home from './composant/Home'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tous' element={<Tous />} />
          <Route path='/enfants' element={<Enfants />} />
          <Route path='/femmes' element={<Femme />} />
          <Route path='/hommes' element={<Hommes />} />
          <Route path='/chariots' element={<Chariot />} />
          <Route path='/ventes' element={<Vente />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App