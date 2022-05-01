import React from 'react';
import {styled} from '@mui/system';


const Wrapper = styled('div')({
  height: 'auto',
  margin: '5% 0 5% 0'


});
const Title = (props) => {
  return (
    <Wrapper style={{color: '#bda060'}}>
      {props.label}
    </Wrapper>
  )
}

export default Title