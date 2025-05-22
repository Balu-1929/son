
import './Sidebar.css';
function SideBar(){
    return (
        <div className="side">
            <button id='top' >Top 10</button>
            <button id='most'>Most Viewed</button>
            <button id='recent'>Recently Added</button>
            
        </div>
    );
}
export default SideBar;