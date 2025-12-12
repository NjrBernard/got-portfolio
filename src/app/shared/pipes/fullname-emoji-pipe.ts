import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullnameEmoji',
})
export class FullnameEmojiPipe implements PipeTransform {

  transform(value: string): string{
    if (!value) 
      return '';
      return value.concat(' 💩');
    }
  }

