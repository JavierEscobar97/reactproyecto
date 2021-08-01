import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../assets/favicon.ico';



import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"7rem",
  },
  /* menuButton: {
    marginRight: theme.spacing(2),
  }, */
  appBar: {
    background:"whitesmoke",
    boxShadow:"none",
  },
  grow:{
    flexGrow: 1,
  },
  button: {
    marginLeft:theme.spacing(2),
  },
  image:{
      marginRight:"10px",
      height:"3rem",
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image}/>
            {/* <MenuIcon /> */}
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p" >
            Hola invitado
          </Typography>
          <div className={classes.button}>
              <Button variant="outlined">
                <strong>Iniciar Sesion</strong>
              </Button>
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon fontSize="large" color="primary"/>
                </Badge>
                
              </IconButton>
              
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
