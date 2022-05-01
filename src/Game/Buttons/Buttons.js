import React, { Component } from 'react';
import {styled} from '@mui/system';
import CustomButton from './CustomButton';
import Box from '../DetailsBox/Box';

const Wrapper = styled('div')({
  width: '100%',
  height: '100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
});

const hidden = "none"

const Buttons = (props) => {
    return (
      <Wrapper>
          <Box hidden={hidden} centerDetails={props.endGameMessage}  label="Game Info" info={`Card Total: ${props.playerTotal}`}></Box>
          <CustomButton handleButton={props.handleDealCards} label="Deal"></CustomButton>
          <CustomButton disabled={props.disabled} handleButton={props.handleHit} label="Hit"></CustomButton>
          <CustomButton disabled={props.disabled} handleButton={props.handleDealerTurn} label="Stay"></CustomButton>
          <Box 
          disabled={props.disabled}
          label="Bet Info" 
          centerDetails={`Current Bet: $${props.currentBet}`} 
          info={`Money: $${props.totalMoney}`}
          betOne={props.betOne}
          betFive={props.betFive}
          betTen={props.betTen}
          >
          </Box>
      </Wrapper>
    )
}

export default Buttons