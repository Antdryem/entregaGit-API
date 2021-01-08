import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceAPIService } from '../service-api.service'

@Component({
  selector: 'app-apigit',
  templateUrl: './apigit.component.html',
  styleUrls: ['./apigit.component.css']
})
export class APIGitComponent implements OnInit, OnDestroy {

  /**
   * takeGitData
   */
  private url = "https://api.github.com/repos/Antdryem/entregaGit-API/commits";

  public commitList;

  subs = null;

  constructor(
    private webService: ServiceAPIService
  ) {
  }

  ngOnInit(): void {
    
    this.subs = this.webService.consumeService(this.url)
    .subscribe((response) => {
      console.log( 'Response: ', response);
      
      this.commitList = response;
      
    });
    
  }

  ngOnDestroy(): void {
   
    this.subs.unsubscribe();
  }

  /*
   * Don't Remove index from arguments
   * https://angular.io/api/core/TrackByFunction
   **/
  trackFn( index: any, item: any ) { return item.sha; }

  isNumeric(str) {
    if (typeof str != "string") return false;
    return //!isNaN(str)
    !isNaN(parseFloat(str));
  }

}
