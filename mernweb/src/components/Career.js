import React from 'react';
import './Career.css';

const Career = () => {
    const handleJoinusClick = () => {
        window.location.href = '/career';
    };
    return (
        <div className="career-page">
            <center>
                <h1>BUILD YOUR CAREER</h1>
            </center>
            <div className='grid-container'>

                <div className=" content-division">
                    <center>
                        <h2>Career Opportunities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        {/*   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla luctus dui, sit amet dapibus arcu pellentesque id. Duis iaculis nisl in augue porta, vitae lacinia risus maximus. Fusce eget est non lacus viverra aliquet nec in purus. Sed feugiat tempus bibendum.</p>
                    <p>Nulla in pellentesque eros. Nulla ullamcorper risus eu quam dapibus tristique. Vestibulum rutrum auctor ex, at scelerisque neque tempor in. Curabitur ac luctus ex, nec malesuada massa. Sed eu feugiat turpis. Nullam fringilla tincidunt lacus ac consequat.</p> */}
                        <button className='btn' onClick={handleJoinusClick}>
                            JOIN US
                        </button>
                    </center>
                </div>
                <div className="image-division">
                    <img src="career.jpg" alt="Career" />
                </div>
            </div>
        </div>
    );
}

export default Career;