import { Btn } from './Button.styled';

export const Button = ({ style, children }) => {
    return <Btn style={style}>{children}</Btn>
};
