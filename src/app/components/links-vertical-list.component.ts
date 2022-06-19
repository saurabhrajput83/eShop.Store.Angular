import { Component, Input } from '@angular/core';
import NavItemModel from '../models/nav-item.model';

@Component({
  selector: 'app-links-vertical-list',
  templateUrl: '../templates/shared/links-vertical-list.component.html',
  styleUrls: []
})
export class LinksVerticalList {

  @Input("listTitle") listTitle: string = 'Test';
  @Input("list") list: NavItemModel[] = [];


}
