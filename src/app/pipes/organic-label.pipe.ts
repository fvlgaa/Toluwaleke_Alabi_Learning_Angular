import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'organicLabel'
})
export class OrganicLabelPipe implements PipeTransform {
  transform(isOrganic: boolean): string {
    return isOrganic ? 'Organic' : 'Non-Organic';
  }
}
