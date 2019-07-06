import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h1>Projects</h1>
        <h2><a href="https://coffeecodex.co">CoffeeCodex.co</a></h2>
        <p>A database of specialty coffees. A CRUD application complete with user-ratings.</p>
        <h3>Technologies Used</h3>
        <ul>
            <li>AWS: Lambda, DynamoDB, API Gateway, CloudWatch</li>
            <li><a href="https://serverless.com/">Serverless <span role='img' aria-label="lightning-bolt-emoji">⚡️</span> Framework</a></li>
            <li>Vanilla JavaScript</li>
            <li><a href="https://https://tailwindcss.com">TailWind CSS</a></li>
            <li><a href="https://auth0.com">Auth0</a></li>
        </ul>
    </Layout>
)