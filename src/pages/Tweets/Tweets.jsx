import { Link } from "react-router-dom";

import TweetsList from "../../components/TweetsList/TweetsList";

const Tweets = () => {
  return (
    <section>
      <div>
        <h1>Tweets</h1>
        <TweetsList></TweetsList>
        <Link to="/">Back</Link>
      </div>
    </section>
  );
};

export default Tweets;
