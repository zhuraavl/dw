

## Свойство contain для элементов, которые находятся за пределами страницы
none ничего не делает
layout включает изоляцию компоновки
style включает изоляцию стиля
paint включает изоляцию отрисовки
size включает изоляцию размеров
content всё, кроме изоляции размеров
strict то же, что layout, style, paint и size вместе

При установке contain: paint; браузер может пропустить отрисовку того элемента, который находится «вне экрана», и поэтому отрисовка остального содержимого происходит быстрее.

## Loader 
Здесь загрузчики для кнопок и всего такого
http://tawian.io/text-spinners/


## Переносы слов использовать на основе hyphens


## Вшит новый плагин для паралакса
http://www.jqueryscript.net/animation/Kinetic-Scrolling-Parallax-Plugin-jQuery-inertiaScroll.html 
<!--
<script src="//code.jquery.com/jquery.min.js"></script>
<script src="jquery-inertiaScroll.js"></script> 

<div id="box1" class="box" data-speed="1" data-margin="100"></div>
<div id="box2" class="box" data-speed="7"></div>
<div id="box3" class="box" data-speed="2"></div>
<div id="box4" class="box" data-speed="5"></div>
<div id="box5" class="box" data-speed="3" data-margin="200"></div>
<div id="box6" class="box" data-speed="1"></div>
<div id="box7" class="box" data-speed="2"></div>
<div id="box8" class="box" data-speed="8"></div>
<div id="box9" class="box" data-speed="1"></div>

$(".box").inertiaScroll({
  parent: "",
  childDelta1: 0.02,
  childDelta2: 0.1,
  parentDelta: 0.08
});
-->

## Размеры экрана у майкрософта / брейкпоинты
small	320px - 479px
medium	480px - 639px
large	640px - 1023px
extra large	1024px - 1365px
exta extra large	1366px - 1919px
extra extra extra large	1920px and up
