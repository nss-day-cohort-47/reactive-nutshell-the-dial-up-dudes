import React, {useState, useEffect} from 'react';
import {FriendListCard} from "./FriendListCard";
import {useHistory} from "react-router-dom";
import {getAllFriends, deleteFriend} from "../../modules/FriendsDataManager";

export const FriendList = () => {
    const [friends, setFriends] = useState([]);

    const history= useHistory();

    
    const handleDeleteFriend = id => {
        deleteFriend(id)
        .then(() => getAllFriends().then(setFriends));
    };
    
    const getFriend= () => {
        return getAllFriends()
        .then(friendsFromAPI=> {
            setFriends(friendsFromAPI)
        });
    };
    useEffect(() => {
        getFriend();
    }, []);

//    console.log("friend",friends)

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
                key= {friend.id}
                friend= {friend}
                handleDeleteFriend = {handleDeleteFriend}
                user= {friend.user}
                /> )
            }
            
    </div>
    </>
    );
};