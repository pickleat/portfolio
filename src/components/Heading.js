import React from "react"

function Heading(props){


    return(
        <div className='flex h-full items-end'>
            <h1 className='ml-8 pr-10 leading-none px-2 border-solid border-t-4 border-r-4 border-l-4 border-yellow-100'>{props.title || 'No Title'}</h1>
            <span className='flex items-center px-2 h-10 border-solid border-t-4 border-r-4 border-yellow-100 text-yellow-100 font-extrabold'>
                <svg className=' fill-current text-yellow-100 h-6 w-6 px-2'  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" /></svg>
                <svg className=' fill-current text-yellow-100 h-6 w-6 px-2'  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" /></svg>
                <svg className=' fill-current text-yellow-100 h-6 w-6 px-2'  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" /></svg>
            </span>
        </div>

    )
}
export default Heading