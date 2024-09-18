import React from 'react'

const Description = () => {
    return (
        <>
        <div className="container-fluid">
            <div id="description">
                <div className="dinner">
                <div className="des-skills">
                    <h3 className='sk-head text-primary fw-bold m-0'>SKILLS</h3>
                    <div className="underline mb-4"  style={{width:"80%"}}/>
                    <div className="sk">
                        <img src="/MERN.png" className='des-img' />
                        <div className="line-container">
                            <div className="percentage-line bg-primary"></div>
                            <div className="percentage-text">60%</div>
                        </div>
                    </div>
                    <div className="sk">
                        <img src="/NET.jpeg" alt="" className='des-img' />
                        <div className="line-container">
                            <div className="percentage-line bg-primary" style={{width:"70%"}}></div>
                            <div className="percentage-text">70%</div>
                        </div>
                    </div>
                    <div className="sk">
                        <img src="/MSSQL.png" alt="" className='des-img' />
                        <div className="line-container">
                            <div className="percentage-line bg-primary" style={{width:"90%"}}></div>
                            <div className="percentage-text">90%</div>
                        </div>
                    </div>
                    <div className="sk">
                        <img src="/javascript.png" alt="" className='des-img' />
                        <div className="line-container">
                            <div className="percentage-line bg-primary" style={{width:"80%"}}></div>
                            <div className="percentage-text">80%</div>
                        </div>
                    </div>
                    <div className="sk">
                        <img src="/HTML.svg" alt="" className='des-img' />
                        <div className="line-container">
                            <div className="percentage-line bg-primary" style={{width:"90%"}}></div>
                            <div className="percentage-text">90%</div>
                        </div>
                    </div>
                    <div className="sk">
                        <img src="/css.png" alt="" className='des-img' />
                        <div className="line-container">
                            <div className="percentage-line bg-primary" style={{width:"85%"}}></div>
                            <div className="percentage-text">85%</div>
                        </div>
                    </div>
                </div>
                <div className="des-dets">
                    <h3 className='text-primary fw-bold ab-head m-0'>ABOUT</h3>
                    <div className="underline mb-4" />
                    <p className='des-p'>
                        Hello, I’m Ayush Srivastava, <br />A MERN developer and full-stack developer with a passion for building innovative and efficient software solutions. As a Computer Science Engineering student, I have developed proficiency in a wide array of technologies, including C, Java, HTML, CSS, Bootstrap, ASP.NET, React.js, and JavaScript. I also possess a solid understanding of data structures and MSSQL, with a strong foundation in C#.
                        <br /><br />
                        I am eager to leverage my knowledge and continue to grow in the field of software development by solving real-world problems and creating impactful solutions.
                    </p>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Description
