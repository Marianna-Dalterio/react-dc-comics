//importo Header, Main, Footer, BlueBanner
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import AppBlueBanner from './components/AppBlueBanner';
import AppJumbotron from './components/AppJumbotron';

function App() {
  // const teachers = [<li>Florian</li>, <li>Samuele</li>, <li>Simone</li>];

  return (
    <>
      {/* <div>
        <ul>
          {teachers.map((teacher) => (<li>{teacher}</li>)
          )}
        </ul>
      </div> */}

      <AppHeader />
      <AppJumbotron />
      <AppMain />
      <AppBlueBanner />
      <AppFooter />
    </>
  )
}

export default App
