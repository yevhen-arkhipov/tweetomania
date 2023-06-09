import { useState, useEffect } from 'react';

import logoImage from '../../images/logo.png';
import tweetsImage from '../../images/tweets-image.png';
import imageLine from '../../images/image-line.png';
import imageEclipse from '../../images/image-eclipse.png';

import updateLocalStorage from '../../utils/updateLocalStorage';

import {
  StylesTweetsItem,
  LogoImageWrapper,
  LogoImage,
  TweetsImageWrapper,
  TweetsImage,
  NameTextWrapper,
  TweetsContentWrapper,
  ImageLine,
  ImageWrapper,
  Image,
  ImageEclipse,
  DescriptionWrapper,
  Text,
  FollowButton,
} from './TweetsItem.styled';

const TweetsItem = ({ name, tweets, followers, avatar }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleStorageChange = event => {
      if (event.key === name) {
        const savedState = JSON.parse(event.newValue);
        if (savedState) {
          setIsClicked(savedState.isClicked);
          setFollowersCount(savedState.followersCount);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [name]);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem(name));
    if (savedState) {
      setIsClicked(savedState.isClicked);
      setFollowersCount(savedState.followersCount);
    }
  }, [name]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleFollowClick = () => {
    setIsClicked(!isClicked);
    setFollowersCount(isClicked ? followersCount - 1 : followersCount + 1);
    updateLocalStorage({ isClicked, followersCount, name });
  };

  return (
    <StylesTweetsItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hovering={isHovering}
    >
      <LogoImageWrapper>
        <LogoImage src={logoImage} alt="logoImage" />
      </LogoImageWrapper>
      <TweetsImageWrapper>
        <TweetsImage src={tweetsImage} alt="tweetsImage" />
      </TweetsImageWrapper>
      {isHovering && (
        <NameTextWrapper>
          <p>{name}</p>
        </NameTextWrapper>
      )}
      <TweetsContentWrapper>
        <ImageWrapper>
          <Image src={avatar} alt={name} />
          <ImageEclipse src={imageEclipse} alt={imageEclipse} />
        </ImageWrapper>
        <ImageLine src={imageLine} alt={imageLine} />
        <DescriptionWrapper>
          <Text>{tweets.toLocaleString('en-US')} TWEETS</Text>
          <Text>{followersCount.toLocaleString('en-US')} FOLLOWERS</Text>
        </DescriptionWrapper>
        <FollowButton isClicked={isClicked} onClick={handleFollowClick}>
          {isClicked ? 'Following' : 'Follow'}
        </FollowButton>
      </TweetsContentWrapper>
    </StylesTweetsItem>
  );
};

export default TweetsItem;
