import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
    <div>
        <h3><i>I'm currently open to job offers for full-time or freelance web-development work.</i></h3>
        <p>If you get in touch, I would love to send you my resume.</p>
        <div>
        <p>Feel free to get in touch with me through any of the following platforms!</p>
        

        <ul style={{ display: `inline`, listStyle: `none`, }}>
        <a  style={{ display: "inline-block", marginRight: "1rem" }}  href="https://twitter.com/pickleat">Twitter</a>
        <a  style={{ display: "inline-block", marginRight: "1rem" }}  href="https://github.com/pickleat">GitHub</a>
        <a  style={{ display: "inline-block", marginRight: "1rem" }}  href="https://www.linkedin.com/in/andy-pickle-6a7343158/">LinkedIn</a>
        <a style={{ display: "inline-block", marginRight: "1rem" }} href="https://dev.to/pickleat">Dev.to</a>
        {/* Below is a working snippet for my dev.to badge, for when I am ready to implement all the other badges */}
        {/* <a href="https://dev.to/pickleat">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Andy Pickle's DEV Profile" height="50" width="50" />
        </a> */}
        </ul>
        </div>
    </div>
    </Layout>
)