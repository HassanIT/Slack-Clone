import React, { useState } from 'react';
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from './firebase';

function ChatInput({ channelName, channelId }) {
    const [input ,setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            //there needs to be an edit with the collection below as it does not store the messages. 
            db.collection('rooms').doc(channelId).collection({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimeStamp,
            user: user.displayName,
            userImage: user.photoURL,
        });
    }
    setInput("");
    };

    return (
        <div className='chatInput'>
            <form>
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    );
}

export default ChatInput;
