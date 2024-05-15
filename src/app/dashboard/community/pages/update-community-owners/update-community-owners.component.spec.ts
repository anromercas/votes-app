import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommunityOwnersComponent } from './update-community-owners.component';

describe('UpdateCommunityOwnersComponent', () => {
  let component: UpdateCommunityOwnersComponent;
  let fixture: ComponentFixture<UpdateCommunityOwnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCommunityOwnersComponent]
    });
    fixture = TestBed.createComponent(UpdateCommunityOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
