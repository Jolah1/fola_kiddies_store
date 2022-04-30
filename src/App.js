import React, {useState} from 'react';
import Tweet from './Tweet';


function App() {
    
    const [users, setUsers] = useState([
        {name: "Okunlade", message: "Hello pretty queen"},
        {name: "Omojola", message: "My first react project"},
        {name: "Fola", message: "I am awesome"},
    ]);

    return (
        <div className='app'>
{users.map(user =>(
<Tweet name={user.name} message={user.message} />
))}
        </div>
    );
}
export default App;



