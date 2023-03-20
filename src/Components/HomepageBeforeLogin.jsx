import React from "react";
import { Button_LoginToPrime } from "./Styles/ButtonTillCheckout";
import styles from "./Styles/Homepage.module.css";

import rectangle16 from "./Images/Rectangle16.png";
import { Navbar1 } from "./Navbar1";
import { Footer1 } from "./Footer1";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar1 />
      <div className={styles.Home_mainDiv}>
        <div className={styles.Home_mainDiv_flexDiv1}>
          <div>
            <img src={rectangle16} alt=""></img>
          </div>
          <div className={styles.Home_mainDiv_flexDiv_ContentDiv}>
            <h1 className={styles.Home_mainDiv_flexDiv_ContentDiv_h1}>
              Family Friendly
            </h1>
            <p className={styles.Home_mainDiv_flexDiv_ContentDiv_p}>
              With easy to use Parental Controls and a dedicated kids page,
              enjoy secure, ad-free kids entertainment. Kids can enjoy popular
              TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
            </p>
            <Link to="/signin">
              <Button_LoginToPrime>Get started</Button_LoginToPrime>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer1 />
    </>
  );
}

export { Homepage };
