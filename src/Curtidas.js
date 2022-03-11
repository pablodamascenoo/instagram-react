export default function Curtidas(props) {
  return (
    <div className="curtidas">
      <img src={props.image} alt="post" />
      <div className="texto">
        Curtido por <strong>{props.likePerson}</strong> e{" "}
        <strong>outras {props.likes} pessoas</strong>
      </div>
    </div>
  );
}
