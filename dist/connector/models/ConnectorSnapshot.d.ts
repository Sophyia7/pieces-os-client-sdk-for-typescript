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
import { Assets, Context, EmbeddedModelSchema } from './';
/**
 * This will be the model that is return from the connectorApi's Snapshot endpoint.
 * @export
 * @interface ConnectorSnapshot
 */
export interface ConnectorSnapshot {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ConnectorSnapshot
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Context}
     * @memberof ConnectorSnapshot
     */
    context: Context;
    /**
     *
     * @type {Assets}
     * @memberof ConnectorSnapshot
     */
    assets: Assets;
}
export declare function ConnectorSnapshotFromJSON(json: any): ConnectorSnapshot;
export declare function ConnectorSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorSnapshot;
export declare function ConnectorSnapshotToJSON(value?: ConnectorSnapshot | null): any;