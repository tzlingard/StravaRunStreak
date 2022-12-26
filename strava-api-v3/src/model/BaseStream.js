/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.BaseStream = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BaseStream model module.
   * @module model/BaseStream
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BaseStream</code>.
   * @alias module:model/BaseStream
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BaseStream</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseStream} obj Optional instance to populate.
   * @return {module:model/BaseStream} The populated <code>BaseStream</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('original_size'))
        obj.originalSize = ApiClient.convertToType(data['original_size'], 'Number');
      if (data.hasOwnProperty('resolution'))
        obj.resolution = ApiClient.convertToType(data['resolution'], 'String');
      if (data.hasOwnProperty('series_type'))
        obj.seriesType = ApiClient.convertToType(data['series_type'], 'String');
    }
    return obj;
  }

  /**
   * The number of data points in this stream
   * @member {Number} originalSize
   */
  exports.prototype.originalSize = undefined;

  /**
   * The level of detail (sampling) in which this stream was returned
   * @member {module:model/BaseStream.ResolutionEnum} resolution
   */
  exports.prototype.resolution = undefined;

  /**
   * The base series used in the case the stream was downsampled
   * @member {module:model/BaseStream.SeriesTypeEnum} seriesType
   */
  exports.prototype.seriesType = undefined;



  /**
   * Allowed values for the <code>resolution</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResolutionEnum = {
    /**
     * value: "low"
     * @const
     */
    low: "low",

    /**
     * value: "medium"
     * @const
     */
    medium: "medium",

    /**
     * value: "high"
     * @const
     */
    high: "high"
  };


  /**
   * Allowed values for the <code>seriesType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SeriesTypeEnum = {
    /**
     * value: "distance"
     * @const
     */
    distance: "distance",

    /**
     * value: "time"
     * @const
     */
    time: "time"
  };

  return exports;

}));
