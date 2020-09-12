import React from 'react';
import './App.css';
import DiscoveryPage from './pages/discoverypage/DiscoveryPage';
import Header from "./component/header/Header";
// booklist with search ability, show details when click on
// favorite list and recents  : get access when sign in 
// sign in and sign up page  - can sign up -
// readers' forum page, posts, replays and likes 

function App() {
  return (
    <div className="App">
      <Header/>
      <DiscoveryPage/>
    </div>
  );
}

export default App;
