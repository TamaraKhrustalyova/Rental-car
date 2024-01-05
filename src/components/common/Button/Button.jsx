import { Btn } from './Button.styled';

export const Button = ({ props, children }) => {
    return <Btn {...props}>{children}</Btn>
};
