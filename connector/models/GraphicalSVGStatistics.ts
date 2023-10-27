/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * 
 * @export
 * @interface GraphicalSVGStatistics
 */
export interface GraphicalSVGStatistics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalSVGStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof GraphicalSVGStatistics
     */
    id?: string;
}

export function GraphicalSVGStatisticsFromJSON(json: any): GraphicalSVGStatistics {
    return GraphicalSVGStatisticsFromJSONTyped(json, false);
}

export function GraphicalSVGStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalSVGStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function GraphicalSVGStatisticsToJSON(value?: GraphicalSVGStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
    };
}

