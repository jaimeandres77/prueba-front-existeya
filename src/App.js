import './App.css';
import HeroeList from './Components/HeroList/HeroList';
import MainCard from './Components/MainCard/MainCard';
import MidSection from './Components/MidSection/MidSection';
import NavBar from './Components/NavBar/NavBar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons"

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <MainCard/>
        <MidSection></MidSection>
        <h2 className='main-subtitle'>Super Heroes anteriores</h2>
        <HeroeList></HeroeList>
        <hr style={{width:"80%",margin:"2rem auto"}}></hr>
        <div className='footer-style'>
          <div className='footer-links'>
            <p>Terminos y condiciones</p>
            <p>Politica de tratamiento de datos</p>
            <p>Contactenos</p>
          </div>
          <div className='footer-links'>
            <p>Siguenos</p>
            <p><FontAwesomeIcon icon={faFacebook}/></p>
            <p><FontAwesomeIcon icon={faTwitter}/></p>
          </div>
        </div>

    </div>
  );
}

export default App;
