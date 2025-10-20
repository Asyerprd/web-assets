'use client';

import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import './globals.css';
import '../styles/normalize.css';
import '../styles/webflow.css';
import '../styles/culturalystbylain.css';
import NavbarSearch from './NavbarSearch';
import HeroClient from './heroClient';


export default function Home() {
  
  return (
    <>
      <Head>
        <title>CULTURALYST by LAIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
      </Head>

      <main className="no_body">
        <div className="page-wrapper">
          {/* Navbar */}
          <div className="navbar">
            <div className="navbar_clip">
              <div className="navbar_container">
                <div className="navbar_city_filter">
                  <div id="nav_city_label" data-group="category" className="nav-item">
                    <div className="dropdown-toggle">
                      <div className="filter-label">New Orleans</div>
                      <Image
                        src="/images/arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="dropdown_arrow"
                      />
                    </div>
                    <div className="dropdown-menu">
                      <div className="dropdown-option">NEW ORLEANS</div>
                      <div className="dropdown-option">ST. LOUIS</div>
                      <div className="dropdown-option">GREATER NEW HAVEN</div>
                    </div>
                  </div>

                  <Image
                    src="/images/New_Orleans_Icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="navbar_city_icon"
                  />
                </div>
                <NavbarSearch />

                {/* Example profile section */}
                <div className="profile_wrapper">
                  <Image
                    src="/images/profile.avif"
                    alt="profile"
                    width={32}
                    height={32}
                    className="profile_img"
                  />
                  <p className="heading-style-h6 text-color-white">Jeremiah</p>
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="profile_arrow"
                  />
                </div>
              </div>
            </div>
            <div className="navbar_menu">
              <div className="nav_home_wrapper">
                <div className="nav_link_wrapper home">
                  <Image 
                    src="/images/home.svg" 
                    loading="lazy" 
                    alt="" 
                    width={16}
                    height={16}
                    className="nav_home_img"
                    />
                    </div>
              </div>
              <div className="nav_link_wrapper">
                <p>Discover</p>
                <p className="heading-style-h5">ARTIST</p>
              </div>
              <div className="nav_link_wrapper">
                <p>Find</p>
                 <p className="heading-style-h5">EVENTS</p>
              </div>
              <div className="nav_link_wrapper">
                <p>Connect with</p>
               <p className="heading-style-h5">ORGANIZATION</p>
              </div>
              <div className="nav_link_wrapper">
                <p>Explore</p>
                <p className="heading-style-h5">OPPORTUNITIES</p>
              </div>
            </div>
            
            
          </div>


          <div className="swiper hero_section">
      <div className="swiper-wrapper hero-section">
        <div className="swiper-slide">
          <div className="home_slider_item"><Image width={800} height={600} src="/images/hero_slider_1.avif" loading="lazy" sizes="(max-width: 1480px) 100vw, 1480px" alt="" className="home_slider_img"/>
            <div className="home_slider_content">
              <div className="home_slider_content_top">
                <div className="hero_event_wrapper">
                  <div className="hero_event_item"><Image width={800}
  height={600} src="/images/profile.avif" loading="lazy" alt="" className="hero_event_item_img"/>
                    <div className="hero_event_item_content">
                      <div className="hero_event_item_name">
                        <h6 className="hero_event_item_name_text">Micaela Levesque</h6>
                        <p className="hero_event_item_uname_text">@micaelartist</p>
                      </div>
                      <div className="hero_event_item_tag_wrapper">
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero_event_item"><Image width={800}
  height={600} src="/images/profile.avif" loading="lazy" alt="" className="hero_event_item_img"/>
                    <div className="hero_event_item_content">
                      <div className="hero_event_item_name">
                        <h6 className="hero_event_item_name_text">Starbwoy Every</h6>
                        <p className="hero_event_item_uname_text">@micaelartist</p>
                      </div>
                      <div className="hero_event_item_tag_wrapper">
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero_event_item"><Image width={800}
  height={600} src="/images/Frame-1000009441_1.avif" loading="lazy" sizes="(max-width: 903px) 100vw, 903px"  alt="" className="hero_event_item_img"/>
                    <div className="hero_event_item_content">
                      <div className="hero_event_item_name">
                        <h6 className="hero_event_item_name_text">Rebecca Pappas</h6>
                        <p className="hero_event_item_uname_text">@micaelartist</p>
                      </div>
                      <div className="hero_event_item_tag_wrapper">
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                        <div className="hero_event_item_tag">
                          <p className="hero_event_item_uname_text">Visual</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero_event_button_wrapper">
                  <div className="button fill">
                    <p className="button_text">Discover More Artist</p><Image width={20}
  height={20} src="/images/arrow_long.svg" loading="lazy" alt="" className="button_arrow_img"/>
                  </div>
                  <div className="button stroke">
                    <p className="button_text">Sign Up as an Artist</p><Image width={20}
  height={20} src="/images/arrow_long.svg" loading="lazy" alt="" className="button_arrow_img invert"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="home_slider_item"><Image width={800}
  height={600} src="/images/Hero---Event_1.avif" loading="lazy" sizes="(max-width: 1480px) 100vw, 1480px" alt="" className="home_slider_img"/>
            <div className="home_slider_content">
              <div className="home_slider_content_top">
                <div className="hero_slider_upcoming">
                  <div className="tag-label stroke black">
                    <p className="button_text">Upcoming Events</p>
                  </div>
                  <h3 className="heading-style-h3">SEPT 7 2025</h3>
                  <div className="div-block-2"></div>
                  <h3 className="heading-style-h4">TOUR OF &quot;J. M. W. TURNER : ROMANCE AND REALITY</h3>
                  <div className="hero_slider_upcoming_details">
                    <div className="hero_slider_upcoming_details_item"><Image width={20}
  height={20} src="/images/clock.svg" loading="lazy" alt="" className="hero_slider_upcoming_details_img"/>
                      <p className="heading-style-h6">12:00 AM - 20:00 PM</p>
                    </div>
                    <div className="hero_slider_upcoming_details_item"><Image width={20}
  height={20} src="/images/loc_icon.svg" loading="lazy" alt="" className="hero_slider_upcoming_details_img"/>
                      <p className="heading-style-h6">Yale Center</p>
                    </div>
                  </div>
                  <div className="hero_event_button_wrapper">
                    <div className="button fill">
                      <p className="button_text">RSVP NOW</p><Image width={20}
  height={20} src="/images/arrow_long.svg" loading="lazy" alt="" className="button_arrow_img"/>
                    </div>
                    <div className="button stroke black">
                      <p className="button_text">Discover More Events</p><Image width={20}
  height={20} src="/images/arrow_long.svg" loading="lazy" alt="" className="button_arrow_img"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="home_slider_item">
            <div className="home_slider_content job">
              <div className="home_slider_job left">
                <div className="hero_slider_job_heading">
                  <h2 className="heading-style-h3">UPCOMING<br/>OPPORTUNITIES</h2>
                  <div className="button stroke black">
                    <p className="button_text">Discover More Opportunities</p><Image width={20}
  height={20} src="/images/arrow_long.svg" loading="lazy" alt="" className="button_arrow_img"/>
                  </div>
                </div><Image width={20}
  height={20} src="/images/logo.svg" loading="lazy" alt="" className="hero_slider_job_img"/>
              </div>
              <div className="home_slider_job">
                <div className="home_slider_job_details">
                  <h2 className="heading-style-h3">CREATIVE<br/>QUARTERLY</h2>
                  <div className="home_slider_job_label">
                    <div className="label orange">
                      <p className="button_text">Visual</p>
                    </div>
                    <div className="label purple">
                      <p className="button_text">Residency</p>
                    </div>
                    <div className="label green">
                      <p className="button_text">Relief Aid</p>
                    </div>
                  </div>
                  <p className="heading-style-h6 text_color_grey">The heat&#x27;s on. Enter now to have an opportunity to have your work showcased in our new year-end The heat&#x27;s on. Enter now to have an opportunity to have your</p>
                  <div className="home_slider_job_fitures">
                    <div className="home_slider_job_fitures_item">
                      <p className="button_text text_color_grey">Deadline</p>
                      <div className="home_slider_job_fitures_wrapper"><Image width={20}
  height={20} src="/images/date.svg" loading="lazy" alt="" className="home_slider_job_fitures_img"/>
                        <p className="heading-style-h6">September 7, 2025</p>
                      </div>
                    </div>
                    <div className="home_slider_job_fitures_item">
                      <p className="button_text text_color_grey">Location</p>
                      <div className="home_slider_job_fitures_wrapper"><Image width={20}
  height={20} src="/images/loc_icon.svg" loading="lazy" alt="" className="home_slider_job_fitures_img"/>
                        <p className="heading-style-h6">Yale center</p>
                      </div>
                    </div>
                    <div className="home_slider_job_fitures_item">
                      <p className="button_text text_color_grey">Scope</p>
                      <div className="home_slider_job_fitures_wrapper">
                        <p className="heading-style-h6">Global</p>
                      </div>
                    </div>
                    <div className="home_slider_job_fitures_item">
                      <p className="button_text text_color_grey">Fee to Apply</p>
                      <div className="home_slider_job_fitures_wrapper">
                        <p className="heading-style-h6">$ 15</p>
                      </div>
                    </div>
                  </div>
                  <div className="button fill">
                    <p className="button_text">Apply Now</p><Image width={20}
  height={20} src="/images/arrow_long.svg" loading="lazy" alt="" className="button_arrow_img"/>
                  </div>
                </div>
              </div>
              <p className="hero_text_filler">RESIDENCY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-navigation-wrapper">
        <div swiper-button-prev="" className="swiper-button-prev"><Image width={800}
  height={600} loading="lazy" src="/images/arrow-down.svg" alt="" className="prev"/></div>
        <div swiper-button-next="" className="swiper-button-next"><Image width={800}
  height={600} loading="lazy" src="/images/arrow-down.svg" alt="" className="next"/></div>
      </div>
    </div>




          {/* Your hero swiper section and other content here */}
        </div>

        {/* Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.23/bundled/lenis.min.js" />
        <Script src="/js/webflow.js" />
        <HeroClient />

      </main>
    </>
  );
}
