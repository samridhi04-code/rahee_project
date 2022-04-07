import React from 'react'
import "./Rightbar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export const Rightbar = () => {
  return (
    <>
    {/* <h1>hello</h1> */}
    {/* <div class="row g-0">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div> */}<div className='rightbar'>
    <div className="birthdayContainer">
    <center><img className="profileUserImg" src="https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sun-rise/sunrise-19-freepsdbazaar.jpg" alt=""/> </center>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4> <br/>
                <div className='Infonext'>Wildlife Photographer</div>
</div>
<button className='Clickable'>Edit</button>
    <div className='Followerslist'>
        <div className='posts' style={{textAlign:"center"}}> <b>98</b> <br/> <span>Posts</span> </div> 
        <FiberManualRecordIcon style={{ fontSize:"small", margin:"0px 20px" }}/>
        <div className='followers' style={{textAlign:"center"}}> <b>3.4k</b> <br/> <span>Followers</span> </div>
        <FiberManualRecordIcon style={{ fontSize:"small", margin:"0px 20px" }}/>
        <div className='followings' style={{textAlign:"center"}}><b>900</b> <br/> <span>Followings</span> </div>
    </div>
    <div className='introduction'>
      <b>  Neelesh Chaudhary</b> <br/>
        I am the creator of Speaking of English, a blog for intermediate English learners who want to become more fluent in the language. I am originally from the United States and I currently live.....<span style={{color:"gray"}}>( Read More )</span> <br/>
        <a href="#" style={{fontSize:"12px"}}>www.dribble.com/nkchaudhary01</a>
    </div>
    <div className='stories'>
        <b>Your Stories</b>
<div className='Images'>
    <img src="" height="" width=""/>
    <img src="" height="" width=""/>
    <img src="" height="" width=""/>
</div>
    </div>
    </div>
    </>
  );
}
