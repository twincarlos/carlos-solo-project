import { NavLink } from 'react-router-dom';

import './WhereToGo.css';

function WhereToGo() {
    return (
        <div id='where-to-go'>
            {/* <a href='/spots'>I'm rich</a> */}
            <NavLink id='im-rich-button' to="/spots">I'm rich</NavLink>
            <h1>Not sure where to go?</h1>
            <img src='https://www.sbidawards.com/wp-content/uploads/2020/08/0c2107c787a7815480dd1c833d285ef2a7c89183.jpg' alt=''/>
        </div>
    );
}

export default WhereToGo;
