import React, { useState } from "react";
import { checkmarkOutline, heartOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { TaskInterface } from "../interfaces";

const Note: React.FC<{
  key: number;
  line: number;
  onUpdate: Function;
  dy: number;
  lineindex: number;
  currentTask: TaskInterface;
}> = ({ line, onUpdate, dy, lineindex, currentTask }) => {
  let place = lineindex == 0 ? "Add first task of the day !" : "";
  const handleEdit = (text: string) => {
    onUpdate({
      text,
      dy,
      lineindex,
    });
  };
  return (
    <div
      className={`todo f cent jstart ${currentTask.active ? "active" : ""}`}
      data-key={lineindex}
    >
      <input
        value={currentTask.name}
        placeholder={place}
        onChange={(e) => handleEdit(e.target.value)}
      />
      {currentTask.name && !currentTask.status && (
        <IonIcon icon={checkmarkOutline}></IonIcon>
      )}
      {currentTask.status && <IonIcon icon={heartOutline}></IonIcon>}
    </div>
  );
};

export default Note;
