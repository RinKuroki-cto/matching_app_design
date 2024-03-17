import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as SmsIcon } from '../../assets/sms.svg';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import './SignupWomen.css';

import { Link as RouterLink } from 'react-router-dom';

const SignupWomen = () => {
  return (
    <div className="women-wrapper">
      <Container className="women-container" component="main" maxWidth="xs">
        <Box className="women-box">
          <div className="women-title">
            <LoginIcon fontSize="small" style={{ marginRight: '8px' }} />{' '}
            女性会員登録
          </div>
          <Box component="form" noValidate>
            <div className="form-section">
              <div className="women-required">
                会員登録ページ（URL）をお送りします。あなたのメールアドレスを入力してください。
              </div>
              <div className="email-label">
                <div className="email-label-text">メールアドレス(非公開)</div>
                <div className="email-required">- 必須 -</div>
              </div>
              <Box
                className="women-mail"
                sx={{ display: 'flex', alignItems: 'flex-end' }}
              >
                <SmsIcon
                  className="icon-margin"
                  style={{ marginRight: '8px' }}
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="メールアドレス"
                  variant="standard"
                />
              </Box>
              <div className="domain-info">
                <div className="domain-info-text">
                  ＜ドメイン指定受信されている方へ＞
                </div>
                <div className="domain-info-detail">
                  ドメイン指定受信,
                  受信拒否などを設定している場合は、メールが受信できるように設定を変更してください。
                </div>
              </div>
              <RouterLink to="/input_code">
                <Button className="women-submit" fullWidth variant="contained">
                  メールを送信する
                </Button>
              </RouterLink>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignupWomen;
