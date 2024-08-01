import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/2013672/pexels-photo-2013672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Post img="https://images.pexels.com/photos/26997931/pexels-photo-26997931/free-photo-of-a-woman-in-a-white-dress-holding-flowers-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
      <Post img="https://images.pexels.com/photos/26847863/pexels-photo-26847863/free-photo-of-aesthetic-home-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post img="https://images.pexels.com/photos/27430344/pexels-photo-27430344/free-photo-of-santa-monica-pier-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post img="https://images.pexels.com/photos/18738496/pexels-photo-18738496/free-photo-of-windmill-lausanne-restaurant-in-tagaytay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </div>
  );
}