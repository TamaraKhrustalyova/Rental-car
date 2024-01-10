import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
`;

 export const Label = styled.label`
    font-size: 14px;
    color: rgba(138, 138, 137, 1);
    margin-bottom: 8px;
`;

export const InputFrom = styled.input`
  border-color: transparent;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  width: 160px;
  height: 48px;
  background-color: rgba(247, 247, 251, 1);
  border-right-width: 1px;
  border-right-color: rgba(207, 207, 215, 1);
  padding-left: 14px;

    &::placeholder {
      font-size: 18px;
      color: rgba(18, 20, 23, 1);
    }
`;

export const InputTo = styled.input`
  border-color: transparent;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  width: 160px;
  height: 48px;
  background-color: rgba(247, 247, 251, 1);
  padding-left: 14px;

    &::placeholder {
      font-size: 18px;
      color: rgba(18, 20, 23, 1);
    }
`;