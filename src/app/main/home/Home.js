import React, {Component} from 'react';
import {withStyles, Button, Card, CardContent, TextField, Typography, Icon} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import classNames from 'classnames';
import _ from '@lodash';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    }
});

class Home extends Component {

    state = {
        zip   : ''
    };

    handleChange = (event) => {
		this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
		const {zip} = this.state;
		localStorage.setItem('currentZip',zip)
        return (
            zip.length === 6
        );
    }

    render()
    {
        const {classes} = this.props;
        const {zip} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className="w-full max-w-384">

                            <CardContent className="flex flex-col items-center justify-center p-32">
								<Icon className="text-64 text-amber" color="action">wb_sunny</Icon>
                                <Typography variant="h6" className="mt-16 mb-16">Weather App</Typography>
								<Typography variant="subtitle1" className="mb-16">Please enter your zip to see weather</Typography>
                                <form name="homeForm" noValidate className="flex flex-col justify-center w-full">

                                    <TextField
                                        className="mb-16"
                                        label="Zip"
                                        autoFocus
                                        type="text"
                                        name="zip"
                                        value={zip}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />


                                    <Button variant="contained" component={Link} to="/result" color="secondary" className="w-224 mx-auto mt-16" aria-label="See my weather!"
                                            disabled={!this.canBeSubmitted()}>
											See my weather!
                                    </Button>

                                </form>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}


export default withStyles(styles, {withTheme: true})(Home);
