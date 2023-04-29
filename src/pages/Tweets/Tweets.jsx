import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
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

  return (
    <Section>
      <Container>
        <SectionTitle title="Tweets" />
        <Link to="/">Back</Link>
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
      </Container>
    </Section>
  );
};

export default Tweets;
