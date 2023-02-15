import { useState } from "react";
import React from "react";
import {
    Box,
    Select,
  } from "@chakra-ui/react";
import { VscTriangleDown } from "react-icons/vsc";

const SmallDropdown = (props: any) => {

const [value, setValue] = useState('values');
const styles = {
    background: '#1E1E1E' ,
    color: 'white',
    _hover: {background: 'Yellow02', color: 'Yellow02'},
}
return(

    <Box width='519px'  bg={'grey01'}>
        <Select
         onChange={(e) => setValue(e.target.value)}
         iconColor='Lightgrey'
         icon={<VscTriangleDown />}
         backgroundColor={'grey01'}
         bg={'grey01'}
         textColor= 'white'
         focusBorderColor='Yellow02'
         >
            <option color='grey01' style={styles} value={'select an option'}>Please select an option</option>
            <option style={styles} value={props.vl1}>{props.text1}</option>
            <option style={styles} value={props.vl2}>{props.text2}</option>
            <option style={styles} value={props.vl3}>{props.text3}</option>
            <option style={styles} value={props.vl4}>{props.text4}</option>
        </Select>
    </Box>

)
};
  export default SmallDropdown;
