import PropTypes from 'prop-types';
import s from './Statistics.module.css'
import randomColor from 'randomcolor';

export const Statistics = (props) => {
    const { stats } = props;

    // тут статс это массив тот что в джсон
    return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statlist}>
        {stats.map(({id, label, percentage}) => {
          return (
            <li key={id} style={{backgroundColor:(randomColor())}} className={s.item}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section> 
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.any.isRequired,
      percent: PropTypes.any.isRequired,
    }),
  ),
}
// function generateRandomColor() {
//   var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor;
// 