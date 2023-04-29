import { Link } from "react-router-dom";

import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="Home" />
        <Link to="/tweets">Click</Link>
      </Container>
    </Section>
  );
};

export default Home;
