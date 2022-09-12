import Home from './views/Home/Home';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './views/About/AboutMe';
import TechStack from './views/TechStack/TechStack';
import ProjectList from './views/ProjectList/ProjectList';

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
            <Route exact path="/projects">
              <ProjectList />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}
