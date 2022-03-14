export default function Usuario(props) {
  const { imagem, nome, subNome } = props;
  let texto;

  if (subNome === undefined) {
    texto = (
      <>
        <div className="nome">{nome}</div>
        <div className="razao">Segue você</div>
      </>
    );
  } else {
    texto = (
      <>
        <strong>{nome}</strong>
        {subNome}
      </>
    );
  }
  return (
    <div className="usuario">
      <img src={imagem} alt="person" />
      <div className="texto">{texto}</div>
    </div>
  );
}
