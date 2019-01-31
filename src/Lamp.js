import React from 'react';

class Lamp extends React.Component{
	render(){
		return(
			<div className = {"lamp " + this.props.size}>			
				<input type="checkbox" checked={this.props.isOn} name="toggle" readOnly/>
				<label htmlFor="toggle">
					<i className={"bulb " + this.props.colour}>
						<span className={"bulb-center " + this.props.colour}></span>
						<span className="reflections">
							<span></span>
						</span>
					</i>    
				</label>
			</div>
		);
	}
}

export default Lamp;