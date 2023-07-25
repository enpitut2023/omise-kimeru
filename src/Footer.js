import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <Navbar fixed="bottom" style={{textAlign:'center',display:'inline-block',backgroundColor:"burlywood"}}>
                <Nav.Link href="/home"><a href="http://webservice.recruit.co.jp/"><img src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパー Webサービス" width="135" height="17" border="0" title="ホットペッパー Webサービス"/></a></Nav.Link>                
        </Navbar>
    );
}

export default Footer;