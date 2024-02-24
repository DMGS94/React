import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  //filter for chemists
  const chemist = people.filter((person) => person.profession === "chemist");
  //filter data for non chemists
  const notChemist = people.filter((person) => person.profession !== "chemist");

  const listChemist = chemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const listEvelse = notChemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{listChemist}</ul>
      <h1>Everyone else</h1>
      <ul>{listEvelse}</ul>
    </article>
  );
}
