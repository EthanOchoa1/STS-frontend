// import {Link} from 'react-router-dom'



export const LogCard = ({log}) => {
    return (
        <div state={log} to='/Single-log' className='log-item'>

        <h4> { log.anxiety } </h4>
        <p> { log.what } </p>
        <p> { log.solution } </p>
        </div>
)}