export function Header(){
    return(
        <header className="flex p-5 w-full bg-gray-700 border-b border-gray-600 items-center absolute">
            <div className="group">
                <span className="text-[1.5rem] cursor-pointer text-sky-500 font-bold group-hover:text-yellow-200 transition-colors">{"<Dev/> "}</span>
                <span className="text-[1.5rem] cursor-pointer text-yellow-200 group-hover:text-sky-500 transition-colors">Kv1ecz</span>
            </div>
        </header>
    )
}