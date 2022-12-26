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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Lap', function() {
      beforeEach(function() {
        instance = new StravaApiV3.Lap();
      });

      it('should create an instance of Lap', function() {
        // TODO: update the code to test Lap
        expect(instance).to.be.a(StravaApiV3.Lap);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property activity (base name: "activity")', function() {
        // TODO: update the code to test the property activity
        expect(instance).to.have.property('activity');
        // expect(instance.activity).to.be(expectedValueLiteral);
      });

      it('should have the property athlete (base name: "athlete")', function() {
        // TODO: update the code to test the property athlete
        expect(instance).to.have.property('athlete');
        // expect(instance.athlete).to.be(expectedValueLiteral);
      });

      it('should have the property averageCadence (base name: "average_cadence")', function() {
        // TODO: update the code to test the property averageCadence
        expect(instance).to.have.property('averageCadence');
        // expect(instance.averageCadence).to.be(expectedValueLiteral);
      });

      it('should have the property averageSpeed (base name: "average_speed")', function() {
        // TODO: update the code to test the property averageSpeed
        expect(instance).to.have.property('averageSpeed');
        // expect(instance.averageSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property elapsedTime (base name: "elapsed_time")', function() {
        // TODO: update the code to test the property elapsedTime
        expect(instance).to.have.property('elapsedTime');
        // expect(instance.elapsedTime).to.be(expectedValueLiteral);
      });

      it('should have the property startIndex (base name: "start_index")', function() {
        // TODO: update the code to test the property startIndex
        expect(instance).to.have.property('startIndex');
        // expect(instance.startIndex).to.be(expectedValueLiteral);
      });

      it('should have the property endIndex (base name: "end_index")', function() {
        // TODO: update the code to test the property endIndex
        expect(instance).to.have.property('endIndex');
        // expect(instance.endIndex).to.be(expectedValueLiteral);
      });

      it('should have the property lapIndex (base name: "lap_index")', function() {
        // TODO: update the code to test the property lapIndex
        expect(instance).to.have.property('lapIndex');
        // expect(instance.lapIndex).to.be(expectedValueLiteral);
      });

      it('should have the property maxSpeed (base name: "max_speed")', function() {
        // TODO: update the code to test the property maxSpeed
        expect(instance).to.have.property('maxSpeed');
        // expect(instance.maxSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property movingTime (base name: "moving_time")', function() {
        // TODO: update the code to test the property movingTime
        expect(instance).to.have.property('movingTime');
        // expect(instance.movingTime).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property paceZone (base name: "pace_zone")', function() {
        // TODO: update the code to test the property paceZone
        expect(instance).to.have.property('paceZone');
        // expect(instance.paceZone).to.be(expectedValueLiteral);
      });

      it('should have the property split (base name: "split")', function() {
        // TODO: update the code to test the property split
        expect(instance).to.have.property('split');
        // expect(instance.split).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property startDateLocal (base name: "start_date_local")', function() {
        // TODO: update the code to test the property startDateLocal
        expect(instance).to.have.property('startDateLocal');
        // expect(instance.startDateLocal).to.be(expectedValueLiteral);
      });

      it('should have the property totalElevationGain (base name: "total_elevation_gain")', function() {
        // TODO: update the code to test the property totalElevationGain
        expect(instance).to.have.property('totalElevationGain');
        // expect(instance.totalElevationGain).to.be(expectedValueLiteral);
      });

    });
  });

}));
