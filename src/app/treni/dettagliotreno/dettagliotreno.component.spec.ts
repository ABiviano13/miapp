import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliotrenoComponent } from './dettagliotreno.component';

describe('DettagliotrenoComponent', () => {
  let component: DettagliotrenoComponent;
  let fixture: ComponentFixture<DettagliotrenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliotrenoComponent]
    });
    fixture = TestBed.createComponent(DettagliotrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
