import React from "react";
import styles, { layout } from "../constants/style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, cu simul discere meliore his. Eam cu dicant
        facilisi insolens. Ut possim quaeque mentitum vel, ad ius mazim
        ocurreret vulputate. Te diam movet vel. Graeci appetere vis no, cu velit
        impetus posidonium vis. Mea in soleat appareat posidonium, vis in
        feugait consectetuer, nec no rationibus definitionem.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
