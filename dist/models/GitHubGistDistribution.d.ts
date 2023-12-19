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
import { EmbeddedModelSchema, GroupedTimestamp, Recipients } from './';
/**
 * This is a published Github Gist.
 * @export
 * @interface GitHubGistDistribution
 */
export interface GitHubGistDistribution {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GitHubGistDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Recipients}
     * @memberof GitHubGistDistribution
     */
    recipients: Recipients;
    /**
     * This will let us know if the gist is public or private.
     * @type {boolean}
     * @memberof GitHubGistDistribution
     */
    _public: boolean;
    /**
     * This is the description of the Gist Distribution
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    description?: string;
    /**
     * This is the name of the gist you will add.
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    name: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof GitHubGistDistribution
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof GitHubGistDistribution
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof GitHubGistDistribution
     */
    deleted?: GroupedTimestamp;
    /**
     * This is the id that github uses to represent the gist.
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    githubId: string;
    /**
     * This is the url where the gist is.
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    url: string;
}
export declare function GitHubGistDistributionFromJSON(json: any): GitHubGistDistribution;
export declare function GitHubGistDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitHubGistDistribution;
export declare function GitHubGistDistributionToJSON(value?: GitHubGistDistribution | null): any;
