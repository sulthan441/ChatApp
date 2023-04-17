import { ChatEngine } from "react-chat-engine";
import './App.css'

import ChatFeed from "./components/ChatFeed"
const App = () => {
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID="f510caa1-fc6a-43d3-b4bd-0b9e2c87301f"
                userName="mohammedsulthan"
                userSecret="123456"/>
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                <ChatFeed/>
        </div>
    )
}
export default App