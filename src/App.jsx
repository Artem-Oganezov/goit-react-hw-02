import { useEffect, useState } from 'react';
import s from './App.module.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const data = loadFromLS('saved-click');
    if (data !== null) {
      return data;
    }
    return {};
  });

  function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  function loadFromLS(key) {
    const body = localStorage.getItem(key);
    try {
      const data = JSON.parse(body);
      return data;
    } catch {
      return body;
    }
  }

  useEffect(() => {
    saveToLS('saved-click', values);
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;

  let totalPositive = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  const updateFeedback = dataObj => {
    setValues({
      ...values,
      [dataObj]: values[dataObj] + 1,
    });
  };

  const resetClick = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={s.section}>
      <Description />
      <Options obf={updateFeedback} total={totalFeedback} reset={resetClick} />
      {Boolean(totalFeedback) ? (
        <Feedback
          total={totalFeedback}
          bad={values.bad}
          good={values.good}
          neutral={values.neutral}
          positive={totalPositive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
