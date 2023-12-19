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
import { EmbeddedModelSchema, SeededFile, SeededFragment, TLPDirectedDiscoveryFilters } from './';
/**
 * Assumption: filters applied in this model will overwrite filters passed in SeededDiscoverableAssets
 * @export
 * @interface SeededDiscoverableAsset
 */
export interface SeededDiscoverableAsset {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededFile}
     * @memberof SeededDiscoverableAsset
     */
    file?: SeededFile;
    /**
     *
     * @type {SeededFragment}
     * @memberof SeededDiscoverableAsset
     */
    fragment?: SeededFragment;
    /**
     *
     * @type {string}
     * @memberof SeededDiscoverableAsset
     */
    directory?: string;
    /**
     *
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof SeededDiscoverableAsset
     */
    filters?: TLPDirectedDiscoveryFilters;
}
export declare function SeededDiscoverableAssetFromJSON(json: any): SeededDiscoverableAsset;
export declare function SeededDiscoverableAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableAsset;
export declare function SeededDiscoverableAssetToJSON(value?: SeededDiscoverableAsset | null): any;
