import React from 'react';
import {styled} from '@mui/system';
import Cards from '../Cards/Cards';

const Wrapper = styled('div')({
    height: 'auto',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignContent: 'center'

});

const Hand = (props) => {
    return (
      <Wrapper>
          <Cards dealerTurn={props.dealerTurn} cards={props.hand}/>
      </Wrapper>
    )
}
export default Hand