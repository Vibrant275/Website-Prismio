import React, {useEffect, useState} from "react";
import {BiChevronDown} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import CustomTextField from "@/components/CustomTextField";

const CountrySelector = ({idd, poke}) => {
    const [countries, setCountries] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState('-- Select your Country');
    const [dialogState, setDialogState] = useState(false);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,idd')
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
            });
    }, []);

    // if (poke || poke === false)
    //     if (dialogState)
    //         setDialogState(false)

    const handleSelect = (country) => {
        setDialogState(!dialogState)
        setSelected(country.name.common);
        setInputValue("");

        const countryCode = country.idd.root + country.idd.suffixes.at(0)
        idd(countryCode)
    };

    const filteredCountries = countries.filter((country) => {
        const commonName = country.name.common.toLowerCase();
        return commonName.includes(inputValue.toLowerCase());
    });

    return (
        <>
            <CustomTextField
                label="Country"
                inputType={'text'}
                value={selected}
                setDialogState={setDialogState}
                dialogState={dialogState}
                adornmentIcon={9}/>

            <div className="relative w-72 font-medium z-50 justify-self-center drop-shadow-2xl">
                {dialogState && (
                    <div
                        className="absolute top-0 left-0 w-full -mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded countrySearchRoot">
                        <div className="flex items-center px-2 bg-white">
                            <AiOutlineSearch size={20} className="text-gray-700"/>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Enter country name"
                                className="placeholder:text-gray-700 p-2 outline-none countrySearchText"
                            />
                        </div>
                        {filteredCountries.map((country, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(country)}
                                style={{listStyleType: "none"}}
                            >
                                <div className={`p-2 text-sm hover:bg-blue-500 hover:text-white ${
                                    country.name.common.toLowerCase() === selected.toLowerCase()
                                        ? "bg-sky-600 text-white"
                                        : ""
                                } countryItem`}>{country.name.common}</div>
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </>

    );
};

export default CountrySelector;
