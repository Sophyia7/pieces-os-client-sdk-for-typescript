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
    TrackedAssetEventCreationMetadata,
    TrackedAssetEventCreationMetadataFromJSON,
    TrackedAssetEventCreationMetadataFromJSONTyped,
    TrackedAssetEventCreationMetadataToJSON,
    TrackedAssetEventFormatReclassificationMetadata,
    TrackedAssetEventFormatReclassificationMetadataFromJSON,
    TrackedAssetEventFormatReclassificationMetadataFromJSONTyped,
    TrackedAssetEventFormatReclassificationMetadataToJSON,
} from './';

/**
 * 
 * @export
 * @interface SeededTrackedAssetEventMetadata
 */
export interface SeededTrackedAssetEventMetadata {
    /**
     * 
     * @type {TrackedAssetEventFormatReclassificationMetadata}
     * @memberof SeededTrackedAssetEventMetadata
     */
    reclassification?: TrackedAssetEventFormatReclassificationMetadata;
    /**
     * 
     * @type {TrackedAssetEventCreationMetadata}
     * @memberof SeededTrackedAssetEventMetadata
     */
    creation?: TrackedAssetEventCreationMetadata;
}

export function SeededTrackedAssetEventMetadataFromJSON(json: any): SeededTrackedAssetEventMetadata {
    return SeededTrackedAssetEventMetadataFromJSONTyped(json, false);
}

export function SeededTrackedAssetEventMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedAssetEventMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reclassification': !exists(json, 'reclassification') ? undefined : TrackedAssetEventFormatReclassificationMetadataFromJSON(json['reclassification']),
        'creation': !exists(json, 'creation') ? undefined : TrackedAssetEventCreationMetadataFromJSON(json['creation']),
    };
}

export function SeededTrackedAssetEventMetadataToJSON(value?: SeededTrackedAssetEventMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reclassification': TrackedAssetEventFormatReclassificationMetadataToJSON(value.reclassification),
        'creation': TrackedAssetEventCreationMetadataToJSON(value.creation),
    };
}

