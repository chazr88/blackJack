import React from 'react';
import {styled} from '@mui/system';



const GameInfo = (props) => {
    const Wrapper = styled('div')({
        height: 'auto',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '5% 0 5% 0'

    });
    return (
        <Wrapper>
            {props.info}
            {props.centerDetails}
        </Wrapper>
        
    )
}

export default GameInfo