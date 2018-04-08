import { h, Component } from 'preact';
import { biases } from '../../data.js';
import style from './style';

export default class Home extends Component {
	render() {
		const biasElements = biases.map(bias => {
			const aka = bias.aka ? <p>AKA “{bias.aka}”</p> : '';
			return (
				<section>
					<h2>{bias.name}</h2>
					{aka}
					<p>{bias.simple}</p>
					<p>{bias.insult}</p>
					<a href={bias.link}>
						<img src="/assets/link.svg" /> Read more ...
					</a>
				</section>
			);
		});
		return (
			<div class={style.home}>
				<h1>Here's how you brain is lying to you:</h1>
				{biasElements}
			</div>
		);
	}
}
