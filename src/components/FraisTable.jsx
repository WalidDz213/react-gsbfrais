import React, { useState, useEffect } from "react";
import FraisData from "../data/frais.json";
import "../styles/FraisTable.css";

function FraisTable() {
  const [fraisList, setFraisList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterNonNull, setFilterNonNull] = useState(true);
  const [minMontant, setMinMontant] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFraisList(FraisData);
      setLoading(false);
    }, 500);
  }, []);

  const filteredFrais = fraisList
    .filter((f) => !filterNonNull || f.montantvalide !== null)
    .filter((f) =>
      f.anneemois.includes(searchTerm) ||
      f.id_visiteur.toString().includes(searchTerm)
    )
    .filter((f) => minMontant === "" || f.montantvalide >= Number(minMontant));

  if (loading) return <div><b>Chargement des frais...</b></div>;

  return (
    <div className="frais-table-container">
      <h2>Liste des Frais</h2>

      <div className="filter-container">
        <label>
          <input
            type="checkbox"
            checked={filterNonNull}
            onChange={(e) => setFilterNonNull(e.target.checked)}
          />
          Afficher seulement les frais avec un montant validé
        </label>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher par année-mois ou ID visiteur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="search-container">
        <input
          type="number"
          placeholder="Montant validé minimum..."
          value={minMontant}
          onChange={(e) => setMinMontant(e.target.value)}
        />
      </div>

      <table className="frais-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID État</th>
            <th>Année-Mois</th>
            <th>ID Visiteur</th>
            <th>Justificatifs</th>
            <th>Date Modification</th>
            <th>Montant saisi</th>
            <th>Montant validé</th>
          </tr>
        </thead>
        <tbody>
          {filteredFrais.map((frais) => (
            <tr key={frais.id_frais}>
              <td>{frais.id_frais}</td>
              <td>{frais.id_etat}</td>
              <td>{frais.anneemois}</td>
              <td>{frais.id_visiteur}</td>
              <td>{frais.nbjustificatifs}</td>
              <td>{frais.datemodification}</td>
              <td></td>
              <td>{frais.montantvalide ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FraisTable;
