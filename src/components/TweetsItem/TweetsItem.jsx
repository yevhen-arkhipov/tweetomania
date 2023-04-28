import {
  StylesTweetsItem,
  CardWrapper,
  ImageWrapper,
  Image,
  DescriptionWrapper,
} from "./TweetsItem.styled";

const TweetsItem = ({ name, tweets, followers, avatar }) => {
  return (
    <StylesTweetsItem>
      <CardWrapper>
        <ImageWrapper>
          <Image src={avatar} alt={name} />
        </ImageWrapper>
        <DescriptionWrapper>
          <h2>{name}</h2>
          <p>{tweets} TWEETS</p>
          <p>{followers} FOLLOWERS</p>
        </DescriptionWrapper>
      </CardWrapper>
    </StylesTweetsItem>
  );
};

export default TweetsItem;
