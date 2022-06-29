import './App.css';
import Navbar from "./components/Navbar"
import Headline from "./components/Headline"
import Section from "./components/Section"
import Sectionmirror from './components/SectionMirror';
import Mobile from "./imgs/mobile.jpg"
import Tv from './imgs/tv.png'
import Devices from "./imgs/device-pile.png"
import Kids from "./imgs/kids.png"

function App() {
  return (
   <div>
    <Navbar />
    <Headline />
    <Section
      maintext="Uživaj u sadržajima na televizoru."
      secondarytext="Gledaj na pametnim televizorima, konzolama Playstation i Xbox, uređajima Chromecast i Apple TV, Blu-ray reproduktorima i mnogim drugim uređajima."
      img={Tv}
    />
    <Sectionmirror
      maintext="Preuzmi svoje serije i gledaj ih izvan mreže."
      secondarytext="Jednostavno spremi favorite i uvijek ćeš imati nešto za gledati."
      img={Mobile}
    />
    <Section 
      maintext="Gledaj bilo gdje."
      secondarytext="Streamaj neograničene filmove i serije na mobilnom telefonu, tabletu, prijenosnom računalu i televizoru bez dodatnog plaćanja."
      img={Devices}
    />
    <Sectionmirror 
      maintext="Izradi profile za djecu."
      secondarytext="Pošalji djecu na pustolovine s omiljenim likovima u posebnom kutku namijenjenom djeci, besplatno uz tvoje članstvo."
      img={Kids}
    />



   </div> 
  )
}

export default App;