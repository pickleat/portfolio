import React from "react"
import { Link, graphql } from "gatsby"
import background from '../images/topography-4.svg'
import Heading from "../components/H1HeadingAnd3Dots"
import H2Heading from "../components/H2Heading"
import LinkedIn from '../images/icons/linkedin.svg'

// The Index / Homepage uses a different layout than the other pages because it is centered both horizontally and vertially. 

export default ({data}) => {
    function showLine(num){
        let lineList = [1, 2, 3, 4]
        let shortList = lineList.filter(numb => numb !== num)
        const link = document.getElementById(`line-${num}`)
        link.classList = 'pl-2'
        const text = document.getElementById(`text-${num}`)
        text.classList = 'pl-2'
        shortList.forEach(num => {
            document.getElementById(`line-${num}`).classList = 'hidden'
            document.getElementById(`text-${num}`).classList = 'hidden'
        })
    }
    const projects = data.projects.edges
    const blogs = data.blogs.edges
    return (
    <div className='mx-auto bg-navy h-screen bg-center bg-repeat' style={{backgroundImage: `url(${background})`}}>
        <div className='mx-auto w-full md:max-w-3xl py-16 sm:py-32'>
            <Heading title='Andy Pickles'/>
            <div className='bg-yellow-100 text-navy px-10 pb-10 w-full md:max-w-6xl'>
                <H2Heading text='frontend developer'/>
                <div className='flex'>
                    <div className='hidden sm:flex flex-col w-1/3 justify-around py-8'>
                        <Link className='flex items-center hover:underline' onMouseOver={() => {showLine(1)}} onFocus={() => {showLine(1)}} to="/about">
                            <svg className="flex-shrink-0 stroke-current h-6 w-6"  viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 20V18.5H8H4C3.33696 18.5 2.70107 18.2366 2.23223 17.7678L1.20371 18.7963L2.23223 17.7678C1.76339 17.2989 1.5 16.663 1.5 16V8C1.5 6.62843 2.62843 5.5 4 5.5H8H9.5V4V1.5H34.5V20C34.5 21.7239 33.8152 23.3772 32.5962 24.5962C31.3772 25.8152 29.7239 26.5 28 26.5H16C14.2761 26.5 12.6228 25.8152 11.4038 24.5962C10.1848 23.3772 9.5 21.7239 9.5 20ZM8 17.5H9.5V16V8V6.5H8H4H2.5V8V16V17.5H4H8ZM12.3541 34.5L6.3541 31.5H37.6459L31.6459 34.5H12.3541Z" strokeWidth="3"/></svg>
                            <span className="font-bold text-2xl pl-2">About</span>
                            <svg id='line-1' className='pl-2' width="177" height="6" viewBox="0 0 177 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M177 6H0V0H177V6Z" fill="#223043"/></svg>
                        </Link>
                        <Link className='flex items-center hover:underline' onMouseOver={() => {showLine(2)}} onFocus={() => {showLine(2)}} to="/projects">
                            <svg className="flex-shrink-0 stroke-current h-6 w-6" viewBox="0 0 40 40" fill="none">
                                <path d="M16.8136 23.7536L16.6049 22.5H15.334H4H2.5V24V38.5H1.5V1.5H22.7291L23.1864 4.24636L23.3951 5.5H24.666H37.5729L32.6584 15.3292L32.3229 16L32.6584 16.6708L37.5729 26.5H17.2709L16.8136 23.7536Z" stroke="#223043" strokeWidth="3"/>
                            </svg>
                            <span className="font-bold text-2xl pl-2">Projects</span>
                            <svg id='line-2' className='hidden' width="177" height="6" viewBox="0 0 177 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M177 6H0V0H177V6Z" fill="#223043"/></svg>
                        </Link>
                        <Link className='flex items-center hover:underline' onMouseOver={() => {showLine(3)}} onFocus={() => {showLine(3)}} to="/blog">
                            <svg className="flex-shrink-0 stroke-current h-6 w-6" viewBox="0 0 40 40" fill="none"><path d="M4 6.5H2.5V8V36V37.5H4H32H33.5V36V24.6213L34.5 23.6213V38.5H1.5V5.5H16.3787L15.3787 6.5H4ZM9.5 24.6213L24.6 9.52132L30.4787 15.4L15.3787 30.5H9.5V24.6213ZM29.5213 4.6L32 2.12132L37.8787 8L35.4 10.4787L29.5213 4.6Z" strokeWidth="3"/></svg>
                            <span className="font-bold text-2xl pl-2">Blog</span>
                            <svg id='line-3' className='hidden' width="177" height="6" viewBox="0 0 177 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M177 6H0V0H177V6Z" fill="#223043"/></svg>
                        </Link>
                        <Link className='flex items-center hover:underline' onMouseOver={() => {showLine(4)}} onFocus={() => {showLine(4)}} to="/contact">
                            <svg className="flex-shrink-0 stroke-current h-6 w-6" viewBox="0 0 40 41" fill="none"><path d="M25.2195 26.7202C24.2116 27.5122 23.0328 28.0688 21.7696 28.3416C20.1101 28.6999 18.3812 28.5518 16.8069 27.9166C15.2325 27.2813 13.885 26.1881 12.9388 24.7785C11.9927 23.3688 11.4915 21.7077 11.5 20.01H11.5V20.0024C11.5 18.4239 11.9396 16.8765 12.7695 15.5337C13.5994 14.1909 14.7868 13.1058 16.1987 12.3998C17.6106 11.6939 19.1912 11.395 20.7634 11.5368C22.3355 11.6785 23.8372 12.2553 25.1 13.2024L27.5 15.0024V12.0024V11.5024H28.5V23.0024C28.5 23.8746 28.7532 24.7207 29.2189 25.4424H27.2H27.18H25.163C25.2103 25.3975 25.2571 25.352 25.3033 25.3057C26.7098 23.8992 27.5 21.9916 27.5 20.0024C27.5 18.0133 26.7098 16.1057 25.3033 14.6991C23.8968 13.2926 21.9891 12.5024 20 12.5024C18.0109 12.5024 16.1032 13.2926 14.6967 14.6991C13.2902 16.1057 12.5 18.0133 12.5 20.0024C12.5 21.9916 13.2902 23.8992 14.6967 25.3057C16.1032 26.7123 18.0109 27.5024 20 27.5024C21.6977 27.5024 23.3361 26.9268 24.6542 25.8836L25.2195 26.7202ZM31.1512 28.2103C30.4205 27.9527 29.7569 27.5452 29.2004 27.0189L29.9107 26.2745C30.7448 27.062 31.8497 27.5024 33 27.5024C34.1935 27.5024 35.3381 27.0283 36.182 26.1844C37.0259 25.3405 37.5 24.1959 37.5 23.0024V20.0024V20.0014C37.4973 16.1942 36.2531 12.4918 33.9561 9.4556C31.6591 6.41943 28.4347 4.21513 24.7718 3.17702C21.1089 2.13891 17.2074 2.32362 13.6589 3.70313C10.1105 5.08265 7.10873 7.58171 5.10886 10.8213C3.109 14.0609 2.22015 17.8643 2.57711 21.6547C2.93407 25.4451 4.51737 29.0157 7.08689 31.8249C9.65641 34.6342 13.072 36.5289 16.8156 37.2217C20.0662 37.8233 23.4102 37.4901 26.4636 36.2765L26.9177 37.1797C23.6701 38.4891 20.1068 38.8537 16.6431 38.2146C12.6849 37.4843 9.07297 35.483 6.35502 32.5143C3.63708 29.5456 1.96145 25.7715 1.58229 21.7645C1.20313 17.7574 2.14113 13.736 4.25402 10.3103C6.3669 6.88447 9.53939 4.24122 13.2903 2.78142C17.0412 1.32161 21.1658 1.12491 25.0386 2.22114C28.9114 3.31737 32.3211 5.64672 34.7504 8.85588C37.1794 12.0647 38.4958 15.978 38.5 20.0024H38.48L38.48 23.0024L38.48 23.0069C38.4835 24.1858 38.1081 25.3346 37.4092 26.284C36.7103 27.2334 35.7248 27.9331 34.5981 28.2799C33.4713 28.6267 32.263 28.6023 31.1512 28.2103Z" strokeWidth="3"/></svg>
                            <span className="font-bold text-2xl pl-2">Contact</span>
                            <svg id='line-4' className='hidden' width="177" height="6" viewBox="0 0 177 6" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M177 6H0V0H177V6Z" fill="#223043"/></svg>
                        </Link>
                    </div>
                    <div className='flex-col h-64 mt-10 font-normal w-full border-solid border-l-4 border-navy '>

                        <div id='text-1' className='pl-2'>
                            <h3 className='text-center text-2xl font-bold'><span role='img' aria-label='hand-wave-emoji'>👋🏻</span> Hi, I'm Andy! </h3>
                            <p>
                                I'm a developer from Little Rock, Arkansas. I used to co-own a coffee company but left to become a web-developer.<br />
                                Personally, I love my family, making coffee and cocktails, listening to music, and watching soccer.<br />
                            </p>
                            <ul className='pl-2 py-2 mt-2 list-disc list-inside'>
                                <li>Read my <Link className='blue-link' to="blog/">blog</Link>.<br /></li>
                                <li>See what I've <Link className='blue-link' to="/projects/">built</Link>.<br /></li>
                                <li>Want to work together? Get in <Link className='blue-link' to='/contact'>touch!</Link></li>
                            </ul>
                        </div>
                        <div id='text-2' className='hidden'>
                            <h3 className='text-center text-2xl font-bold'>Projects</h3>
                            <p className='pb-2'>Here's my most recent projects.</p>
                            <ul className='list-inside list-disc flex-grow'>
                                {projects.map(({node}, index) => (
                                    <li className='pl-2' key={node.id}>
                                        <Link to={node.fields.slug} className='blue-link'>{node.frontmatter.title}</Link>
                                        <p></p>
                                    </li>
                                ))}
                            </ul> 
                            <div className='text-right'>
                                <Link className='blue-link' to='/projects'>See all Projects</Link>
                            </div>
                        </div>
                        <div id='text-3' className='hidden'>
                            <h3 className='text-center text-2xl font-bold'>Blog</h3>
                            <p className='pb-2'>Here's my most recent posts.</p>
                            <ul className='list-inside list-disc flex-grow'>
                            {blogs.map(({ node }, index) => (
                                <li className='pl-2' key={node.id}>
                                    <Link className='blue-link' to={node.fields.slug}>{node.frontmatter.title}</Link>
                                </li>
                            ))}
                            </ul>
                            <div className='text-right'>
                                <Link className='blue-link' to='/blog'>See all Posts</Link>
                            </div>
                        </div>
                        <div id='text-4' className='hidden'>
                            <h3 className='flex-auto w-full text-center text-2xl font-bold'>Contact</h3>
                            <p>I'm most active on Twitter, but feel free to connect with me any on of these platforms.</p>
                            <ul className='my-4'>
                                <li>
                                    <a href='https://twitter.com/pickleat' className='pl-2 flex items-center'>
                                        <svg className='h-4 w-4' viewBox="0 0 25 21" fill="none"><path d="M7.862 20.3138C17.296 20.3138 22.456 12.4978 22.456 5.7198C22.456 5.4978 22.456 5.2768 22.441 5.0568C23.4448 4.33071 24.3114 3.43168 25 2.4018C24.0639 2.8166 23.0708 3.08863 22.054 3.2088C23.1247 2.56778 23.9261 1.55957 24.309 0.3718C23.3022 0.969255 22.2006 1.39031 21.052 1.6168C20.2787 0.794485 19.2559 0.249968 18.1419 0.0675133C17.0279 -0.114942 15.8848 0.0748364 14.8895 0.607481C13.8943 1.14012 13.1023 1.98594 12.6362 3.01404C12.1701 4.04214 12.0558 5.1952 12.311 6.2948C10.2718 6.19257 8.2768 5.66263 6.45564 4.73939C4.63448 3.81615 3.02784 2.52024 1.74 0.9358C1.08409 2.06496 0.8832 3.40166 1.17823 4.67374C1.47326 5.94582 2.24202 7.05763 3.328 7.7828C2.51174 7.75861 1.71328 7.53841 1 7.1408C1 7.1618 1 7.1838 1 7.2058C1.00032 8.39002 1.41026 9.53767 2.16028 10.4541C2.9103 11.3705 3.95423 11.9993 5.115 12.2338C4.35987 12.4397 3.56758 12.4698 2.799 12.3218C3.12676 13.341 3.76486 14.2322 4.62407 14.8709C5.48328 15.5095 6.52061 15.8637 7.591 15.8838C5.77474 17.3112 3.53106 18.0861 1.221 18.0838C0.812904 18.083 0.405204 18.0583 0 18.0098C2.34564 19.5151 5.07491 20.3135 7.862 20.3098" fill="#1DA1F2"/></svg>
                                        <span  className='blue-link pl-2'>Twitter</span>
                                    </a>                                
                                </li>
                                <li>
                                    <a href='https://github.com/pickleat' className='pl-2 flex items-center'>
                                        <svg className='h-4 w-4'  viewBox="0 0 40 40" fill="none"><path d="M20 0.494995C8.95 0.494995 0 9.44999 0 20.495C0 29.3333 5.73 36.8283 13.675 39.47C14.675 39.6583 15.0417 39.04 15.0417 38.5083C15.0417 38.0333 15.025 36.775 15.0167 35.1083C9.45333 36.315 8.28 32.425 8.28 32.425C7.37 30.1167 6.055 29.5 6.055 29.5C4.24333 28.26 6.195 28.285 6.195 28.285C8.20333 28.425 9.25833 30.345 9.25833 30.345C11.0417 33.4033 13.94 32.52 15.0833 32.0083C15.2633 30.715 15.7783 29.8333 16.35 29.3333C11.9083 28.8333 7.24 27.1133 7.24 19.45C7.24 17.2667 8.015 15.4833 9.29833 14.0833C9.07333 13.5783 8.39833 11.545 9.47333 8.79C9.47333 8.79 11.1483 8.25333 14.9733 10.84C16.5733 10.395 18.2733 10.175 19.9733 10.165C21.6733 10.175 23.3733 10.395 24.9733 10.84C28.7733 8.25333 30.4483 8.79 30.4483 8.79C31.5233 11.545 30.8483 13.5783 30.6483 14.0833C31.9233 15.4833 32.6983 17.2667 32.6983 19.45C32.6983 27.1333 28.0233 28.825 23.5733 29.3167C24.2733 29.9167 24.9233 31.1433 24.9233 33.0167C24.9233 35.6933 24.8983 37.8433 24.8983 38.4933C24.8983 39.0183 25.2483 39.6433 26.2733 39.4433C34.275 36.82 40 29.32 40 20.495C40 9.44999 31.045 0.494995 20 0.494995Z" fill="#223043"/></svg>
                                        <span  className='blue-link pl-2'>Github</span>
                                    </a>                                
                                </li>
                                <li>
                                    <a href='https://dev.to/pickleat' className='pl-2 flex items-center'>
                                        <svg className='h-4 w-4' viewBox="0 0 45 51" fill="none"><path d="M12.0656 20.7476C11.6759 20.4588 11.2852 20.3143 10.8954 20.3143H9.14364V30.7205H10.8964C11.2862 30.7205 11.6769 30.5761 12.0666 30.2872C12.4564 29.9984 12.6512 29.5651 12.6512 28.9863V22.0485C12.6502 21.4708 12.4544 21.0365 12.0656 20.7476ZM40.5904 3.1875H4.4096C1.97879 3.1875 0.00602679 5.13885 0 7.55039V43.4496C0.00602679 45.8612 1.97879 47.8125 4.4096 47.8125H40.5904C43.0222 47.8125 44.994 45.8612 45 43.4496V7.55039C44.994 5.13885 43.0212 3.1875 40.5904 3.1875ZM15.4888 29.0053C15.4888 30.8789 14.3227 33.7178 10.6312 33.7118H5.97054V17.2304H10.7297C14.2895 17.2304 15.4868 20.0653 15.4878 21.94L15.4888 29.0053ZM25.6018 20.1739H20.25V24.0009H23.5215V26.9463H20.25V30.7723H25.6028V33.7178H19.357C18.236 33.7467 17.3039 32.8681 17.2758 31.7565V19.2943C17.2487 18.1837 18.1356 17.2613 19.2556 17.2334H25.6028L25.6018 20.1739ZM36.0121 31.6579C34.6862 34.7208 32.3106 34.1112 31.2469 31.6579L27.3767 17.2344H30.6482L33.6325 28.562L36.6027 17.2344H39.8752L36.0121 31.6579Z" fill="black"/></svg>
                                        <span  className='blue-link pl-2'>Dev</span>
                                    </a>                                
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/andy-pickle/' className='pl-2 flex items-center'>
                                        <img className='h-4 w-4' src={LinkedIn} alt='LinkedIn Logo' />
                                        <span  className='blue-link pl-2'>LinkedIn</span>
                                    </a>                                
                                </li>
                            </ul>
                            <p>Or you can use my contact form to send me a message!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export const query = graphql`
  query {
    blogs: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {ne: "project"}}}, limit: 3) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
          fileAbsolutePath
        }
      }
    }
    projects: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "project"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
            id
            frontmatter {
                date
                title
                tags
            }
            fields {
                slug
            }
            fileAbsolutePath
            excerpt(pruneLength: 160)
            }
        }
    }
  }  
`