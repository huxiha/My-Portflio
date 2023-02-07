import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { services } from '@/data'
import ServiceCard from '@/components/ServiceCard'
import { motion } from "framer-motion"
import { routeAnimation } from '@/animation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <motion.div className='px-6 pt-1 ' variants={routeAnimation} initial="initial" animate="animation">
      <h5 className='my-3 font-medium text'>
        I have 3+ years of working experience in software test including functional test, automated test, and performance test.
        I am currently learing web3 Technology with the road I found in the internet.
        I have learned fontend html,css,javascript,react, and have done some frontend projects.
        Now I am learning the backend node.js, express.js, databse postgre and mongodb, Next.js, typescript and tailwindcss and doing some projects.
      </h5>
      
      <div className='p-6 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft:"-1.5rem", marginRight:"-1.5rem"}}>
        <h4 className='my-3 text-xl font-bold tracking-wide'>What I am doing</h4>
        <div className='grid gap-6 lg:grid-cols-2 '>
          {
              services.map((service) => (
                <div className='bg-gray-200 dark:bg-dark-200 lg:col-span-1 rounded-xl' key={service.title}>
                  <ServiceCard service={service}/>
                </div>
              ))
          }
        </div>
      </div>
    </motion.div>
  )
}
