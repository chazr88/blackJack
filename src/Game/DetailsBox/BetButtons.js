import React from 'react';
import {styled} from '@mui/system';
import CustomButton from '../Buttons/CustomButton';

const Wrapper = styled('div')({
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  });
  

const BetButtons = (props) => {
  return (
    <Wrapper>
        <CustomButton disabled={props.disabled} handleButton={props.betOne} label="$1" hidden={props.hidden}></CustomButton>
        <CustomButton disabled={props.disabled} handleButton={props.betFive} label="$5" hidden={props.hidden}></CustomButton>
        <CustomButton disabled={props.disabled} handleButton={props.betTen} label="$10" hidden={props.hidden}></CustomButton>
    </Wrapper>
  )
}

export default BetButtons