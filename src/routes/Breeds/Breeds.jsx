import React from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import "./Breeds.css";
import { Link } from "react-router-dom";
import Alphabet from "../../components/Alphabet/Alphabet.jsx";

function Breeds() {
  const [racas, setRacas] = useState([]);
  const racaAlfabeto = racas.filter((item) => {
    return item.name[0] === "P";
  });

  console.log(racaAlfabeto);

  useEffect(() => {
    async function loadRacas() {
      await api
        .get("breeds")
        .then((response) => setRacas(response.data))
        .catch((error) => console.log(error));
    }
    loadRacas();
  }, []);

  console.log(racas);

  return (
    <main>
      <Alphabet />
      <div className="container">
        {racas.map((item) => {
          return (
            <div key={item.id} className="polaroid">
              <img src={item.image.url} alt={item.name} className="photo" />
              <div className="info-dogs">
                <h2>{item.name}</h2>
                <span>
                  Função:{" "}
                  {item.breed_group ? (
                    item.breed_group
                  ) : (
                    <span>No Information</span>
                  )}
                </span>
                <p>
                  Temperament:{" "}
                  {item.temperament ? (
                    item.temperament
                  ) : (
                    <span>No Information</span>
                  )}
                </p>
                <strong>Estimated lifetime: {item.life_span}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Breeds;
