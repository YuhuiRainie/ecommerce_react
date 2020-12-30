
import './App.css';
import Homepage from "./pages/homepage/homepage";
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Shop from "./pages/shop/shop";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route  exact path='/' component={Homepage} />
                <Route  path='/shop' component={Shop} />
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
