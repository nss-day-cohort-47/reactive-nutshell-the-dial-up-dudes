import React, {useState, useEffect} from 'react';
import {FriendListCard} from "./FriendListCard";
import {useHistory} from "react-router-dom";
import {getAllFriends, deleteFriend} from "../../modules/FriendsDataManager";

export const FriendList = () => {
    const [friends, setFriends] = useState([]);

    const history= useHistory();

    const getFriend= () => {
        return getAllFriends()
        .then(friendsFromAPI=> {
            setFriends(friendsFromAPI)
        });
    };

    const handleDeleteFriend = userId => {
        deleteFriend(userId)
        .then(() => getAllFriends().then(setFriends));
    };

    useEffect(() => {
        getFriend();
    }, []);
    console.log(friends)
    return(
        <>
        <section className= "friendsection-content">
            <button type="button"
            className="btn"
            onClick={() =>{history.push("/friends/create")}}> Add Friend</button>
        </section>
        <div className="container-friendcards">
            {friends.map(friend =>
                <FriendListCard
                key= {friend.userId}
                friend= {friend}
                handleDeleteFriend = {handleDeleteFriend}
                /> )
            }
            
    </div>
    </>
    );
};