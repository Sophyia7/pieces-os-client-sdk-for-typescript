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
import { EmbeddedModelSchema } from './';
/**
 * This will give specific metadata need to determine what the rename was to/from.
 * @export
 * @interface TrackedAssetEventRenameMetadata
 */
export interface TrackedAssetEventRenameMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventRenameMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof TrackedAssetEventRenameMetadata
     */
    previous: string;
    /**
     *
     * @type {string}
     * @memberof TrackedAssetEventRenameMetadata
     */
    current: string;
}
export declare function TrackedAssetEventRenameMetadataFromJSON(json: any): TrackedAssetEventRenameMetadata;
export declare function TrackedAssetEventRenameMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventRenameMetadata;
export declare function TrackedAssetEventRenameMetadataToJSON(value?: TrackedAssetEventRenameMetadata | null): any;
