import React, { useEffect, useState } from "react";
import { Api } from "../Api/Api";
import "../MenuComponent/MenuComponent.css";

export default function ApiPrueba({
  Plato1,
  plato2,
  plato3,
  plato4,
  plato5,
  plato6,
  plato7,
  plato8,
  plato9,
  tipoPlato,
}) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const selectedIds = [
    Plato1,
    plato2,
    plato3,
    plato4,
    plato5,
    plato6,
    plato7,
    plato8,
    plato9,
  ];

  useEffect(() => {
    async function GetMenu() {
      try {
        const data = await Api(tipoPlato);
        setMeals(data.meals);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    GetMenu();
  }, []);

  if (isLoading) return <h2>Cargando...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="Menu_div">
      {meals
        .filter((meal) => selectedIds.includes(meal.idMeal))
        .map((meal) => {
          const precio = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
          return (
            <div key={meal.idMeal} className="mealCard">
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>Precio: ${precio}</h3>
            </div>
          );
        })}
    </div>
  );
}
