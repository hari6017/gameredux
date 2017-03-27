import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

 class Gameslist extends React.Component{
   constructor(){
     super();
     this.print1 = this.print1.bind(this);
   }
   print1()
   {
     var x = this.props.Games.map((user)=>{
       console.log(user);

     return <div className="col-lg-4"><li className="list" key = {user.id} ><img className= "hari" src= {user.thumbnail} /><br /><h1>{user.name}</h1> </li></div>

      }
      );

  return(
    <div className= "container">
    {x}
    </div>
  );
   }
  render()
  {


    return(
      <div>
        {this.print1()}
      </div>
    );
  }
}
  function mapStateToProps(state)
{
  console.log("h"+state.Games[0].name);
  return {
    Games : state.Games,


};
}


export default connect(mapStateToProps)(Gameslist);
