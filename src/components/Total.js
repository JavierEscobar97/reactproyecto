import React from 'react'
import accounting from 'accounting'
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
     
    },
    button:{

    },
    
  }));

const Total = () => {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <h5> Total items:3</h5>
            <h5> {accounting.formatMoney(50,"$")} </h5>
            <Button className={classes.button} variant="contained" color="secondary">Finalizar compra</Button>
        </div>
    )
}

export default Total
