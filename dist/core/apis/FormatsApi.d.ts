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
import { Format, Formats } from '../models';
export interface FormatsSnapshotRequest {
    transferables?: boolean;
}
export interface FormatsSpecificFormatSnapshotRequest {
    format: string;
    transferable?: boolean;
}
/**
 *
 */
export declare class FormatsApi extends runtime.BaseAPI {
    /**
     * Get all of your formats for a given user.
     * /formats [GET] Scoped to Formats
     */
    formatsSnapshotRaw(requestParameters: FormatsSnapshotRequest): Promise<runtime.ApiResponse<Formats>>;
    /**
     * Get all of your formats for a given user.
     * /formats [GET] Scoped to Formats
     */
    formatsSnapshot(requestParameters: FormatsSnapshotRequest): Promise<Formats>;
    /**
     * Request a specific format when given a id (uuid in path params)
     * /formats/{format} [GET] Scoped to Formats
     */
    formatsSpecificFormatSnapshotRaw(requestParameters: FormatsSpecificFormatSnapshotRequest): Promise<runtime.ApiResponse<Format>>;
    /**
     * Request a specific format when given a id (uuid in path params)
     * /formats/{format} [GET] Scoped to Formats
     */
    formatsSpecificFormatSnapshot(requestParameters: FormatsSpecificFormatSnapshotRequest): Promise<Format>;
}