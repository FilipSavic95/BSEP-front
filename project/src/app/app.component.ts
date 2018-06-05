import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // ## delete me!
  /** test property for keepHtml-pipe to do it's work */
  hatemel = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
    '<html xmlns="http://www.w3.org/1999/xhtml">' +
    '<head><title>Title of document</title></head>' +
    '<body><h2>some h2 content sanitized with keepHtml-pipe</h2></body></html>';

}
