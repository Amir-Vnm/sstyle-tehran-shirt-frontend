import mainbg from '../images/mainbg.webp'
import FirstImageSlider from './FirstImageSlider'
import NewCollection from './NewCollection'
import BranchCompany from './BranchCompany'
import TrustSection from './TrustSection'
import SecondImageSlider from './SecondImageSlider'
import EndLine from './EndLine'


export default function MainContent() {
    return(
        <section >
                 <div >
                    <img className="pt-[8vh] kenburns-top-in-out " src={mainbg} alt="" />
                 </div>
<NewCollection />
<FirstImageSlider />
<SecondImageSlider />

<BranchCompany />
<TrustSection />


<EndLine />  
        </section>
    )
}