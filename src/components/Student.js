import Comp from './Comp';
import propTypes from 'prop-types'

 function Student(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name ={props.name} />
    </div>
  )
}

Student.prototypes = {
    name:propTypes.string,
    age:propTypes.number
}

// Student.defaultProps = {
//     name:"Name",
//     age: 0
// }

export default Student;