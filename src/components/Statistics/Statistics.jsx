import PropTypes from "prop-types";
import './Statistics.scss';

const Statistics = ({ stats }) => {
    return (
<section className="statistics">
        <h2 className="titleS">Upload stats</h2>
<ul className="stat-list">
            {stats.map(stat => (
        <li className="itemS"
            key={stat.id}
        >
            <span className="labelS">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
        </li>
        ))}
            </ul>
</section>
    );
};

Statistics.propTypes = {
stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
).isRequired,
};
export default Statistics;