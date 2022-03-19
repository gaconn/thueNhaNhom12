import React,{Component} from 'react'
class ContentMid extends Component{
  
  render(){
    return(
        
       <div className="col-md-3 item-grid simpleCart_shelfItem">
       <div className=" mid-pop">
       <div className="pro-img">
           <img src={this.props.image} className="img-responsive" alt={this.props.name}/>
           <div className="zoom-icon ">
           <a  href={this.props.image} rel="title" className="b-link-stripe b-animate-go  thickbox picture"><i className="glyphicon glyphicon-search icon "></i></a>
           <a href={`/detail/${this.props.mant}`}><i className="glyphicon glyphicon-menu-right icon"></i></a>
           </div>
           </div>
           <div className="mid-1">
           <div className="women">
           <div className="women-top">
               <span>{this.props.type}</span>
               <h6><a href="single.html">{this.props.name}</a></h6>
               </div>
               <div className="img item_add">
                   <a href="/detail"><img src="images/ca.png" alt=""/></a>
               </div>
               <div className="clearfix"></div>
               </div>
               <div className="mid-2">
                   <p ><label>{this.props.priceOld} vnd</label><em className="item_price">{this.props.priceNew} vnd</em></p>
                     <div className="block">
                       <div className="starbox small ghosting"> </div>
                   </div>
                   
                   <div className="clearfix"></div>
               </div>
               
           </div>
       </div>
       </div>
      );
  }
}
export default ContentMid;