import { Link } from "react-router-dom";

import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="TWEETOMANIA" />
        <Link to="/tweets">Tweets</Link>
      </Container>
    </Section>
  );
};

export default Home;
