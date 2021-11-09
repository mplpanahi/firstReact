import Bmi from "./Bmi";

export default function User(props) {
  return (
    <div class="container">
      <img class="image" src={props.image} alt={props.lastName} />
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <Bmi weight={props.weight} height={props.height} />
    </div>
  );
}
