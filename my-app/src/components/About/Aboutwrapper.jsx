import React from 'react'
import { awrapper } from '../../dummydata'

export default function Aboutwrapper() {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val) => (
            <div className="box flex">
              <div className="img">
                <img src={val.cover} alt="img" />
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="marigin"></div>
    </>
  )
}
