import Sugestao from "./Sugestao";

export default function Sugestoes() {
  let sugestoes = [
    {
      nome: "bad.vibes.memes",
      imagem: "assets/img/bad.vibes.memes.svg",
    },
    {
      nome: "chibirdart",
      imagem: "assets/img/chibirdart.svg",
    },
    {
      nome: "razoesparaacreditar",
      imagem: "assets/img/razoesparaacreditar.svg",
    },
    {
      nome: "adorable_animals",
      imagem: "assets/img/adorable_animals.svg",
    },
    {
      nome: "smallcutecats",
      imagem: "assets/img/smallcutecats.svg",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => (
        <Sugestao imagem={sugestao.imagem} nome={sugestao.nome} />
      ))}
    </div>
  );
}
