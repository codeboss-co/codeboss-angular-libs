import { Component, Optional } from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground-app';

  constructor(@Optional() logger: LoggerService) {
    if(logger) {
      logger.log('[AppComponent]')
    }
  }

}
