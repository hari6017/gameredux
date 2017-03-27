import React from 'react';
import Gameslist from '../containers/Gameslist.js';
import Searchbox from '../containers/Searchbox.js';
var App = () =>
(
  <div className="container">
    <Searchbox />
    <hr />
    <Gameslist />
  </div>
)

export default App;
