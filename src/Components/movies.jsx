import React from "react";
// import { Link } from "react-router-dom";
// import Row from "../Row";
// import userrequests from "../Request";
// import { BootStrapCarousal } from "./Slideshow/BootStrapCarousal";
import NavbarAfterLogin from "./NavbarAfterLogin";
// import Banner from "../Banner";
import rectangle13 from "./Images/Rectangle13.png";
import rectangle15 from "./Images/Rectangle15.png";
// import ytimg from "./Images/img/yt/video.mp4"
import profile from "./Images/img/profile-pic.jpg"
import react1 from "./Images/img/yt/Videos iTut/Reactjs/1.mp4"
import react2 from "./Images/img/yt/Videos iTut/Reactjs/2.mp4"
import react3 from "./Images/img/yt/Videos iTut/Reactjs/3.mp4"
import react4 from "./Images/img/yt/Videos iTut/Reactjs/4.mp4"

import '../css/movies.css'
export function Movies() {
    return (
        
        <div className="video-container" id="ytvvido">
            
            <div className="video">
                <a href="" target="_blank">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={react1} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                       <h4 className="title">Reactjs part1</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
                </a>
            </div>
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={react2} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">Reactjs part2</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={react3} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">Reactjs part3</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={react4} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">Reactjs part4</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
        </div>
        

        
    )
}