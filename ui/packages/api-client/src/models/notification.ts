/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.21.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { NotificationSpec } from './notification-spec';

/**
 * <p>{@link Notification Notification} is a custom extension that used to store notification information for  inner use, it\'s on-site notification.</p>   <p>Supports the following operations:</p>  <ul>     <li>Marked as read: {@link NotificationSpec#setUnread(boolean) NotificationSpec#setUnread(boolean)}</li>     <li>Get the last read time: {@link NotificationSpec#getLastReadAt NotificationSpec#getLastReadAt()}</li>     <li>Filter by recipient: {@link NotificationSpec#getRecipient NotificationSpec#getRecipient()}</li>  </ul>
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Notification
     */
    'metadata': Metadata;
    /**
     * 
     * @type {NotificationSpec}
     * @memberof Notification
     */
    'spec'?: NotificationSpec;
}

