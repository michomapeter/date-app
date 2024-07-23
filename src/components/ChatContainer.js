import ChatHeader from '../components/ChatHeader' ;    
import ChatDisplay from '../components/ChatDisplay';
import MatchesDisplay from '../components/MatchesDisplay';




const ChatContainer = () =>{

    return (
        <div className="chat-container">
            <ChatHeader/>
            <div>
                <button className="option">Matches</button>
                <button className="option">Chats</button>
            </div>

            <MatchesDisplay/>

            <ChatDisplay/>

        </div>
    )
}
export default ChatContainer;