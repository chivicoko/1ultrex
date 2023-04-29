import React, { useEffect, useState } from 'react'
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { EditProfileStyle, MobileEditProfileStyle } from '../styles/EditProfileStyle';

const EditProfile = () => {
    
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
        setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;


  return (
    <Wrapper>
        {isMobile ?
        (
            <MobileEditProfileStyle>
                    <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>Make A Deposit</h1>
                            Edit Profile Page
                        </div>
                    </section>
                </div>
            </MobileEditProfileStyle>
        )
        :
        (
            <EditProfileStyle>
                <div className='container'>
                    <section>
                        <Sidebar/>
                        <div className='depositeContainer'>
                            <h1>Make A Deposit</h1>
                            Edit Profile page
                        </div>
                    </section>
                </div>
            </EditProfileStyle>
        )}

    </Wrapper>
  )
}


export default EditProfile;