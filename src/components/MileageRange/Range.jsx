import { Wrapper, Label, InputFrom, InputTo } from "./Range.styled";

export const MileageRangeSearch = () => {

  return (
    <Wrapper>
      <Label htmlFor="from">Сar mileage / km</Label>
      <div>
        < InputFrom id='from' placeholder="From" />
        < InputTo id='to' placeholder="To" />
      </div>
    </Wrapper>
  )
};