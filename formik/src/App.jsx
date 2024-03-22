
import './App.css';
import Formulario from './component/Formulario';
import logo from './images/React-Symbol.png';

function App() {
  

  return (
    <>
    <div className='logo-container'>
    <img 
        src={logo} 
        className='react-logo'
        alt="React logo"
         />
    </div>
    <div className='contenedor'>
      <Formulario />
    </div>
    </>
    
    
  )
}

export default App
