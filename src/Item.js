import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Item(props) {

    const { id, name, listId } = props

    return(
        <Grid item xs={2}>
            <Paper >
                <p>ID: {id}</p>
                <p>ListID: {listId}</p>
                <p>Name: {name}</p>
            </Paper>
        </Grid>
    )
}