import React from 'react';
import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';

const Notifications = ({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent
}) => {
  return (
    <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={showAlertMessage}
        onClose={closeAlertMessage}
        autoHideDuration={6000}
    >
        <Alert severity='info'>
            {alertMessageContent}
        </Alert>
    </Snackbar>
  )
}

export default Notifications