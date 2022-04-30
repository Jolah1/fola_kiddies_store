import React, {useState} from 'react';
import Tweet from './Tweet';


function App() {
    
    const [users, setUsers] = useState([
        {name: "okunlade", message: "Hello pretty queen"},
        {name: "omojola", message: "my first react project"},
        {name: "fola", message: "i am awesome"},
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



