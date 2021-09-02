// import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonIcon } from "@ionic/react";
// import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "../src/assets/css/style.css";
import { Storage } from "@ionic/storage";

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
import { useState, useEffect } from "react";
import { refactorData } from "./core";
import Day from "./components/day";
import { TasksInterface } from "./interfaces";

const App: React.FC = () => {
  const store = new Storage();
  store.create();
  const [alltasks, setTasks] = useState<TasksInterface[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchlocal("tasks");
      let refactored = refactorData(tasksFromServer);
      setTasks(refactored);
      await updatelocal("tasks", JSON.stringify(refactored));
    };
    getTasks();
  }, []);

  const fetchlocal = async (key: string) => {
    const tasks = await store.get(key);
    return tasks;
  };

  const updatelocal = async (key: string, data: any) => {
    await store.set(key, data);
  };

  return (
    <IonApp>
      <Header logo={logo} />
      <div className="pagecontainer">
        <div className="page h100 fcol">
          {alltasks.map((task, i) => {
            return <Day currentday={task} key={i} />;
          })}
        </div>
      </div>
    </IonApp>
  );
};

export default App;
