export default function Esquerda() {
  return (
    <div className="esquerda">
      <div className="stories">
        <div className="story">
          <div className="imagem">
            <img src="assets/img/9gag.svg" alt="story" />
          </div>
          <div className="usuario">9gag</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/meowed.svg" alt="story" />
          </div>
          <div className="usuario">meowed</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/barked.svg" alt="story" />
          </div>
          <div className="usuario">barked</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/nathanwpylestrangeplanet.svg" alt="story" />
          </div>
          <div className="usuario">nathanwpylestrangeplanet</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/wawawicomics.svg" alt="story" />
          </div>
          <div className="usuario">wawawicomics</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/respondeai.svg" alt="story" />
          </div>
          <div className="usuario">respondeai</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/filomoderna.svg" alt="story" />
          </div>
          <div className="usuario">filomoderna</div>
        </div>

        <div className="story">
          <div className="imagem">
            <img src="assets/img/memeriagourmet.svg" alt="story" />
          </div>
          <div className="usuario">memeriagourmet</div>
        </div>

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
