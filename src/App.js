import { Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/Detail';
import Main from './pages/Main';
import Update from './pages/Update';
import Save from './pages/Save';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Main} />
      <Route path="/post" exact={true} component={Save} />
      <Route path="/post/:id" exact={true} component={Detail} />
      <Route path="/post/:id/update" exact={true} component={Update} />
    </div>
  );
}

export default App;
