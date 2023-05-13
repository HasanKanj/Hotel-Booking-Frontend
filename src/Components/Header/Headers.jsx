

import "../Firstdiv/first.css";
import logo from "../../../assets/logo.png";
export default function FirstDiv() {
  return (
    <>
      <div className="Homee">
        <div className="containersss">
          <section>
            <img src={logo} alt="..." />
          </section>
        </div>

        <div>
          <a href="https://www.example.com" className="book">
            <button>Book me</button>
            <div className="cover">
              <img
                src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzcGFpbnxlbnwxfHx8fDE2NjMxNjAxNTU&ixlib=rb-1.2.1&q=80&w=1080"
                alt="..."
              />
            </div>
          </a>
          <a href="https://www.example.com" className="book">
            <button>Book me</button>
            <div className="cover">
              <img
                src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzcGFpbnxlbnwxfHx8fDE2NjMxNjAxNTU&ixlib=rb-1.2.1&q=80&w=1080"
                alt="..."
              />
            </div>
          </a>
          
        </div>
        
      </div>
    </>
  );
}
