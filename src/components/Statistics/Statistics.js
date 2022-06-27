import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {
  // const { good, neutral, bad, total, positivePercentage } = props;

  /* Написал эту хелп функцию, чтобы можно было перебрать пропы методом и вернуть сразу готовый абзац для каждого, а не отдельно руками
  писать. Не знаю, правильнее ли так) конкретно в этой задаче - это абсурд, да и передаются пропы по отдельности каждое свойство,
  но тут я расцениваю это с точки зрения расширяемости. Не уверен, как лучше, поэтому оставлю оба варианта  */
  function propNameNormalize(string) {
    return (
      string[0].toUpperCase() +
      `${[...string]
        .map(letter =>
          letter === letter.toUpperCase() ? ` ${letter.toLowerCase()}` : letter
        )
        .join('')}`.slice(1)
    );
  }

  return (
    <ul>
      {Object.keys(props).map((propName, i) => (
        <li key={i} className={s.item}>
          {propNameNormalize(propName)}: {props[propName]}
        </li>
      ))}

      {/* <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive percentage: {positivePercentage}</li> */}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
