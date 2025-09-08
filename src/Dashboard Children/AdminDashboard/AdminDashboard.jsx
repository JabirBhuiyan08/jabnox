import React from 'react';
import UsersByCountry from './UsersByCountry';
import OverviewStats from './OverviewStats';

const AdminDashboard = () => {
    return (
        <div>
            <UsersByCountry></UsersByCountry>
            <OverviewStats></OverviewStats>
        </div>
    );
};

export default AdminDashboard;