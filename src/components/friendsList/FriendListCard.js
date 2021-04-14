import React from "react";
import "./FriendList.css";
import { Link } from "react-router-dom";
import { firstLetterCase} from "../../modules/helpers";

export const FriendListCard = ({ friend}) => {
    return (
        <div className= "friend_card">
            <div className= "friendcard_content">
                <picture>
                    <img src={require('./AutumnF.png').default} alt="Autumn"/>
                </picture>
                <h3> Name: <span className="card-friendname">
                    {firstLetterCase(friend.name)}
                    </span></h3>
                    <Link to={`/friends/${friend.userId}`}></Link>
                    <button className="addfriend">Add Friend</button>
              </div>
        </div>
    );
}