import { EnvelopeSimple, GithubLogo, LinkedinLogo, RocketLaunch } from "phosphor-react"


export function Presentation(){
    return(
        <div className="flex flex-col min-h-screen items-center">
            <div className="flex gap-14 max-w-[824px] mt-64">
                
                <img className="h-48 w-48 rounded-full border-2 border-sky-400" src="https://github.com/Kv1ecz.png" alt=""/>
                
                <div className="flex flex-col items-start">
                <h1 className="text-[2.25rem] text-yellow-200 ">Luís Felipe Kvieczinski Leal da Silva</h1>
                <article className="flex flex-col gap-2 mt-4 p-1">
                    <p className="leading-relaxed w-full text-justify text-gray-300">
                    I'm a curious and explorer developer starting my carreer in web development with React and Typescript, currently working as Junior Developer at eSales.
                    </p>
                    <p className="leading-relaxed w-full text-justify text-gray-300">
                    Graduated in Técnico em Informática para Internet (Web development) at IFSul.
                    </p>
                </article>
                
                </div>
            </div>
            <div className="flex justify-between mt-8 p-2 w-[800px]">
                <a href="https://www.linkedin.com/in/lu%C3%ADs-felipe-kvieczinski-leal-da-silva-30940a196" className="flex items-center gap-1 group">
                <LinkedinLogo size={36} className="rounded group-hover:bg-sky-500 group-hover:text-yellow-200 transition-colors p-1"/>
                <span className="text-gray-300 text-sm block group-hover:text-yellow-200 transition-colors">LinkedIn</span>
                </a>
                <a href="http://github.com/Kv1ecz" className="flex items-center gap-1 group">
                <GithubLogo size={36} className="rounded group-hover:bg-sky-500 group-hover:text-yellow-200 transition-colors p-1"/>
                <span className="text-gray-300 text-sm block group-hover:text-yellow-200 transition-colors">Github</span>
                </a>
                <a href="http://" className="flex items-center gap-1 group">
                <EnvelopeSimple size={36} className="rounded group-hover:bg-sky-500 group-hover:text-yellow-200 transition-colors p-1"/>
                <span className="text-gray-300 text-sm block group-hover:text-yellow-200 transition-colors">lfkvcz@gmail.com</span>
                </a>
                <a href="https://app.rocketseat.com.br/me/luis-felipe-kvieczinski-leal-da-silva-07554" className="flex items-center gap-1 group">
                <RocketLaunch size={36} className="rounded group-hover:bg-sky-500 group-hover:text-yellow-200 transition-colors p-1"/>
                <span className="text-gray-300 text-sm block group-hover:text-yellow-200 transition-colors">Rocketseat</span>
                </a>
            </div>
      
        </div>
    )
}