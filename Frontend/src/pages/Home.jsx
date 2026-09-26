import "../styles/Home.css";
import homeBannerImage from "/public/Home_Page_banner_image.svg";
import {useNavigate} from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  // Home page cards
  let home_page_cards = [{
    image: <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-9.45 -9.45 113.40 113.40" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-9.45" y="-9.45" width="113.40" height="113.40" rx="22.68" fill="#008ab8" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828 l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587 c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z"></path> <path d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414 l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833 c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229 C33.542,66.771,33.542,65.505,32.759,64.724z"></path> <path d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382 c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083 c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z"></path> </g> </g> </g></svg>,
    // image: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
    title: "Programming",
    description: `Learn coding from the basics by using this website.
    Learn coding from the basics by using this website`
  },
  {
    image: <svg fill="#ffffff" viewBox="-1.9 -1.9 22.80 22.80" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.9" y="-1.9" width="22.80" height="22.80" rx="4.56" fill="#009e2f" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z"></path></g></svg>,
    // image:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    title: "Web Development",
    description: `Learn coding from the basics by using this website.
    Learn coding from the basics by using this website`
  }, {
    image: <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#d1ca00" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21L12 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="4" width="18" height="13" rx="1" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> <path d="M9 21H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
    title: "Computer Science",
    description: `Learn coding from the basics by using this website.
    Learn coding from the basics by using this website`
  }
  ];
  // Why TechLiterate Cards
  let whyTechLiterate = [{
    image: <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#b75901" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.1519V19.3095C3.99197 18.8639 5.40415 18.4 7 18.4C8.58915 18.4 9.9999 18.8602 11 19.3094V6.1519C10.7827 6.02653 10.4894 5.8706 10.1366 5.71427C9.31147 5.34869 8.20352 5 7 5C5.26385 5 3.74016 5.72499 3 6.1519ZM13 6.1519V19.3578C13.9977 18.9353 15.41 18.5 17 18.5C18.596 18.5 20.0095 18.9383 21 19.3578V6.1519C20.2598 5.72499 18.7362 5 17 5C15.7965 5 14.6885 5.34869 13.8634 5.71427C13.5106 5.8706 13.2173 6.02653 13 6.1519ZM12 4.41985C11.7302 4.26422 11.3734 4.07477 10.9468 3.88572C9.96631 3.45131 8.57426 3 7 3C4.69187 3 2.76233 3.97065 1.92377 4.46427C1.30779 4.82687 1 5.47706 1 6.11223V20.0239C1 20.6482 1.36945 21.1206 1.79531 21.3588C2.21653 21.5943 2.78587 21.6568 3.30241 21.3855C4.12462 20.9535 5.48348 20.4 7 20.4C8.90549 20.4 10.5523 21.273 11.1848 21.6619C11.6757 21.9637 12.2968 21.9725 12.7959 21.6853C13.4311 21.32 15.0831 20.5 17 20.5C18.5413 20.5 19.9168 21.0305 20.7371 21.4366C21.6885 21.9075 23 21.2807 23 20.0593V6.11223C23 5.47706 22.6922 4.82687 22.0762 4.46427C21.2377 3.97065 19.3081 3 17 3C15.4257 3 14.0337 3.45131 13.0532 3.88572C12.6266 4.07477 12.2698 4.26422 12 4.41985Z" fill="#f9f6f6"></path> </g></svg>,
    title: "Strutured Learning",
    description: `Learn coding from the basics by using this website.
    Learn coding from the basics by using this website`
  },
  {
    image: <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="5.76" fill="#df0101" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="#fafafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
    title: "Practical Skills",
    description: `Learn coding from the basics by using this website.
    Learn coding from the basics by using this website`
  }, {
    image: <svg viewBox="-3.2 -3.2 22.40 22.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-3.2" y="-3.2" width="22.40" height="22.40" rx="4.48" fill="#07e454" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16L12 14V10L13.6569 8.34314C15.1571 6.84285 16 4.80802 16 2.68629V0H13.3137C11.192 0 9.15714 0.842855 7.65685 2.34315L6 4H2L0 6L10 16ZM10.5 7C11.3284 7 12 6.32843 12 5.5C12 4.67157 11.3284 4 10.5 4C9.67157 4 9 4.67157 9 5.5C9 6.32843 9.67157 7 10.5 7Z" fill="#faf9f9"></path> <path d="M4.9274 13.7558L2.24423 11.0726L0 15L1 16L4.9274 13.7558Z" fill="#faf9f9"></path> </g></svg>, title: "Career Focused",
    description: `Learn coding from the basics by using this website.
    Learn coding from the basics by using this website`
  }
  ];
  function startLearning(){
    navigate("/home");
  }
  return (
    <>
      {/* Home Page Section */}
      <div className='home'>
        <div className="short-quote">
          <p> • Learn • Build • Grow</p>
        </div>
        {/* Home Page Banner */}
        <div className="home-page-banner">
          <div className="home-page-banner-text">
            <h1>Learn The Technology.<br /><span>Build Your Career</span></h1><br />
            <p>TechLiterate is a learning platform designed to help you build practical technology skills with confidence. Explore programming, web development, computer science, and other in-demand tech concepts through simple, easy-to-understand learning resources. Learn at your own pace, practice what you learn, and take the next step toward your career in technology.</p>
          </div>
          <img className="home-banner-image" src={homeBannerImage} alt="Home Banner" />
        </div>
        {/* Home Page Heading */}
        <div className="home-page-heading">
          <h1 className="explore-learning-path">Explore The Learning Path</h1>
          <p>Choose from a wide range of technologies and start today</p>
        </div>
        {/* Home Page Cards */}
        <div className="home-page-cards">
          {home_page_cards.map((card, index) => {
            return (
              <div key={index} className="home-page-card">
                <p className="card-image">{card.image}</p>
                <p className="card-title">{card.title}</p>
                <p className="card-description">{card.description}</p>
              </div>
            )
          })}
        </div>
        {/* Why Techliterate Section */}
        <div className="why-techliterate-section">
          <h1 className="why-techliterate-heading">Why TechLiterate ? </h1>
          <p className="why-techliterate-description">We make this practical,carrer focused
            learn what industry actually need
          </p>
          <div className="why-techliterate-cards">
            {whyTechLiterate.map((card, index) => {
              return (
                <div key={index} className="why-techliterate-card">
                  <p className="card-image">{card.image}</p>
                  <p className="card-title">{card.title}</p>
                  <p className="card-description">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="start-learning">
          <p className="start-learning-title">
            Your Tech Journey Starts Here 🚀
          </p>
          <button onClick={startLearning}>Start Learning 🎯</button>
        </div>
      </div>
    </>
  )
}

export default Home;