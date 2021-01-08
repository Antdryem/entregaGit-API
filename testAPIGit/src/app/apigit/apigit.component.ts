import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceAPIService} from '../service-api.service'

@Component({
  selector: 'app-apigit',
  templateUrl: './apigit.component.html',
  styleUrls: ['./apigit.component.css']
})
export class APIGitComponent implements OnInit {
  private url = "https://api.github.com/repos/Antdryem/entregaGit-API/commits";
  /**
   * takeGitData
   */

  constructor(private webService: ServiceAPIService) { }
  public data;
  ngOnInit(): void {
    this.data = this.webService.consumeService(this.url).subscribe((response)=>{

    console.log(response)
    });
  }

}
