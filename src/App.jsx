import Home from './views/Home/Home';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './views/About/AboutMe';
import TechStack from './views/TechStack/TechStack';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            <Route exact path="/tech">
              <TechStack />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}
