import PropTypes from "prop-types";
import './Profile.scss';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                class="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{ location}</p>
        </div>

        <ul className ="stats">
            <li className="statsItem">
                <span className ="label">Followers</span>
                <span className ="quantity">{stats.followers}</span>
            </li>
            <li className="statsItem">
                <span className ="labelP">Views</span>
                <span className ="quantity">{stats.views}</span>
            </li>
            <li className="statsItem">
                <span className ="label">Likes</span>
                <span className ="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div >
        );
};
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired}).isRequired).isRequired,
};
    


export default Profile;