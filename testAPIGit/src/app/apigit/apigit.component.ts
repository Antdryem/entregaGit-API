import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-apigit',
  templateUrl: './apigit.component.html',
  styleUrls: ['./apigit.component.css']
})
export class APIGitComponent implements OnInit {
  private url = "";
  /**
   * takeGitData
   */
  public takeGitData() {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
