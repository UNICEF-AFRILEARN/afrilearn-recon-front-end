import React from "react";
import Image from "next/image";
import styles from "../../../features/dashboard/AfrilearnCoin/africoin.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Africoin = () => {
  const { user } = useSelector((state) => state.auth);
  const coinData = {
    amount: user?.user.afriCoins,
  };

  return (
    <body>
      <nav className={styles.videoheropage}>
        <div className={styles.avatarCoin}></div>
      </nav>
      <div className={`${styles.africoinContainer}`}>
        <div className={`row ${styles.amountContainer}`}>
          <div className="col-md-3">
            <p>My Africoins:</p>
          </div>
          <div className={`col-md-6 ${styles.amountCoin}`}>
            {" "}
            <Image
              alt={"design image"}
              src={"/assets/img/features/dashboard/student/Group.png"}
              width={"30px"}
              height={"32px"}
            />{" "}
            {coinData?.amount} Coins
          </div>
        </div>
        <div className="row">
          <div className={`col-md-2 ${styles.buyCoin}`}>
            <div>
              {" "}
              <h5>Wallet Balance:</h5>
            </div>
            <div className={` ${styles.amountCoin2}`}>
              {" "}
              <Image
                alt={"design image"}
                src={"/assets/img/features/dashboard/student/Group.png"}
                width={"30px"}
                height={"25px"}
              />{" "}
              {coinData?.amount} Coins
            </div>
            <div>
              <button>BUY MORE COINS</button>
            </div>
          </div>
          <div className={`col-md-8 ${styles.buycoinInput}`}>
            <div>
              <h5>Buy Africoins</h5>
            </div>
            <div>
              <h4>100 Africoins = 100</h4>
            </div>
            <form className={`row ${styles.coinForm}`}>
              <label for="first">Check Coin Equivalent of your Money</label>
              <select id="first" name="first">
                <option value="100"> For ₦100 you will get 100 Coins </option>
                <option value="200"> For ₦200 you will get 200 Coins </option>
                <option value="500"> For ₦500 you will get 500 Coins </option>
                <option value="1000">For ₦1000 you will get 1000 Coins</option>
                <option value="5000">For ₦5000 you will get 5000 Coins</option>
                <option value="10000">
                  For ₦10000 you will get 10000 Coins
                </option>
              </select>
              <Link passHref="https://api.whatsapp.com/send?phone+2348051544949">
                <button type="submit" className={styles.coinInputbutton}>
                  BUY AFRICOIN
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Africoin;
