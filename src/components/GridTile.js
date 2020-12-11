import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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

const data = [1, 1, 1, 1, 1,]

export default function GridTile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ backgroundColor: 'yellow', padding: 15 }}>
                <Grid container spacing={2}>
                    {data.map(item => (
                        <Grid item xs={6} sm={4} md={3}>
                            <Paper className={classes.paper}>
                                <ProductListItem />
                            </Paper>
                        </Grid>
                    ))}

                    {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
                    {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
                </Grid>
            </div>

        </div>
    );
}
