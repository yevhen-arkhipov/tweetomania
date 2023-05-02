import { StyledFilter, StyledFilterOption } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <StyledFilter value={value} onChange={onChange}>
      <StyledFilterOption value="show all">Show all</StyledFilterOption>
      <StyledFilterOption value="follow">Follow</StyledFilterOption>
      <StyledFilterOption value="following">Following</StyledFilterOption>
    </StyledFilter>
  );
};

export default Filter;
