'use client';

import Image from 'next/image';

export default function NavbarSearch() {
  return (
    <div className="navbar_search">
      <div className="search_bar_wrapper">
        {/* ✅ Use next/image instead of <img> for optimization */}
        <Image
          src="/images/search_icon.svg"
          alt="Search icon"
          width={20}
          height={20}
          loading="lazy"
        />

        <div className="form-block w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            className="form"
            data-wf-page-id="688f5c9f2b8399631fce6461"
            data-wf-element-id="efbeaf45-0cc5-c4be-3bed-5a875e1ed015"
          >
            <input
              className="navbar_search_area w-input"
              maxLength={256}
              name="name"
              data-name="Name"
              placeholder="Search for artists, events, ..."
              type="text"
              id="name"
            />
          </form>

          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>

          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>

      <p className="heading-style-h6 navbar_city">in</p>

      <div id="search_city_label" data-group="category" className="nav-item">
        <div className="dropdown-toggle">
          <div className="filter-label event_city">&nbsp;</div>
          <Image
            src="/images/arrow.svg"
            alt="Dropdown arrow"
            width={16}
            height={16}
            loading="lazy"
            className="dropdown_arrow"
          />
        </div>

        <div className="dropdown-menu">
          <div className="dropdown-option event_city">NEW ORLEANS</div>
          <div className="dropdown-option event_city">ST. LOUIS</div>
          <div className="dropdown-option event_city">GREATER NEW HEAVEN</div>
        </div>
      </div>
    </div>
  );
}
