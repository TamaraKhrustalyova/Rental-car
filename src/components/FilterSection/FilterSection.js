import { Button } from "../common/Button/Button";
import { Filter } from '../../components/common/Select/Select';
import { Box } from './FilterSection.styled';
import { options } from '../../data';
import { CreatePrice } from "../../utils/createPrice";

export const FilterSection = () => {

  return (
    <Box>
      <Filter 
        name='Car brand'
        placeholder='Enter the text'
        options={options}
        width= '224px'
      />
      
       <Filter 
          name='Price/ 1 hour'
          placeholder='To $'
          options={CreatePrice(1000)}
          width='125px'
      />
      
      

      <Button
        style={{ width: 136, height: 48, marginTop: '15px' }}
      >
        Search
      </Button>
    </Box>
  )
};