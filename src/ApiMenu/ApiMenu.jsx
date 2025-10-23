import React, { useEffect, useState } from "react";
import { Api } from "../Api/Api"; 
import "../MenuComponent/MenuComponent.css";

export default function MenuComponent() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Api();
        setMeals(data.meals); 
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <h2>Cargando...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="containerMeals">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="mealCard">
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>ID: {meal.idMeal}</p>
        </div>
      ))}
    </div>
  );
}
