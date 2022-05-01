import React from 'react';
import {styled} from '@mui/system';
import Title from './Title';
import GameInfo from './GameInfo';
import BetButtons from './BetButtons';


const Box = (props) => {
    const Wrapper = styled('div')({
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.7,
        textTransform: 'none',
        fontSize: '17px',
        fontWeight: '700',
        width: '500px',
        height: '250px',
        border: '3px solid #bda060',
        margin: '0 50px 0 50px',
        fontStyle: 'italic',
    });
    
    return (
        <Wrapper>
            <Title label={props.label}></Title>
            <GameInfo info={props.info}></GameInfo>
            <GameInfo centerDetails={props.centerDetails}></GameInfo>
            <BetButtons 
            disabled={props.disabled}
            betOne={props.betOne}
            betFive={props.betFive}
            betTen={props.betTen}
            hidden={props.hidden}/>
        </Wrapper>
  )
}

export default Box