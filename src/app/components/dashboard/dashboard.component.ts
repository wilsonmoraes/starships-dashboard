import {Component} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StarshipService} from '../../services/starship-service';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NgFor,
    NgIf,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,],
  providers: [StarshipService],
})
export class DashboardComponent {
  filteredManufacturers: any[] = [];
  manufacturers: any[] = [];
  starships: any[] = [];
  selectedManufacturer: string = '';

  displayedColumns: string[] = ['name', 'model', 'class', 'length', 'manufacturer'];

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
