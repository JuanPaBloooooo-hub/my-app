import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TalkListPage } from './talk-list.page';

describe('TalkListPage', () => {
  let component: TalkListPage;
  let fixture: ComponentFixture<TalkListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
