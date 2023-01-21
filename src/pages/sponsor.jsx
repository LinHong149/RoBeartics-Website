import styles from "../style"

import { Bot, Contact, CTA, Footer, Goals, Nav, Sponsors, Stats, Team, Us } from "../components"

const Sponsor = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
      </div>
    </div> */}

    <div className={`bg.primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        THIS IS SPONSORS
        <Us />
      </div>
    </div>

    <div className={`bg.primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Goals />
        <Bot />
        <Sponsors /> 
        <Team />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>

  </div>
);

export default Sponsor