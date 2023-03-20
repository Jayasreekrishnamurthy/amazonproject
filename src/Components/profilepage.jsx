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
import profile from "./Images/img/yt/Videos iTut/profile/2020-03-13-13-57-49-018~2.jpg"
import short from "./Images/img/yt/wbJz8A4erMk.jpg";
import short1 from "./Images/img/yt/Videos iTut/shorts/shorts1.mp4"
import short2 from "./Images/img/yt/Videos iTut/shorts/shorts2.mp4"
import short3 from "./Images/img/yt/Videos iTut/shorts/shorts3.mp4"
import short4 from "./Images/img/yt/Videos iTut/shorts/shorts4.mp4"

import '../css/movies.css'
export function Profilepage() {
    return (
        <center><div className="profile">
            
            <img src={profile} alt="profile image" class="profile_image" />
            <div className="profile_name">Jayasree K</div>
            <div className="profile_title">Full stack developer</div>
            <div className="profile_detail">
               <i className="material-icons">person</i> 1,200 followers
            </div>
        </div>
        </center>
        // <center><div class="card">
		
		// <div class="top-container">
			
		// 	<img src={profile} class="img-fluid profile-image" width="70"/>
			
		// 	<div class="ml-3">
		// 		<h5 class="name">Jayasree K</h5>
		// 		<p class="mail">Full stack developer</p>
        //         <p class="follow">
        //        <i className="material-icons">person</i> 1,200 followers
        //     </p>
		// 	</div>
		// </div>
        // </div>
        // </center>

        
    )
}