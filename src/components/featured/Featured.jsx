import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material"
import "./featured.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenune</h1>
        <MoreVert fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$320</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi consequatur quae dolores esse eum vero iste, dolorem eos dignissimos dolor, dolorum tempore laboriosam ab beatae molestias? Officia, iure numquam.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$34.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small"/>
              <div className="resultAmount">$21.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small"/>
              <div className="resultAmount">$22.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured