import React from "react"
import { Link } from "gatsby"
import '../style/tailwind.css'
import background from '../images/topography.svg'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Footer = () => {
    return(<footer className="text-center text-yellow-100 text-xs">© Andy Pickle 2020</footer>)   
}

export default ({children}) => (
    <div className='mx-auto h-screen bg-cover bg-center' style={{backgroundImage: `url(${background})`}}>
        <header>
            <Link to="/" >
                <img style={{ width: `3rem`, borderRadius: `50%`}} src='https://pbs.twimg.com/profile_images/769318083798310912/PGcsz-fc_400x400.jpg' alt='cartoon of my face' title='click to go home'></img>
            </Link>
            <ul>
                {/* <ListLink to="/">Home</ListLink> */}
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="/contact/">Hire Me</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
            </ul>
        </header>
        {children}
        <Footer />
    </div>
)


