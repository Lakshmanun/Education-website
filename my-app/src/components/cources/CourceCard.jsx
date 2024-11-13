import React from 'react'
import { coursesCard } from '../../dummydata'
import './cource.css'
export default function CourceCard() {
    return (
        <>
            <section className="courcecard">
                <div className="container grid2">
                    {/* //////////////////////////////////////////////////////// */}
                    {coursesCard.map((val) => (
                        <div className="items">
                            <div className="content flex">
                                <div className="left">
                                    <div className="img">
                                        <img src={val.cover} alt="img" />
                                    </div>
                                </div>
                                <div className="text">
                                    <h1>{val.coursesName}</h1>
                                    <div className="rate">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <label htmlFor="">(3.5)</label>
                                    </div>
                                    <div className="detials">
                                        {/* ////////////////////////////////////////////////////////// */}
                                        {val.courTeacher.map((detials) => (
                                            <div className="box">
                                                <div className="dimg">
                                                    <img src={detials.dcover} alt="dimg" />
                                                </div>
                                                <div className="para">
                                                    <h4>{detials.name}</h4>
                                                </div>
                                                <span>{detials.totalTime}</span>
                                            </div>
                                        ))}
                                        {/* ////////////////////////////////////////////////// */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* /////////////////////////////////////////////// */}
                </div>
            </section>
        </>
    )
}
