"use strict";
/* tslint:disable */
/* eslint-disable */
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetSpecificAssetExportExportTypeEnum = exports.AssetApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AssetApi extends runtime.BaseAPI {
    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    async assetAssociateTagRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetAssociateTag.');
        }
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag', 'Required parameter requestParameters.tag was null or undefined when calling assetAssociateTag.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/tags/associate/{tag}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    async assetAssociateTag(requestParameters) {
        await this.assetAssociateTagRaw(requestParameters);
    }
    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    async assetAssociateWebsiteRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetAssociateWebsite.');
        }
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling assetAssociateWebsite.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/websites/associate/{website}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    async assetAssociateWebsite(requestParameters) {
        await this.assetAssociateWebsiteRaw(requestParameters);
    }
    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    async assetDisassociateTagRaw(requestParameters) {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag', 'Required parameter requestParameters.tag was null or undefined when calling assetDisassociateTag.');
        }
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetDisassociateTag.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/tags/disassociate/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    async assetDisassociateTag(requestParameters) {
        await this.assetDisassociateTagRaw(requestParameters);
    }
    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    async assetDisassociateWebsiteRaw(requestParameters) {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling assetDisassociateWebsite.');
        }
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetDisassociateWebsite.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/websites/disassociate/{website}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    async assetDisassociateWebsite(requestParameters) {
        await this.assetDisassociateWebsiteRaw(requestParameters);
    }
    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    async assetFormatsRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetFormats.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/formats`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.FormatsFromJSON)(jsonValue));
    }
    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    async assetFormats(requestParameters) {
        const response = await this.assetFormatsRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    async assetReclassifyRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/asset/reclassify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AssetReclassificationToJSON)(requestParameters.assetReclassification),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AssetFromJSON)(jsonValue));
    }
    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    async assetReclassify(requestParameters) {
        const response = await this.assetReclassifyRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    async assetScoresIncrementRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetScoresIncrement.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/asset/{asset}/scores/increment`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededScoreIncrementToJSON)(requestParameters.seededScoreIncrement),
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    async assetScoresIncrement(requestParameters) {
        await this.assetScoresIncrementRaw(requestParameters);
    }
    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    async assetSnapshotRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetSnapshot.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AssetFromJSON)(jsonValue));
    }
    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    async assetSnapshot(requestParameters) {
        const response = await this.assetSnapshotRaw(requestParameters);
        return await response.value();
    }
    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    async assetSnapshotPostRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetSnapshotPost.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/asset/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededAccessorToJSON)(requestParameters.seededAccessor),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AssetFromJSON)(jsonValue));
    }
    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    async assetSnapshotPost(requestParameters) {
        const response = await this.assetSnapshotPostRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    async assetSpecificAssetConversationsRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetConversations.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/conversations`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ConversationsFromJSON)(jsonValue));
    }
    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    async assetSpecificAssetConversations(requestParameters) {
        const response = await this.assetSpecificAssetConversationsRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    async assetSpecificAssetExportRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling assetSpecificAssetExport.');
        }
        if (requestParameters.exportType === null || requestParameters.exportType === undefined) {
            throw new runtime.RequiredError('exportType', 'Required parameter requestParameters.exportType was null or undefined when calling assetSpecificAssetExport.');
        }
        const queryParameters = {};
        if (requestParameters.exportType !== undefined) {
            queryParameters['export_type'] = requestParameters.exportType;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/asset/{asset}/export`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ExportedAssetFromJSON)(jsonValue));
    }
    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    async assetSpecificAssetExport(requestParameters) {
        const response = await this.assetSpecificAssetExportRaw(requestParameters);
        return await response.value();
    }
    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    async assetUpdateRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/asset/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AssetToJSON)(requestParameters.asset),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AssetFromJSON)(jsonValue));
    }
    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    async assetUpdate(requestParameters) {
        const response = await this.assetUpdateRaw(requestParameters);
        return await response.value();
    }
}
exports.AssetApi = AssetApi;
/**
    * @export
    * @enum {string}
    */
var AssetSpecificAssetExportExportTypeEnum;
(function (AssetSpecificAssetExportExportTypeEnum) {
    AssetSpecificAssetExportExportTypeEnum["Html"] = "HTML";
    AssetSpecificAssetExportExportTypeEnum["Md"] = "MD";
})(AssetSpecificAssetExportExportTypeEnum || (exports.AssetSpecificAssetExportExportTypeEnum = AssetSpecificAssetExportExportTypeEnum = {}));
