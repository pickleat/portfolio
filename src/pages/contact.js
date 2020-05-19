import React from "react"
import Layout from "../components/layout"
import Heading from "../components/Heading"
import LinkedInLogo from "../images/icons/LI-In-Bug.png"

export default () => (
    <Layout>
        <Heading title="Contact" svg='contact'/>
        <div className='bg-yellow-100 text-navy px-10 pb-10 w-full md:max-w-6xl'>
            <h2>Get in Touch!</h2>
            <p className='font-bold text-lg sm:text-xl pt-4'>
            Feel free to reach out to me on any of these platforms, or fill out the contact form below. <br />
            I am currently looking for a front-end developer role, so if you’d like to speak about that write “hiring” in the subject and I’ll send my resume!
            </p>
            <div className='flex justify-around p-4 mx-0 sm:mx-20'>
                    <a href="https://twitter.com/pickleat">
                        <svg className='h-10' viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.862 20.3138C17.296 20.3138 22.456 12.4978 22.456 5.7198C22.456 5.4978 22.456 5.2768 22.441 5.0568C23.4448 4.33071 24.3114 3.43168 25 2.4018C24.0639 2.8166 23.0708 3.08863 22.054 3.2088C23.1247 2.56778 23.9261 1.55957 24.309 0.3718C23.3022 0.969255 22.2006 1.39031 21.052 1.6168C20.2787 0.794485 19.2559 0.249968 18.1419 0.0675133C17.0279 -0.114942 15.8848 0.0748364 14.8895 0.607481C13.8943 1.14012 13.1023 1.98594 12.6362 3.01404C12.1701 4.04214 12.0558 5.1952 12.311 6.2948C10.2718 6.19257 8.2768 5.66263 6.45564 4.73939C4.63448 3.81615 3.02784 2.52024 1.74 0.9358C1.08409 2.06496 0.8832 3.40166 1.17823 4.67374C1.47326 5.94582 2.24202 7.05763 3.328 7.7828C2.51174 7.75861 1.71328 7.53841 1 7.1408C1 7.1618 1 7.1838 1 7.2058C1.00032 8.39002 1.41026 9.53767 2.16028 10.4541C2.9103 11.3705 3.95423 11.9993 5.115 12.2338C4.35987 12.4397 3.56758 12.4698 2.799 12.3218C3.12676 13.341 3.76486 14.2322 4.62407 14.8709C5.48328 15.5095 6.52061 15.8637 7.591 15.8838C5.77474 17.3112 3.53106 18.0861 1.221 18.0838C0.812904 18.083 0.405204 18.0583 0 18.0098C2.34564 19.5151 5.07491 20.3135 7.862 20.3098" fill="#1DA1F2"/></svg>
                    </a>
                    <a href="https://github.com/pickleat">
                        <svg className="fill-current text-black h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0.494995C8.95 0.494995 0 9.44999 0 20.495C0 29.3333 5.73 36.8283 13.675 39.47C14.675 39.6583 15.0417 39.04 15.0417 38.5083C15.0417 38.0333 15.025 36.775 15.0167 35.1083C9.45333 36.315 8.28 32.425 8.28 32.425C7.37 30.1167 6.055 29.5 6.055 29.5C4.24333 28.26 6.195 28.285 6.195 28.285C8.20333 28.425 9.25833 30.345 9.25833 30.345C11.0417 33.4033 13.94 32.52 15.0833 32.0083C15.2633 30.715 15.7783 29.8333 16.35 29.3333C11.9083 28.8333 7.24 27.1133 7.24 19.45C7.24 17.2667 8.015 15.4833 9.29833 14.0833C9.07333 13.5783 8.39833 11.545 9.47333 8.79C9.47333 8.79 11.1483 8.25333 14.9733 10.84C16.5733 10.395 18.2733 10.175 19.9733 10.165C21.6733 10.175 23.3733 10.395 24.9733 10.84C28.7733 8.25333 30.4483 8.79 30.4483 8.79C31.5233 11.545 30.8483 13.5783 30.6483 14.0833C31.9233 15.4833 32.6983 17.2667 32.6983 19.45C32.6983 27.1333 28.0233 28.825 23.5733 29.3167C24.2733 29.9167 24.9233 31.1433 24.9233 33.0167C24.9233 35.6933 24.8983 37.8433 24.8983 38.4933C24.8983 39.0183 25.2483 39.6433 26.2733 39.4433C34.275 36.82 40 29.32 40 20.495C40 9.44999 31.045 0.494995 20 0.494995Z"/></svg>
                    </a>
                    <a href="https://dev.to/pickleat">
                        <svg className='h-10 w-10' viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0656 20.7476C11.6759 20.4588 11.2852 20.3143 10.8954 20.3143H9.14364V30.7205H10.8964C11.2862 30.7205 11.6769 30.5761 12.0666 30.2872C12.4564 29.9984 12.6512 29.5651 12.6512 28.9863V22.0485C12.6502 21.4708 12.4544 21.0365 12.0656 20.7476ZM40.5904 3.1875H4.4096C1.97879 3.1875 0.00602679 5.13885 0 7.55039V43.4496C0.00602679 45.8612 1.97879 47.8125 4.4096 47.8125H40.5904C43.0222 47.8125 44.994 45.8612 45 43.4496V7.55039C44.994 5.13885 43.0212 3.1875 40.5904 3.1875ZM15.4888 29.0053C15.4888 30.8789 14.3227 33.7178 10.6312 33.7118H5.97054V17.2304H10.7297C14.2895 17.2304 15.4868 20.0653 15.4878 21.94L15.4888 29.0053ZM25.6018 20.1739H20.25V24.0009H23.5215V26.9463H20.25V30.7723H25.6028V33.7178H19.357C18.236 33.7467 17.3039 32.8681 17.2758 31.7565V19.2943C17.2487 18.1837 18.1356 17.2613 19.2556 17.2334H25.6028L25.6018 20.1739ZM36.0121 31.6579C34.6862 34.7208 32.3106 34.1112 31.2469 31.6579L27.3767 17.2344H30.6482L33.6325 28.562L36.6027 17.2344H39.8752L36.0121 31.6579Z" fill="black"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/andy-pickle/">
                        <img className='h-10' src={LinkedInLogo} />
                    </a>
            </div>
                <form className='my-4 sm:mx-12 sm:p-4 flex flex-col '>
                    <label className='font-bold' for='name'>Name</label>
                    <input className='bg-yellow-100 border-2 border-solid border-navy' type='text' name='name' required></input>
                    <label className='font-bold' for='email'>Email</label>
                    <input className='bg-yellow-100 border-2 border-solid border-navy' type='email' name='email' required></input>
                    <label className='font-bold' for='reasonForContact'>Reason for Contact</label>
                    <input className='bg-yellow-100 border-2 border-solid border-navy' type='text' name='reasonForContact' required></input>
                    <label className='font-bold' for='message'>Message</label>
                    <textarea rows='10' className='bg-yellow-100 border-2 border-solid border-navy' type='text' name='message' required></textarea>
                    <button className='bg-navy text-yellow-100 w-24 p-2 m-4' type='submit'>Submit</button>
                </form>
        </div>
    </Layout>
)