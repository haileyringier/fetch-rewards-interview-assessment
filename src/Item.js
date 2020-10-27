import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#2b2d2f',
    },
  }));
  
export default function Item(props) {

    const { id, name, listId } = props;
    const classes = useStyles();

    return(
        <Grid item xs={2}>
            <Paper className={classes.paper}>
                <p>ID: {id}</p>
                <p>ListID: {listId}</p>
                <p>Name: {name}</p>
            </Paper>
        </Grid>
    )
}