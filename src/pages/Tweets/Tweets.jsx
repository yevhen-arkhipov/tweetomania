import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jump from "jump.js";

import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TweetsList from "../../components/TweetsList/TweetsList";
import TweetsItem from "../../components/TweetsItem/TweetsItem";

import { getAllTweets } from "../../services/api";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetsCount, setTweetsCount] = useState(3);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const data = await getAllTweets();
        setTweets(data);
      } catch (error) {
        setError({ error });
      }
    };
    fetchTweets();
  }, []);

  const handleLoadMore = () => {
    jump(850);
    setTweetsCount(tweetsCount + 3);
  };

  return (
    <Section>
      <Container>
        <SectionTitle title="Tweets" />
        <Link to="/">Back</Link>
        {!error && (
          <TweetsList>
            {tweets
              .slice(0, tweetsCount)
              .map(({ id, name, tweets, followers, avatar }) => (
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
        {tweetsCount < tweets.length && (
          <button onClick={handleLoadMore}>Load more</button>
        )}
        <ScrollUpButton />
      </Container>
    </Section>
  );
};

export default Tweets;
