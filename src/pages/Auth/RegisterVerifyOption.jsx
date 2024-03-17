import React from 'react';
import './RegisterVerifyOption.scss';
import { Box, Container } from '@mui/material';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import { ReactComponent as IdIcon } from '../../assets/identification.svg';
import { ReactComponent as NextIcon } from '../../assets/next.svg';
import { ReactComponent as VectorIcon } from '../../assets/Vector.svg';

const RegisterVerifyOption = () => {
  return (
    <div className="register-option-wrapper">
      <div className="register-option-container">
        <div className="header">
          <LoginIcon style={{ paddingRight: '8px' }} />
          <label
            style={{
              fontFamily: 'Noto Sans JP sans-serif',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            女性会員登録
          </label>
        </div>
        <div
          className="content"
          style={{
            textAlign: 'center',
            color: '#575757',
            fontSize: '15px',
            fontWeight: 'bold',
            padding: '22px',
          }}
        >
          会員登録が完了しました
          <br />
          ご登録いただいた、メールアドレスとパスワードをご入力の上、ログインください。
        </div>
        <div className="select_option">
          <div style={{ display: 'flex' }}>
            <div
              style={{
                textAlign: 'center',
                marginRight: '18px',
              }}
            >
              <div
                style={{
                  color: 'white',
                  backgroundColor: '#E9396D',
                  width: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '10px',
                  fontFamily: 'Noto Sans JP',
                  fontWeight: 'bold',
                }}
              >
                優先
              </div>
              <IdIcon />
            </div>
            <div>
              <div
                style={{
                  color: 'black',
                  fontSize: '16px',
                  fontFamily: 'Noto Sans JP',
                  fontWeight: 'bold',
                }}
              >
                本人確認手続きをする
              </div>
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#575757',
                  fontFamily: 'Noto Sans JP',
                  fontWeight: 'normal',
                }}
              >
                本人確認手続きをしないと、
                <br /> マッチングサービスは利用できません。
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '12px',
              }}
            >
              <NextIcon />
            </div>
          </div>
          <hr style={{ marginTop: '16px' }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <VectorIcon style={{ padding: '16px' }} />
            <label
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                fontFamily: 'Noto Sans JP',
                marginLeft: '24px',
                marginRight: '142px',
              }}
            >
              マイページ
            </label>
            <NextIcon />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default RegisterVerifyOption;
