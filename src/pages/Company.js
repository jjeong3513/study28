import React from 'react';
import {useNavigate} from "react-router-dom";

const Company = () => {
    const navigate = useNavigate();
    const goToMain = ()=>{
        navigate('/') //메인페이지는 최상위 경로이기 때문에 '/'.  함수로 페이지이동을 할때는 navigate() 사용
    }

    return (
        <div>
            <h1>회사소개 페이지</h1>
            <span onClick={goToMain}>메인페이지로 이동</span>
        </div>
    );
};

export default Company;