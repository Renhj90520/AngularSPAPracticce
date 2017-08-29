import { Component } from '@angular/core';
import { FrameworkConfigSettings } from '../fw/services/framework-config.service';
import { FrameworkConfigService } from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private frameworkCongfigService: FrameworkConfigService,
    private menuService: MenuService) {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.facebook.com' },
      ],
      showLanguageSelector: true,
      showStatusBar: true,
      showStatusBarBreakPoint: 800,
      showUserControls: true
    };
    frameworkCongfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}
