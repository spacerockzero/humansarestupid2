import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>{user}</h1>
				<img src="http://cdn.jakobanderson.com.s3.amazonaws.com/2016/Jan/Jakob_sq_250_ps_kraken-1453169150667.jpg" />
				<p>
					I'm a Full-Stack JS Developer, Web Performance Champion, and avid cognitive science fan.
				</p>
				<p>Stay objective and rational, my friends and fellow hyuumans.</p>
				<p>
					Find me on the interwebs: <a href="https://twitter.com/jakob_anderson">Twitter</a>{' '}
					<a href="https://jakobanderson.com/">Web Performance Blog</a>
				</p>
				<br />
				<p>
					For some great information on cognitive biases, fallacies, and all the fun self-delusions
					out there try these:
					<ul>
						<li>
							<a href="https://betterhumans.coach.me/cognitive-bias-cheat-sheet-55a472476b18">
								Cognitive Bias Cheat Sheet
							</a>
						</li>
						<li>
							<a href="http://www.audible.com/pd/Science-Technology/Your-Deceptive-Mind-A-Scientific-Guide-to-Critical-Thinking-Skills-Audiobook/B00D9473WC">
								Your Deceptive Mind: A Scientific Guide to Critical Thinking Skills - Audiobook
							</a>
						</li>
						<li>
							<a href="https://youarenotsosmart.com/podcast/">You Are Not So Smart - Podcast</a>
						</li>
						<li>
							<a href="https://itunes.apple.com/us/podcast/skeptics-guide-to-universe/id128859062?mt=2">
								The Skeptic's Guide to the Universe - Podcast
							</a>
						</li>
						<li>
							<a href="https://en.wikipedia.org/wiki/List_of_cognitive_biases">
								List of Cognitive Biases - Wikipedia
							</a>
						</li>
					</ul>
				</p>
			</div>
		);
	}
}
