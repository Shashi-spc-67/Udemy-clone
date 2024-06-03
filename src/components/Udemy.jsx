import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import "../css/Udemy.css"
function Udemy() {
  return (
    <div>
        <nav>
            <span className='logo'></span>
            <div class="sectpre">
                <div class="categorydrop">
                    <div ><p>Categories</p></div>
                    <div class="dropdownnav">
                        <ul>
                            <div class="dropdownnavchildsection">
                                <li>Development</li>
                                <div class="dropdownnavchild">
                                    <ul>
                                        <li>Business</li>
                                        <li>Finance and Accounting</li>
                                        <li>IT and Software</li>
                                        <li>Personal Developent</li>
                                        <li>Design</li>
                                        <li>Marketing</li>
                                        <li>Lifestyle</li>
                                        <li>Photograpy and Video</li>
                                        <li>Health and Fitness</li>
                                        <li>Music</li>
                                    </ul>
                                </div>
                            </div>
                            <li>Business</li>
                            <li>Finance and Accounting</li>
                            <li>IT and Software</li>
                            <li>Personal Developent</li>
                            <li>Design</li>
                            <li>Marketing</li>
                            <li>Lifestyle</li>
                            <li>Photograpy and Video</li>
                            <li>Health and Fitness</li>
                            <li>Music</li>
                        </ul>
                    </div>
                </div>
            </div>
            <input type="search" placeholder=' 🔍     Search for anything'/>
            <p>Plans & Pricing</p>
            <div class="udemybizdrop">
                        <p>Udemy Business</p>
                        <div class="udemybizdropchild">
                            <h2>Get your team access to over<br/> 15,000 top Udemy courses,<br/>anytime, anywhere.</h2>
                            <button>Try Udemy Business</button>
                        </div>
                    </div>
                    <div class="udemybizdrop">
                        <p>Teach on Udemy</p>
                        <div class="udemybizdropchild">
                            <h2>Get your team access to over<br/> 15,000 top Udemy courses,<br/>anytime, anywhere.</h2>
                            <button>Try Udemy Business</button>
                        </div>
                    </div>
            <i><MdOutlineShoppingCart /></i>
            <button className='btn1' >Log in</button>
            <button  className='btn2'>Sign up</button>
            <div className='icon'><TbWorld /></div>
        </nav>
        <section className='form1'>
            <aside className='box1'>
                <h1>New to Udemy? Lucky you.</h1>
                <p>Courses start at ₹449. Get your new-student offer before it expires.</p>
            </aside>
        </section>
        <aside className='box2'>
                <h1>All the skills you need in one place</h1>
                <p>From critical skills to technical topics, Udemy supports your professional development.</p>
                <div className='heading'><button>Web Development</button><button>IT Certifications</button><button>Leadership</button><button>Data Science</button><button>Communication</button><button>Bussiness Analytics & Inteligence</button></div>
                </aside>
                <section className='form'>
                    <button className='btn-he-1'>Web Development <p>13.3M+ learners</p></button>
                    <button className='btn-he-2'>JavaScript <p>16.6M+ learners</p></button>
                    <button className='btn-he-2'>React JS <p>7M+ learners</p></button>
                    <button className='btn-he-2'>Angular <p>4M+ learners</p></button>
                    <button className='btn-he-2'>Java <p>15.5M+ learners</p></button>
                    <button className='btn-he-2'>Android Development <p>8M+ learners</p></button>
                    {/* <button className='btn-he-2'>iOS Development <p>4M+ learners</p></button> */}
                    {/* <button className='btn-he-2'>CSS <p>9M+ learners</p></button> */}
                </section>
                <section className='form3'>
                    <aside className='card1'>
                        <div className='img'></div>
                        <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/>  <button className='best'>best seller</button></p>
                   
                    {/* <div class="card1"> */}
            <div class="ssdropdown1">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart /> */}
                    </div>
            </div>
            {/* </div> */}
            </aside>
                    <aside className='card2'>  <div className='img'>
                      </div>   <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/> </p>
                        <div class="ssdropdown2">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart  style={{padding:"5px" ,backgroundColor:"red"}}/> */}
                    </div>
            </div>
                     </aside>
                    <aside className='card3'>  <div className='img'></div>   <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/>  </p>
                        <div class="ssdropdown3">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart /> */}
                    </div>
            </div>
                     </aside>
                    <aside className='card4'>  <div className='img'></div>   <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/> </p>
                        <div class="ssdropdown4">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart /> */}
                    </div>
            </div>
                     </aside>
                </section>
                <div className='courses'><button className='show'>Show All Web Development Courses</button></div>
                <section className='form4'>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trusted by over 15,000 companies and millions of learners around the world</p>
                    <div className='images'>
                        <aside className='pic'></aside>
                        <aside className='pic1'></aside>
                        <aside className='pic2'></aside>
                        <aside className='pic3'></aside>
                        <aside className='pic4'></aside>
                        <aside className='pic5'></aside>
                        <aside className='pic6'></aside>
                        <aside className='pic7'></aside>
                    </div>
                </section>
                <div className="containerize">
                <article className="cart1">
        <h1>Learning focused on your goals</h1>
        {/*  */}
        <aside className="training">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Hands-on training</h3>
            <p>
              Upskill effectively with AI-powered coding exercises, practice
              tests, skills assessments, labs, and workspaces.
            </p>
          </aside>
        </aside>
        {/*  */}
        <aside className="certifi">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Certification prep</h3>
            <p>
              Prep for industry-recognized certifications by solving real-world
              challenges and earn badges along the way.
            </p>
          </aside>
        </aside>
        {/*  */}
        <aside className="insight">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Insights and analytics</h3>
            <button>Enterprise Plan</button>
            <p>
              Fast-track goals with advanced insights plus a dedicated customer
              success team to help drive effective learning.
            </p>
            <a href="./app.js">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Find out more <FaArrowRight style={{ paddingTop: "5px"}} />
            </a>
          </aside>
        </aside>
        {/*  */}
        <aside className="customize">
          <aside>
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png"
              alt=""
              height={70}
            />
          </aside>
          <aside>
            <h3>Customizable content</h3>
            <button>Enterprise Plan</button>
            <p>
              Create tailored learning paths for team and organization goals and
              even host your own content and resources.
            </p>
            <a href="./app.js">
              Find out more <FaArrowRight style={{ paddingTop: "5px" }} />
            </a>
          </aside>
        </aside>
      </article>
      {/* 2nd part */}
      <article className="cart2">
        <img
          src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
          alt="Score Chart"
          height={400}
          width={400}
        />
      </article>
</div>
{/* ??????????????????????????? */}
<div className="cont6">
              <div className="c61">
                <div className="t6">
                <h1>Top trends for the<br />future of work</h1>
                <h4>GenAI and leadership are at the <br /> core of today's skills-based <br />economy. Get the 2024 Global <br />Learning & Skills Trends Report to <br /> learn more.</h4>
                <div className="bt"><button>Get the report →</button></div>
              </div></div>
              <div className="c62">
                <img src="https://cms-images.udemycdn.com/content/ag3rqs5nxw/png/2024_Angled_Trends_report_image.png?position=c&quality=80&x.app=portals" alt="" />
              </div>
            </div>
            <div className="cont7">
            <div className="h"><h1>Trending Now</h1></div>
            <br />
                <hr />
                <br />
              <div className="ct7">
                
                <div className="c7"><h1>chatGPT is a top <br />skill</h1>
                <h3>See ChatGPT is courses ›</h3>
                <p>3,127,423 learners</p>
                <button>Show all trending skills ↝</button></div>
                <div className="c7"><h2>Development</h2>
                <h3>Python ›</h3>
                <p>44,562,520 learners</p>
                <h3>Web Development ›</h3>
                <p>13,199,347 learners</p>
                <h3>Data Science</h3>
                <p>7,167,104 learners</p></div>
                <div className="c7"><h2>Design</h2>
                <h3>Blender ›</h3>
                <p>44,562,520 learners</p>
                <h3>Graphic design ›</h3>
                <p>13,199,347 learners</p>
                <h3>User Experience(UX) Design ›</h3>
                <p>7,167,104 learners</p>
                </div>
                <div className="c7"><h2>Business</h2>
                <h3>PMI Project Management(PMP) ›</h3>
                <p>44,562,520 learners</p>
                <h3>Microsoft Power BI ›</h3>
                <p>13,199,347 learners</p>
                <h3>Project Management›</h3>
                <p>7,167,104 learners</p></div>
              </div>
            </div>
            <br />
            <div className="a1"><h1>Learners are viewing</h1></div>
            <br />
            <section className='form3'>
                    <aside className='card1'>
                        <div className='img'></div>
                        <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/>  <button className='best'>best seller</button></p>
                     
                    </aside>
                    <aside className='card2'>  <div className='img'></div>   <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/> </p>
                     </aside>
                    <aside className='card3'>  <div className='img'></div>   <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/>  </p>
                     </aside>
                    <aside className='card4'>  <div className='img'></div>   <h1>  &nbsp;  &nbsp;  &nbsp;The Complete 2024 Web  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;Development Bootcamp</h1>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;Dr.Angela Yu</p>
                        <p>  &nbsp;  &nbsp;  &nbsp;  &nbsp;4.7 <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarHalf /></span>(380,000)</p>
                        <p> &nbsp;  &nbsp; &nbsp;  &nbsp;₹449 &nbsp;  &nbsp;      <span className='scratch'>₹3,099</span> <br/> </p>
                     </aside>
                </section>
           
           <br />
           <div className="cont8">
            <div className="ct8">
              <div className="c8">
              <h2>Booz|Hallen|Hamilton</h2>
              <h1>Booz Allen Hamilton Unlocks Talent <br /> Retention and Productivity Through <br />Upskilling</h1>
              <div className="sm">
                <div className="s1"><h1>93%</h1>
                <h5>retention rate among participating employees</h5>
                <hr /></div>
                <div className="s1">
                  <h1>65%</h1>
                  <h5>of learners noted a positive impact on their productivity</h5>
                  <hr />
                </div>
              </div>
             <div className="full"> <button>Read full story →</button></div>
            </div>
            </div>
            <div className="ct8">
              <img src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals" alt="" />
            </div>
           </div>
           <footer>
      <div class="foot">
      <div class="last">
        <h4 class="pp">Top companies choose <span class="last1">Udemy Business</span> to build in-demand career skills.</h4>
        <div className="imgs">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
        </div>
      </div>
      <hr />
      <br />
        <div class="lists">
          <ul>
            <li>Udemy Business</li>
            <li>Teach on udemy</li>
            <li>get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>investor</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
          <div className="lang"><button><MdLanguage /> English</button></div>
        </div>
        <div className="copy"><p>© 2024 Udemy, Inc.</p></div>
        <br /><br />
        <img class="pics" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
        
        </div>
       
    </footer>
        </div>


 
  )
}

export default Udemy