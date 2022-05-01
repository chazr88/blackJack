import React, { useState } from 'react';
import Button from '@mui/material/Button'


const CustomButton = ({label, handleButton, disabled, hidden}) => {
  const styling = {
    display: hidden,
    backgroundColor: 'black',
    color: '#bda060',
    textTransform: 'none',
    fontSize: '17px',
    fontWeight: '700',
    width: '100px',
    height: '40px',
    border: '3px solid #780b00',
    margin: '0 10px 0 10px',
    fontStyle: 'italic',
  
    "&:hover": {
      backgroundColor: "#bda060",
      color: 'black'
    },
  }
  
  const [setBgColour] = useState("black")
    return (
      <Button
        disabled={disabled}
        onClick={handleButton}
      variant=''
      // onMouseLeave={() => setBgColour("black")}
      sx={styling}

      // sx={{

      // }}
      >
          {label}
      </Button>
    )
}

export default CustomButton