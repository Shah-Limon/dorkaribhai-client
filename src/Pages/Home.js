import React from 'react';
import RecentWorks from '../components/RecentWorks';
import HomePageBanner from '../components/Shared/HomePageBanner';
import JobsCategories from '../components/Shared/JobsCategories';
import WorkProcess from '../components/WorkProcess';
import CtaArea from '../components/CtaArea';
import TestimonialArea from '../components/TestimonialArea';
import Blog from '../components/Blog';
import OurClient from '../components/OurClient';
import SubscribeArea from '../components/SubscribeArea';


const Home = () => {
    return (
        <div>
            <HomePageBanner></HomePageBanner>
            <JobsCategories></JobsCategories>
            <RecentWorks></RecentWorks>
            <WorkProcess></WorkProcess>
            <CtaArea></CtaArea>
            <TestimonialArea></TestimonialArea>
            <Blog></Blog>
            <OurClient></OurClient>
            <SubscribeArea></SubscribeArea>
           
        </div>
    );
};

export default Home;