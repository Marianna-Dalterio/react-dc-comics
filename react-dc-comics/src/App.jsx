//sintassi per importare da assets oppure da public
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//importo Header, Main, Footer
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';

function App() {


  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  )
}

export default App
