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
 *
 * @export
 * @interface SeededDiscoverableHtmlWebpage
 */
export interface SeededDiscoverableHtmlWebpage {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableHtmlWebpage
     */
    schema?: EmbeddedModelSchema;
    /**
     * The route of the page
     * @type {string}
     * @memberof SeededDiscoverableHtmlWebpage
     */
    url: string;
    /**
     * page's html as a string
     * @type {string}
     * @memberof SeededDiscoverableHtmlWebpage
     */
    page: string;
}
export declare function SeededDiscoverableHtmlWebpageFromJSON(json: any): SeededDiscoverableHtmlWebpage;
export declare function SeededDiscoverableHtmlWebpageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableHtmlWebpage;
export declare function SeededDiscoverableHtmlWebpageToJSON(value?: SeededDiscoverableHtmlWebpage | null): any;
