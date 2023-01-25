import React from 'react'
import { apple, bill, google } from '../assets';
import styles, { layout } from "../constants/style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, cu simul discere meliore his. Eam cu dicant
        facilisi insolens. Ut possim quaeque mentitum vel, ad ius mazim
        ocurreret vulputate. Te diam movet vel. Graeci appetere vis no, cu velit
        impetus posidonium vis.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-obtain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-obtain cursor-pointer"
        />
      </div>
    </div>
  </section>
);


export default Billing