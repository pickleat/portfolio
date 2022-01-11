import React from 'react'

import Layout from "../components/layout"
import Heading from "../components/H1HeadingAnd3Dots"

const FourOhFour = ({ data }) => {
    return (
        <Layout>
          <div>
            <Heading title='Are you lost?'/>
            <div className='bg-yellow-50 text-navy px-10 pb-10 w-full md:max-w-6xl'>
                <h2 className=''>No Page Here</h2>
                <div className='flex'>
                    <p>The page you are looking for, can't be found, sorry.</p>
                </div>
            </div>
          </div>
        </Layout>
    )
}

export default FourOhFour;