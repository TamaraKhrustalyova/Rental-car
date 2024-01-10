import {  Box, Label } from './Select.styled';
import Select from 'react-select';

export const Filter = ({
    name = '',
    placeholder = '',
    width = '200px',
    isFocused = false,
    options,
}) => {
    return (
        <Box>
            <Label>{name}</Label>
            <Select
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        border: 'none',
                        borderRadius: 14,
                        width: width,
                        height: 48,
                        backgroundColor: 'rgba(247, 247, 251, 1)',
                        
                    }),
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        color: 'rgba(18, 20, 23, 0.2)',
                        fontSize: '16px',
                        borderRadius: 14,
                        padding: '14px 8px 14px 18px',
                        
                    }),
                    placeholder: (baseStyles) => ({
                        ...baseStyles,
                        fontSize: '18px',
                        color: 'rgba(18, 20, 23, 1)',
                    }),
                    dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        transform: isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 250ms linear',
                        color: 'rgba(18, 20, 23, 1)',
                        marginRight: 8,
                        
                    }),
                    indicatorSeparator: (baseStyles) => ({
                    }),
                }}
                options={options}
                placeholder={placeholder}          
            />
        </Box>

)};
    