import './App.css';
import Logo from './assets/Logo.svg';
import heroImage from './assets/hero-img.png';
import dummyImg from './assets/dummy.png';
import dummyImg2 from './assets/author2.svg';
import dummyImg3 from './assets/author3.svg';
import news1 from './assets/news1.png';
import news2 from './assets/news2.png';
import news3 from './assets/news3.png';
import news4 from './assets/news4.png';
import news5 from './assets/news5.png';
import news6 from './assets/news6.png';
import { useState } from 'react';

function App() {
  const [dropdown,setDropdown] = useState(false);
  const news = [
    {name: "Chandler Bing", image: news1, title: "Category", date: "November 22, 2021", text: "Pitch termsheet backing validation focus release.",authorHeadshot: dummyImg},
    {name: "Rachel Green", image: news2, title: "Category", date: "November 22, 2021", text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",authorHeadshot: dummyImg2},
    {name: "Monica Geller", image: news3, title: "Category", date: "November 22, 2021", text: "Beta prototype sales iPad gen-z marketing network effects value proposition",authorHeadshot: dummyImg3},
    {name: "Chandler Bing", image: news4, title: "Category", date: "November 22, 2021", text: "Pitch termsheet backing validation focus release.",authorHeadshot: dummyImg},
    {name: "Rachel Green", image: news5, title: "Category", date: "November 22, 2021", text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",authorHeadshot: dummyImg2},
    {name: "Monica Geller", image: news6, title: "Category", date: "November 22, 2021", text: "Beta prototype sales iPad gen-z marketing network effects value proposition",authorHeadshot: dummyImg3},
  ];
  return (
    <div className="App">
      <nav className='navSection'>
          <img className='logo' src={Logo} alt='Boldo logo' />
          <ul className='navlist-cont'>
              <li className='navlist'>Product</li>
              <li className='navlist'>Services</li>
              <li className='navlist'>About</li>
              <li>
                <a className='act-btn btn'>Log In</a>
              </li>
          </ul>
      </nav>
      <nav className='mob-nav'>
        <section>
          <img className='logo' src={Logo} alt='Boldo logo' />
          <a onClick={()=>setDropdown((prev)=>!prev)}>
            {!dropdown ? (
              <div className='menu'>
                <svg id="hamburger-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="5" x2="20" y2="5" stroke="#0A2640" stroke-width="2"/>
                    <line x1="4" y1="11" x2="20" y2="11" stroke="#0A2640" stroke-width="2"/>
                    <line x1="4" y1="17" x2="20" y2="17" stroke="#0A2640" stroke-width="2"/>
                </svg>
              </div>
            ) : (
              <div className='menu'>
                <svg id="close-icon2" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.0224 11.7459C25.4002 12.1013 25.4184 12.6957 25.063 13.0735L19.9146 18.5461L25.3872 23.6945C25.765 24.0499 25.7832 24.6443 25.4278 25.0221C25.0723 25.3999 24.4779 25.4181 24.1001 25.0626L18.6275 19.9143L13.4791 25.3869C13.1237 25.7647 12.5293 25.7829 12.1515 25.4274C11.7737 25.072 11.7556 24.4776 12.111 24.0998L17.2594 18.6272L11.7867 13.4788C11.4089 13.1234 11.3908 12.529 11.7462 12.1512C12.1016 11.7734 12.696 11.7553 13.0738 12.1107L18.5464 17.259L23.6948 11.7864C24.0502 11.4086 24.6446 11.3905 25.0224 11.7459Z" fill="#25282B"/>
                </svg>
              </div>
            )}
          </a>

        </section>
        {
          dropdown && (
            <ul className='mob-navlist-cont'>
                <li className='navlist'>Product</li>
                <li className='navlist'>Services</li>
                <li className='navlist'>About</li>
                <li>
                  <a className='act-btn btn'>Log In</a>
                </li>
            </ul>

          )
        }
      </nav>
      <p className='header1'>Blog</p>
      <h1 className='subheader1'>Thoughts and words</h1>
      <section className='heroSection'>
        <img className='heroImg' src={heroImage} loading='lazy' alt='heroimage' />
        <article>
          <p className='text-base bold mb-3'>Category <span className='normal text-grey ml-3'>November 22, 2021</span></p>
          <p className='mb-5 subheader2 normal'>Pitch termsheet backing validation focus release.</p>
          <aside className='flex'>
            <img className='profile-img' src={dummyImg} loading='lazy' alt='dummy image' />
            <p className='text-sm normal mt-2'>Chandler Bing</p>
          </aside>
        </article>
      </section>
      <section className='newsSection'>
          <p className='mb-10 subheader2 normal'>Latest news</p>
          <ul className='news-cont flex'>
            {news.map(item => {
              return (
                <li key={item.text}>
                  <article className='news-article'>
                    <img className='preview-image' src={item.image} alt='random Image'/>
                    <p className='text-base bold mb-3'>{item.title} <span className='normal text-grey ml-3'>{item.date}</span></p>
                    <p className='mb-5 normal text-left'>{item.text}</p>
                    <aside className='flex author'>
                      <img className='profile-img' src={item.authorHeadshot} loading='lazy' alt='dummy image' />
                      <p className='text-sm normal mt-2'>{item.name}</p>
                    </aside>
                  </article>
                </li>
              )
            })}
          </ul>
      </section>
      <section className='plcment flex'>
        <a className='act-btn2 btn'>Load more</a>
      </section>
      <section className='signup flex'>
          <div className='signup-cont'>
              <p className='subheader2 text-white mb-50'>An enterprise template to ramp up your company website</p>
              <aside>
                <input placeholder='Your email address'/>
                <button>Start now</button>
              </aside>
          </div>
      </section>
      
      <footer class="footer">
        <div class="footer__addr">
          <img src={Logo} className='footer__logo' alt='logo' />
              
          <p className='mb-64'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
          
          <p>All rights reserved.</p>
        </div>
        
        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Landings</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Products</a>
              </li>
                  
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </li>
          
          <li class="nav__item">
            <h2 class="nav__title">Company</h2>
            
            <ul class="nav__ul">
              <li>
                <a href="#">Home</a>
              </li>
              
              <li className='flex'>
                <a href="#">Careers</a>
                <p className='hiring ml-3'>Hiring</p>
              </li>
              
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </li>
          
          <li class="nav__item">
            <h2 class="nav__title">Resources</h2>
            
            <ul class="nav__ul">
              <li>
                <a href="#">Blog</a>
              </li>
              
              <li>
                <a href="#">Products</a>
              </li>
              
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
