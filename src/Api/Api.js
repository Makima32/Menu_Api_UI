export async function Api(categoria = "Seafood") {
  const urlBase = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

  const res = await fetch(urlBase);

  if (!res.ok) {
    throw new Error("No se ha podido cargar los datos de la API: " + res.status);
  }

  return res.json();
}
