import Curtidas from "./Curtidas";

export default function Post(props) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.profile} alt="post" />
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.photo} alt="post" />
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
        <Curtidas
          image={props.curtidasPhoto}
          likes={props.likes}
          likePerson={props.likePerson}
        />
      </div>
    </div>
  );
}
