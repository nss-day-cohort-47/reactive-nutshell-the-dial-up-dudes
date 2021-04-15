import React from 'react'

export const FriendListCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="friend_card">
            <div className="friendcard-content">
           <div className= "profilepic">{friend.user?.image}</div>
                <h3 className="friend__name">Name: {friend.user?.name}</h3>
                
                <button type="button" onClick={() =>
                handleDeleteFriend(friend.id)}>Baiii</button>
            </div>
        </div>
    )
}