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
    '&:hover': {
      color: '#fff',
      stroke: '#fff',
      backgroundColor: '#FE6B8B',
    }
  },
  menuH: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  icon: {
    fontSize: '65px',
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
