import { ISkill } from "@/type";
import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";
import { motion, spring } from "framer-motion"

const SkillBar:FunctionComponent<{data:ISkill}> = ({data:{name, level}}) => {

    const variants = {
        initial: {
            width: 0,
        },
        animation: {
            width: `${level}%`,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping:10,
            }
        }
    }

    return (        
        <div className="my-2 text-white bg-gray-200 dark:bg-dark-200 rounded-xl">
            <motion.div className="flex items-center text-lg rounded-xl bg-gradient-to-r from-green-400 to-blue-400" 
            variants={variants} 
            initial="initial"
            animate="animation">
                <BsCircleFill  className="mx-3"/> 
                {name}
            </motion.div>
        </div>
    );
}
 
export default SkillBar;