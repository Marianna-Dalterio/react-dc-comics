//importo Header, Main, Footer, BlueBanner, Jumbotron
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import AppBlueBanner from './components/AppBlueBanner';
import AppJumbotron from './components/AppJumbotron';
//CENTRALIZZAZIONE: importo data, dico al componente quali dati accetta, nel file del componente tolgo l'import dei dati MA li passo come argomento della funzione 

function App() {


  return (
    <>
      <AppHeader />
      <AppJumbotron />
      <AppMain />
      <AppBlueBanner />
      <AppFooter />
    </>
  )
}

export default App
