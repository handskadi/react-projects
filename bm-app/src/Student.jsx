import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
        <h2>Student</h2>
        <p>Name : {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>

  )
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
}
export default Student