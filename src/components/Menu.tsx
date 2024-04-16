import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { IoClose, IoFlag} from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import {Link } from "react-router-dom";
import {motion} from "framer-motion"

export const Menu = () => {
  const SIZE_ICON=30
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <motion.div
    animate={{width:isOpen?'20%':'5%'}}
    className={`h-full flex flex-col items-start bg-teal-950 transition-all`}>
      <div onClick={() => setIsOpen(!isOpen)} className="h-[5%] w-full flex flex-row items-center justify-center cursor-pointer">

        {isOpen?<IoClose size={SIZE_ICON}/>:<FiMenu size={SIZE_ICON}/>}
      </div>
      <div className="h-[5%] w-full">
        <Link className={`h-full w-full px-4 py-8 flex flex-row items-center justify-${isOpen?'start':'center'} cursor-pointer`} to="/"><IoMdHome size={SIZE_ICON} style={{marginRight:isOpen?10:0}}/>{isOpen?'Home':null}</Link>
        <Link className={`h-full w-full px-4 py-8 flex flex-row items-center justify-${isOpen?'start':'center'} cursor-pointer`}to="/country"><IoFlag size={SIZE_ICON} style={{marginRight:isOpen?10:0}} />{isOpen?'Country':''}</Link>
      </div>
    </motion.div>
  )
}

