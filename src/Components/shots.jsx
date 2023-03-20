import React from "react";
// import { Link } from "react-router-dom";
// import Row from "../Row";
// import userrequests from "../Request";
// import { BootStrapCarousal } from "./Slideshow/BootStrapCarousal";
import NavbarAfterLogin from "./NavbarAfterLogin";
// import Banner from "../Banner";
import rectangle13 from "./Images/Rectangle13.png";
import rectangle15 from "./Images/img/yt/wQQ2YdVvoV0.jpg";
import ytimg from "./Images/img/yt/0wfg2inC-0k.jpg"
import profile from "./Images/img/profile-pic.jpg"
import short from "./Images/img/yt/wbJz8A4erMk.jpg";
import short1 from "./Images/img/yt/Videos iTut/shorts/shorts1.mp4"
import short2 from "./Images/img/yt/Videos iTut/shorts/shorts2.mp4"
import short3 from "./Images/img/yt/Videos iTut/shorts/shorts3.mp4"
import short4 from "./Images/img/yt/Videos iTut/shorts/shorts4.mp4"

import '../css/movies.css'
export function Shots() {
    return (
        <div class="middle-panel">

            <div class="story-section">

                <div class="story create">
                    <div class="dp-image">
                        <img src={short} alt="Profile pic"/>
                    </div>
                    <span class="dp-container">
                        <i class="fa fa-plus"></i>
                    </span>
                    <span class="name">Create Story</span>
                </div>


                <div class="story">
                    {/* <img src={short1} alt="Anuska's story"/> */}
                    <iframe width="420" height="345" src={short1} alt=""></iframe>
                    <div class="dp-container">
                        <img src={profile} alt=""/>
                    </div>
                    <p class="name">Anuska Sharma</p>
                </div>

                <div class="story">
                    {/* <img src={short2} alt="Story image"/> */}
                    <iframe width="420" height="345" src={short2} alt=""></iframe>
                    <span class="dp-container">
                        <img src={profile} alt="Profile pic"/>
                    </span>
                    <span class="name">Gaurav Gall</span>
                </div>

                <div class="story">
                    {/* <img src={ytimg} alt="Story image"/> */}
                    <iframe width="420" height="345" src={short3} alt=""></iframe>
                    <span class="dp-container">
                        <img src={rectangle15} alt="Profile pic"/>
                    </span>
                    <span class="name">Priyank Saksena</span>
                </div>

                <div class="story">
                    {/* <img src={rectangle15} alt="Story image"/> */}
                    <iframe width="420" height="345" src={short4} alt=""></iframe>
                    <span class="dp-container">
                        <img src={short} alt="Profile pic"/>
                    </span>
                    <span class="name">Pragati Adhikari</span>
                </div>
            </div>
            </div>

        
    )
}