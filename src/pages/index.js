import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"




export default () => {
    function showLine(num){
        let lineList = [1, 2, 3, 4]
        console.log(num)
        let shortList = lineList.filter(numb => numb !== num)
        console.log(shortList)
        // const thing = document.getElementById(`line-${num}`)
        // thing.classList = ''
    }
    return (
    <Layout>
    <div className='mx-auto max-w-3xl'>
        <div className='flex h-full items-end'>
            <h1 className='ml-8 pr-10 leading-none px-2 border-solid border-t-4 border-r-4 border-l-4 border-yellow-100'>Andy Pickle</h1>
            <span className='flex items-center px-2 h-10 border-solid border-t-4 border-r-4 border-yellow-100 text-yellow-100 font-extrabold'>
                <svg className=' fill-current text-yellow-100 h-6 w-6 px-2'  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" /></svg>
                <svg className=' fill-current text-yellow-100 h-6 w-6 px-2'  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" /></svg>
                <svg className=' fill-current text-yellow-100 h-6 w-6 px-2'  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" /></svg>
            </span>
        </div>
        <div className='bg-yellow-100 text-navy px-10 pb-10'>
            <h2 className='text-3xl  font-bold lowercase tracking-wide'>frontend developer</h2>
            <div className='flex'>
                <div className='flex flex-col w-1/3 justify-around py-8'>
                    <Link className='flex items-center hover:underline' onMouseOver={() => {showLine(1)}} to="/projects">
                        <svg className="stroke-current h-4 w-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8136 23.7536L16.6049 22.5H15.334H4H2.5V24V38.5H1.5V1.5H22.7291L23.1864 4.24636L23.3951 5.5H24.666H37.5729L32.6584 15.3292L32.3229 16L32.6584 16.6708L37.5729 26.5H17.2709L16.8136 23.7536Z" stroke="#223043" strokeWidth="3"/>
                        </svg>
                        <span className="font-bold text-2xl pl-2">Projects</span>
                        <svg id='line-1' className='hidden' width="177" height="6" viewBox="0 0 177 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M177 6H0V0H177V6Z" fill="#223043"/></svg>
                        

                    </Link>
                    <Link className='flex items-center' to="/about">
                        <svg className="stroke-current h-4 w-4"  viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 20V18.5H8H4C3.33696 18.5 2.70107 18.2366 2.23223 17.7678L1.20371 18.7963L2.23223 17.7678C1.76339 17.2989 1.5 16.663 1.5 16V8C1.5 6.62843 2.62843 5.5 4 5.5H8H9.5V4V1.5H34.5V20C34.5 21.7239 33.8152 23.3772 32.5962 24.5962C31.3772 25.8152 29.7239 26.5 28 26.5H16C14.2761 26.5 12.6228 25.8152 11.4038 24.5962C10.1848 23.3772 9.5 21.7239 9.5 20ZM8 17.5H9.5V16V8V6.5H8H4H2.5V8V16V17.5H4H8ZM12.3541 34.5L6.3541 31.5H37.6459L31.6459 34.5H12.3541Z" strokeWidth="3"/></svg>
                        <span className="font-bold text-2xl pl-2">About</span>
                    </Link>
                    <Link className='flex items-center' to="/blog">
                        <svg className="stroke-current h-4 w-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.5H2.5V8V36V37.5H4H32H33.5V36V24.6213L34.5 23.6213V38.5H1.5V5.5H16.3787L15.3787 6.5H4ZM9.5 24.6213L24.6 9.52132L30.4787 15.4L15.3787 30.5H9.5V24.6213ZM29.5213 4.6L32 2.12132L37.8787 8L35.4 10.4787L29.5213 4.6Z" strokeWidth="3"/></svg>
                        <span className="font-bold text-2xl pl-2">Writing</span>
                    </Link>
                    <Link className='flex items-center' to="/contact">
                        <svg className="stroke-current h-4 w-4" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.2195 26.7202C24.2116 27.5122 23.0328 28.0688 21.7696 28.3416C20.1101 28.6999 18.3812 28.5518 16.8069 27.9166C15.2325 27.2813 13.885 26.1881 12.9388 24.7785C11.9927 23.3688 11.4915 21.7077 11.5 20.01H11.5V20.0024C11.5 18.4239 11.9396 16.8765 12.7695 15.5337C13.5994 14.1909 14.7868 13.1058 16.1987 12.3998C17.6106 11.6939 19.1912 11.395 20.7634 11.5368C22.3355 11.6785 23.8372 12.2553 25.1 13.2024L27.5 15.0024V12.0024V11.5024H28.5V23.0024C28.5 23.8746 28.7532 24.7207 29.2189 25.4424H27.2H27.18H25.163C25.2103 25.3975 25.2571 25.352 25.3033 25.3057C26.7098 23.8992 27.5 21.9916 27.5 20.0024C27.5 18.0133 26.7098 16.1057 25.3033 14.6991C23.8968 13.2926 21.9891 12.5024 20 12.5024C18.0109 12.5024 16.1032 13.2926 14.6967 14.6991C13.2902 16.1057 12.5 18.0133 12.5 20.0024C12.5 21.9916 13.2902 23.8992 14.6967 25.3057C16.1032 26.7123 18.0109 27.5024 20 27.5024C21.6977 27.5024 23.3361 26.9268 24.6542 25.8836L25.2195 26.7202ZM31.1512 28.2103C30.4205 27.9527 29.7569 27.5452 29.2004 27.0189L29.9107 26.2745C30.7448 27.062 31.8497 27.5024 33 27.5024C34.1935 27.5024 35.3381 27.0283 36.182 26.1844C37.0259 25.3405 37.5 24.1959 37.5 23.0024V20.0024V20.0014C37.4973 16.1942 36.2531 12.4918 33.9561 9.4556C31.6591 6.41943 28.4347 4.21513 24.7718 3.17702C21.1089 2.13891 17.2074 2.32362 13.6589 3.70313C10.1105 5.08265 7.10873 7.58171 5.10886 10.8213C3.109 14.0609 2.22015 17.8643 2.57711 21.6547C2.93407 25.4451 4.51737 29.0157 7.08689 31.8249C9.65641 34.6342 13.072 36.5289 16.8156 37.2217C20.0662 37.8233 23.4102 37.4901 26.4636 36.2765L26.9177 37.1797C23.6701 38.4891 20.1068 38.8537 16.6431 38.2146C12.6849 37.4843 9.07297 35.483 6.35502 32.5143C3.63708 29.5456 1.96145 25.7715 1.58229 21.7645C1.20313 17.7574 2.14113 13.736 4.25402 10.3103C6.3669 6.88447 9.53939 4.24122 13.2903 2.78142C17.0412 1.32161 21.1658 1.12491 25.0386 2.22114C28.9114 3.31737 32.3211 5.64672 34.7504 8.85588C37.1794 12.0647 38.4958 15.978 38.5 20.0024H38.48L38.48 23.0024L38.48 23.0069C38.4835 24.1858 38.1081 25.3346 37.4092 26.284C36.7103 27.2334 35.7248 27.9331 34.5981 28.2799C33.4713 28.6267 32.263 28.6023 31.1512 28.2103Z" strokeWidth="3"/></svg>
                        <span className="font-bold text-2xl pl-2">Contact</span>
                    </Link>
                </div>
                <div className='flex-col w-2/3 p-4 mt-10  border-navy border-solid border-4 '>
                    <p className=''><b>Something about me:</b><br />I'm passionate about building things on the web that people 
                        actually enjoy using. I love specialty coffee, listening to music, and soccer. If you care
                        what I think you can read my <Link to="blog/">blog</Link>. If you want to see what I've built 
                        check out my <Link to="/projects/">projects</Link>, if you're interested in hiring me, check 
                        out my resume, or if you want to work together, get in <Link to='/contact'>touch!</Link>
                    </p>
                    <p className=''>Currently, I'm working on two projects. 
                        <ul>
                            <li>
                                <a href="https://protege.dev/">Protege.dev</a> a job-board for junior remote devs! 
                            </li>
                            <li>
                                <a href="https://coffeecodex.co/">CoffeeCodex.co</a>. A site for coffee-lovers like myself to track all the different origins of coffee they've had.
                            </li>
                        </ul>  
                    </p>
                </div>
            </div>
        </div>
    </div>
    </Layout>
    )
    }
