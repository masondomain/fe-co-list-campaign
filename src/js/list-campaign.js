import React from 'react';

const ListCampaign = React.createClass({
  propTypes: {
  },

  render() {
    return (
      <fieldset>
        <legend>Property details</legend>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Id">Listing Id</label>
          <div className="col-md-4">
            <div className="input-group">
              <input className="form-control" id="Listing_Id" name="Listing.Id" type="text" value="" />
              <span className="field-validation-valid" data-valmsg-htmlFor="Listing.Id" data-valmsg-replace="true" />
              <span className="input-group-btn">
                <button className="btn btn-default button-search" type="button">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Property_Images">Property Images</label>
          <div className="col-md-10">
            <div id="Images" className="image-container" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_FirstImage">1st Image Url</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_FirstImage" name="Listing.FirstImage" type="text" value="" />
            <span className="field-validation-valid" data-valmsg-htmlFor="Listing.FirstImage" data-valmsg-replace="true" />
          </div>
        </div>
        <div className="form-group row" id="FirstImagePreviewContainer">
          <label className="col-md-2 control-label" htmlFor="Listing_1st_Image_Preview">1st Image Preview</label>
          <div className="col-md-6">
            <div id="FirstImagePreview" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_SecondImage">2nd Image Url</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_SecondImage" name="Listing.SecondImage" type="text" value="" />
            <span className="field-validation-valid" data-valmsg-htmlFor="Listing.SecondImage" data-valmsg-replace="true" />
          </div>
        </div>
        <div className="form-group row" id="SecondImagePreviewContainer">
          <label className="col-md-2 control-label" htmlFor="Listing_2nd_Image_Preview">2nd Image Preview</label>
          <div className="col-md-6">
            <div id="SecondImagePreview" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_DomainListingUrl">Listing Url</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_DomainListingUrl" name="Listing.DomainListingUrl" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Headline">Headline</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Headline" name="Listing.Headline" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Description">Description</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Description" name="Listing.Description" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Price">Price</label>
          <div className="col-md-4">
            <input className="form-control" id="Listing_Price" name="Listing.Price" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_PropertyType">Property Type</label>
          <div className="col-md-4">
            <input className="form-control" id="Listing_PropertyType" name="Listing.PropertyType" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Bedrooms">Bedrooms</label>
          <div className="col-md-1">
            <input className="form-control" id="Listing_Bedrooms" name="Listing.Bedrooms" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Bathrooms">Bathrooms</label>
          <div className="col-md-1">
            <input className="form-control" id="Listing_Bathrooms" name="Listing.Bathrooms" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Parking">Parking</label>
          <div className="col-md-1">
            <input className="form-control" id="Listing_Parking" name="Listing.Parking" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Category">Category</label>
          <div className="col-md-4">
            <input className="form-control" id="Listing_Category" name="Listing.Category" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_SaleType">Sale Type</label>
          <div className="col-md-4">
            <input className="form-control" id="Listing_SaleType" name="Listing.SaleType" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_AuctionDate">Auction Date</label>
          <div className="col-md-5">
            <input className="form-control" id="Listing_AuctionDate" name="Listing.AuctionDate" type="text" value="" />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Address">Address</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Address" name="Listing.Address" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Suburb">Suburb</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Suburb" name="Listing.Suburb" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Postcode">Postcode</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Postcode" name="Listing.Postcode" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Street">Street</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Street" name="Listing.Street" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Area">Area</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Area" name="Listing.Area" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Region">Region</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_Region" name="Listing.Region" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_State">State</label>
          <div className="col-md-10">
            <input className="form-control" id="Listing_State" name="Listing.State" type="text" value="" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Latitude">Latitude</label>
          <div className="col-md-10">
            <input className="form-control" data-val="true" data-val-number="The field Latitude must be a number." data-val-required="The Latitude field is required." id="Listing_Latitude" name="Listing.Latitude" type="text" value="0" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="Listing_Longitude">Longitude</label>
          <div className="col-md-10">
            <input className="form-control" data-val="true" data-val-number="The field Longitude must be a number." data-val-required="The Longitude field is required." id="Listing_Longitude" name="Listing.Longitude" type="text" value="0" />
          </div>
        </div>
      </fieldset>
    );
  },
});

export default ListCampaign;
