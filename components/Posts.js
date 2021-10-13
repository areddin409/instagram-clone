import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'areddin409',
    userImg: 'http://links.papareact.com/3ke',
    img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    caption: 'This is DOPE!'
  },
  {
    id: '1234',
    username: 'areddin409',
    userImg: 'http://links.papareact.com/3ke',
    img: 'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    caption: 'This is DOPE!'
  },
  {
    id: '12345',
    username: 'areddin409',
    userImg: 'http://links.papareact.com/3ke',
    img: 'https://images.unsplash.com/photo-1603290989063-b255b11b2525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caption: 'This is DOPE!'
  }
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
