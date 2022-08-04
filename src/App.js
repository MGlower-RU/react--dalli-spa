import Footer from './components/Footer';
import Header from './components/Header';

import './styles/App.scss';

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Footer />
        <button className="button">
          Отправить заявку
        </button>
        <div className="button">
          Отправить заявку
        </div>
        <a href="/" className="button">
          Отправить заявку
        </a>
      </div>
    </>
  );
}