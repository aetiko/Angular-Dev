import { Component, OnInit } from '@angular/core';
import { AneNuclearFamily } from './ane-nuclear-family';

@Component({
  selector: 'app-ane-nuclear-family',
  templateUrl: './ane-nuclear-family-bootstrap.component.html',
  styleUrls: ['./ane-nuclear-family.component.css']
})
export class AneNuclearFamilyComponent implements OnInit {
  // Creating array of my family

  aneNuclearFamilyList: AneNuclearFamily[] = [
    new AneNuclearFamily("Adekunle", "Razaq", "Etiko", "Father", 69, "Islam", 345000),
    new AneNuclearFamily("Olufunke", "Falilat", "Etiko", "Mother", 62, "Islam", 600000),
    new AneNuclearFamily("Bukola", "Mutiat", "Odesanya", "Sister", 49, "Christian", 800000),
    new AneNuclearFamily("Mobolaji", "Monsour", "Etiko", "Brother", 47, "Islam", 300000),
    new AneNuclearFamily("Bolatito", "Muyinat", "Segun-Maru", "Sister", 35, "Islam", 300000),
    new AneNuclearFamily("Oluwatoyin", "Abdul-Rafiu", "Etiko", "Brother", 33, "Islam", 24535000),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
