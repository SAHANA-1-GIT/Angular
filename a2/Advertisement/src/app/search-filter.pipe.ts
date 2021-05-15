import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(advertisements : any, searchString : string) {
    if(!advertisements || !searchString)
    {
      return advertisements;
    }

    return advertisements.filter(ad => 
                    ad.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) ||
                    ad.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()));
  }

}
