import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
/* import {useStateValue} from "../StateProvider"; */
import CartProduct from "./CartProduct";
import Total from "./Total";
import productdata from '../productdata'
//import Productos from './Productos'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"2rem",
    },
    
  }));

const CartView =()=>{
    const classes = useStyles();
    /* const[{compra},dispatch]=useStateValue(); */

    function Formrow(){
        return(
            <React.Fragment>
                {productdata.map((item)=>(
                   <Grid tem xs={12} sm={8} md={6} lg={4}>
                       <CartProduct key={item.id} prod={item}/>
                    </Grid> 
                ))}
            </React.Fragment>
        );
    }
return(
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align='center' gutterBottom variant='h4'>
                    Tu compra
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <Formrow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align='center' gutterBottom variant='h4'>
                    <Total/>
                </Typography>
            </Grid>
        </Grid> 
    </div>
);
};
export default CartView;