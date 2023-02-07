import SkillBar from "@/components/SkillBar";
import { languages, tools } from "@/data";
import { BsCircleFill } from "react-icons/bs"
import { motion } from "framer-motion";
import { routeAnimation } from "@/animation";

const Resume = () => {
    return ( 
        <motion.div className="grid gap-3 px-5 py-2 md:grid-cols-2 " variants={routeAnimation} initial="initial" animate="animation">
            <div>
                <h5 className="mb-3 text-2xl font-bold">Education</h5>
                <h5 className="my-2 text-xl font-bold">Automation</h5>
                <p className="font-semibold ">TianJin University(2016-2019)</p>
                <p className="font-semibold ">Harbin Engineering University(2012-2016)</p>
                <p className="my-3">I have obtained a bachelor's degree in Automation and a Master Degree in Instrument Engineering</p>
            </div>
            <div>
                <h5 className="mb-3 text-2xl font-bold">Exprience</h5>
                <h5 className="my-2 text-xl font-bold">Software Test Engineer</h5>
                <p className="font-semibold ">Huawei(2019-2021)</p>
                <p className="font-semibold ">Gbase8s(2021-on)</p>
                <p className="my-3">Functional Test, Automation Test && Performance Test</p>
            </div>
            <div>
                <h5 className="mb-3 text-2xl font-bold">Languages && Frameworks</h5>
                <div className="my-2">
                    {
                        languages.map((language) => (
                            <SkillBar data={language} key={language.name}/>
                        ))
                    }
                </div>

            </div>
            <div>
                <h5 className="mb-3 text-2xl font-bold">Tools && Software</h5>
                <div className="my-2">
                    {
                        tools.map((tool) => (
                            <SkillBar data={tool} key={tool.name} />
                        ))
                    }
                </div>
            </div>
        </motion.div>
     );
}
 
export default Resume;