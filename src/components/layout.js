import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (
    <div style={{ margin: `2rem`, padding: `0 1rem`, maxWidth: `625px` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
                <h3 style={{ display: `inline` }}>@pickleat</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right`}}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
            </ul>
        </header>
        {children}
    </div>
)