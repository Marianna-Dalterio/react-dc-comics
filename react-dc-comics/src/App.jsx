//sintassi per importare da assets oppure da public
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//importo Header, Main, Footer, BlueBanner
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import AppBlueBanner from './components/AppBlueBanner';

function App() {


  return (
    <>
      <AppHeader />
      <AppMain />
      <AppBlueBanner />
      <AppFooter />
    </>
  )
}

export default App
