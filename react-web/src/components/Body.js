import React from 'react';
import {Tab} from 'bootstrap';
import styled from 'styled-components';
import image1 from '../components/mercy/pic1.png';
import image2 from '../components/mercy/pic2.png';
import image3 from '../components/mercy/pic3.png';
import image4 from '../components/mercy/pic4.png';
import image5 from '../components/mercy/pic5.png';
import image6 from '../components/mercy/pic6.png';
import image7 from '../components/mercy/pic7.png';
function Body() {
  return (
    <BodyContainer className='container'>
      <div className='body1 mt-4'>
        <div className='inner_body card clearfix'>
          <div className='card-body'>
          <div className='paragraph1'>
            <p className='paragr1'>All the business <br/>information you need in <br/>one place</p>
            <p className='paragh2'>Find business support organizations,resources, <br/>programs,role models and activities in Mombasa <br/>to enable you start and grow your business.</p>
            <div className='main_btn'>
              <button className='btn1'>Find a Business Support Organization</button>
              <button className='btn2'>Discover funding opportunities</button>
            </div>
          </div>
          <div>
            <img className='img1' src={image1}></img>
          </div>
        </div>
        </div>
        <div className='inner_body1 card'>
          <div className='card-body'>
        <div className='pic_container'>
            <img className='img2' src={image3}></img>
            <img className='img3' src={image2}></img>
          </div>
          <div className='paragraph2'>
            <p className='paragr3'>Business Support organizations</p>
            <p className='paragh4'>Connect with organizations that provide <br/>business-related training, funding,mentorship/<br/>advice, incubation/acceleration, and offer office<br/>space</p>
            <div className='main_btn'>
              <button className='btn1'>Find a Business Support Organization</button>
            </div>
          </div>
        </div>
        </div>
        <div className='inner_body card'>
          <div className='card-body'>
          <div className='paragraph1'>
            <p className='paragr3'>Role Models and Success Stories</p>
            <p className='paragh4'>Meet with some of the most successful youth <br/>business entrepreneurs from Mombasa to learn about <br/>their inspiring journey and get advise from them.</p>
            <div className='main_btn'>
              <button className='btn1'>Find Role Models</button>
            </div>
          </div>
          <div>
            <img className='img1' src={image4}></img>
          </div>
          </div>
        </div>
        <div className='inner_body1 card'>
          <div className='card-body'>
        <div className='pic_container'>
            <img className='img5' src={image6}></img>
            <img className='img6' src={image5}></img>
          </div>
          <div className='paragraph2'>
            <p className='paragr3'>Events and activities</p>
            <p className='paragh4'>Discover business focused events such as information <br/>sessions on how to get funding and training <br/>workshops on how to start grow, and manage your <br/>business.</p>
            <div className='main_btn'>
              <button className='btn1'>Search Events</button>
            </div>
          </div>
          </div>
        </div>
        <div className='inner_body card'>
          <div className='card-body'>
          <div className='paragraph1'>
            <p className='paragr3'>Give Back</p>
            <p className='paragh4'>Inspire the next generation of business leaders with <br/>stories from your business journey.</p>
            <div className='main_btn'>
              <button className='btn1'>Become a Business Mentor and Role Model</button>
            </div>
          </div>
          <div>
            <img className='img1' src={image7}></img>
          </div>
        </div>
        </div>
      </div>
    </BodyContainer>
  )
}

export default Body
const BodyContainer=styled.body`
.paragraph1{
  width:550px;
  margin-left:60px;
}
.paragr1{
  font-size:26px;
  color:#000;
  font-weight:bold;
}
.paragh2{
  font-size:18px;
  color:#0000FF;
}
.paragr3{
  font-size:20px;
  color:#0000FF;
  font-weight:bold;
}
.paragh4{
  font-size:18px;
  color:#000;

}
.inner_body{
  display:flex;
}
.img1{
  height:280px;
  width:450px;
}
.body1{
  margin-left:50px;
  margin-bottom:20px;
  margin-top:20px;
}
.main_btn{
  display:flex;
}
.btn1{
  font-size:12px;
  height:40px;
  width:150px;
  border-radius:40px;
  background-color:#0e2073;
  color:#fff;
  margin-left:20px;
  border:none;
}
.btn2{
  font-size:12px;
  height:40px;
  width:150px;
  border-radius:40px;
  background-color:#0e2073;
  color:#fff;
  margin-left:20px;
  border:none;
  margin-left:40px;
}
.pic_container{
  position:relative;
}
.img2{
  position:absolute;
  height:130px;
  width:130px;
  top:120px;
  left:0px;
}
.img3{
  position:relative;
  height:200px;
  left:80px;
}
.paragraph2{
  width:550px;
  margin-left:200px;
}
.inner_body1{
  display:flex;
  margin-bottom:60px;
  margin-top:50px;
}
.card{
  border:none;
}
.card-body{
  display:flex;
}
.img6{
  position:absolute;
  height:130px;
  width:130px;
  left:0px;
}
.img5{
  position:relative;
  height:200px;
  left:80px;
  top:60px;
}
`;