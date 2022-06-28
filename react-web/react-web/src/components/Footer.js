import { Tab } from 'bootstrap';
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className='main-footer'>
        <div className='footer-middle'>
        <div className='container'>
            <div className='row m-auto'>
                {/* column 1 */}
                <div className='head5 col-md-3 col-sm-6 ml-5'>
                    <h5 className='head1 text-blue text-uppercase'>MERCY</h5>
                    <ul className='list-unstyled'>
                        <li><p className='paragraph1 text-white text-capitalize'>empowering youth <br/>entrepreneurs from<br/>mombasa</p></li>
                    </ul>
                </div>
                {/* column 2 */}
                <div className='head4 col-md-3 col-sm-6 ml-5'>
                    <h4><a href='' className='link1 text-white text-capitalize' >GOYN MERCY</a></h4>
                    <ul className='list-unstyled'>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Business Guides</a></li>
                        <li><a href='/'>Role Models and Success Stories</a></li>
                        <li><a href='/'>Post an event</a></li>
                        <li><a href='/'>List Your Entrepreneurship Support Organization</a></li>
                    </ul>
                </div>
                {/* column 3 */}
                <div className='head4 col-md-3 col-sm-6 ml-5'>
                    <h4><a href='/'className='link1 text-white '>We are Social.<br/>Connect with us</a></h4>
                    <ul className='list-unstyled'>
                        <li><a href='/'>WhatsApp</a></li>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
                {/* copyright */}
            <div className='footer-bottom ml-5'>
                <p className='text-xs-center'>
                    Copyright {new Date().getFullYear()} GOYN MERCY &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy
                </p>
            </div>
            </div>
        </div>
        </div>
    </FooterContainer>
  )
}

export default Footer;
const FooterContainer=styled.footer`
.footer-middle{
    background:var(--mainDark);
    textDecoration:none;
    color:var(--mainWhite);
}
.footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
}
ul li a{
    text-decoration: none;
    color:var(--mainBlue);
    font-size:19px;
}
ul li a:hover{
    text-decoration:underline;
    
}
span{
    margin-left:5rem;
}
h4 a{
    font-size:18px;
    text-decoration: none;
}
h5{
    color:var(--mainBlue);
}
.head4{
    padding-top:3rem;
    margin-left:10rem;
}
.head5{
    padding-top:2rem;
}
`;