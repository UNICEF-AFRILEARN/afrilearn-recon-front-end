import React from "react";
import Image from "next/image";
import styles from "../../../features/dashboard/AfrilearnCoin/africoin.module.css"


const Africoin = () => {

const coinData = {
amount : "400"
}


  return (
    <body>
    <nav className={styles.videoheropage}>
      <div className={styles.avatarCoin}>
      </div>
    </nav>
    <div className= {`${styles.africoinContainer}`} >
      <div className={`row ${styles.amountContainer}`}>
        <div className="col-md-3"><p>My Africoins:</p></div> 
        <div className={`col-md-6 ${styles.amountCoin}`}> <Image alt={"design image"}  src={"/assets/img/features/dashboard/student/Group.png"} width={"30px"}  height={"32px"}/> {coinData?.amount} Coins</div>
      </div>
      <div className="row">
      <div className= {`col-md-2 ${styles.buyCoin}`}>
        <div> <h5>Wallet Balance:</h5></div>
        <div className={` ${styles.amountCoin2}`}> <Image alt={"design image"}  src={"/assets/img/features/dashboard/student/Group.png"} width={"30px"}  height={"25px"}/> {coinData?.amount} Coins</div>
        <div><button>BUY MORE COINS</button></div>
      </div>
      <div className={`col-md-8 ${styles.buycoinInput}`}>
        <div><h5>Buy Africoins</h5></div>
        <div><h4>100 Africoins = 100</h4></div>
        <form className={`row ${styles.coinForm}`}>
  <label for="first">You pay:  </label>
  <input type="text" id="first" name="first"  className={styles.coinInput2} placeholder=" Enter amount in Naira"/>
  <label for="last">You get:</label>
  <input type="text" id="last" name="last" className={styles.coinInput} placeholder="Equivalent africoin you get" />
  <button type="submit" className={styles.coinInputbutton}>BUY AFRICOIN</button>
</form>
        </div>
      </div>
  
    </div>
    
    </body>
  );
};

export default Africoin;
