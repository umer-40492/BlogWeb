import Navbar from "../Navbar/Navbar";
import '././Footer.css';
const logo = [
    {icon: '/assets/fb.png'},
    {icon: '/assets/twitter.png'},
    {icon: '/assets/insta.png'},
    {icon: '/assets/linkedIn.png'},
]
const data = [
    {heading:'Help line Number' , title: '1800 265 24 52'},
    {heading:'Address' , title: 'NH 234   Public Square San Francisco  65368'},
    {heading:'We are open' , title: 'Monday to Friday 9:00 AM to  10:00  AM'}
]
export default function Footer (props){
    return(
        <div>
            <div className="main">
                <div className="socialDiv">
                    <h4>Get in touch with us<br/>for your  service</h4>
                    <div className="logoSection">
                    {logo.map((index) => {
                         return ( 
                            <div >
                                <img src={index.icon} alt="" className="icon" />
                            </div>
                         )
                         })}

                    </div>
                </div>
                <div className="contactUs">
                {data.map((info) => {
                         return ( 
                            <div className="info">
                                <h6>{info.heading}</h6>
                                <p>{info.title}</p>
                            </div>
                        
                         )
                        })}
                </div>
            </div>
            <Navbar color="white" bgcolor='black' display= "block"
            image='/assets/Eye.png'
            />
        </div>
    )
}