import styles from '../style'
import { discount, robeartics } from '../assets'
import Devolotics from './Devolotics'

const Us = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} mx-2`}>
            <span className='text-white'>Unleashing Innovation, Achieving Excellence.</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next 
            <br className='sm:block hidden'/> {" "} <span className='text-gradient'>Generation</span> {" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0 '>
            <Devolotics />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          of Engineers.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A group of high school students from Dr. Norman Bethune C.I in Scarborough, Ontario, excited to be participating in the FIRST Tech Challenge competition for the first time. We're ready to showcase our passion for robotics and bears and represent our school with excellence and determination.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img className='w-[100%] h-[100%] relative z-[5]' src={robeartics} />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Devolotics />
    </div>

  </section>
)

export default Us