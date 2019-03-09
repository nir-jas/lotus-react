import React, {Component} from 'react';
import {withStyles, Button, Card, CardContent, Typography,CardHeader} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import classNames from 'classnames';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {Link} from 'react-router-dom';
import _ from '@lodash';

import {
	withRouter
  } from 'react-router-dom'
const styles = theme => ({
	root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
	},
	lightBg: {
		background:'rgb(250,250,250)'
	}
});

class Result extends Component {
	state = {
		zip: localStorage.getItem('currentZip'),
		data: {
			list:[]
		}
	}

	handleChange = (event) => {
		this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
		
	};
	
	componentDidMount()
    {
        this.getWeatherData();
	}
	
	getWeatherData = async () => {
		if (this.state.zip === undefined) {
			this.props.history.push('/home')
		}
		const api_call= await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip},in&appid=ca95d417cf291c77419b3895c7220a60`)
		let response = await api_call.json()
		let filteredData = _.groupBy(_.map(response.list,(item)=>{
			item.date = item['dt_txt'].split(' ')[0]
			item.tmpmax = item.main.temp_max
			item.tmpmin = item.main.temp_min
			return item
		}),(item)=>{
			return item.date
		})

		response.list = _.map(filteredData,(item,key)=>{
			return {
				date: key,
				max: _.maxBy(item,'tmpmax')['tmpmax'],
				min: _.minBy(item,'tmpmin')['tmpmin']
			}
		})
		
		this.setState({
			data: response
		})
	}

    render()
    {
		const {classes} = this.props;
		const {data} = this.state;

	return (

		<div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">
                        <div >
						{data.list.length>0 && (
							<Card className={classNames(classes.lightBg,"w-full wfull text-center")} >
							<Typography variant="h4" className="mt-16 mb-16">Checkout Whether at {data.city.name}</Typography>
                            <CardContent className="flex flex-wrap py-24 ">
							
								{data.list.map((item) => {
								return (	
									<div className="w-full pb-24 sm:w-1/2 lg:w-1/4 sm:p-16" key={item.date}>
                                    <Card elevation={1} className="flex flex-col h-128">
									
									<CardHeader className="pt-24"
											title={item.date}
											/>
									<CardContent className="w-full text-black">
									<Typography variant="title">Max Temp: {item.max}</Typography>
									<Typography variant="title">Min Temp: {item.min}</Typography>
										
									</CardContent>	
									</Card>
									</div>
									)
								})}
                                
								

                            </CardContent>
							<Button variant="contained" component={Link} to="/" color="secondary" className="w-384 mx-auto mb-16" aria-label="Check Another Location">
											Check Another Location
                                    </Button>
							</Card>
						)}
						</div>
                    </FuseAnimate>
                </div>
            </div>
        );
        
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Result));