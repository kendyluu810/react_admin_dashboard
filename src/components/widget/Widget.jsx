import { KeyboardArrowUp, PersonOutline } from "@mui/icons-material"
import "./widget.css"

const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">Users</span>
            <span className="counter">21</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
          <div className="percentage positive"> 
            <KeyboardArrowUp/>              
            20%
          </div>
          <PersonOutline className="icon"/>
        </div>
    </div>
  )
}

export default Widget