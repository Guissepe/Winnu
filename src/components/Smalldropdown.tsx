import { useState } from "react";
import React from "react";
import {
    Box,
    Select,
  } from "@chakra-ui/react";
import { VscTriangleDown } from "react-icons/vsc";
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const SmallDropdown = (props: any) => {

const [value, setValue] = useState('values');
const styles = {
    background: '#1E1E1E' ,
    color: '#FFFFFF',
    _hover: {background: '#C9A538', color: '#C9A538'},

}

return(

    <Box width='519px'  background='#1E1E1E'>
        <Select
         onChange={(e) => setValue(e.target.value)}
         iconColor='#A3A3A3'
         icon={<VscTriangleDown />}
         background='#1E1E1E'
         textColor= '#ffffff'
         focusBorderColor='#C9A538'
         >
            <option color='#C9A538' style={styles} value={'select an option'}>Please select an option</option>
            <option style={styles} value={props.vl1}>{props.text1}</option>
            <option style={styles} value={props.vl2}>{props.text2}</option>
            <option style={styles} value={props.vl3}>{props.text3}</option>
            <option style={styles} value={props.vl4}>{props.text4}</option>
        </Select>
    </Box>

)
};
  export default SmallDropdown;
