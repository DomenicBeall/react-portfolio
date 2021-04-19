import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      <Footer/>
    </Router>
  );
}

export default App;
