import React from "react";
import "./FriendList.css";
import { Link } from "react-router-dom";
import { firstLetterCase} from "../../modules/helpers";

export const FriendsListCard = ({ friends}) => {
    return(
        <div className= "friend_card">
            <div className= "friendcard_content">
                <picture>
                    <img src={require('./images/AutumnF').default} alt="Autumn"/>
                </picture>
                <h3> Name: <span className="card-friendname">
                    {firstLetterCase(friends.name)}
                    </span></h3>
                    <Link to={`/friends/${friends.userId}`}></Link>
                    <button className="addfriend">Add Friend</button>
              </div>
        </div>
    );
}