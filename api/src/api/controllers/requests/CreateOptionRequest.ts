/*
 * spurtcommerce API
 * version 3.0
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class CreateOption {
    @IsNotEmpty()
    public name: string;

    public type: string;

    @IsNotEmpty()
    public sortOrder: number;

    public optionValue: any;
}
