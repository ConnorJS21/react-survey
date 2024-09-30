// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import PropTypes from 'prop-types';

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li> 
      ))}
    </ul>
  );
}

ItemsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username = "Anon", colour = "", timeSpent = [], review = "" }
}) {
  return (
    <li>
    <article className="answer">
      <h3>{username} said:</h3>
      <p>
        <em>How do you rate your rubber duck colour?</em>
        <span className="answer__line">{colour || "No rating provided"}</span>
      </p>
      <div>
        <em>How do you like to spend time with your rubber duck?</em>
        <ItemsList list={timeSpent} />
      </div>
      <p>
        <em>What else have you got to say about your rubber duck?</em>
        <span className="answer__line">{review}</span>
      </p>
    </article>
  </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.shape({
    username: PropTypes.string,
    colour: PropTypes.string, 
    timeSpent: PropTypes.array,
    review: PropTypes.string,
  }).isRequired,
};