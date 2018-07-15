import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[];
  constructor(private questionService: QuestionService) {
    this.questionService.getConfig().subscribe(data => {
      this.questions = data;
    })
  }

  ngOnInit() {
  }

}
