import React from 'react'
import css from './footer.module.css';
import { Link } from 'react-router-dom'
import img from './images/image.png'
import location from './images/location.svg'
import mail from './images/mail.svg'
import website from './images/website.svg'
import insta from './images/insta.svg'
import facebook from './images/facebook.svg'
import linkedin from './images/linkedin.svg'

const footer = () => {
  return (
    <div className={`${css.maindiv}`}>
      <div className={`${css.container}`}>
        <div className={`${css.address}`}>
          <img src={img} className={`${css.logoimg}`} alt='Spardha 2024 with iitbhu logo'></img>
          <div className={`${css.mail}`}>
            <div className={`${css.innerparts}`}>
              <img src={location} alt='Location svg' className={`${css.bluetext}`}></img>
              <p className={`${css.text}`}>IIT (BHU) Varanasi,
                Uttar Pradesh - 221005</p>
            </div>
            <div className={`${css.innerparts}`}>
              <img src={mail} alt='Location svg' className={`${css.bluetext}`}></img>
              <p className={`${css.text}`}>spardha@itbhu.ac.in</p>
            </div>
            <div className={`${css.innerparts}`}>
              <img src={website} alt='Location svg' className={`${css.bluetext}`}></img>
              <p className={`${css.text}`}><a href='https://www.spardha.org.in' style={{textDecoration:'none',
                color:'white'
              }}>spardha.org.in</a></p>
            </div>
          </div>
        </div>
        <div className={`${css.quicklink_contact}`}>
          <div className={`${css.quicklinks}`}>
            <h2 className={`${css.bluetext} ${css.gaping}`}> Quick Links</h2>
            <Link to='/' className={`${css.links}`}><h3 className={`${css.quickoptions}`}>Home</h3></Link>
            <Link to='/about#about' className={`${css.links}`}><h3 className={`${css.quickoptions}`}>About</h3></Link>
            <Link to='/matches' className={`${css.links}`}><h3 className={`${css.quickoptions}`}>Matches</h3></Link>
            <Link to='/events#events' className={`${css.links}`}><h3 className={`${css.quickoptions}`}>Teams</h3></Link>
            <Link to='/contactus#contactus' className={`${css.links}`}> <h3 className={`${css.quickoptions}`}>Contact</h3></Link>
            <Link to='/sponsors#sponsors' className={`${css.links}`}> <h3 className={`${css.quickoptions}`}>Sponsors</h3></Link>
          </div>
          <div className={`${css.contact}`}>
            <div className={`${css.contactus}`}>
              <h2 className={`${css.bluetext} ${css.gaping}`}> Contact Us</h2>
              <div className={`${css.contacts}`}>
              <h4 className={`${css.convener}`}> Convener</h4>
              <p>Sarthak Gupta</p>
              <p className={`${css.convenermail}`}>convener.spardha@itbhu.ac.in</p>
              <h4 className={`${css.convener}`}> Collaboration</h4>
              <p className={`${css.convenermail}`}>marketing.spardha@itbhu.ac.in</p>
              </div>
            </div>
            <div className={`${css.followus}`}>
              <h2 className={`${css.bluetext} ${css.gaping}`}> Follow Us</h2>
              <div className={`${css.followusinside}`}>
                <a href='https://www.instagram.com/spardha_iitbhu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='blank'> 
                  <img src={insta} alt='Instagram Link'></img>
                </a>
                <a href='https://www.facebook.com/Spardha.IIT.BHU/' target='blank'>
                  <img src={facebook} alt='Facebook Link'></img>
                </a>
                <a href='https://www.linkedin.com/company/spardha/' target='blank'>
                  <img src={linkedin} alt='Linkedin Link'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className={`${css.bottom}`}>Spardha, IIT BHU ©2024. All Rights Reserved.</h5>
    </div>
  )
}

export default footer
