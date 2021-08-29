import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
          <h1>Task Tracker : {props.title}</h1> 
          <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Missing Parameter',
}

// CSS in JS
// const myHeadingStyle = {
//     color: 'yellow', 
//     backgroundColor:'green',
// }

export default Header
