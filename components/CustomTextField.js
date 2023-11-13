import React, {useState, useRef} from 'react';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import AtIcon from '@/public/icons/AtIcon'
import 'typeface-poppins';
import PasswordIcon from "@/public/icons/PasswordIcon";
import FileIcon from "@/public/icons/FileIcon";
import calenderIcon from "@/public/icons/Calender_Grey.png";
import Image from "next/image";

const CustomTextFieldWrapper = styled(TextField)(({theme, focused}) => ({
    '& .MuiInputBase-root': {
        background: focused ? '#ffffff' : '#fafafa',
        width: '350px',
        '& input': {
            width: '300px', // Adjust the width value as per your requirements
        },
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '7px',
        '& fieldset': {
            borderColor: '#dedede',
        },
        '&:hover fieldset': {
            borderColor: '#9a9a9a',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0099ff',
        },
    },
    '& .MuiOutlinedInput-input': {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'normal',
        color: focused ? '#212121' : '#464646',
        fontSize: 14
    },
    '& .MuiInputLabel-root': {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'normal',
    },

}));

const CustomTextField = ({
                             label,
                             onChange,
                             ref,
                             inputType,
                             adornmentIcon,
                             cc,
                             focusChange,
                             dialogState,
                             setDialogState,
                             value
                         }) => {

    const [focused, setFocused] = useState(false);
    const idd = (cc === '') ? cc : `${cc} `;

    const handleFocus = () => {
        setFocused(true);
        if (adornmentIcon === 2)
            focusChange(true);
    };

    const handleBlur = () => {
        setFocused(false);
        if (adornmentIcon === 2)
            focusChange(false);
    };

    const handleChange = (event) => {
        // Call the provided onChange prop if it exists
        if (onChange) {
            onChange(event.target.value);
        }
    };

    const handleNumberChange = (event) => {
        const inputValue = event.target.value;

        const regex = /^[0-9\b]+$/;

        if (inputValue === "" || regex.test(inputValue)) {
            if (onChange) {
                onChange(inputValue);
            }
        }
    };

    let renderedAdornmentIcon = null;
    const color = focused ? '#0099ff' : '#ababab';

    switch (adornmentIcon) {
        case 1:
            renderedAdornmentIcon = <AtIcon color={color}/>;
            break;
        case 2:
            renderedAdornmentIcon = <PasswordIcon color={color}/>;
            break;
        case 4:
            renderedAdornmentIcon = <PasswordIcon color={color}/>;
            break;
        case 7:
            renderedAdornmentIcon = <Image src={calenderIcon} alt={''} width={20} height={20}/>
            break;
        case 9:
            renderedAdornmentIcon = <FileIcon color={color}/>;
            break;
        default:
            renderedAdornmentIcon = null;
            break;
    }

    if (adornmentIcon === 7) {
        return (
            <CustomTextFieldWrapper
                label={label}
                focused={focused}
                type={inputType}
                value={value}
                ref={ref}
                onBlur={handleBlur}
                InputProps={{
                    endAdornment: <div className={'custom-country-selector'}
                                       onClick={() => setDialogState(!dialogState)}>{renderedAdornmentIcon}</div>
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    } else if (adornmentIcon === 3) {
        return (

            <CustomTextFieldWrapper
                label={label}
                focused={focused}
                type={inputType}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleNumberChange}
                InputProps={{endAdornment: renderedAdornmentIcon, startAdornment: `${idd}`}}
            />

        );
    } else if (adornmentIcon === 9) {
        return (
            <CustomTextFieldWrapper
                label={label}
                focused={focused}
                type={inputType}
                value={value}
                onBlur={handleBlur}
                InputProps={{
                    endAdornment: <div className={'custom-country-selector'}
                                       onClick={() => setDialogState(!dialogState)}>{renderedAdornmentIcon}</div>
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                // disabled
            />
        );
    } else {
        return (
            <CustomTextFieldWrapper
                label={label}
                focused={focused}
                type={inputType}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={
                    renderedAdornmentIcon ?
                        {endAdornment: renderedAdornmentIcon} : null
                }
            />
        );
    }
};
export default CustomTextField;