import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUploadComponent } from './table-upload.component';

describe('TableUploadComponent', () => {
  let component: TableUploadComponent;
  let fixture: ComponentFixture<TableUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
