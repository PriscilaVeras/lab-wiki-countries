import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />

        <Route path="/" component={CountriesList} />
        <Route path="/:cca3" component={CountryDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
