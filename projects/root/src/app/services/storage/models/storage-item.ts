import {BehaviorSubject} from 'rxjs';

export class StorageItem {
    public readonly $content: BehaviorSubject<any> = new BehaviorSubject<unknown>(null);
    public readonly key: string;

    get content() {
        return this.$content.value;
    }

    set content(value: any) {
        localStorage.setItem(this.key, value);
        this.$content.next(value);
    }

    constructor(key: string, value: any = null) {
        this.key = key;
        this.content = value ? value : localStorage.getItem(key);
        this.content = this.content === 'null' || this.content === 'undefined' ? null : this.content;
    }
}

