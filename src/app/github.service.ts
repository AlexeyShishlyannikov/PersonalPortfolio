import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  baseURI = 'https://api.github.com/users/alexeyshishlyannikov';
  queryString = '?sort=pushed_at&page=1&per_page=3';
  constructor(
    private http: HttpClient
  ) {}

  public getGithubRepos(): Observable<any> {
    return this.http.get(this.baseURI + '/repos' + this.queryString);
  }


  public getNumberOfContributions(numberOfCommits: number) {
    const subscription = this.http.get(this.baseURI + '/repos')
    .subscribe(res => {
      (res as any[]).forEach(repo => {
        this.http.get(repo.contributors_url).subscribe(listOfContributors => {
          (listOfContributors as any[]).forEach(c => {
            numberOfCommits += c.contributions;
            console.log(numberOfCommits);
            });
          subscription.unsubscribe();
        });
      });
    });
  }
}
