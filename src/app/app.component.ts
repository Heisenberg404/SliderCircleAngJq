import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sliderValue = 0;
  model = 0;

  public mostrarTitulo() {
    console.log('click');
   // Usamos jQuery con normalidad
    $('.title').slideToggle();
  }

  ngOnInit() {
    $('#demo').roundSlider({
      radius: 80,
      circleShape: 'half-top',
      sliderType: 'min-range',
      showTooltip: false,
      value: 0,
      change: function (args) {
        console.log(args.value);
        this.sliderValue = args.value;
        console.log('slide' + this.sliderValue);
        $('#caja').val(args.value);
      }
    });
  }

  getValue() {
    this.sliderValue =  $('#demo').roundSlider('getValue');
  }

  updateGraphic() {
    console.log('console :: ' + this.model);
    $('#demo').roundSlider('setValue', this.model);
  }

}
