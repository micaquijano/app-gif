import { Component } from '@angular/core';
import { SideMenuHeader } from '../side-menu-header/side-menu-header';
import { SideMenuOption } from '../side-menu-options/side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOption],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu { }
