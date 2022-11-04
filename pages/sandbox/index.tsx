/* eslint-disable react/jsx-no-bind */
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface SnackbarMessage {
  message: string;
  key: number;
}

const SandBox = () => {
  const [open, setOpen] = React.useState(false);
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
  const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const popUpMessage = (message: string) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    setOpen(true);
  };

  function signinExample() {
    fetch('/authenticate', { method: 'POST' }).then((_) => {
      popUpMessage('サインイン成功！');
    });
  }

  function getUserExample() {
    fetch('/user', { method: 'GET' }).then((res) => {
      if (res.ok) {
        popUpMessage('ユーザー情報取得成功！');
      } else {
        popUpMessage('ユーザー情報取得失敗！(サインインしてないかも)');
      }
    });
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Example of Mock Server
        </Typography>
        <Button variant="contained" color="primary" onClick={signinExample}>
          サインイン
        </Button>
        <Button variant="contained" color="primary" onClick={getUserExample}>
          ユーザー情報取得
        </Button>
      </Box>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
};

export default SandBox;
