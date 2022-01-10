import './Statistics.css'
import randomColor from 'randomcolor';

export const Statistics = (props) => {
    const { stats } = props;

    // тут статс это массив тот что в джсон
    return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(({id, label, percentage}) => {
          return (
            <li key={id} style={{backgroundColor:(randomColor())}} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          )
        })}
        {/* <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{label}</span>
          <span className="percentage">{percentage}</span>
        </li> */}
      </ul>
    </section> 
  )
}
// function generateRandomColor() {
//   var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor;
// }