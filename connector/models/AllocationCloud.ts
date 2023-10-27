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
    AllocationCloudStatus,
    AllocationCloudStatusFromJSON,
    AllocationCloudStatusFromJSONTyped,
    AllocationCloudStatusToJSON,
    AllocationCloudUrls,
    AllocationCloudUrlsFromJSON,
    AllocationCloudUrlsFromJSONTyped,
    AllocationCloudUrlsToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './';

/**
 * update && version: will be present only if your cloud was successfully spun up && running.
 * 
 * updated: is the last time this was updated.
 * @export
 * @interface AllocationCloud
 */
export interface AllocationCloud {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AllocationCloud
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is a uuid that represents this cloud.(this is the same as the userid)
     * @type {string}
     * @memberof AllocationCloud
     */
    id: string;
    /**
     * this is your useruuid.
     * @type {string}
     * @memberof AllocationCloud
     */
    user: string;
    /**
     * 
     * @type {AllocationCloudUrls}
     * @memberof AllocationCloud
     */
    urls: AllocationCloudUrls;
    /**
     * 
     * @type {AllocationCloudStatus}
     * @memberof AllocationCloud
     */
    status: AllocationCloudStatus;
    /**
     * This is the project that this is attached to.
     * @type {string}
     * @memberof AllocationCloud
     */
    project: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof AllocationCloud
     */
    updated?: GroupedTimestamp;
    /**
     * this is the current version of the server.
     * @type {string}
     * @memberof AllocationCloud
     */
    version?: string;
    /**
     * this is the region where the project is defined.
     * @type {string}
     * @memberof AllocationCloud
     */
    region?: string;
}

export function AllocationCloudFromJSON(json: any): AllocationCloud {
    return AllocationCloudFromJSONTyped(json, false);
}

export function AllocationCloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationCloud {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'user': json['user'],
        'urls': AllocationCloudUrlsFromJSON(json['urls']),
        'status': AllocationCloudStatusFromJSON(json['status']),
        'project': json['project'],
        'updated': !exists(json, 'updated') ? undefined : GroupedTimestampFromJSON(json['updated']),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'region': !exists(json, 'region') ? undefined : json['region'],
    };
}

export function AllocationCloudToJSON(value?: AllocationCloud | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'user': value.user,
        'urls': AllocationCloudUrlsToJSON(value.urls),
        'status': AllocationCloudStatusToJSON(value.status),
        'project': value.project,
        'updated': GroupedTimestampToJSON(value.updated),
        'version': value.version,
        'region': value.region,
    };
}

