export default function Story(props) {
  const { image, name } = props;
  return (
    <div className="story">
      <div className="imagem">
        <img src={image} alt="story" />
      </div>
      <div className="usuario">{name}</div>
    </div>
  );
}
