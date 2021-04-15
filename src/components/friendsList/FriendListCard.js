import React from 'react'

export const FriendListCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="friend_card">
            <div className="friendcard-content">
            <img  src={require("./bacebook.jpg").default} alt="friend_image"/>
                <h3 className="friend__name">Name: {friend.user?.name}</h3>
                
                <button type="button" onClick={() =>
                handleDeleteFriend(friend.id)}>Baiii</button>
            </div>
        </div>
    )
}