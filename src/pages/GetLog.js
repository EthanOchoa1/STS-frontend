
import { useState, useEffect } from 'react'
import { LogCard } from '../components/LogCard'

const GetLog = () => {
const [ logs, setLogs ] = useState([])

useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(res => res.json())
    .then(data => setLogs(data))
    .catch(err => console.error(err))
}, [])

const allLogs = logs.map ((log) => {
    return <LogCard key={log._id} log={log} />
})

return(
    <div className ='getit'>
        <h1>Logs</h1>
        <h2> These are meant for you to come back and learn from to help you overcome whatever you run into in the future</h2>
        <div className='logs'>{allLogs}</div>
    </div>
)



}
export default GetLog