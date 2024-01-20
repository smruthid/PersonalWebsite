import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  myExperience: any[] = [
    {
      company: "Meta",
      startDate: "September 2022",
      endDate: "Present",
      tasks: [ 
        "Firmware implementation of VR Prototyping Platform", 
        "Using Visual Basic C# with VSCode to implement GUI so users can use internal firmware with Prototyping Platform"],
      skills: [
        "C", "C++", "Arduino", "Bash", "FreeRTOS", "STM Microprocessors", "Logic Analyzers"
      ]
    },
    {
      company: "Microchip",
      startDate: "April 2021",
      endDate: "September 2022",
      tasks: [ 
        "Worked on Libero programming tools to generate bitstream for PolarFire FPGAs using C++", 
        "Updated firmware to update FlashPro6 programmers to latest design using the USB protocol"
      ],
      skills: [
        "C++", "Python", "FPGAs"
      ]
    }
  ]
}
