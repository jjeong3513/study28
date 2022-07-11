import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams(); //변수만 가져와서 사용 가능
    //const params = useParams();
    //console.log('param은', params)
    console.log('param은', id)

    return (
        <div>
            <h1>제품 상세페이지{id}</h1>      
        {/*<h1>제품 상세페이지{params.id}</h1> */}
        </div>
    );
};

export default ProductDetail;