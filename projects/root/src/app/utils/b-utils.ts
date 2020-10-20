import {FormControl} from '@angular/forms';

export type BFormControls<TModel> = {[Key in keyof TModel]: FormControl};
