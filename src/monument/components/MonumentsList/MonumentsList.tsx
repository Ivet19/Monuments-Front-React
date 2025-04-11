import React from "react";
import Monument from "../../types";
import MonumentCard from "../MonumentCard/MonumentCard";
import "./MonumentsList.css";

interface MonumentsListProps {
  monuments: Monument[];
}

const MonumentsList: React.FC<MonumentsListProps> = ({ monuments }) => {
  return (
    <ul className="monuments">
      {monuments.map((monument) => (
        <li key={monument.id}>
          <MonumentCard monument={monument} />
        </li>
      ))}
    </ul>
  );
};

export default MonumentsList;
