import './ProfileLinks.css';

function ProfileLinks () {
    return (
        <div id='profile-links-div'>
            <img src={'https://avatars.githubusercontent.com/u/88858893?v=4'} alt=''></img>
            <p><i className="fab fa-github"></i> <a className='profile-link' href='https://github.com/twincarlos' target="_blank">twincarlos</a></p>
            <p><i className="fab fa-linkedin"></i> <a className='profile-link' href='https://www.linkedin.com/in/carlos-rodriguez-a9a7b2214/' target="_blank">twincarlos</a></p>
        </div>
    );
}

export default ProfileLinks;
