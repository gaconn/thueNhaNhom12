import React,{Component} from 'react'
class Footer extends Component{
  
  render(){
    return(
        <div className="footer">
        <div className="footer-middle">
                    <div className="container">
                        <div className="col-md-3 footer-middle-in">
                            <a href="/"><img src="image/logo.png" alt=""/></a>
                        </div>
                        
                        <div className="col-md-3 footer-middle-in">
                            <h6>Thông tin </h6>
                            <ul className=" in">
                            
                                <li><a href="/">Returns</a></li>
                                <li><a href="contact.php">Site Map</a></li>
                            </ul>
                            <ul className="in in1">
                                <li><a href="/">Order History</a></li>
                                <li><a href="wishlist.php">Wish List</a></li>
                                <li><a href="login.php">Login</a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3 footer-middle-in">
                            <h6>Tags</h6>
                            <ul className="tag-in">
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Sed</a></li>
                                <li><a href="#">Ipsum</a></li>
                                <li><a href="#">Contrary</a></li>
                                <li><a href="#">Chunk</a></li>
                                <li><a href="#">Amet</a></li>
                                <li><a href="#">Omnis</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-middle-in">
                            <h6>Newsletter</h6>
                            <span>Sign up for News Letter</span>
                                <form>
                                    <input type="text" value="Enter your E-mail"/>
                                    <input type="submit" value="Subscribe"/>	
                                </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <ul className="footer-bottom-top">
                            <li><a href="#"><img src="images/f1.png" className="img-responsive2" alt=""/></a></li>
                            <li><a href="#"><img src="images/f2.png" className="img-responsive2" alt=""/></a></li>
                            <li><a href="#"><img src="images/f3.png" className="img-responsive2" alt=""/></a></li>
                        </ul>
                        <p className="footer-class">&copy; 2021 Fashion sport. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
      );
  }
}
export default Footer;