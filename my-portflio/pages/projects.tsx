import ProjectCard from "@/components/ProjectCard";
import ProjectNavBar from "@/components/ProjectNavBar";
import { projects } from "@/data";
import { Category, IProject } from "@/type";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut, routeAnimation, stagger } from "@/animation";

const Projects = () => {
    
    const [activeItem, setActiveItem] = useState<Category>("ALL");
    const [currentData, setCurrentData] = useState<IProject[]>(projects);
    const handleFilter = (value:Category) => {
        if(value === "ALL"){
            setCurrentData(projects);
            setActiveItem("ALL");
        } else {
            setCurrentData(projects.filter((project) => project.category.includes(value)));
            setActiveItem(value);
        }
    };

    const [showDetails, setShowDetails] = useState<number | null>(null);

    return ( 
        <motion.div className="px-5 py-2 overflow-y-scroll" style={{height:"65vh"}} variants={routeAnimation} initial="initial" animate="animation">
            
            <ProjectNavBar activeItem={activeItem} handleFilter={handleFilter}/>
            
            <motion.div className="relative grid gap-4 p-2 lg:grid-cols-2" variants={stagger} initial="initial" animate="animation">

                {
                    currentData.map((project) => (
                    <motion.div variants={fadeInOut}>
                        <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} key={project.id}/>
                    </motion.div>
                    
                    ))
                }
            </motion.div>

        </motion.div>
     );
}
 
export default Projects;