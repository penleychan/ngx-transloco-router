import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matcher-detail',
  templateUrl: './matcher-detail.component.html',
  styleUrls: ['./matcher-detail.component.scss'],
})
export class MatcherDetailComponent implements OnInit, OnDestroy {
  params: string[] = [];
  private paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe((paramMap) => {
      this.params = [];
      const keys = [...paramMap.keys];
      for (const key of keys) {
        this.params.push(`${key}: ${paramMap.get(key)}`);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
