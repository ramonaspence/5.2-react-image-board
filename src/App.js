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
  constructor(props) {
    super(props); {}

    this.addImage = this.addImage.bind(this);
  }

  addImage(e, url) {
    e.preventDefault();
    console.log('addImg button clicked');
    // let images = [...this.props.images.url];
    // this.images.url.push(url);
    // this.setState(url);


  }


  render() {
    return (
    <div className="imgForm">
      <form>
        <label htmlFor="url">Add an Image</label>
        <input id="url" value={images.url} placeholder="enter image url" />
        <label htmlFor="caption">Give your image a caption!</label>
        <input id="caption" value={images.caption} placeholder="caption.." />

        <button onClick={this.addImage}>Submit Image</button>
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
  }

  componentDidMount() {
    this.setState({images})
  }

  addImg(url) {
    url.push(this.state.images.url);
  }

  render() {
    console.log(this.state);
    return (
      <div className="imgboard">
        <ImageForm addImage={this.addImage}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}


export default ImageBoard;
