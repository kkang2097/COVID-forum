import JSONDATA from "./MOCK_DATA.json";
import {useState} from 'react'

function Feed() {
  const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
        <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}} />
    {JSONDATA.filter((val) => {
      if (searchTerm == "") {
        return val
      } else if (val.id.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((val, key) => {
        return (
          <div className = "user" key = {key}>
            <p>{val.id}</p>
          </div>
      );
    })}
    </div>
  );
}

export default Feed;