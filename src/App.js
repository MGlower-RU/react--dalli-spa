import Footer from './components/Footer';
import Header from './components/Header';
import TextInput from './components/TextInput';

import './styles/App.scss';

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Footer />
        <TextInput  />
      </div>
    </>
  );
}