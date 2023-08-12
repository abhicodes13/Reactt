import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Serverj from './server/Serverj'
import MessageExampleInfo from './server/Message'


export default function App() {
  return (
    <div>
      <MessageExampleInfo />
      <Serverj/>
    </div>
  )
}
