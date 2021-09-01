// import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonIcon } from "@ionic/react";
// import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "../src/assets/css/style.css";
import { checkmarkCircle, ellipseOutline } from "ionicons/icons";

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import "./theme/variables.css";
import logo from "../src/assets/image/logo-full.png";

import Header from "./components/header";
import { useState } from "react";
import { getallbulbs } from './core';

const App: React.FC = () => {
  const [bulbs, setbulbs] = useState(getallbulbs());
  console.log(bulbs);

  return (
    <IonApp>
      <Header logo={logo} />
      <div className="pagecontainer">
        <div className="page h100 fcol">
          <div className="card h100 pad">
            <p className="heading b">28.08.2021</p>
            <div className="todolist">
              <div className="todo finished f cent jstart">
                <input
                  readOnly
                  value="Prototype Bulb Design"
                  placeholder="Add a task"
                />
                <IonIcon icon={checkmarkCircle}></IonIcon>
              </div>
              {/* <div className="todo active f cent jstart">
                      <input value="Prototype Bulb Design" placeholder="Add a task" />
                      <IonIcon icon={ellipseOutline}></IonIcon>
                  </div>
                  <div className="todo f cent jstart">
                      <input value="" placeholder="" />
                      <IonIcon icon={ellipseOutline}></IonIcon>
                  </div>
                  <div className="todo f cent jstart">
                      <input value="" placeholder="" />
                      <IonIcon icon={ellipseOutline}></IonIcon>
                  </div>
                  <div className="todo f cent jstart">
                      <input value="" placeholder="" />
                      <IonIcon icon={ellipseOutline}></IonIcon>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </IonApp>
  );
};

export default App;
