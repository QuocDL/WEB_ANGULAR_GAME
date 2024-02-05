import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(
    private sanitiezer: DomSanitizer
  ){}
  transform(url: string) {
    return this.sanitiezer.bypassSecurityTrustResourceUrl(url)
  }

}
