import logo from "../../assets/logo.png";
import { Footer } from "flowbite-react";
export default function Footers() {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="" src={logo} alt="Book me" name="" />
          <Footer.LinkGroup>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">Booking</Footer.Link>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div style={{ color: "orange" }}>
          <Footer.Copyright
            by={
              <a style={{ color: "#FFA500" }} href="https://hasankanj.com/">
                HKANJ
              </a>
            }
            year={2023}
          />
        </div>
      </div>
    </Footer>
  );
}
