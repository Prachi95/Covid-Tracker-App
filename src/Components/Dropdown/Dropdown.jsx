import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountryData } from '../../api';
import styles from './Dropdown.module.css';


const Dropdown = ({countryChangeHandler}) => {

    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setCountryData(await getCountryData());
        }
        fetchCountries();
    }, [setCountryData]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={countryChangeHandler}>
                <option value='global'>Global</option>
                {
                    countryData ? 
                    countryData.map((item, index) => {
                        return (
                            <option key={index} value={item.country}>{item.country}</option>
                        )
                    }) : null
                }
            </NativeSelect>
        </FormControl>
    );
}

export default Dropdown;