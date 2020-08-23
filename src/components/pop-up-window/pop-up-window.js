import React, { Component } from 'react';

import './style_popup.css'

import './maps/cube-solid.svg'

export default class InteriorImage extends Component {

  state = {
    uuid:'',
    campaign:'',
    colors:'',
    materials:'',
    furniture:'',
    description:'',
  };

  onUuidChange = (e) => {
    this.setState({
      uuid: e.target.value
    });
  };

  onCampaignChange = (e) => {
    this.setState({
      campaign: e.target.value
    });
  };

  onMaterialsChange = (e) => {
    this.setState({
      materials: e.target.value
    });
  };

  onColorsChange = (e) => {
    this.setState({
      colors: e.target.value
    });
  };

  onFurnitureChange = (e) => {
    this.setState({
      furniture: e.target.value
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  onUpload = (e) => {
    e.preventDefault();
    this.props.onImageAdd(this.state.uuid,
                            this.state.campaign,
                            this.state.colors,
                            this.state.materials,
                            this.state.furniture,
                            this.state.description);
    e.target.reset();
  };

  render() {
    return(
      <div className='int_image_pop-up'>
        <button type="submit"
                id="int_drop_area">
          <h5><a id="int-link"
                 href="">Browse interior image</a></h5>
        </button>
        <form className="int-img-submit"
              onSubmit={this.onUpload}>
          <label>
            <p>UUID</p>
          </label>
          <input className="int-img-fields"
                 type="text"
                 name="int-UUID"
                 placeholder="enter text"
                 onChange={this.onUuidChange}
                 value={this.state.uuid}
          />
          <label>
            <p>Campaign</p>
          </label>
          <input className="int-img-fields"
                 type="text"
                 name="int-campaign"
                 placeholder="enter text"
                 onChange={this.onCampaignChange}
                 value={this.state.campaign}
          />
          <label>
            <p>Furniture</p>
          </label>
          <input className="int-img-fields"
                 type="text"
                 name="int-campaign"
                 placeholder="enter text"
                 onChange={this.onFurnitureChange}
                 value={this.state.furniture}
          />
          <label>
            <p>Colors</p>
          </label>
          <input className="int-img-fields"
                 type="text"
                 name="int-colors"
                 placeholder="enter text"
                 onChange={this.onColorsChange}
                 value={this.state.colors}
          />
          <label>
            <p>Materials</p>
          </label>
          <input className="int-img-fields"
                 type="text"
                 name="int-materials"
                 placeholder="enter text"
                 onChange={this.onMaterialsChange}
                 value={this.state.materials}
          />
          <label>
            <p>Description</p>
          </label>
          <textarea className="int-img-description"
                    name="int-description"
                    rows="5"
                    cols="80"
                    placeholder="enter text"
                    onChange={this.onDescriptionChange}
                    value={this.state.description}
          />
          <div>
            <button type="submit"
                    name="upload-btn"
                    className="popup-buttons"
                    id="int-upload-btn"
                    onSubmit={this.onUpload}>
                    Upload
            </button>
            <button type="button"
                    name="cancel-btn"
                    className="popup-buttons"
                    id="int-cancel-btn">
                    Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}
