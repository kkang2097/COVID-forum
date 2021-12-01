import React from 'react';

function Header() {



//Rendering portion
  return(
    <div className= "Header">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">bob</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">not disabled</a>
      </li>
    </ul>
    </div>

  );
}


export default Header;
