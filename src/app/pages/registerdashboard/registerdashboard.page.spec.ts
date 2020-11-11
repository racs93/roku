import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterdashboardPage } from './registerdashboard.page';

describe('RegisterdashboardPage', () => {
  let component: RegisterdashboardPage;
  let fixture: ComponentFixture<RegisterdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
