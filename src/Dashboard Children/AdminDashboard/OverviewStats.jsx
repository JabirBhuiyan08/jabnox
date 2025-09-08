
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axiosSecure";


const OverviewStats = () => {
    const axiosSecure = useAxiosSecure(); 
    const {data: stats = {}} = useQuery({
        queryKey: ['overview-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/analytics/overview-stats');
            return res.data;
        }

    });

    if (!stats) return <p>Loading...</p>;

    return (
        <div>
            <h2>Overview (7 days)</h2>
            <ul>
                <li>Active Users: {stats.activeUsers}</li>
                <li>New Users: {stats.newUsers}</li>
                <li>Sessions: {stats.sessions}</li>
                <li>Avg. Session Duration: {stats.avgSession}s</li>
            </ul>
        </div>
    );
};

export default OverviewStats;