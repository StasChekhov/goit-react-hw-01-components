import './Statistics.css'


export const Statistics = (props) => {
    const { stats } = props;

    // тут статс это массив тот что в джсон
    return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(({id, label, percentage}) => {
          return (
            <li key={id} className="item">
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