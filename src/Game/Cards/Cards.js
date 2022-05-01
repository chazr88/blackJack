import React from 'react';
import {styled} from '@mui/system';
import Card from '../Cards/Card';

const Wrapper = styled('div')({
    marginTop: '50px',
    marginBottom: '50px',
    display: 'flex',
});

const hidden = {
  backgroundImage: "url(/redandblackcard.jpg)",
  backgroundSize: "100% 100%",
}

const Cards = (props) => {
    const dealerTurn = props.dealerTurn
    const hand = props.cards
    const cards = Object.entries(hand).map(([key, value]) => {
        if(dealerTurn === false) {
          if(key === '0') {
            return <Card hidden={hidden} key={key}/>
          }else{
            if(value == undefined){
              return <Card key={key}></Card>
            }else{
              return <Card key={key} number={value.Value} suit={value.Suit}/>
            }

          }
        }else{
          if(value == undefined){
            return <Card key={key}></Card>
          }else{
            return <Card key={key} number={value.Value} suit={value.Suit}/>
          }
        }
        
    })
    return (
      <Wrapper>
        {cards}
      </Wrapper>
    )
}


export default Cards