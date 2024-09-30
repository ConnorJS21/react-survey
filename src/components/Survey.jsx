import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formAnswers = {};
  
    formData.forEach((value, key) => {
      if (key === 'spendTime') {
        if (!formAnswers[key]) {
          formAnswers[key] = [];
        }
        formAnswers[key].push(value);
      } else {
        formAnswers[key] = value;
      }
    });
  
    formAnswers.colour = formAnswers.colorRating || "";
    formAnswers.timeSpent = formAnswers.spendTime || [];
  
    setAnswers([...answers, formAnswers]);
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} /> {/* Pass the answers state here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <div>
              <input type="radio" id="color1" name="colorRating" value="1" />
              <label htmlFor="color1">1</label>
            </div>
            <div>
              <input type="radio" id="color2" name="colorRating" value="2" />
              <label htmlFor="color2">2</label>
            </div>
            <div>
              <input type="radio" id="color3" name="colorRating" value="3" />
              <label htmlFor="color3">3</label>
            </div>
            <div>
              <input type="radio" id="color4" name="colorRating" value="4" />
              <label htmlFor="color4">4</label>
            </div>
            <div>
              <input type="radio" id="color5" name="colorRating" value="5" />
              <label htmlFor="color5">5</label>
            </div>
          </div>

          {/* Checkbox Options for How to Spend Time with Rubber Duck */}
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <label>
              <input type="checkbox" name="spendTime" value="swimming" />
              Swimming
            </label>
            <label>
              <input type="checkbox" name="spendTime" value="bathing" />
              Bathing
            </label>
            <label>
              <input type="checkbox" name="spendTime" value="chatting" />
              Chatting
            </label>
            <label>
              <input type="checkbox" name="spendTime" value="dontLike" />
              I dont like to spend time with it
            </label>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
