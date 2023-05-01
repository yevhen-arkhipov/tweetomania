import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import HeroContent from "../../components/HeroContent/HeroContent";

import { TweetsLinkRapper, TweetsLink } from "./Home.styled";

const Home = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="TWEETOMANIA" />
        <HeroContent>
          <TweetsLinkRapper>
            <TweetsLink to="/tweets">Tweets</TweetsLink>
          </TweetsLinkRapper>
        </HeroContent>
      </Container>
    </Section>
  );
};

export default Home;
