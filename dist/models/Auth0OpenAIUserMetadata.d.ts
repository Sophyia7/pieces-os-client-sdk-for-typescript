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
 * Only supporting a single api key per user.
 * @export
 * @interface Auth0OpenAIUserMetadata
 */
export interface Auth0OpenAIUserMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Auth0OpenAIUserMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Auth0OpenAIUserMetadata
     */
    apiKey?: string;
    /**
     *
     * @type {string}
     * @memberof Auth0OpenAIUserMetadata
     */
    apiKeyName?: string;
    /**
     *
     * @type {string}
     * @memberof Auth0OpenAIUserMetadata
     */
    organizationKey?: string;
}
export declare function Auth0OpenAIUserMetadataFromJSON(json: any): Auth0OpenAIUserMetadata;
export declare function Auth0OpenAIUserMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Auth0OpenAIUserMetadata;
export declare function Auth0OpenAIUserMetadataToJSON(value?: Auth0OpenAIUserMetadata | null): any;
