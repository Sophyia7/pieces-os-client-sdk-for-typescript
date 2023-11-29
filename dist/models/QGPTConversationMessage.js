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
exports.QGPTConversationMessageToJSON = exports.QGPTConversationMessageFromJSONTyped = exports.QGPTConversationMessageFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function QGPTConversationMessageFromJSON(json) {
    return QGPTConversationMessageFromJSONTyped(json, false);
}
exports.QGPTConversationMessageFromJSON = QGPTConversationMessageFromJSON;
function QGPTConversationMessageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'text': json['text'],
        'role': (0, index_1.QGPTConversationMessageRoleEnumFromJSON)(json['role']),
        'timestamp': (0, index_1.GroupedTimestampFromJSON)(json['timestamp']),
    };
}
exports.QGPTConversationMessageFromJSONTyped = QGPTConversationMessageFromJSONTyped;
function QGPTConversationMessageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'text': value.text,
        'role': (0, index_1.QGPTConversationMessageRoleEnumToJSON)(value.role),
        'timestamp': (0, index_1.GroupedTimestampToJSON)(value.timestamp),
    };
}
exports.QGPTConversationMessageToJSON = QGPTConversationMessageToJSON;