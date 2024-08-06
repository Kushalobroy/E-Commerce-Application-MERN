import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
const Header = () =>{
    return(
        <>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2 col-sm-2'>
                            <img src={Logo}  style={{width:'100%', height:'40px' }}/>
                        </div>
                        <div className='col-md-5 col-sm-5'>
                             <div className='headerSearch d-flex align-items-center'>
                                <div className='selectDrop cursor'>
                                    All Categories
                                </div>
                                <div className='search'>
                                   
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            aria-describedby="helpId"
                                            placeholder=""
                                        />
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
