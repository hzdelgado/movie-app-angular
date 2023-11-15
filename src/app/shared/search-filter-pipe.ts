import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../core/models/movie.model';

@Pipe({
  name: 'searchFilter',
  standalone: true,
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Movie[], filterText?: string, genres?: string[]): Movie[] {
    
    if (!list) {
      return list;
    }

    let filtered: Movie[] = [];

    if(filterText) {
      filtered = list.filter(item => item.description.toLowerCase().includes(filterText.toLowerCase().trim()) ||  item.title.toLowerCase().includes(filterText.toLowerCase().trim()));
    } else {
      filtered = list
    }
    if(!genres) {
      console.log("sds");
      return filtered;
    } else {
      console.log("sdds");
      console.log(genres);
      if(genres.length> 0) {
        filtered = filtered.filter(item => genres.includes(item.genre));
      } else {
        return filtered;
      }
      console.log(filtered);

      return filtered;
    }

  }
}
