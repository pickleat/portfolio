
import React from 'react';
import { Link } from 'gatsby'

const BackButton = (props) => {
    const linkTo = props.to || ''
    const text = props.text || 'back back back'
    return(
        <Link to={`/${linkTo}`} className='w-auto mt-2 h-8 inline-flex items-center bg-navy rounded-full px-2 text-yellow-50 hover:underline'>
              <svg className='fill-current h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/></svg>
              <span className='px-1'>{text}</span>
        </Link>

    )
}
export default BackButton