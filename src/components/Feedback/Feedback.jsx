import clsx from 'clsx';
import s from './Feedback.module.css';

const Feedback = ({ good, bad, neutral, total, positive = 0 }) => {
  return (
    <div className={s.box_feedback}>
      <ul className={s.list}>
        <li className={s.item}>Good:{good}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive: {positive} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
