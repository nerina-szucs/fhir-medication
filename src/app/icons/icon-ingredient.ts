import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

const INGREDIENT_ICON = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 297 297" style="enable-background:new 0 0 297 297;" xml:space="preserve">
<g>
	<path d="M38.772,37.647h116.446c2.2,0,4-1.8,4-4V10.458C159.219,4.683,154.536,0,148.762,0H45.229
		c-5.775,0-10.457,4.683-10.457,10.458v23.189C34.772,35.848,36.572,37.647,38.772,37.647z"/>
	<path d="M23.942,72.158h146.106c2.2,0,3.195-1.61,2.211-3.578l-6.356-12.713c-0.984-1.968-3.589-3.578-5.789-3.578H33.877
		c-2.2,0-4.805,1.61-5.789,3.578L21.731,68.58C20.747,70.548,21.742,72.158,23.942,72.158z"/>
	<path d="M175.951,234.776c0-11.832,3.406-27.688,9.417-42.985c-13.491-0.704-33.771,3.43-50.034,10.287
		c-18.799,7.928-30.031,18.029-30.815,27.711c-0.786,9.684,8.672,21.461,25.949,32.314c15.479,9.721,35.691,17.274,49.154,18.365
		c5.499,0.447,10.927-0.119,16.094-1.639C183.598,268.001,175.951,252.268,175.951,234.776z"/>
	<path d="M265.148,184.297c-9.421-18.098-20.396-28.477-30.11-28.477c-9.715,0-20.69,10.379-30.111,28.477
		c-8.439,16.214-14.334,36.971-14.334,50.479c0,24.507,19.938,44.445,44.445,44.445c24.507,0,44.445-19.939,44.445-44.445
		C279.483,221.268,273.589,200.511,265.148,184.297z"/>
	<path d="M89.925,228.607c1.26-15.537,15.365-29.749,39.721-40.02c14.857-6.266,32.342-10.392,46.829-11.314V90.799c0-2.2-1.8-4-4-4
		H21.517c-2.2,0-4,1.8-4,4v195.743c0,5.775,4.683,10.458,10.458,10.458h138.042c2.648,0,5.061-0.99,6.902-2.614
		C140.148,289.166,87.319,260.754,89.925,228.607z"/>
</g>
</svg>
`;

/**
 * @title SVG icons
 */
@Component({
  selector: 'ingredient-icon',
  templateUrl: 'icon-ingredient.html',
})
export class IngredientIcon {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('ingredient', sanitizer.bypassSecurityTrustHtml(INGREDIENT_ICON));
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */