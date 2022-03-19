import React,{Component} from 'react'
class Header extends Component{
  logout(e){
      e.preventDefault();
      if(sessionStorage.getItem('username') && sessionStorage.getItem("iduser")){
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("iduser")
          window.location.href= "/login"
      }
  }
  render(){
    return(
        <div className="header">
        <div className="container">
                <div className="head">
                    <div className=" logo">
                        <a href="/"><img src="/image/logo.png" alt=""/></a>	
                    </div>
                </div>
            </div>
            <div className="header-top">
                <div className="container">
                <div className="col-sm-5 col-md-offset-2  header-login">
                            <ul >
                                <li>{sessionStorage.getItem('username')?<div className='header-username'>{ localStorage.getItem('username')}</div>:<a href="/login">Login</a> }</li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                        </div>
                        
                    <div className="col-sm-5 header-social">		
                            <ul >
                                <li><a href="#"><i></i></a></li>
                                <li><a href="#"><i className="ic1"></i></a></li>
                                <li><a href="#"><i className="ic2"></i></a></li>
                                <li><a href="#"><i className="ic3"></i></a></li>
                                <li><a href="#"><i className="ic4"></i></a></li>
                            </ul>
                            
                    </div>
                        <div className="clearfix"> </div>
                </div>
                </div>
                
                <div className="container">
                
                    <div className="head-top">
                    
                 <div className="col-sm-8 col-md-offset-2 h_menu4">
                        <nav className="navbar nav_bottom" role="navigation">
         
        
          <div className="navbar-header nav_2">
              <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
             
           </div> 
        
            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul className="nav navbar-nav nav_1" >
                    <li><a className="color" href="/">Home</a></li>
                    <li><a className="color3" href="/dsnhao">Danh sách nhà ở</a></li>
                    <li><a className="color4" href="/post">Đăng bài</a></li>
                    {
                        sessionStorage.getItem("username")&&
                        <>
                            <li><a className="color5" href="/mypost">Bài đăng của tôi</a></li>
                            <li><a className="color6" href="/logout" onClick={this.logout}>Đăng xuất</a></li>
                        </>
                    }
                </ul>
             </div>
        
        </nav>
                    </div>
                    <div className="col-sm-2 search-right">
                        <ul className="heart">
                        <li>
                        <a href="/" >
                        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                        </a></li>
                        <li><a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="glyphicon glyphicon-search"> </i></a></li>
                            </ul>
                            <div className="cart box_1">
                                <a href="/">
                                <h3> <div className="total">
                                    <span className="simpleCart_total"></span></div>
                                    <img src="/images/cart.png" alt=""/></h3>
                                </a>
                                <p><a href="/" className="simpleCart_empty">Empty Cart</a></p>
        
                            </div>
                            <div className="clearfix"> </div>
                            
                            
                                          
                    <link href="/css/popuo-box.css" rel="stylesheet" type="text/css" media="all"/>
                    <script src="/js/jquery.magnific-popup.js" type="text/javascript"></script>
        
                    <div id="small-dialog" className="mfp-hide">
                        <div className="search-top">
                            <div className="login-search">
                                <input type="submit" value=""/>
                                <input type="text" value="Search.."  />		
                            </div>
                            <p>Shopin</p>
                        </div>				
                    </div>
                
                        
                    </div>
                    <div className="clearfix"></div>
                </div>	
            </div>	
        </div>
           
      );
  }
}
export default Header;