import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //const { login, avatar_url, html_url } = props.user;
  //console.log(login, avatar_url, html_url);
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="DP"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className="btn btn-dark btn-sm my-1"
          style={{ borderRadius: "15px" }}
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
