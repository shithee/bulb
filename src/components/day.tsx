import React from "react";
import { checkmarkCircle, ellipseOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { TasksInterface } from "../interfaces";

const Day: React.FC <{ currentday : TasksInterface, key : number }>= ({ currentday }) => {
  return (
    <div className="card h100 pad">
      <p className="heading b">{currentday.text}</p>
      <div className="todolist">
        <div className="todo finished f cent jstart">
          <input
            readOnly
            value="Prototype Bulb Design"
            placeholder="Add a task"
          />
          <IonIcon icon={checkmarkCircle}></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default Day;
