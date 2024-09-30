import PropTypes from "prop-types";
import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList }) {
  console.log("Inside AnswersList: ", answersList);

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
};
