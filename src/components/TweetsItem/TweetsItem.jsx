import { useState } from "react";

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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleFollowClick = () => {
    setIsClicked(!isClicked);
    setFollowersCount(followersCount + (followersCount === followers ? 1 : -1));
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
        {followersCount === followers ? "Follow" : "Following"}
      </FollowButton>
    </StylesTweetsItem>
  );
};

export default TweetsItem;
