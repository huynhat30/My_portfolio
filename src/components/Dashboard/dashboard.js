import HomeDashboard from "./home";
import Login from "./login";
import { useUserContext } from "../../context/userContext";
import './dashboard.scss'

const Dashboard = () => {

    const { user, loading, error} = useUserContext()

    return (
        <div className="dashboard-container">
            {error && <p className="error"> {error} </p>}
            {loading ? <h2>Loading....</h2> : <>{user ? <HomeDashboard /> : <Login />}</>}
        </div>
    )
}

export default Dashboard