import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-donna',
  templateUrl: './grafico-donna.component.html',
  styles: []
})
export class GraficoDonnaComponent implements OnInit {

    // Doughnut
    @Input() leyenda: string;
    @Input() labels: Label[];
    @Input() data: MultiDataSet;

    public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
