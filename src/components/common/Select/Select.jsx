import { SelectInput, Label, Box } from './Select.styled';

export const Select = ({ children, name}) => {
    return (
        <Box>
            <Label for={name}>{name}</Label>
            <SelectInput>{children}</SelectInput>
        </Box>
    );
};

