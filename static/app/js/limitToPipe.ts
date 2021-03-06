import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe {
    transform(value: string, args: string): string {
        if (value) {
            let limit = args ? parseInt(args, 10) : 10;
            let trail = '...';
            return value.length > limit ? value.substring(0, limit) + trail : value;
        } else {
            return value;
        }
    }
}