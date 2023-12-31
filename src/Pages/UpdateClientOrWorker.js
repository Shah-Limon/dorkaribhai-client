import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Shared/Breadcrumbs';

const UpdateClientOrWorker = () => {
    return (
       <>
       <Breadcrumbs pageTitle="Update Profile" />
        <div className='flex h-screen justify-center items-center'>
            <Link to="/create-worker" className='btn mr-2'>Join as a Worker</Link>
            <Link to="/create-client" className='btn ml-2'>Join as a Client</Link>
        </div></>
    );
};

export default UpdateClientOrWorker;