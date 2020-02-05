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
      super(props); {
        this.state = {
          url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    }
    handleChange(e) {
      e.preventDefault();
      this.setState({[e.target.name]: e.target.value});
      console.log(e.target.value);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.addImg(this.state);
    }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <div className="imgForm">
          <label htmlFor="url">Add an Image</label>
          <input id="url" name="url" name='url' onChange={this.handleChange} placeholder="enter image url" />
          <label htmlFor="caption">Give your image a caption!</label>
          <input id="caption" name='caption' onChange={this.handleChange} placeholder="caption.." />

          <button className='btn btn-primary'>Submit Image</button>
          </div>
      </form>

  );}
}


///////

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
    this.addImg = this.addImg.bind(this);
  }

  componentDidMount() {
    this.setState({images})
  }

  addCaption(caption) {
    let images = [...this.state.images];
    images.push(caption);
    this.setState({images})
  }

  addImg(url) {
    let images = [...this.state.images];
    images.push(url);
    this.setState({images});
  }


  render() {
    console.log(this.state);
    return (
      <div className="imgboard">
        <ImageForm images={this.state.images} addImg={this.addImg}  />
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}


export default ImageBoard;
