import React from "react"
import { Link } from "gatsby"
import '../style/tailwind.css'
// import background from '../images/topography.svg'
import background from '../images/topography-4.svg'
import FlyoutMenu from "../components/FlyoutMenu.js"

// const Footer = () => {
//     return(<footer className="text-center text-yellow-100 text-xs">© Andy Pickle 2020</footer>)   
// }

const Layout = ({children}) => {
    return(
        <div className='mx-auto bg-navy bg-center bg-repeat' style={{backgroundImage: `url(${background})`}}>
            <Link className='flex items-center hover:text-blue-600 hover:underline pt-4 pl-4' to='/'>
                <svg className='fill-current text-yellow-100 h-6 w-6' viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1954 50H7.57329V25H0L25.2443 0L50.4886 25H42.9153V50H30.2932V35H20.1954V50Z" /></svg>
            </Link>  
            <FlyoutMenu />
            <div className='mx-auto w-full md:max-w-3xl py-32'>
            {children}
            </div>
        </div>
    )
}
export default Layout