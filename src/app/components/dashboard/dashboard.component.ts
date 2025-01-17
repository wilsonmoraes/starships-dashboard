import {Component} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StarshipService} from '../../services/starship-service';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {AuthService} from '../../services/auth.service';


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
    MatCardModule,
    MatPaginatorModule,],
  providers: [StarshipService],
})
export class DashboardComponent {
  manufacturers: any[] = [];
  starships: any[] = [];
  selectedManufacturer: string = '';
  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  starshipDetails: any | null = null; // Para exibir os detalhes do starship

  displayedColumns: string[] = ['name', 'model', 'class', 'length', 'manufacturer'];

  constructor(private starshipService: StarshipService, private authService: AuthService) {}

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
      .getStarships(this.selectedManufacturer, this.currentPage, this.itemsPerPage)
      .subscribe((data) => {
        this.starships = data.starships;
        this.totalItems = data.total_items;
      });
  }

  onManufacturerChange(): void {
    this.currentPage = 1;
    this.loadStarships();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadStarships();
  }

  viewDetails(starshipId: string): void {
    this.starshipService.getStarshipDetails(starshipId).subscribe((details) => {
      this.starshipDetails = details;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
