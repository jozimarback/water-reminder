import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'water reminder';
  quantidadeAgua:number = 0;
  constructor(private formBuilder:FormBuilder) {
    
  }
  formulario:FormGroup;
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      pesoGramas:this.formBuilder.control('',[Validators.required,Validators.minLength(2)])
    });
    
  }

  onSubmit(): void {
    this.quantidadeAgua = this.formulario.value.pesoGramas * 35;
  }
}
