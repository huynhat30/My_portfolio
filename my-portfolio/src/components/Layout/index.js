import './index.scss';
import Sidebar from '../SidebarNav';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='wrapper'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default MainLayout;