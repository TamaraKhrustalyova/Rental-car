import { Button } from "../common/Button/Button";
import { Select } from '../../components/common/Select/Select';
import carlist from '../../utils/makes.json';
import { Box } from './FilterSection.styled';

export const FilterSection = () => {
  const carModelsList = carlist.map((i) => <option key={i} style={{ color: "rgba(18, 20, 23, 0.2)", fontSize: "16px" }} value={i}>{i} </option>)
  return (
    <Box>
      <Select
        name='Car brand'
      >
        <option style={{ color: "rgba(18, 20, 23, 0.2)", fontSize: "16px" }} value="0">-- Pick the car --</option>
        {carModelsList}
      </Select>

      <Button>Search</Button>
    </Box>
  )
};