import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import LockClockIcon from '@mui/icons-material/LockClock';
import { Link as RouterLink } from 'react-router-dom';
import './InputCode.css';

const InputCode = () => {
  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    event.target.value = value;
  };
  return (
    <div className="code-wrapper">
      <Container className="code-container" component="main" maxWidth="xs">
        <Box className="code-box">
          <div className="code-title">
            <LoginIcon fontSize="small" style={{ marginRight: '8px' }} />{' '}
            認証コード
          </div>
          <Box component="form" noValidate>
            <div className="form-section">
              <div className="code-description">
                メールアドレスに届いた確認コードを入力してください
              </div>
              <div className="require_label">
                <div className="require1">メールアドレス(非公開)</div>
                <div className="require2">- 必須 -</div>
              </div>
              <Box className="code-input-section">
                <LockClockIcon className="icon-color" />
                <TextField
                  fullWidth
                  id="number"
                  name="code"
                  type="text"
                  label="認証コード"
                  variant="standard"
                  onChange={handleInputChange}
                />
              </Box>
              <div className="domain-info">
                ＜ドメイン指定受信されている方へ＞
                <div className="domain-info-detail">
                  ドメイン指定受信,
                  受信拒否などを設定している場合は、メールが受信できるように設定を変更してください。
                </div>
              </div>
              <RouterLink to="#">
                <Button className="code-submit" fullWidth variant="contained">
                  認証する
                </Button>
              </RouterLink>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default InputCode;
