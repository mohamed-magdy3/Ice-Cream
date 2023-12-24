import React from 'react'



function ExpData(props) {
    return (

        <div className='exp-cards-container '>
            <div className="exp-card">
                <div className='exp-container'>
                    <img src={props.src} position='top' alt='...' className='w-20' />
                </div>

                <p className='exp-name fw-bold h2 '>{props.name}</p>
                <p className='exp-designer h5 '>Designer</p>
                <div className='exp--social-icons '>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>


    )
}

export default ExpData