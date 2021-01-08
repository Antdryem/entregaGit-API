import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIGitComponent } from './apigit.component';

describe('APIGitComponent', () => {
  let component: APIGitComponent;
  let fixture: ComponentFixture<APIGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
