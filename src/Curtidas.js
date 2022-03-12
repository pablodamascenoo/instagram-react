export default function Curtidas(props) {
  const { image, likePerson, likes } = props;
  return (
    <div className="curtidas">
      <img src={image} alt="post" />
      <div className="texto">
        Curtido por <strong>{likePerson}</strong> e{" "}
        <strong>outras {likes} pessoas</strong>
      </div>
    </div>
  );
}
