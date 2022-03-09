import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../test-items';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
