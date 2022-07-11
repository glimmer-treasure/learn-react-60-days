import logo from './logo.svg';
import './App.css';
import FormPage from './pages/FormPage'
import ReduxPage from './pages/ReduxPage.js'
import ReduxReactPage from './pages/ReduxReactPage.js'
import { Provider } from './utils/react-redux'
import { store } from './store'

function App() {
  return (
    <div>
      {/* <FormPage /> */}
      {/* { <ReduxPage /> } */}
      <Provider store={store}>
        <ReduxReactPage />
      </Provider>
    </div>
  );
}

export default App;
