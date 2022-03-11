import Stories from "./Stories";
import Post from "./Post";

export default function Esquerda() {
  return (
    <div className="esquerda">
      <Stories />
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
