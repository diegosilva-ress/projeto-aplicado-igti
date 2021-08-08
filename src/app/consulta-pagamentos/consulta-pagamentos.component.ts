import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-consulta-pagamentos',
  templateUrl: './consulta-pagamentos.component.html',
  styleUrls: ['./consulta-pagamentos.component.css']
})
export class ConsultaPagamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gerarPDF() {
    const pdf = new jsPDF();
    var img = new Image()

    img.src = 'assets/boleto.png'
    pdf.addImage(img, 'png', 1, 1, 210, 280);
    pdf.save();
  }

}
