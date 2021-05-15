import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdvertisementServiceService } from '../advertisement-service.service';

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {
  categories =['Furniture','Hardware','Mobile'];
  adToEdit;
  adTitle: string;
  constructor(private route: ActivatedRoute, private location: Location, private _adService : AdvertisementServiceService, private router : Router) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
         this.adTitle=params.get('title');
         console.log(this.adTitle);
         
    });

    this.adToEdit = this._adService.getAdvertisement(this.adTitle);
  }

  cancel()
  {
    this.location.back();
  }

  onAdEdit(ad)
  {
    this._adService.updateAdvertisement(ad);
    this.router.navigate(['']);
  }

}
