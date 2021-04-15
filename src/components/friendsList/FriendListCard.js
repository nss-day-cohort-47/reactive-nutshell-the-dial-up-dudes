import React from 'react'

export const FriendListCard = ({ friend, handleDeleteFriend, user }) => {
    return (
        <div className="friend_card">
            <div className="friendcard-content">
                <h3 className="friend__name">Name: {friend.user?.name}</h3>
                <p className="friend__email">Email: {friend.user?.email}</p>
                <button type="button" onClick={() =>
                handleDeleteFriend(friend.id)}>Delete Friend</button>
            </div>
        </div>
    )
}