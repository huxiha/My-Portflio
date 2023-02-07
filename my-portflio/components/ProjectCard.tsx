import { fadeInOut, stagger } from "@/animation";
import { Category, IProject } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md"

const ProjectCard:FunctionComponent<{project:IProject, showDetails:number | null, setShowDetails:Function}> = (
    {project:{name, description, deployed_url, github_url, image_path, category, key_techs,id}, showDetails, setShowDetails}) => {


    return ( 
        <div>
            {
                showDetails === null && (
                    <div className="p-6 mx-2 my-2 bg-gray-200 rounded-xl dark:bg-dark-200">
                        <Image 
                        src={image_path} 
                        alt="project preview" 
                        priority={true}
                        className="my-2 cursor-pointer"
                        width={300} 
                        height ={150}
                        style={{width:"350px", height:"200px"}} 
                        onClick={() => setShowDetails(id)}
                        />
                        <p className="text-center text-bold ">{name}</p>
                    </div>
                
                )
            }
            
            
            {
                showDetails === id && (
                    <div className="absolute top-0 left-0 grid space-x-3 bg-gray-100 bg-gray-200 dark:bg-dark-100 gap-x-2 md:grid-cols-2">
                        <motion.div variants={stagger} initial="initial" animate="animation">
                            <motion.div variants={fadeInOut}>
                                <Image src={image_path} alt={name} width={350} height={200}></Image>
                            </motion.div>
                            
                            <motion.div className="flex items-center justify-center my-4 space-x-3">
                                <a href={github_url} className="flex items-center px-4 py-2 space-x-2 text-lg bg-gray-200 dark:bg-dark-200">
                                    <AiFillGithub /> <span>Github</span>
                                </a>
                                <a href={deployed_url} className="flex items-center px-4 py-2 space-x-2 text-lg bg-gray-200 dark:bg-dark-200">
                                    <AiFillProject /> <span>Project</span>
                                </a>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={stagger} initial="initial" animate="animation">
                            <motion.h2 className="my-4 font-medium md:text-xl" variants={fadeInOut}>{name}</motion.h2>
                            <motion.h3 className="my-4 font-medium" variants={fadeInOut}>{description}</motion.h3>
                          
                                <motion.div className="flex space-x-2 text-sm tracking-wider" variants={fadeInOut}>
                                {
                                    key_techs.map((tech) => (<span className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200" key={tech}>{tech}</span>))
                                }
                                </motion.div>
                            
                        </motion.div>

                        <button className="absolute bg-gray-200 rounded-full top-1 right-1 dark:bg-dark-200" onClick={() => setShowDetails(null)}> <MdClose size={20}/> </button>
                        
                    </div>)
            }   
        </div>
            
        

     );
}
 
export default ProjectCard;