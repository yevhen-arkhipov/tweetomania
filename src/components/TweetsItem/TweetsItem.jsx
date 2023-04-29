import { useState } from "react";

import {
  StylesTweetsItem,
  ImageWrapper,
  Image,
  DescriptionWrapper,
  NameTextWrapper,
} from "./TweetsItem.styled";

const TweetsItem = ({ name, tweets, followers, avatar }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <StylesTweetsItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <p>{tweets} TWEETS</p>
        <p>{followers} FOLLOWERS</p>
      </DescriptionWrapper>
    </StylesTweetsItem>
  );
};

export default TweetsItem;
