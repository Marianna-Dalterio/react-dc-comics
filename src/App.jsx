//importo Header, Main, Footer, BlueBanner, Jumbotron
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import AppBlueBanner from './components/AppBlueBanner';
import AppJumbotron from './components/AppJumbotron';
//CENTRALIZZAZIONE: importo data, dico al componente quali dati accetta, nel file del componente tolgo l'import dei dati MA li passo come argomento della funzione 
//importazione nominale con graffe
import { menu } from "./data/MenuAppHeader";
//importo array di oggetti da data x la lista del menu footer
import { menuFooter } from "./data/MenuAppFooter";
//importo dati per main
import comics from "./data/comics"


function App() {


  return (
    <>
      <AppHeader menu={menu} />
      <AppJumbotron />
      <AppMain comics={comics} />
      <AppBlueBanner />
      <AppFooter menu={menuFooter} />
    </>
  )
}

export default App
