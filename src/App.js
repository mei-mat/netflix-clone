import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route } from 'react-router';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        {
          // user ?
            <React.Fragment>
              <Route exact path='/' component={Home} />
              <Route path='/test'><h1 className="mt-9">TEST</h1></Route>
            </React.Fragment>
            // :
            // <Login />
        }
      </Layout>
    </div>
  );
}

export default App;
