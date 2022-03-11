import Story from "./Story";
import Post from "./Post";

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
        <Post
          profile="assets/img/meowed.svg"
          photo="assets/img/gato-telefone.svg"
          curtidasPhoto="assets/img/respondeai.svg"
          likes="150.254"
          likePerson="respondeAi"
        />
        <Post
          profile="assets/img/barked.svg"
          photo="assets/img/dog.svg"
          curtidasPhoto="assets/img/adorable_animals.svg"
          likes="99.159"
          likePerson="respondeAi"
        />
      </div>
    </div>
  );
}
