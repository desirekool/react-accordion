import { useState } from 'react';
import data from './data.js'
import Question from './components/Question.jsx';


const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div style={{display:'block'}}><h1>FAQ</h1></div><br/>
      <p>A React proof of concept Project with a simple FAQ</p>
      <ul className='container'>
        {questions.map(question => <Question {...question} key={question.id} />)}
      </ul>
    </main>    
  );
};
export default App;
