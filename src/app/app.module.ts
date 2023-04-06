import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [
    RootComponent,
    JurosSimplesComponent,
    JurosCompostosComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
