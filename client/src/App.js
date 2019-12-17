import React, { useState } from "react";
import { browserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";

import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        Replace this Div with your Routes
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/movies/:id">
            <Movie addToSavedList={addToSavedList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
