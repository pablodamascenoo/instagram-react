import Usuario from "./Usuario";

export default function Sugestao(props) {
  const { imagem, nome, subNome } = props;
  return (
    <div className="sugestao">
      <Usuario imagem={imagem} nome={nome} subNome={subNome} />
      <div className="seguir">Seguir</div>
    </div>
  );
}
