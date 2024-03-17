import React, { useEffect, useState } from 'react';
import './WomenRegister.css';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  InputBase,
  InputLabel,
  NativeSelect,
  OutlinedInput,
  styled,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import { Link as RouterLink } from 'react-router-dom';

const WomenRegister = () => {
  const [age, setAge] = useState(0);
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const generateDays = () => {
    if (month === '' || year === '') {
      return [];
    }
    const monthNumber = parseInt(month);
    const yearNumber = parseInt(year);
    const daysInMonth = new Date(yearNumber, monthNumber, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  // useEffect to update days whenever month or year changes
  useEffect(() => {
    setDay('');
  }, [month, year]);
  return (
    <div className="women-register-wrapper">
      <Container
        className="women-register-container"
        component="main"
        maxWidth="xs"
      >
        <Box className="women-register-box">
          <div className="women-register-header">
            <LoginIcon fontSize="small" style={{ marginRight: '8px' }} />{' '}
            女性会員登録
          </div>
        </Box>

        <div
          style={{
            textAlign: 'center',
            fontFamily: 'Noto Sans JP',
            fontSize: '16px',
            color: '#575757',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          ユーザー情報入力
        </div>
        <Box className="women_input_group">
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>お名前（非公開）</label>
              <label className="required_word">必須</label>
            </div>
            <div
              style={{
                color: '#666666',
                fontSize: '12px',
                paddingBottom: '5px',
              }}
            >
              本人確認書類に記載された氏名を記入してください。
            </div>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              fullWidth
              required
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </div>
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>
                メールアドレス（非公開）
              </label>
              <label className="required_word">必須</label>
            </div>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              fullWidth
              required
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </div>
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>電話番号（非公開） </label>
              <label className="required_word">必須</label>
            </div>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              fullWidth
              required
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </div>
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>都道府県 </label>
              <label className="required_word">必須</label>
            </div>
            <FormControl variant="standard" style={{ width: '50%' }}>
              <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleAgeChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={10}>選択なし1</option>
                <option value={20}>選択なし2</option>
                <option value={30}>選択なし3</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>生年月日</label>
              <label className="required_word">必須</label>
            </div>
            <div
              style={{
                color: '#666666',
                fontSize: '12px',
                paddingBottom: '5px',
              }}
            >
              月を選択してから日を選んでください
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FormControl variant="standard" style={{ width: '25%' }}>
                <NativeSelect
                  id="birth_year"
                  value={year}
                  onChange={handleYearChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value=""></option>
                  {[...Array(50)].map((_, index) => {
                    const yearValue = 2009 - index;
                    return (
                      <option key={yearValue} value={yearValue}>
                        {yearValue}
                      </option>
                    );
                  })}
                </NativeSelect>
              </FormControl>
              <label className="date_sign">年</label>
              <FormControl variant="standard" style={{ width: '25%' }}>
                <NativeSelect
                  id="birth_month"
                  value={month}
                  onChange={handleMonthChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={1 + i} value={1 + i}>
                      {1 + i}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
              <label className="date_sign">月</label>
              <FormControl variant="standard" style={{ width: '20%' }}>
                <NativeSelect
                  id="birth_day"
                  value={day}
                  onChange={handleDayChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value=""></option>
                  {generateDays()}
                </NativeSelect>
              </FormControl>
              <label className="date_sign">日</label>
            </div>
          </div>
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>パスワード</label>
              <label className="required_word">必須</label>
            </div>
            <OutlinedInput
              id="outlined"
              aria-describedby="outlined-weight-helper-text"
              fullWidth
              required
              placeholder="半角英数６文字以上"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <OutlinedInput
              style={{ marginTop: '10px' }}
              id="outlined"
              placeholder="再入力"
              aria-describedby="outlined-weight-helper-text"
              fullWidth
              required
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </div>
          <div className="input-group-item">
            <div className="required_sent">
              <label style={{ fontWeight: 'bold' }}>利用規約</label>
              <label className="required_word">必須</label>
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ paddingTop: '0px', paddingBottom: '0px' }}
                  />
                }
                label="同意する"
              />
              <RouterLink
                nk
                to="#"
                className="login-page-link"
                style={{ marginLeft: '50px' }}
              >
                利用規約を見る
              </RouterLink>
            </div>
          </div>
          <RouterLink to="/women_register_confirm">
            <Button
              className="women-register-btn"
              fullWidth
              variant="contained"
            >
              メールを送信する
            </Button>
          </RouterLink>
        </Box>
      </Container>
    </div>
  );
};

export default WomenRegister;
