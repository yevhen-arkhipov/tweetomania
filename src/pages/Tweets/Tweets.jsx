import { useEffect, useState } from 'react';
import jump from 'jump.js';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Filter from '../../components/Filter/Filter';
import TweetsList from '../../components/TweetsList/TweetsList';
import TweetsItem from '../../components/TweetsItem/TweetsItem';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton';

import { getAllTweets } from '../../services/api';

import {
  MenuWrapper,
  MenuLink,
  MenuLinkIcon,
  LoadMoreButtonWrapper,
  LoadMoreButton,
} from './Tweets.styled';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetsCount, setTweetsCount] = useState(3);
  const [filterValue, setFilterValue] = useState('show all');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const data = await getAllTweets();
        setTweets(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchTweets();
  }, []);

  let filteredTweets = tweets.filter(({ name }) => {
    const savedState = JSON.parse(localStorage.getItem(name)) || {};
    if (filterValue === 'following') {
      return savedState.isClicked;
    } else if (filterValue === 'follow') {
      return !savedState.isClicked;
    } else {
      return savedState;
    }
  });

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  const handleLoadMore = () => {
    jump(770);
    setTweetsCount(tweetsCount + 3);
  };

  return (
    <Section>
      <Container>
        <SectionTitle title="Tweets" />
        <MenuWrapper>
          <MenuLink to="/">
            <MenuLinkIcon />
            Back
          </MenuLink>
          <Filter value={filterValue} onChange={handleFilterChange} />
        </MenuWrapper>
        {!error && (
          <TweetsList>
            {filteredTweets
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
        <LoadMoreButtonWrapper>
          {tweetsCount < filteredTweets.length && (
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          )}
        </LoadMoreButtonWrapper>
        <ScrollUpButton />
      </Container>
    </Section>
  );
};

export default Tweets;
