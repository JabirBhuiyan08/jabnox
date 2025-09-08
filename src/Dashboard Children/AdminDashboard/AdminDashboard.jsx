import React from 'react';
import UsersByCountry from './UsersByCountry';
import OverviewStats from './OverviewStats';
import PageView from './PageView';
import TopPages from './TopPages';
import Devices from './Devices';

const AdminDashboard = () => {
    return (
        <div>
            <OverviewStats></OverviewStats>
            <UsersByCountry></UsersByCountry>
            <Devices></Devices>
            <PageView></PageView>
            <TopPages></TopPages>
        </div>
    );
};

export default AdminDashboard;