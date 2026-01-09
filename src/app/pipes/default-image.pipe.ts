import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imageUrl: string | null | undefined): string { 
    if (!imageUrl || imageUrl.trim() === '') {
      return 'assets/images/default.jpg'; // Imagen por defecto 
    } 
    return imageUrl; 
  }

}
