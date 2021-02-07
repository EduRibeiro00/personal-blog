import React from 'react'

import Layout from '../components/Layout'
import CVHeader from '../components/cv/CVHeader'
import CVMainColumn from '../components/cv/CVMainColumn'
import CVSidebar from '../components/cv/CVSidebar'

const CV = () => {
    return (
        <Layout>
            <CVHeader />
            <div className="lg:mt-5 lg:grid lg:grid-cols-3 lg:gap-6">
                <CVMainColumn />
                <CVSidebar />
            </div>
        </Layout>
    )
}

export default CV