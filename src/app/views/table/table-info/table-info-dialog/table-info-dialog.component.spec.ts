import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableInfoDialog } from './table-info-dialog.component';



describe('TableInfoDialogComponent', () => {
  let component: TableInfoDialog;
  let fixture: ComponentFixture<TableInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInfoDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
