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
exports.TLPCodeFragmentDescriptiveStatisticsToJSON = exports.TLPCodeFragmentDescriptiveStatisticsFromJSONTyped = exports.TLPCodeFragmentDescriptiveStatisticsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function TLPCodeFragmentDescriptiveStatisticsFromJSON(json) {
    return TLPCodeFragmentDescriptiveStatisticsFromJSONTyped(json, false);
}
exports.TLPCodeFragmentDescriptiveStatisticsFromJSON = TLPCodeFragmentDescriptiveStatisticsFromJSON;
function TLPCodeFragmentDescriptiveStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'user': json['user'],
        'os': json['os'],
        'language': json['language'],
        'length': json['length'],
        'ast': json['ast'],
        'timestamp': json['timestamp'],
        'asset': json['asset'],
        'context': json['context'],
        'snippet': json['snippet'],
    };
}
exports.TLPCodeFragmentDescriptiveStatisticsFromJSONTyped = TLPCodeFragmentDescriptiveStatisticsFromJSONTyped;
function TLPCodeFragmentDescriptiveStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'user': value.user,
        'os': value.os,
        'language': value.language,
        'length': value.length,
        'ast': value.ast,
        'timestamp': value.timestamp,
        'asset': value.asset,
        'context': value.context,
        'snippet': value.snippet,
    };
}
exports.TLPCodeFragmentDescriptiveStatisticsToJSON = TLPCodeFragmentDescriptiveStatisticsToJSON;
