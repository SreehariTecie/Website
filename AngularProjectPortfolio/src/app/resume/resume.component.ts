import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Sree-Resume');
  }

  downloadResume() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Sreehari_Resume.pdf');
    link.setAttribute('download', 'Sreehari_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
