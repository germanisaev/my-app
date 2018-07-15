import { Component, OnInit, Input, Output } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() answer: Answer;

  constructor() {
  }

  ngOnInit() {
  }

}
