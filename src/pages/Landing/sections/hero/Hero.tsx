import "./Hero.css"

import Button from "@uiComponents/button/Button"
import Text from "@uiComponents/text/Text"

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className='hero-container' id="hero-container">
      <motion.div
        className="hero__text-container"
        initial={{ opacity: 0, transform: 'translateY(-50px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'circIn'}}
      >
        
          <Text isTitle={true} align='center' textColor="white" highlighted={false} text='En Roomatch, encuentra tu roomie ideal, conecta y convive'/>
        
      </motion.div>
      <div 
      className="hero__buttons-container"
      >
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'circIn', delay: 0.3}}
        >
          <Button variant='dark' size='regular' hRef="#" text="Registrate como roomie"/>
        </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: 'translateX(-20px)' }}
        whileInView={{ opacity: 1, transform: 'translateX(0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'circIn', delay: 0.3}}
      >
        <Button variant='dark' size='regular' hRef="#" text="Registrate como arrendatario"/>
      </motion.div>
      </div>
    </div>
  )
}