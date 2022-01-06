import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import InnerLayout from "../components/innerLayout"
import Heading from "../components/H1HeadingAnd3Dots"
import H2Heading from "../components/H2Heading"

const About = ({data}) => {

    return(
        <Layout>
            <Heading svg='coffee' title='About'/>
            <InnerLayout>
                <H2Heading text="a little about me..." />
                <div className='sm:flex pt-2'>
                    <h3 className='font-black lowercase tracking-tight text-3xl'>tl;dr</h3>
                    <p className="sm:pl-4">I'm a self-taught, front-end/UI Engineer from Little Rock, Arkansas. I use Vue professionally for work, but I enjoy writing React as well. I'm a JavaScript nerd at heart.</p>
                </div>
                <div className='py-4 sm:p-4'>
                    <hr className='text-navy border-top border-solid border-navy border-2' />
                </div>
                <div>
                    <h4 className='font-black lowercase tracking-tight text-3xl'>Long Version</h4>
                    <p className="pt-4">
                        I grew up mostly on the West Coast of the U.S.: California and Oregon. But in 2015 my family moved back to the South to be closer to family. 
                        After finishing High School, I went to a small liberal-arts university in Nashville (Go Bisons!). 
                    </p>
                    <p className="pt-4">
                        I started as a Mechanical Engineering major, but first semester Calculus 2 kicked my butt. Even though I passed the class, I thought because it didn't come easy to me that perhaps I wasn't cut out for a technical major.
                        Looking back I wish someone had pushed me to carry on, and realize that things are difficult. Learning is a skill as much as anything, really I needed a push to have a growth mindset. 
                        However I ended up switching to a less technical major and studied Theology & Ministry with a minor in Greek. I enjoyed those very much, but seeing as I don't use them much anymore it 
                        does feel like a bit of wasted resources. Experience-wise, I wouldn't trade it for anything, just wish I would've chosen computer science then... oh well.
                    </p>
                    <p className="pt-4">
                        After college, including 4 years of dating long distance, I married my high school sweetheart, Kaylee. She is the greatest joy of my life.
                    </p>
                    <p className="pt-4">
                        Eventually, I found myself in the specialty coffee industry, as a barista, roaster, roasting manager, and finally co-owner of a small coffee company.
                        The stress of that, and the terrible margins, led me to look for something better and more stable for my family. One of our locations was in an office 
                        building with several tech companies. Over time, people who I'd met serving coffee,encouraged me to learn web-development.
                    </p>
                    <p className="pt-4">
                        I began learning by taking <a className='blue-link' href='#MITxCert'>Intro to Computer Science from MITx</a> and <a className='blue-link' href='#fCCxCert'>freeCodeCamp.org</a>. 
                        I worked at a startup called Vocool for a bit and was able to do some part-time development work. Mostly writing NodeJS Serverless functions. 
                        However sadly, that startup wound down and I found it difficult to find another dev job quickly. 
                    </p>
                    <p className="pt-4">
                        I took a job doing technical project management at a design firm called <a className='blue-link' href="https://few.io">Few</a>. Most of our projects are websites or web apps for clients, with a few React Native projects mixed in. 
                        I've managed the gamut of those type of projects, and have a great feel of how the development life-cycle works. Scoping features and delivering on them. Eventually I transitioned over to front-end development and did that for several months full time. 
                    </p>
                    <p className='pt-4'>
                        Early in the pandemic I started working on <a className='blue-link' href='https://protege.dev'>Protege.dev</a> with my good friend <a className='blue-link' href='https://twitter.com/drewclemcr8'>Drew Clements</a>.
                        We built it with React + TailwindCSS, but eventually started taking on too much freelance work to continue contributing. 
                    </p>
                    <p className='pt-4'>
                        In early 2021 my wife and I welcomed our second child into our family! She's amazing. We love our little family, but with that growth, I took a backseat from side-projects and freelancing for most of the year.
                    </p>
                    <p className='pt-4'>
                        In late 2021 I took a job as a UI Software Engineer at <a className='blue-link' href='https://threeflow.com'>ThreeFlow</a> which is in the insurance tech industry. And launched a large freelance client site <a className='blue-link' href='https://ForeverYoungAdult.com'>ForeverYoungAdult.com</a>!
                    </p>
                    <p className='pt-4'>
                        This year I'm focusing on getting back into some side-projects, writing and growing as a developer! You can read more about that on my post: <Link className='blue-link' to='/posts/firstPostOf2022/'>"Goals for 2022"</Link>
                    </p>
                </div>
                <div className='p-4'>
                    <hr className='text-navy border-top border-solid border-navy border-2' />
                </div>
                <div>
                    <h5 className='font-black lowercase tracking-tight text-3xl' id='certifications'>Certifications, Courses, and Conferences</h5>
                    <div className='flex-col items-center'>
                        <span className='font-black lowercase tracking-tight text-2xl'>2019</span>
                        <ul className='sm:pl-4 flex flex-col'>
                            <li>
                               <a className="blue-link" id='MITxCert' href='https://courses.edx.org/certificates/a1125794c0da482480daf407490f3b28'>MITx: Intro to Computer Science</a>
                            </li>
                            <li>
                                <a className="blue-link" id='fCCxCert' href='https://www.freecodecamp.org/certification/pickleat/javascript-algorithms-and-data-structures'>freeCodeCamp JavaScript Algorithms and Data Structures</a>
                            </li>
                        </ul>
                        <span className='font-black lowercase tracking-tight text-2xl'>2020</span>
                        <ul className='sm:pl-4 flex flex-col'>
                            <li>
                                <a className="blue-link" href='https://egghead.io/courses/just-enough-functional-programming-in-javascript'>Just Enough Functional Programming in JavaScript</a>
                            </li>
                            <li>
                                <a className="blue-link" href='https://www.udemy.com/course/wordpress-theme-and-plugin-development-course/'>Complete WordPress Theme & Plugin Development Course</a>
                            </li>
                        </ul>
                        <span className='font-black lowercase tracking-tight text-2xl'>2021</span>
                        <ul className='sm:pl-4 flex flex-col'>
                            <li>
                                <a className="blue-link" href='https://egghead.io/courses/the-beginner-s-guide-to-vue-3-1c46da8b'>The Beginner's Guide to Vue 3</a>
                            </li>
                            <li>
                                <a className="blue-link" href='https://www.vuetoronto.com/'>VueConf Toronto</a>
                            </li>
                            <li>
                                <a className="blue-link" href='https://vueschool.io/courses/typescript-fundamentals'>TypeScript Fundamentals</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </InnerLayout>
        </Layout>
    )
}

export default About