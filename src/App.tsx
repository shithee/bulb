import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { App } from "@capacitor/app";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "./assets/css/style.css";

/* Theme variables */
// import "./theme/variables.css";

import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Draft from './pages/Drafts';

App.addListener("backButton", () => {
  if (window.location.pathname === "/") {
    App.exitApp();
  }
});

const SillyApp: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/drafts" component={Draft} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default SillyApp;