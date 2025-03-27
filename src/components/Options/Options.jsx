import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ obf, total, reset }) => {
  return (
    <div className={s.btn_box}>
      <button className={s.btn_style} onClick={() => obf('good')}>
        Good
      </button>
      <button className={clsx(s.btn_style, s.blue)} onClick={() => obf('bad')}>
        Bad
      </button>
      <button
        className={clsx(s.btn_style, s.yellow)}
        onClick={() => obf('neutral')}
      >
        Neutral
      </button>
      {total > 0 && (
        <button className={clsx(s.btn_style, s.btn)} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
