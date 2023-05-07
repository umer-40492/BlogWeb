import { useRef, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import '././landingPage.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
const LandingPage = (props) => {
  const navigate = useNavigate();
    const [divHeight, setDivHeight] = useState(1500); 
    const divRef = useRef(null);
    const handleButtonClick = () => {
      const fullHeight = divRef.current.scrollHeight;
      setDivHeight(fullHeight);
    };
  return (
    
    <div className=''>
      <Navbar  />
      <div className="section1">
        <img src="/assets/BlogBG.png" alt="" />
        <div className="overlayDiv">
          <h1 >Our Blog</h1>
        </div>
        <div className="overlayDiv2">
          <h4 >Diagnose Car Problems If You Don’t Know Much About Cars</h4>
          <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
        </div>

      </div>
      <div className='Section2'>
        <div className='whiteBox'>
          <div>
            <img src='/assets/car.png' alt='BlogPic' className='meterpic1'></img>
          </div>
          <div>
            <div className='div1'>
              <div>
                <p className='postedTitle'>Posted on October 6th 2021</p>
              </div>
              <div className='viewDiv'>
                <div>
                  <img src='/assets/Eye.png' alt="" className='eyeLogo' />
                </div>
                <div>
                  <p className='postedTitle'>563 views</p>
                </div>
              </div>
            </div>
            <div className='headingWhite'>
              <h4 className='heading'>Should I Buy a New Car or Lease a New Car in 2021?</h4>
            </div>
            <div className='headingWhite'>
              <h6 className='description'>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</h6>
            </div>
            <div className='readMore' onClick={()=>{
            }}> 
                <p>Read more <span><img src="/assets/Arrow.png" alt="" /></span></p>
                
            </div>
          </div>


        </div>
      </div>
      <div ref={divRef} className='BlogsDiv' style={{ height: `${divHeight}px` }}>
        <div className='loop'>
          {props.data.map((dataObj, index) => {
            return (
              <div>
                <div className='maindiv' key={index} onClick={()=>{
                  props.setheaderBlogId(dataObj);
                  navigate('/second');
                }}>
                <img src={dataObj.Image} alt='meter' className='meterpic'></img>
                  <div className='div1'>
                    <div>
                      <p className='postedTitle'>Posted on October 6th 2021</p>
                    </div>
                    <div className='viewDiv'>
                      <div>
                        <img src='/assets/Eye.png' alt="" className='eyeLogo' />
                      </div>
                      <div>
                        <p className='postedTitle'>563 views</p>
                      </div>
                    </div>
                  </div>
              <div className='headingtitle'>
                <h4 className='heading' style={{width: '405px'}}>{dataObj.Title}</h4>
              </div>
              <div className='headingtitle'>
                <h6 className='description' style={{width: '405px'}}>{dataObj.Subtitle}</h6>
              </div>
            </div>
                    </div>
            );
          })}
         </div>
      </div>
      <div className='LearnMore'>
          <button onClick={handleButtonClick}>Learn More</button>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
      
    </div>
  )
}

export default LandingPage