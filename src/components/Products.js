import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import CssExample2 from './CssExample2'
import GridTile from './GridTile'
import { makeStyles } from '@material-ui/core/styles';
import ProductListItem from './ProductListItem';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const data = [
    { name: 'item1', category: 1 },
    { name: 'item2', category: 2 },
    { name: 'item3', category: 3 },
    { name: 'item4', category: 4 },
    { name: 'item5', category: 5 },
    { name: 'item6', category: 6 },
    { name: 'item7', category: 7 },
    { name: 'item8', category: 8 },
    { name: 'item9', category: 9 },
    { name: 'item10', category: 10 },
    { name: 'item11', category: 11 },
    { name: 'item12', category: 12 },
    { name: 'item13', category: 13 },
]

function Products({ category }) {
    const classes = useStyles();
    console.log(category)
    let dataToRender = []
    if (category === 1) {
        dataToRender = data
    } else {
        dataToRender = data
    }
    console.log(dataToRender)
    return (
        <div style={{ padding: 10 }}>

            <Grid container spacing={2}>
                {dataToRender.map(item => (
                    <Grid item xs={6} sm={4} md={3}>
                        <Paper className={classes.paper}>
                            <ProductListItem />
                        </Paper>
                    </Grid>
                ))}

            </Grid>

        </div>
    )
}

export default Products
