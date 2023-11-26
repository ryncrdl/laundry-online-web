import React from "react"
// import app from "../ApkApp/onlineLaundry.apk"

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#download"
                  // download="onlineLaundry.apk"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={() => alert("Magbayad muna kayo :)")}
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
