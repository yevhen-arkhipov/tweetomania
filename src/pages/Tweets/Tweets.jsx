import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container/Container";
import TweetsList from "../../components/TweetsList/TweetsList";
import TweetsItem from "../../components/TweetsItem/TweetsItem";

import { getAllTweets } from "../../services/api";

const Tweets = () => {
  const [tweetsCount, setTweetsCount] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderTweets = async () => {
      try {
        const data = await getAllTweets();

        setTweetsCount(data);
      } catch (error) {
        setError({ error });
      }
    };
    renderTweets();
  }, []);

  // console.log(tweetsCount);
  return (
    <section>
      <Container>
        <h1>Tweets</h1>
        {!error && (
          <TweetsList>
            {tweetsCount.map(({ id, name, tweets, followers, avatar }) => (
              <TweetsItem
                key={id}
                name={name}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
              />
            ))}
          </TweetsList>
        )}
        <Link to="/">Back</Link>
      </Container>
    </section>
  );
};

export default Tweets;
