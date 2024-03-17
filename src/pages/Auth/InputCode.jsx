import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import './InputCode.css';

const InputCode = () => {
  return (
    <div className="code-wrapper">
      <Container className="code-container" component="main" maxWidth="xs">
        <Box className="code-box">
          <div className="code-title">
            <LoginIcon fontSize="small" style={{ marginRight: '8px' }} />{' '}
            女性会員登録
          </div>
        </Box>
        <div
          className="code-content"
          style={{
            height: '463px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#575757',
            fontWeight: 'bold',
          }}
        >
          {' '}
          メールを送信しました。
          <br /> 内容を確認し会員登録をすすめてください。
        </div>
      </Container>
    </div>
  );
};

export default InputCode;
