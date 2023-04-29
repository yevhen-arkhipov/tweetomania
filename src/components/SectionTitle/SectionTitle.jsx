import { TitleWrapper, TitleText } from "./SectionTitle.styled";

const SectionTitle = ({ title }) => {
  return <TitleWrapper>{title && <TitleText>{title}</TitleText>}</TitleWrapper>;
};

export default SectionTitle;
