import { useState, useEffect } from "react";

import {
  StylesTweetsItem,
  NameTextWrapper,
  ImageWrapper,
  Image,
  DescriptionWrapper,
  Text,
  FollowButton,
} from "./TweetsItem.styled";

const TweetsItem = ({ name, tweets, followers, avatar }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(name, JSON.stringify({ isClicked, followersCount }));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isClicked, followersCount, name]);

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
  };

  return (
    <StylesTweetsItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hovering={isHovering}
    >
      {isHovering && (
        <NameTextWrapper>
          <p>{name}</p>
        </NameTextWrapper>
      )}
      <ImageWrapper>
        <Image src={avatar} alt={name} />
      </ImageWrapper>
      <DescriptionWrapper>
        <Text>{tweets.toLocaleString("en-US")} TWEETS</Text>
        <Text>{followersCount.toLocaleString("en-US")} FOLLOWERS</Text>
      </DescriptionWrapper>
      <FollowButton isClicked={isClicked} onClick={handleFollowClick}>
        {isClicked ? "Following" : "Follow"}
      </FollowButton>
    </StylesTweetsItem>
  );
};

export default TweetsItem;
