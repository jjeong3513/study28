import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Company from './pages/Company';
import {Routes ,Route} from 'react-router-dom' ;
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import RedirectsRoute from './route/RedirectsRoute';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(true); //true일 때는 유저페이지, false일 때는 로그인페이지로 넘어감 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} /> 
        <Route path='/product' element={<Product />} /> 
        <Route path='/product/:id' element={<ProductDetail />} />  {/*id는 router의 매개변수임. 어떤 값이 들어와도 무조건 디테일페이지를 보여줌*/}
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<RedirectsRoute auth={auth} />} />{/*auth는 true 값이 넘어감*/}
      </Routes>
    </div>
  );
}

export default App;

/* 
/product/:id  이 아이디 값을 가진 아이템을 보여준다.
id 라우터의 변수(파라미터) 같은 개념

*/