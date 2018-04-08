import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<p>
					©2016 Jakob Anderson. The tone is satire, but the facts are real.{' '}
					<a href="https://en.wikipedia.org/wiki/List_of_cognitive_biases">
						List of Cognitive Biases - Wikipedia
					</a>
				</p>
			</footer>
		);
	}
}
