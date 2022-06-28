import { Copyright, FileJsx, FileTs, FileTsx } from "phosphor-react";

export function Footer(){
    return(
        <footer className="flex flex-col w-full items-center">
            <div className="flex gap-1">
                <span className="text-base text-gray-500">***In development*** with: React, Typescript and TailwindCSS</span>
                <span className="text-base text-gray-500">By Luís Felipe Kvieczinski Leal da Silva</span>
                <Copyright className="text-gray-500" size={24}/>
                <span className="text-base text-gray-500">2022.</span>
            </div>
            
        </footer>
    )
}