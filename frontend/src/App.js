import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import WhereToGo from "./components/WhereToGo/WhereToGo";
import SpotsGallery from "./components/SpotsGallery/SpotsGallery";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <WhereToGo />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots">
            <SpotsGallery />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
