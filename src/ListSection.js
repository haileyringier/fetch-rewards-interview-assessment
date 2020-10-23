import React from 'react';
import Item from './Item'
import Grid from '@material-ui/core/Grid'

export default function ListSection(props) {

    // const { list } = props
    
    const showListItems = props.list.map(listItem => {
        return <Item  key={listItem.id} id={listItem.id} name={listItem.name} listId={listItem.listId} />
    })
    return(
        <div>
            <p>List section</p>
            <button>All Items</button>
            <button>ListId One</button>
            <button>ListId Two</button>
            <button>ListId Three</button>
            <button>ListId Four</button>
            <Grid>
                {showListItems}
            </Grid>
        </div>
    )
}