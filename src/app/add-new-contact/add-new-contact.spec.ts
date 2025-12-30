import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewContact } from './add-new-contact';

describe('AddNewContact', () => {
  let component: AddNewContact;
  let fixture: ComponentFixture<AddNewContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
