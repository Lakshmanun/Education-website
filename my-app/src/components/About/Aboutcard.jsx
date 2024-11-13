import React from 'react'
import TItle from '..//title/TItle'
import { homeAbout } from '../../dummydata'
import Aboutwrapper from './Aboutwrapper'
import './about.css'
export default function Aboutcard() {
  return (
    <>
      <section className="abouthome">
        <div className="container flexSB">
          <div className="left row">
            <img src="../images/about.webp" alt="about" />
          </div>
          <div className="right row">
            <TItle subtitle={'LEARN ANY THING '} title={'Benifities About Online Learing '} />

            <div className="items">
              {homeAbout.map((item) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={item.cover} alt="img" />
                  </div>
                  <h2>{item.title}</h2>
                  <h2>{item.desc}</h2>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>   
      <Aboutwrapper/> 
      </>
  )
}
