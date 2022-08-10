import Home from './views/Home/Home';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutMe from './views/About/AboutMe';
import TechStack from './views/TechStack/TechStack';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            <Route exact path="/tech">
              <TechStack />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
