import CardAnimal from "../CardAnimal/CardAnimal";
import "./ListAnimal.css";
function ListAnimal() {
  return (
    <>
      <label>List Animal</label>
      <div className="list-animal">
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
      </div>
    </>
  );
}
export default ListAnimal;
