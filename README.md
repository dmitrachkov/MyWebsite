## My web-portfolio
_I made it with Angular 7_

Simple design with 3 main colors (_black, white and cornflower blue_) intended to present my artworks and my contact information.
For now it contain images I made with Cinema 4D and Maya + Arnold render. In a future I'd like to include more works, especially animation and expamples of my code.

I added [ngx-scrollbar](https://murhafsousli.github.io/ngx-scrollbar/) in my project

To build that project you need put `app` and `assets` folders into `YourProject/src` folder and aditionally type `npm i -S ngx-scrollbar @angular/cdk` command to include [ngx-scrollbar](https://murhafsousli.github.io/ngx-scrollbar/) module.

### Knowed issue
I have 2 properties in css to clip text's background (regular and with prefix)
```
background-clip: text;
-webkit-background-clip: text;
```
Angular adds additonal non-standart `background: padding-box text ...`  and removes `background-clip: text`. Consequently text effects can be rendered not as expected. To fix it you need change `background` property to keep only color information and keep `-webkit-background-clip: text` in compiled `main.....js` file
