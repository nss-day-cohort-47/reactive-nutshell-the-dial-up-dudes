import React from 'react';
import "./FriendListCard.css";

export const FriendListCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="friend_card">
            <div className="friendcard-content">
           <img src={friend.user?.image} alt="friend"/>
                <h3 className="friend__name">Name: {friend.user?.name}</h3>
                
                <button type="primary btn" onClick={() =>
                handleDeleteFriend(friend.id)}>See ya later!</button>
            </div>
        </div>
    )
}