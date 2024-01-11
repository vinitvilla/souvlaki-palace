import { Snackbar } from '@mui/material';
import React from 'react'

const ToastComponent = ({ isOpen, message, onClose, severity, autoHideDuration }) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      severity={severity}
      autoHideDuration={autoHideDuration || 3000}
      sx={{ width: '100%' }}
      key={message}
    />
  )
}

export default ToastComponent