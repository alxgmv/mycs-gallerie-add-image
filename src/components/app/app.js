import React, {Component} from 'react';

import InteriorImage from '../pop-up-window/pop-up-window'
import './app.css';

export default class App extends Component {

  state ={
    images: [
      this.createImage( 'f34f', 'ef43f', 'colors', 'materials', 'furniture', 'description' ),
      this.createImage( 'dewfef', 'fewfw', 'colors1', 'materials1', 'furniture1', 'description1' )

    ]
  }

  createImage(uuid, campaign, colors, materials, furniture, description) {
    return {
      uuid,
      campaign,
      colors,
      materials,
      furniture,
      description
    }
  }

  addImage = (uuid, campaign, colors, materials, furniture, description) => {
    const newImage = this.createImage(uuid, campaign, colors, materials, furniture, description)
    this.setState(( { images }) => {
      const newArray = [...images, newImage]
      return {
        images: newArray
      };
    });
  };
  render() {
    console.log(this.state.images)
    return(
      <InteriorImage
        onImageAdd={this.addImage}/>
    )
  }
}
