import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  letterSpacing: 5,
  fontSize: '24px',
});

function ButtonM(props) {
  return (
    <div>
      <MyButton onClick={props.click} disabled={props.dis}>{props.text} </MyButton>
    </div>
  )
}

export default ButtonM;
