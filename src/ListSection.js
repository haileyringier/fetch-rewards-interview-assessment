import React, { useState } from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: '',
      borderRadius: 25,
      color: 'white',
      marginRight: '10px',
      marginBottom: '15px'
    }
  });

export default function ListSection(props) {
    const classes = useStyles();

    const [ showListId, setShowListId ] = useState(0)

    const showListItems = props.list.map(listItem => {
        if(showListId === 0){
            return <Item  key={listItem.id} id={listItem.id} name={listItem.name} listId={listItem.listId} />
        }
        else{
            if(listItem.listId === showListId){
                return <Item  key={listItem.id} id={listItem.id} name={listItem.name} listId={listItem.listId} />
            }
        }
    })

    const showByListId = (event) => {
        const groupnumber = parseInt(event.target.parentNode.id)
        setShowListId(groupnumber)
        console.log(typeof groupnumber)
        
    }
    return(
        <div className="button-section">
            <Button classes={{root: classes.root}} id="0" variant="contained" color="secondary" onClick={showByListId}>
                All Items
            </Button>
            <Button classes={{root: classes.root}} id="1" variant="contained" color="primary" onClick={showByListId}>
                ListId One
            </Button>
            <Button classes={{root: classes.root}} id="2" variant="contained" color="primary" onClick={showByListId}>
                ListId Two
            </Button>
            <Button classes={{root: classes.root}} id="3" variant="contained" color="primary" onClick={showByListId}>
                ListId Three
            </Button>
            <Button classes={{root: classes.root}} id="4" variant="contained" color="primary" onClick={showByListId}>
                ListId Four
            </Button>
            <Grid container spacing={3}>
                {showListItems}
            </Grid>
        </div>
    )
}