import { PrettyChatWindow } from 'react-chat-engine-pretty' 
const ChatsPage = (props) => {
    return ( 
        <div style = {{ height : '100vh' }}>
            <PrettyChatWindow
            projectId = '57b0de1b-a2c6-4b04-922f-6c8e423ab084'
            username = {props.user.username}
            secret = {props.user.secret}
            style={{height : '100%'}}
        />
        </div>
    )
}

export default ChatsPage