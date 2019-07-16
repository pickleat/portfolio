import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `.5rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div style={{ margin: `2rem`, padding: `0 1rem`, maxWidth: `625px` }}>
        <header style={{ marginBottom: `1rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
                {/* <h3 style={{ display: `inline` }}>@pickleat</h3> */}
                <img style={{width: `3rem`, borderRadius: `50%`}} src='https://pbs.twimg.com/profile_images/769318083798310912/PGcsz-fc_400x400.jpg' alt='cartoon of my face' title='click to go home'></img>
            </Link>
            <ul style={{ listStyle: `none`, float: `right`, fontSize: `1rem`}}>
                {/* <ListLink to="/">Home</ListLink> */}
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="/contact/">Hire Me</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
            </ul>
        </header>
        {children}
    </div>
)