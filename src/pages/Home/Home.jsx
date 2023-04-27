import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <h1>Home</h1>
        <Link to="/tweets">Click</Link>
      </div>
    </section>
  );
};

export default Home;
