import React, {Component} from 'react';
import './App.css';

import pic from './images/pic1.jpeg'

let images = [
  {caption: 'Valleys and Mountain Ridges', url: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {caption: 'Another Caption', url: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {caption: 'A third very original caption', url: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}]

// function App() {
//
// }

class ImageForm extends Component {
    constructor() {
      super(); {

      }
    }

  render() {
    return (
    <div className="imgForm">
      <form>
        <label htmlFor="url">Add an Image</label>
        <input id="url" onChange={this.props.handleChange} placeholder="enter image url" />
        <label htmlFor="caption">Give your image a caption!</label>
        <input id="caption" placeholder="caption.." />

        <button onClick={this.props.handleClick}>Submit Image</button>
        <button></button>
      </form>
    </div>
  );}
}

class ImageList extends Component {
  render() {
    let images = this.props.images.map((image, index) => (
    <div className="imgList" key={index}>
      <div className="imgCard">
        <img src={image.url} alt="" />
        <span>{image.caption}</span>
      </div>
    </div>
  ));
  return (
    <div>{images}</div>
  )

}

}

class ImageBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({images})
  }

  handleChange(event) {
    images.push({url: event.target.value});

}
  handleClick(event) {
    event.preventDefault();
    console.log(this.state);
  }

  // handleChange(event) {
  //   event.preventDefault();
  //   images.push({url: event.target.value});
  //   }

  render() {
    console.log(this.state);
    return (
      <div className="imgboard">
        <ImageForm images={this.state.images} handleClick={this.handleClick} handleChange={this.handleChange}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}


export default ImageBoard;
