import Curtidas from "./Curtidas";

export default function Post(props) {
  const { profile, photo, curtidasPhoto, likes, likePerson } = props;
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={profile} alt="post" />
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={photo} alt="post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <Curtidas image={curtidasPhoto} likes={likes} likePerson={likePerson} />
      </div>
    </div>
  );
}
