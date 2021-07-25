import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    var myChart = new Chart("chart", {
      type: 'pie',
      data: {
        labels: ['Salários', 'Em caixa', 'Pgto Condôminio', 'Manutenção', 'Água/Luz'],
        datasets: [{
          label: '# of Votes',
          data: [8000, 15000, 10000, 800, 300],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
