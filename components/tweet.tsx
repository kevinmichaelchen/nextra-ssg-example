import { TweetSkeleton, EmbeddedTweet } from "react-tweet";
import s from "./tweet.module.css";

const Tweet = ({ data, skeleton }) => {
	return (
		<div className={s.root}>{skeleton ? <TweetSkeleton /> : <EmbeddedTweet tweet={data} />}</div>
	);
};

export default Tweet;
