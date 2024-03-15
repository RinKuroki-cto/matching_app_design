import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as SmsIcon } from '../../assets/sms.svg';
import { ReactComponent as LockIcon } from '../../assets/lock.svg';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import { createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import './SignIn.css';

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#AC26FF', // Change the color here
          '&.Mui-checked': {
            color: '#AC26FF', // Change the color when checked
          },
        },
      },
    },
  },
});

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
      } else {
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signin-wrapper">
      <Container className="container" component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="signin-title">
            <LoginIcon fontSize="small" style={{ marginRight: '8px' }} />{' '}
            ログイン
          </div>
          <Box component="form" noValidate sx={{ mt: 2 }}>
            <Box className="form-box">
              <SmsIcon className="icon-margin" />
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                label="メールアドレス"
                variant="standard"
                value={email}
                onChange={handleEmail}
              />
            </Box>
            <Box className="form-box">
              <LockIcon className="icon-margin" />
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                label="パスワード"
                variant="standard"
                value={password}
                onChange={handlePassword}
              />
            </Box>
            <Button
              className="login-btn"
              fullWidth
              variant="contained"
              onClick={handleSignIn}
            >
              ログイン
            </Button>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ marginBottom: '20px' }}>
                <RouterLink href="#" variant="body2" className="link-style">
                  パスワードを忘れた
                </RouterLink>
              </div>
              <div>
                アカウントをお持ちでない方は
                <RouterLink to="/signup" className="signup-link">
                  こちら
                </RouterLink>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
