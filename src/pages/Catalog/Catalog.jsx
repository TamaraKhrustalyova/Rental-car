import { useEffect } from "react";
import { fetchAdverts } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../redux/slice";
import { CarCard } from "../../components/CarCard/CarCard";
// import { nanoid } from "@reduxjs/toolkit";
import { Loader } from "../../components/common/Loader/Loader";
import { Box} from "./Catalog.styled";
import { FilterSection } from "../../components/FilterSection/FilterSection";


const Catalog = () => {
  const dispatch = useDispatch();
  const { advertsList, isLoading, error } = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <> 
      <FilterSection/>

      {isLoading && <Loader />}
      {error && <b>{error}</b>}
      {advertsList.length > 0 && 
        <Box>
          {advertsList.map((advert) => 
            <CarCard
              key={advert.id}
              {...advert}
            /> 
          )}
      </Box>
      }
    </>
  );
};

export default Catalog;