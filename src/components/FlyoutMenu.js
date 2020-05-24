import React, {useState} from "react"
import { Link } from "gatsby"

function FlyoutMenu({props}){
    const [menuOpen, setMenuOpen] = useState(false)

    // need to implement clicking anywhere outside the bg-yellow-100 will also close the menu
    if(menuOpen){
        return(
            <div id='flyout-menu' className='absolute top-0 right-0 pr-4 pt-4 bg-yellow-100 w-full sm:w-1/2 lg:w-1/3 h-full border-navy border-solid border-4 text-navy'>
                <nav className='flex flex-col'>
                    <button className='flex justify-end' onClick={() => {setMenuOpen(false)}}>
                        <svg className='h-6 w-6 fill-current text-navy' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                    </button>
                    <div className='flex flex-col font-bold text-2xl pl-6'>
                        <Link className='flex items-center hover:text-blue-600 hover:underline pt-2' to='/'>
                            <svg className='fill-current h-6 w-6' viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1954 50H7.57329V25H0L25.2443 0L50.4886 25H42.9153V50H30.2932V35H20.1954V50Z" /></svg>
                            <span className='pl-2'>Home</span>
                        </Link>                        
                        <Link className='flex items-center hover:text-blue-600 hover:underline pt-2' to='/about'>
                            <svg className='fill-current h-6 w-6' viewBox="0 0 50 47"xmlns="http://www.w3.org/2000/svg"><path d="M10 26.4462H5C3.67392 26.4462 2.40215 25.9077 1.46447 24.9492C0.526784 23.9907 0 22.6906 0 21.3351V11.1128C0 8.30174 2.25 6.00174 5 6.00174H10V0.890625H45V26.4462C45 29.1573 43.9464 31.7573 42.0711 33.6744C40.1957 35.5914 37.6522 36.6684 35 36.6684H20C17.3478 36.6684 14.8043 35.5914 12.9289 33.6744C11.0536 31.7573 10 29.1573 10 26.4462ZM10 21.3351V11.1128H5V21.3351H10ZM5 41.7795V39.224H50V41.7795L40 46.8906H15L5 41.7795Z" /></svg>
                            <span className='pl-2'>About</span>
                        </Link>                        
                        <Link className='flex items-center hover:text-blue-600 hover:underline pt-2' to='/projects'>
                            <svg className='fill-current h-6 w-6' viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1675 30.3573H5V50.3573H0V0.3573H30L30.8325 5.3573H50L42.5 20.3573L50 35.3573H20L19.1675 30.3573Z" /></svg>
                            <span className='pl-2'>Projects</span>
                        </Link>                        
                        <Link className='flex items-center hover:text-blue-600 hover:underline pt-2' to='/blog'>
                            <svg className='fill-current h-6 w-6' viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10.4274V45.4274H40V30.4274L45 25.4274V50.4274H0V5.42737H25L20 10.4274H5ZM30.75 9.67737L40.75 19.6774L20 40.4274H10V30.4274L30.75 9.67737ZM34.25 6.17737L40 0.427368L50 10.4274L44.25 16.1774L34.25 6.17737Z" /></svg>
                            <span className='pl-2'>Blog</span>
                        </Link>                        
                        <Link className='flex items-center hover:text-blue-600 hover:underline pt-2' to='/contact'>
                            <svg className='fill-current h-6 w-6' viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 34.2152C32.2758 36.022 30.0489 37.2698 27.6077 37.7969C25.1664 38.324 22.6231 38.1062 20.307 37.1716C17.9909 36.2371 16.0086 34.6289 14.6167 32.5552C13.2249 30.4815 12.4875 28.0377 12.5 25.5402C12.5 23.2188 13.1464 20.9432 14.3669 18.9685C15.5873 16.9938 17.3335 15.398 19.4098 14.3598C21.4862 13.3217 23.8106 12.8822 26.1226 13.0907C28.4346 13.2992 30.6429 14.1473 32.5 15.5402V13.0402H37.5V29.2902C37.5 30.2847 37.8951 31.2386 38.5984 31.9418C39.3016 32.6451 40.2555 33.0402 41.25 33.0402C42.2446 33.0402 43.1984 32.6451 43.9017 31.9418C44.6049 31.2386 45 30.2847 45 29.2902V25.5402C44.9969 21.1891 43.575 16.9578 40.9498 13.4879C38.3247 10.018 34.6396 7.49877 30.4535 6.31236C26.2673 5.12595 21.8084 5.33705 17.7531 6.91363C13.6977 8.49022 10.2671 11.3463 7.98156 15.0487C5.696 18.7511 4.68017 23.0978 5.08813 27.4297C5.49608 31.7616 7.30557 35.8423 10.2422 39.0529C13.1788 42.2635 17.0823 44.4288 21.3607 45.2206C25.6391 46.0123 30.059 45.3873 33.95 43.4402L36.2 47.9152C31.3372 50.3519 25.8125 51.1363 20.4636 50.1493C15.1148 49.1623 10.2337 46.4579 6.56084 42.4462C2.88794 38.4344 0.623577 33.3343 0.1112 27.9194C-0.401177 22.5044 0.866391 17.0701 3.72164 12.4407C6.57689 7.81124 10.864 4.23928 15.9328 2.26657C21.0016 0.293863 26.5755 0.0280453 31.809 1.50944C37.0425 2.99083 41.6501 6.1386 44.9329 10.4753C48.2158 14.812 49.9948 20.1011 50 25.5402H49.55H49.975V29.2902C49.9806 31.1657 49.3834 32.9934 48.2715 34.5038C47.1596 36.0141 45.5918 37.1273 43.7992 37.679C42.0067 38.2308 40.0843 38.192 38.3155 37.5683C36.5467 36.9447 35.0251 35.7692 33.975 34.2152H34ZM25 33.0402C26.9891 33.0402 28.8968 32.25 30.3033 30.8435C31.7098 29.437 32.5 27.5293 32.5 25.5402C32.5 23.5511 31.7098 21.6434 30.3033 20.2369C28.8968 18.8304 26.9891 18.0402 25 18.0402C23.0109 18.0402 21.1032 18.8304 19.6967 20.2369C18.2902 21.6434 17.5 23.5511 17.5 25.5402C17.5 27.5293 18.2902 29.437 19.6967 30.8435C21.1032 32.25 23.0109 33.0402 25 33.0402Z" /></svg>
                            <span className='pl-2'>Contact</span>
                        </Link>                        
                    </div>
                </nav>
            </div>
        )
    }
    return(
        <div className='absolute top-0 right-0 pr-4 pt-4'>
                <button onClick={() => {setMenuOpen(true)}} >
                    <svg className='h-8 w-8 fill-current text-yellow-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
        </div>
    )
}
export default FlyoutMenu

