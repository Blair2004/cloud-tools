import { OnInit } from '@angular/core';
import { Field } from '../../interfaces/field';
import { FormGroup } from '@angular/forms';
export declare class FieldsComponent implements OnInit {
    field: Field;
    group: FormGroup;
    constructor();
    ngOnInit(): void;
}
