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
import * as runtime from '../runtime';
import { Hint } from '../models';
export interface HintSpecificHintSnapshotRequest {
    hint: string;
}
export interface HintUpdateRequest {
    hint?: Hint;
}
/**
 *
 */
export declare class HintApi extends runtime.BaseAPI {
    /**
     * This will get a snapshot of a specific hint.
     * /hint/{hint} [POST]
     */
    hintSpecificHintSnapshotRaw(requestParameters: HintSpecificHintSnapshotRequest): Promise<runtime.ApiResponse<Hint>>;
    /**
     * This will get a snapshot of a specific hint.
     * /hint/{hint} [POST]
     */
    hintSpecificHintSnapshot(requestParameters: HintSpecificHintSnapshotRequest): Promise<Hint>;
    /**
     * This will update a specific hint.
     * /hint/update [POST]
     */
    hintUpdateRaw(requestParameters: HintUpdateRequest): Promise<runtime.ApiResponse<Hint>>;
    /**
     * This will update a specific hint.
     * /hint/update [POST]
     */
    hintUpdate(requestParameters: HintUpdateRequest): Promise<Hint>;
}