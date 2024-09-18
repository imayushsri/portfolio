import React from 'react'

const More = () => {
    return (
        <>
        <div className="container-fluid">
                <section id="more">
                    <div className="minner">
                    <div className="container">
                        <div className="row  align-items-center">
                            <h3 className='text-center text-primary'>ACHIEVEMENTS</h3>
                            <div className="underline mb-4"></div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <div className="block-18 bg">
                                    <div className="text">
                                        <strong className="number">
                                            0
                                        </strong><br/>
                                        <span className="moretxt">Back Logs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap">
                                <div className="block-18 bg">
                                    <div className="text">
                                        <strong className="number">
                                            5+
                                        </strong><br/>
                                        <span className="moretxt">Projects</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 bg">
                                    <div className="text">
                                        <strong className="number">
                                            2
                                        </strong><br/>
                                        <span className="moretxt">Internship</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 bg">
                                    <div className="text">
                                        <strong className="number">
                                            500+
                                        </strong><br/>
                                        <span className="moretxt">Cups of coffee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-7 text-center">
                                <h4>
                                    More projects on<span> Github</span>
                                </h4>
                                <div className="heading">
                                    <br />
                                    <p>
                                        <a
                                            href="https://github.com/imayushsri"
                                            className="bor py-3 px-5 fw-bold"
                                        >
                                            GitHub
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
        </>
    )
}

export default More
