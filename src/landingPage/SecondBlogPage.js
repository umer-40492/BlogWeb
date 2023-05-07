import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';
import '././landingPage.css';
const SecondBlogPage = (props) => {

  return (
    <div className=''>
        <Navbar/>
        <div className='secondPage'>
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
        <h4 className='heading'  style={{fontSize: '48px' , margin:'16px  0'}}>{props.headerBlogId.hasOwnProperty('Title')? props.headerBlogId.Title : undefined}</h4>
        <h4 className='description'>{props.headerBlogId.Subtitle}</h4>
        <div>
            <img src={props.headerBlogId.Image} alt='BLogPic' className='BlogPic '></img>
          </div>
          <h4 className='description' >{props.headerBlogId.Article}</h4>
        </div>
        <div className='Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default SecondBlogPage