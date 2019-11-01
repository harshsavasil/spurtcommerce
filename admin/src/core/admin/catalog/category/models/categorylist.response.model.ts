/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class CategorylistResponseModel {
  public categoryId: any = {};
  public name: any = {};
  public parentInt: any = {};
  public sortOrder: any = {};
  public metaTagTitle: any = {};
  public metaTagDescription: any = {};
  public metaTagKeyword: any = {};
  public isActive: number;
  public levels: any = [];

  constructor(categorylistResponse: any) {
    this.categoryId = categorylistResponse.categoryId || '';
    this.name = categorylistResponse.name || '';
    this.parentInt = categorylistResponse.parentInt || '';
    this.sortOrder = categorylistResponse.sortOrder || '';
    this.metaTagTitle = categorylistResponse.metaTagTitle || '';
    this.metaTagDescription = categorylistResponse.metaTagDescription || '';
    this.metaTagKeyword = categorylistResponse.metaTagKeyword || '';
    this.isActive = categorylistResponse.isActive || 0;
    this.levels = categorylistResponse.levels || '';
  }
}
