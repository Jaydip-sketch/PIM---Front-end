import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Layout from './Layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Page1 from './Components/Page1';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
