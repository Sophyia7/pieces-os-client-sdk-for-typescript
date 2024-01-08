"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatingStatusEnumToJSON = exports.UpdatingStatusEnumFromJSONTyped = exports.UpdatingStatusEnumFromJSON = exports.UpdatingStatusEnum = void 0;
/**
 * This is a simple enum used to determine the status of the Updating process.(of PiecesOS)
 *
 * UpdatingStatusEnum(READY_TO_RESTART, AVAILABLE(but not downloaded), DOWNLOADING, UNKNOWN, UP_TO_DATE)
 *
 * UNKNOWN: should never be the case
 *
 * These are some enums that are currently not implemented but are for future support( REINSTALL_REQUIRED, CONTACT_SUPPORT)
 * @export
 * @enum {string}
 */
var UpdatingStatusEnum;
(function (UpdatingStatusEnum) {
    UpdatingStatusEnum["ReadyToRestart"] = "READY_TO_RESTART";
    UpdatingStatusEnum["Available"] = "AVAILABLE";
    UpdatingStatusEnum["Downloading"] = "DOWNLOADING";
    UpdatingStatusEnum["Unknown"] = "UNKNOWN";
    UpdatingStatusEnum["UpToDate"] = "UP_TO_DATE";
    UpdatingStatusEnum["ReinstallRequired"] = "REINSTALL_REQUIRED";
    UpdatingStatusEnum["ContactSupport"] = "CONTACT_SUPPORT";
})(UpdatingStatusEnum || (exports.UpdatingStatusEnum = UpdatingStatusEnum = {}));
function UpdatingStatusEnumFromJSON(json) {
    return UpdatingStatusEnumFromJSONTyped(json, false);
}
exports.UpdatingStatusEnumFromJSON = UpdatingStatusEnumFromJSON;
function UpdatingStatusEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.UpdatingStatusEnumFromJSONTyped = UpdatingStatusEnumFromJSONTyped;
function UpdatingStatusEnumToJSON(value) {
    return value;
}
exports.UpdatingStatusEnumToJSON = UpdatingStatusEnumToJSON;