import { useState } from "react";
import React from "react";
import {
    Box,
    Select,
    Text,
    Button,
    color,
    background,
  } from "@chakra-ui/react";

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  import { VscTriangleDown } from "react-icons/vsc";



const Dropdown = (props: any) => {

const [value, setValue] = useState('values');
const styles = {
    background: '#1E1E1E' ,
    color: '#FFFFFF',
    _hover: {background: '#C9A538', color: '#C9A538'},

}


return(

    <Box background='#1E1E1E'>

        <Select
         onChange={(e) => setValue(e.target.value)}
         iconSize=''
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
            <option style={styles} value={props.vl5}>{props.text5}</option>
            <option style={styles} value={props.vl6}>{props.text6}</option>
            <option style={styles} value={props.vl7}>{props.text7}</option>
            <option style={styles} value={props.vl8}>{props.text8}</option>
            <option style={styles} value={props.vl9}>{props.text9}</option>
        </Select>
        <Text color='white'>
            {value}
        </Text>
    </Box>

)
};
  export default Dropdown;
