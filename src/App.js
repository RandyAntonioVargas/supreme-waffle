import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <footer className='footer'>
        <h1 className='footer-title'>GARIFUNA CULTURE AND LANGUAGE</h1>
        <section className='footer-section'>
          <div>
            <h1>Randy Vargas</h1>
            <p>Github</p>
            <p> LinkedIn</p>
          </div>
        </section>
        <h1 className='footer-copyright'>All rights reserved, app for edu purpoes only</h1>
      </footer>
      
    </div>
  );
}

export default App;
