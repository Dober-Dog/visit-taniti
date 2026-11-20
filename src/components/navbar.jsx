import { Link } from 'react-router-dom'

export default function Navbar(){

    return (
        <div className='navbar'>
            <Link to='/'>TANITI</Link>
            <div className='vert'></div>
            <Link to='/explore'>Explore</Link>
            <Link to='/stay'>Stay</Link>
            <Link to='/eat'>Eat</Link>
            <Link to='/plan'>Plan Your Visit</Link>
        </div>
    )
}