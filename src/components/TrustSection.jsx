import plane from '../images/plane.gif'
import headset from '../images/headset.gif'
import wallet from '../images/wallet.gif'
import arrow from '../images/arrow.gif'




export default function TrustSection() {
    return(
        <> 
              <section className=" w-[100%] h-[200px] text-center md:w-4/5 md:h-[10vh] px-4 grid grid-cols-2 md:flex flex-row justify-center mx-auto bg-white items-center  mt-10 gap-x-8 " >
                          <div className=" relative border-1 border-black/10  md:md:w-96 h-16 flex justify-center items-center " >
                            <p className=' font-bold'> تحویل به موقع </p>
                            <img className=" right-0 top-0 absolute w-9 h-8" src={plane} alt="" />
                          </div>

                            <div className=" relative border-1 border-black/10 md:w-96 h-16 flex justify-center items-center " >
                            <p className=' font-bold'> پشتبانی مشتریان </p>
                            <img className=" right-0 top-0 absolute w-9 h-8" src={headset} alt="" />
                          </div>

                            <div className=" relative border-1 border-black/10 md:w-96 h-16 flex justify-center items-center " >
                            <p className=' font-bold'> مرجوع اسان </p>
                            <img className=" right-0 top-0 absolute w-9 h-8" src={arrow} alt="" />
                          </div>

                            <div className=" relative border-1 border-black/10 md:w-96 h-16 flex justify-center items-center " >
                            <p className=' font-bold'> پرداخت امن </p>
                            <img className=" right-0 top-0 absolute w-9 h-8" src={wallet} alt="" />
                          </div>
 




              </section>
        
        
        
        
        </>)}