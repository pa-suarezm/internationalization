import React from 'react';
import {FormattedDate} from "react-intl";
import {FormattedNumber} from "react-intl";
import {FormattedPlural} from "react-intl";
import {FormattedMessage} from "react-intl";

export default class Job extends React.Component {

	choose(){
		if(this.props.offer.salary === 1)
			return "Million";
		else
			return "Millions";
	}

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>
					{this.props.offer.salary} <FormattedMessage id={this.choose()}><FormattedPlural value={this.props.offer.salary} one="million" other="millions"/></FormattedMessage>
				</td>
      			<td>{this.props.offer.city}</td>
      			<td>
					<FormattedDate
						value={this.props.offer.date}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
				</td>
				<td>
					<FormattedNumber 
						value={this.props.offer.visits}
					/>
				</td>
  			</tr>
  		);
	}
}