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
    root.StravaApiV3.ActivityTotal = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ActivityTotal model module.
   * @module model/ActivityTotal
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ActivityTotal</code>.
   * A roll-up of metrics pertaining to a set of activities. Values are in seconds and meters.
   * @alias module:model/ActivityTotal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ActivityTotal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityTotal} obj Optional instance to populate.
   * @return {module:model/ActivityTotal} The populated <code>ActivityTotal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('moving_time'))
        obj.movingTime = ApiClient.convertToType(data['moving_time'], 'Number');
      if (data.hasOwnProperty('elapsed_time'))
        obj.elapsedTime = ApiClient.convertToType(data['elapsed_time'], 'Number');
      if (data.hasOwnProperty('elevation_gain'))
        obj.elevationGain = ApiClient.convertToType(data['elevation_gain'], 'Number');
      if (data.hasOwnProperty('achievement_count'))
        obj.achievementCount = ApiClient.convertToType(data['achievement_count'], 'Number');
    }
    return obj;
  }

  /**
   * The number of activities considered in this total.
   * @member {Number} count
   */
  exports.prototype.count = undefined;

  /**
   * The total distance covered by the considered activities.
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * The total moving time of the considered activities.
   * @member {Number} movingTime
   */
  exports.prototype.movingTime = undefined;

  /**
   * The total elapsed time of the considered activities.
   * @member {Number} elapsedTime
   */
  exports.prototype.elapsedTime = undefined;

  /**
   * The total elevation gain of the considered activities.
   * @member {Number} elevationGain
   */
  exports.prototype.elevationGain = undefined;

  /**
   * The total number of achievements of the considered activities.
   * @member {Number} achievementCount
   */
  exports.prototype.achievementCount = undefined;


  return exports;

}));
