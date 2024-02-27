import { Vehicle } from './../../../models/interfaces';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { VehicleDetailsComponent } from '../../modal/vehicle-details/vehicle-details.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalVehicles: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading = true;
  noResultsFound = false;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.currentPage - 1;
  }

  constructor(private swapiService: SwapiService, public dialog: MatDialog) {}

  resultVehicles: Vehicle[] = [];
  columns: string[] = [
    'name',
    'model',
    'manufacturer',
    'max_atmosphering_speed',
  ];
  searchTerm: string = '';

  getVehicle(searchTerm?: string, page: number = 1) {
    this.isLoading = true;
    this.swapiService.getVehicle(searchTerm, page).subscribe(
      (res) => {
        this.resultVehicles = res.results;
        this.totalVehicles = res.count;
        this.isLoading = false;
        this.noResultsFound = res.count === 0;
      },
      (error) => {
        console.error('Erro ao buscar naves: ', error);
        this.isLoading = false;
        this.noResultsFound = true;
      }
    );
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getVehicle(this.searchTerm, this.currentPage);
  }

  searchVehicles() {
    this.getVehicle(this.searchTerm);
  }

  ngOnInit() {
    this.getVehicle();
  }

  openDialog(vehicle: Vehicle): void {
    this.dialog.open(VehicleDetailsComponent, {
      width: '500px',
      data: { vehicle: vehicle },
    });
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
