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
    new AneNuclearFamily("Adekunle", "Razaq", "Etiko", "Father", 69, "Islam"),
    new AneNuclearFamily("Olufunke", "Falilat", "Etiko", "Mother", 62, "Islam"),
    new AneNuclearFamily("Bukola", "Mutiat", "Odesanya", "Sister", 49, "Christian"),
    new AneNuclearFamily("Mobolaji", "Monsour", "Etiko", "Brother", 47, "Islam"),
    new AneNuclearFamily("Bolatito", "Muyinat", "Segun-Maru", "Sister", 35, "Islam"),
    new AneNuclearFamily("Oluwatoyin", "Abdul-Rafiu", "Etiko", "Brother", 33, "Islam"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
