import logo from "../../../assets/logo.png";

import "../Firstdiv/first.css";
export default function FirstDiv() {
  return (
    <>
    <div className="containersss">
          <section>
            <img src={logo} alt="..." />
          </section>
        </div>
      <div>
      <div className="book">
        
        <button className="button">Book Me</button>
        <div className="cover">
          <img
            src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxzcGFpbnxlbnwxfHx8fDE2NjMxNjAxNTU&ixlib=rb-1.2.1&q=80&w=1080"
            alt="..."
          />
        </div>
      </div>
      
    </div>
    </>

  );
}
