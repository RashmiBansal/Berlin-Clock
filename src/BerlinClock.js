import React from 'react';
import Lamp from './Lamp';

class BerlinClock extends React.Component {
	constructor(props){
		super(props);

		this.state= {
			seconds: false,
			fiveHourRow: 0,
			oneHourRow: 0,
			fiveMinuteRow: 0,
			oneMinuteRow: 0
		};

		this.updateTime = this.updateTime.bind(this);
		setInterval(this.updateTime, 1000);
	}

	updateTime(){
			var date = new Date();

			this.setState({
				seconds: date.getSeconds()%2 === 0,
				fiveHourRow: date.getHours()/5,
				oneHourRow: date.getHours()%5,
				fiveMinuteRow: date.getMinutes()/5,
				oneMinuteRow: date.getMinutes()%5
			});
	}

	getYellowLamps(index) {
		return 'yellow';
	}

	getRedLamps(index) {
		return 'red';
	}

	getLampRow(numberOfLamps, numberOfLampsTurnedOn,colourFunction = this.getYellowLamps, lampSize = 'medium') {
		var lamps = [];
		for(let i = 1; i <= numberOfLamps ; i++) {
			lamps.push(
				<Lamp 
					size={lampSize}
					colour={colourFunction(i)}
					isOn={(i<=numberOfLampsTurnedOn) ? true : false} 
				/>
			);
		}
		return (
			<div className="lampRowContainer" >
				{lamps}
			</div>
		);
	}

	getFiveMinuteLampColour(index) {
		if(index%3===0) {
			return 'red';
		}
		return 'yellow';
	}

	render() {
		return (
			<div className="berlinClockContainer">
				<div className="lampRowContainer seconds">
					<Lamp size='medium' colour="yellow" isOn={this.state.seconds} />
				</div>
					{this.getLampRow(4, this.state.fiveHourRow, this.getRedLamps)}
					{this.getLampRow(4, this.state.oneHourRow, this.getRedLamps)}
					{this.getLampRow(11, this.state.fiveMinuteRow, this.getFiveMinuteLampColour, 'small')}
					{this.getLampRow(4, this.state.oneMinuteRow)}
			</div>
		);
	}
}

export default BerlinClock;