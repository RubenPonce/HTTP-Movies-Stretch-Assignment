import React from "react";
import axios from "axios";
export default class MovieCreate extends React.Component {
  state = {
    title: '',
    director:'',
    metascore:'',
    stars:[]

  };

  

  handleInput=(e)=>{
      
    this.setState({
       [e.target.name]: e.target.value
    })
  }


  
  onSubmit=(e)=>{
      e.preventDefault();
        axios.post('http://localhost:5000/api/movies',{...this.state})
        .then(res=>console.log(res.data))
  }
  render() {
    return (
      <form className="add-movie" onSubmit={this.onSubmit}>
        <input type="text" onChange={this.handleInput} name="title" placeholder="title" />
        <input type="text" onChange={this.handleInput} name="director" placeholder="director" />
        <input type="text" onChange={this.handleInput} name="metascore" placeholder="metascore" />
        <input type="text"  onChange={this.handleInput} name="starring"placeholder="starring" />
        <button onClick={this.addMovie}>add a movie</button>
      </form>
    );
  }
}
