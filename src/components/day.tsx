import React from "react";
import { TasksInterface } from "../interfaces";
import Note from "./note";
import { getemptytask } from "../core";

const Day: React.FC<{
  currentday: TasksInterface;
  key: number;
  line: number;
  update: Function;
  dayindex: number;
}> = ({ currentday, line, update, dayindex }) => {
  return (
    <div className="card h100 pad">
      <p className="heading b">{currentday.text}</p>
      <div className="todolist" data-lines={line}>
        {[...Array(10)].map((x, i) => {
          let curtask =
            currentday && currentday.tasks && currentday.tasks[i]
              ? currentday.tasks[i]
              : getemptytask();
          return (
            <Note
              key={i}
              line={line}
              onUpdate={update}
              dy={dayindex}
              lineindex={i}
              currentTask={curtask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Day;
