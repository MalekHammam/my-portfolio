import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})

export class HomComponent implements OnInit {
  theme: Theme = 'light-theme';
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
     private renderer: Renderer2
) { }
  

  ngOnInit(): void {
    this.initializeTheme();
  }
  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}
document.body
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";


export type Theme = 'light-theme' | 'dark-theme';






