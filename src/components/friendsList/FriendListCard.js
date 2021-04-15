import React from "react";
import "./FriendList.css";
// import { Link } from "react-router-dom";


export const FriendListCard = ({ friend, handleDeleteFriend}) => {
    console.log("friend", friend) 
    return (
        
            <div className= "friend_card">
                <div className= "friendcard_content">
                    <picture>
                    <img src={require('./AutumnF.png').default} alt="Autumn"/>
                </picture>
                 {/* <h3> Name: <span className="card-friendname">
                    {friend.name}
                    </span></h3> 
come back to this: need to do something with the data/fetch call!!! confused 
                    <Link to={`/friends/${friend.id}`}></Link> */}

                    <button type= "button" onClick={() => handleDeleteFriend(friend.id)}>Baiiiii</button>
              </div>
        </div>
    );
}
