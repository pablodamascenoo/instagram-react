import Post from "./Post";
export default function Posts() {
  let posts = [
    {
      profile: "assets/img/meowed.svg",
      photo: "assets/img/gato-telefone.svg",
      curtidasPhoto: "assets/img/respondeai.svg",
      likes: "150.254",
      likePerson: "respondeAi",
    },
    {
      profile: "assets/img/barked.svg",
      photo: "assets/img/dog.svg",
      curtidasPhoto: "assets/img/adorable_animals.svg",
      likes: "99.159",
      likePerson: "adorable animals",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post
            profile={post.profile}
            photo={post.photo}
            curtidasPhoto={post.curtidasPhoto}
            likes={post.likes}
            likePerson={post.likePerson}
          />
        );
      })}
    </div>
  );
}
