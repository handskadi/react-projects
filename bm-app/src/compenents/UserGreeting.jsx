import PropTypes from 'prop-types'

const UserGreeting = (props) => {
  
    return (props.isLoggedin? <h2 className='welcome-message'>Welcome {props.username}</h2> : <h2 className='login-message'> Please Log in to continue</h2> );
}

UserGreeting.PropTypes = {
    username: PropTypes.string,
    isLoggedin: PropTypes.bool
}

export default UserGreeting