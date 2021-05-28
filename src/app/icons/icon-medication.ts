import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

const MEDICATION_ICON = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
  <g>
    <g>
      <path d="m316.9,157.8h-121.8c-48,0-87.1,39.1-87.1,87.1v235.7c0,11.3 9.1,20.4 20.4,20.4h255.2c11.3,0 20.4-9.1 20.4-20.4v-235.7c0-48-39-87.1-87.1-87.1zm-121.8,40.8h121.9c25.5,0 46.3,20.8 46.3,46.3v41.5h-214.5v-41.5c0-25.5 20.8-46.3 46.3-46.3zm-46.3,261.6v-133h214.4v132.9h-214.4z"/>
      <path d="m182.6,132.1h149.2c11.3,0 20.4-9.1 20.4-20.4v-80.3c0-11.3-9.1-20.4-20.4-20.4h-149.2c-11.3,0-20.4,9.1-20.4,20.4v80.3c0,11.3 9.1,20.4 20.4,20.4zm20.4-80.3h108.4v39.5h-108.4v-39.5z"/>
    </g>
  </g>
</svg>
`;

/**
 * @title SVG icons
 */
@Component({
  selector: 'medication-icon',
  templateUrl: 'icon-medication.html',
})
export class MedicationIcon {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('medication', sanitizer.bypassSecurityTrustHtml(MEDICATION_ICON));
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */