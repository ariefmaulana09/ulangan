import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerhasilPage } from './berhasil.page';

describe('BerhasilPage', () => {
  let component: BerhasilPage;
  let fixture: ComponentFixture<BerhasilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BerhasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
