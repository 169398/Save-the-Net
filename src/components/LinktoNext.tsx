"use client"


import React from 'react';

const LinktoNext: React.FC = () => {
    const handleClick = () => {
        window.open('https://absaconnect.vercel.app/', '_blank');
    };

    return (
        <div

            style={{
                position: 'fixed',
                top: '10px',
                right: '20px',
                width: '28%',
                height: '80px',
                backgroundColor: 'red',
                cursor: 'pointer',
                textAlign: 'center',
                padding: '10px',
                borderRadius: '10px',
            }}
            onClick={handleClick}
        >
<p  
style={{
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
   
}} 

>   Go to Absa Connect for  more information and connect  with other customers</p>

        </div>
    );
};

export default LinktoNext;
