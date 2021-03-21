import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  // classes get a style here (pl. className={classes.menuH})
  iconB: {
    color: '#FE6B8B',
    backgroundColor: '#fff',
    stroke: '#FE6B8B',
    width: '100px',
    height: '100px',
    border: '1px solid #FE6B8B',
    '&:hover': {
      color: '#fff',
      stroke: '#fff',
      backgroundColor: '#FE6B8B',
    },
    '@media (max-width: 1160px)': {
      width: '90px',
      height: '90px',
    },
    '@media (max-width: 750px)': {
      width: '80px',
      height: '80px',
    },
    '@media (max-width: 450px)': {
      width: '70px',
      height: '70px',
    },
  },
  menuH: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  icon: {
    fontSize: '65px',
    '@media (max-width: 1160px)': {
      fontSize: '55px',
    },
    '@media (max-width: 750px)': {
      fontSize: '45px',
    },
    '@media (max-width: 450px)': {
      fontSize: '35px',
    },
  }
});

const options = [
  'Home',
  "It's me",
  'Cats',
];

function MenuH() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menuH}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.iconB}
      >
        <MenuIcon className={classes.icon}/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '150px',
            width: '20ch',
            backgroundColor:'#FF8E53',
            color: '#fff',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


export default MenuH;
