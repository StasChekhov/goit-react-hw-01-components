import s from './TransactionHistory.module.css'

export const TransactionHistory = (props) => {
    const { items } = props;
    return ( 
        <table className={s.table}>
            <thead className={s.header}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={s.tbody}>
                <tr className={s.tr}>
                    <td>Invoice</td>
                    <td>125</td>
                    <td>USD</td>
                </tr>
                <tr className={s.tr}>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={s.tr}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
