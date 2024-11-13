import React from 'react'
import {useLocation} from "react-router-dom"

export default function Back({title}) {

    const location= useLocation()

  return (
    <>
    <section className="back">
       <div className="container">
       <h2> home / {location.pathname.split("/")[1]}</h2>
       <h1>{title}</h1>
       </div>
    </section>
    <div className="marigin"></div>
    </>
  )
}
