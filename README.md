## My web-portfolio
_I made it with Angular 7_

Simple design with 3 main colors (_black, white and cornflower blue_) intended to present my artworks and my contact information.
For now it contain images I made with Cinema 4D and Maya + Arnold render. In a future I'd like to include more works, especially animation and expamples of my code.

I added [ngx-scrollbar](https://murhafsousli.github.io/ngx-scrollbar/) in my project

To build that project you need put `app` and `assets` folders into `YourProject/src` folder and aditionally and make `npm i -S ngx-scrollbar @angular/cdk` command to include [ngx-scrollbar](https://murhafsousli.github.io/ngx-scrollbar/) module.

### Knowed issue

Angular adds additonal non-standart value to `background-clip: text` in css. Consequently text effects can be rendered not as expected. To fix it you need change this property in compiled `main.....js` file
