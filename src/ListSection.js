import React from 'react';
import Item from './Item'
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

    // const [ listOne, setListOne ] = useState(false)
    // const [ listTwo, setListTwo ] = useState(false)
    // const [ listthree, setListThree ] = useState(false)
    // const [ listFour, setListFour ] = useState(false)

    const showListItems = props.list.map(listItem => {
        return <Item  key={listItem.id} id={listItem.id} name={listItem.name} listId={listItem.listId} />
    })
    return(
        <div className="button-section">
            <Button classes={{root: classes.root}} variant="contained" color="secondary">
                All Items
            </Button>
            <Button classes={{root: classes.root}} variant="contained" color="primary">
                ListId One
            </Button>
            <Button classes={{root: classes.root}} variant="contained" color="primary">
                ListId Two
            </Button>
            <Button classes={{root: classes.root}} variant="contained" color="primary">
                ListId Three
            </Button>
            <Button classes={{root: classes.root}} variant="contained" color="primary">
                ListId Four
            </Button>
            <Grid container spacing={3}>
                {showListItems}
            </Grid>
        </div>
    )
}