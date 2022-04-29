import './App.css';
import {Link} from "react-router-dom";
import 'normalize.css'

function App() {
    return (
        <div className="App-general">
                <Link className="welcome-link" to="/home">WELCOME!</Link>
        </div>
    );
}

export default App;
