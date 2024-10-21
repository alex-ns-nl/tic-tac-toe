import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeComponent } from './tic-tac-toe.component';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicTacToeComponent]
    });
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the board correctly', () => {});

  it('should allow a player to make a move', () => {});

  it('should detect a win condition', () => {});

  it('should detect a draw', () => {});
});
