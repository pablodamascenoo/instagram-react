import Story from "./Story";

export default function Esquerda() {
  return (
    <div className="esquerda">
      <div className="stories">
        <Story image="assets/img/9gag.svg" name="9gag" />

        <Story image="assets/img/meowed.svg" name="meowed" />

        <Story image="assets/img/barked.svg" name="barked" />

        <Story
          image="assets/img/nathanwpylestrangeplanet.svg"
          name="nathanwpylestrangeplanet"
        />

        <Story image="assets/img/wawawicomics.svg" name="wawawicomics" />

        <Story image="assets/img/respondeai.svg" name="respondeai" />

        <Story image="assets/img/filomoderna.svg" name="filomoderna" />

        <Story image="assets/img/memeriagourmet.svg" name="memeriagourmet" />

        <Story image="assets/img/m.svg" name="filomoderna" />

        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

      <div className="posts">
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src="assets/img/meowed.svg" alt="post" />
              meowed
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src="assets/img/gato-telefone.svg" alt="post" />
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

            <div className="curtidas">
              <img src="assets/img/respondeai.svg" alt="post" />
              <div className="texto">
                Curtido por <strong>respondeai</strong> e{" "}
                <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src="assets/img/barked.svg" alt="post" />
              barked
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src="assets/img/dog.svg" alt="post" />
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

            <div className="curtidas">
              <img src="assets/img/adorable_animals.svg" alt="story" />
              <div className="texto">
                Curtido por <strong>adorable_animals</strong> e{" "}
                <strong>outras 99.159 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
