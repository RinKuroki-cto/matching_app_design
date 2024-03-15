import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';

import { createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import './Signup.css';

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

export default function SignUp() {
  return (
    <div className="signup-wrapper">
      <Container className="signup-container" component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="signup-title">
            <LoginIcon fontSize="small" style={{ marginRight: '8px' }} />{' '}
            新規会員登録
          </div>
          <Box component="form" noValidate>
            <div className="form-section">
              <div className="left-text">
                男性の方はこちら
                <Button
                  className="man_signup"
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  無料会員登録
                </Button>
              </div>
              <div className="left-text">
                女性の方はこちら
                <RouterLink to="/signup_women">
                  <Button
                    className="woman_signup"
                    fullWidth
                    variant="contained"
                  >
                    無料会員登録
                  </Button>
                </RouterLink>
              </div>
              <div className="center-text">
                登録すると
                <RouterLink href="#" variant="body2" className="terms-link">
                  利用規約とプライバシーポリシー
                </RouterLink>
                に 同意したものとみなされます。
              </div>
            </div>
            <div className="center-text">
              ログインページは
              <RouterLink to="/login" className="login-page-link">
                こちら
              </RouterLink>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
