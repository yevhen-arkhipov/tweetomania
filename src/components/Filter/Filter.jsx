import { StyledFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <StyledFilter value={value} onChange={onChange}>
      <option value="show all">Show all</option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </StyledFilter>
  );
};

export default Filter;
