import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Rates from './components/Rates';

import './styles/App.scss';

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Rates />
        <Features />
        <Footer />
      </div>
    </>
  );
}