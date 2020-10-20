import {FormControl, FormGroup} from '@angular/forms';

export type BFormControls<TModel> = {[Key in keyof TModel]: FormControl};
export interface BFormComponent<TModel> {
    form: FormGroup;
    formName: string;
    formControls: BFormControls<TModel>;
}
