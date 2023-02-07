import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem:FunctionComponent<{
    currentLabel:string,
    setCurrentLabel:Function,
    name:string,
    routeName: string
}> = ({currentLabel, setCurrentLabel ,name, routeName}) => {
    return (
        <div>
            {
                currentLabel === name ? "" : (<Link href={routeName} onClick={(e) => setCurrentLabel(name)}>{name}</Link>) 
            }
        </div>
    );
}

const NavBar = () => {

    const [currentLabel,setCurrentLabel] = useState("About");
    const {pathname} = useRouter();

    useEffect(() => {
        if(pathname === '/'){
            setCurrentLabel('About');
        } else if(pathname === '/projects') {
            setCurrentLabel('Projects');
        } else if(pathname === '/resume') {
            setCurrentLabel('Resume');
        }
    },[]);

    return ( 
        <div className="flex items-center justify-between px-5 py-3 my-3">
            <div className="text-xl font-bold text-green-600 border-b-4 border-green-500 md:text-2xl">       
                <Link href={pathname}>{currentLabel}</Link>
            </div>
            <div className="flex space-x-3 text-xl">
                <NavItem  currentLabel={currentLabel} setCurrentLabel={setCurrentLabel} routeName="/" name="About"/>
                <NavItem  currentLabel={currentLabel} setCurrentLabel={setCurrentLabel} routeName="/projects" name="Projects"/>
                <NavItem  currentLabel={currentLabel} setCurrentLabel={setCurrentLabel} routeName="/resume" name="Resume"/>
               
            </div>
        </div>
        
     );
}
 
export default NavBar;