import React from "react";
// import { Link } from "react-router-dom";
// import Row from "../Row";
// import userrequests from "../Request";
// import { BootStrapCarousal } from "./Slideshow/BootStrapCarousal";
import NavbarAfterLogin from "./NavbarAfterLogin";
// import Banner from "../Banner";
import profile from "./Images/img/profile-pic.jpg"
import mongo1 from "./Images/img/yt/Videos iTut/Mongo/1.mp4"
import mongo2 from "./Images/img/yt/Videos iTut/Mongo/2.mp4"
import mongo3 from "./Images/img/yt/Videos iTut/Mongo/3.mp4"
import mongo4 from "./Images/img/yt/Videos iTut/Mongo/4.mp4"

import '../css/movies.css'
export function Popular() {
    return (
        
        <div className="video-container" id="ytvvido">
            
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={mongo1} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">MongooseDb Part1</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={mongo2} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">MongooseDb Part2</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={mongo3} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">MongooseDb Part3</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
            <div className="video">
                {/* <img src={ytimg} class="thumbai" alt="" /> */}
                <iframe width="420" height="345" src={mongo4} class="thumbai">
</iframe>
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">MongooseDb Part4</h4>
                        <p className="chennal-name">jayasree channel</p>
                        <p className="chennal-name">102M Views &bull; 1 month</p>
                    </div>
                </div>
            </div>
            {/* <div className="video">
                <img src={ytimg} class="thumbai" alt="" />
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">website content</h4>
                        <p className="chennal-name">jayasree channel</p>
                    </div>
                </div>
            </div>
            <div className="video">
                <img src={ytimg} class="thumbai" alt="" />
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">website content</h4>
                        <p className="chennal-name">jayasree channel</p>
                    </div>
                </div>
            </div>
            <div className="video">
                <img src={ytimg} class="thumbai" alt="" />
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">website content</h4>
                        <p className="chennal-name">jayasree channel</p>
                    </div>
                </div>
            </div>
            <div className="video">
                <img src={ytimg} class="thumbai" alt="" />
                <div className="content">
                    <img src={profile} class="chennal-icon" alt="" />
                    <div className="info">
                        <h4 className="title">website content</h4>
                        <p className="chennal-name">jayasree channel</p>
                    </div>
                </div>
            </div> */}
        </div>
        

        
    )
}