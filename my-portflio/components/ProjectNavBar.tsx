import { Category } from "@/type";
import { FunctionComponent } from "react";

const NavItem:FunctionComponent<{categoryName:Category, activeItem:Category, handleFilter:Function}> = (
    {categoryName, activeItem, handleFilter}) => {

    let className = "cursor-pointer ";
    if(activeItem === categoryName) {
        className += "text-green-500";
    }

    return (
        <div>
            <li className={className} onClick={() => handleFilter(categoryName)}>{categoryName}</li>
        </div>
    );
}

const ProjectNavBar:FunctionComponent<{activeItem:Category, handleFilter:Function}> = (props) => {
    return ( 
        <div className="flex items-center px-1 py-2 my-2 space-x-3 overflow-auto list-none">
            <NavItem categoryName="ALL" {...props}/>
            <NavItem categoryName="REACT" {...props}/>
            <NavItem categoryName="HTML" {...props}/>
            <NavItem categoryName="CSS" {...props}/>
            <NavItem categoryName="JS" {...props}/>
            <NavItem categoryName="NEXT" {...props}/>
        </div>
     );
}
 
export default ProjectNavBar;