import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import WhereToGo from "./components/WhereToGo/WhereToGo";
import SpotsGallery from "./components/SpotsGallery/SpotsGallery";
import SpotDetails from "./components/SpotDetails/SpotDetails";
import BecomeHost from "./components/BecomeHost/BecomeHost";
import UserPage from "./components/UserPage/UserPage";
import NotFound from "./components/NotFound/NotFound";
import { SpotProvider } from "./context/SpotContext";

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
          <Route exact path="/spots">
            <SpotsGallery />
          </Route>
          <Route path="/spots/:spotId">
            <SpotProvider>
              <SpotDetails />
            </SpotProvider>
          </Route>
          <Route path="/host">
            <BecomeHost />
          </Route>
          <Route path="/users/:userId">
            <UserPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
