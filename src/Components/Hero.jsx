import {xyz} from "../assets"
import {logo2} from '../assets'
const Hero=()=>{


return(<header className="w-full flex justify-center items-center  flex-col">
<nav className="flex justify-between items-center w-full mb-10 pt-3">
    <img src={logo2} alt ="rapid_recap" className="w-16 object-contain"/>
    
    

<button type="button" className="black_btn" onClick={()=>{window.open('https://github.com/shekhar-mohit/RapidRecap')}}>GitHub</button>

</nav>
<h1 className="head_text">
Summarize Articles with<br className="max-md:hidden"/>
<span className="orange_gradient">OpenAI GPT-4</span>


</h1>
<h2 className="desc">
RapidRecap is an open-source tool that quickly summarizes articles. Simplify your reading and stay informed effortlessly with this streamlined tool. 
</h2>


</header>)



}
export default Hero;
