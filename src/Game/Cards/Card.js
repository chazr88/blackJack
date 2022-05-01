import React from 'react';
import {styled} from '@mui/system';

const Wrapper = styled('div')({
    display: 'flex',
    height: '250px',
    width: '175px',
    borderRadius: '10px',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    border: '5px solid black',
});

const BottomNumber = styled('div')({
    fontSize: '2.25rem',
    marginLeft: '70%',
    transform: 'rotate(180deg)',
})

const TopNumber = styled('div')({
    fontSize: '2.25rem',
    marginRight: '70%',

})

const Suit = styled('div')({
    fontSize: '4rem',
    margin: '20%',
})

const Card = (props) => {

  const suitBlack = () => {
    if(props.suit === '♠'){
      return "black"
    } else if (props.suit === '♣') {
      return "black"
    } else {
      return "red"
    }
  }

    return (
      <Wrapper style={props.hidden}>
          <TopNumber style={{color: suitBlack()}}>
            {props.number}
          </TopNumber>
          <Suit style={{color: suitBlack()}}>
            {props.suit}
          </Suit>
          <BottomNumber style={{color: suitBlack()}}>
          {props.number}
          </BottomNumber>
      </Wrapper>
    )
}

export default Card