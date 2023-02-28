import { useState } from "react";
import React from "react";
import { theme } from "../styles/theme";
import {
    Box,
    Select,
  } from "@chakra-ui/react";
import { VscTriangleDown } from "react-icons/vsc";

const BigDropdown = (props: any) => {

const [value, setValue] = useState('values');
const styles = {
    background: '#1E1E1E' ,
    color: 'grey01',
    _hover: {background: 'grey01', color: 'Yellow02'},
}

return(

    <Box width='519px'  background='grey01'>
        <Select
         onChange={(e) => setValue(e.target.value)}
         iconColor='Lightgrey'
         icon={<VscTriangleDown />}
         background='grey01'
         textColor= 'white'
         focusBorderColor='Yellow02'
         >
            <option color='grey01' style={styles} value={'select an option'}>Please select an option</option>
            <option style={styles} value={props.vl1}>{props.text1}</option>
            <option style={styles} value={props.vl2}>{props.text2}</option>
            <option style={styles} value={props.vl3}>{props.text3}</option>
            <option style={styles} value={props.vl4}>{props.text4}</option>
            <option style={styles} value={props.vl5}>{props.text5}</option>
            <option style={styles} value={props.vl6}>{props.text6}</option>
            <option style={styles} value={props.vl7}>{props.text7}</option>
            <option style={styles} value={props.vl8}>{props.text8}</option>
            <option style={styles} value={props.vl9}>{props.text9}</option>
        </Select>
    </Box>

)
};
  export default BigDropdown;
