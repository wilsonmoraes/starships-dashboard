import {Component} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StarshipService} from './services/starship-service';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor, NgIf, FormsModule],
  providers: [StarshipService],
})
export class DashboardComponent {
  manufacturers: any[] = [];
  starships: any[] = [];
  selectedManufacturer: string = '';

  constructor(private starshipService: StarshipService) {
  }

  ngOnInit(): void {
    this.loadManufacturers();
    this.loadStarships();
  }

  loadManufacturers(): void {
    this.starshipService.getManufacturers().subscribe((data) => {
      this.manufacturers = data;
    });
  }

  loadStarships(): void {
    this.starshipService
      .getStarships(this.selectedManufacturer)
      .subscribe((data) => {
        this.starships = data;
      });
  }

  onManufacturerChange(): void {
    this.loadStarships();
  }
}
