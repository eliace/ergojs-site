
$context.section('Эксклюзивная выборка (по умолчанию)', 'Событие `select` перехватывается по умолчанию и устанавливает эксклюзивное состояние `selected` выбранного элемента');
//= require selection-basic
$context.section('Эксклюзивная выборка (пользовательская)', 'Устанавливаем выборку с помощью объекта selection');
//= require selection-basic-ex
$context.section('Множественная выборка', 'Имена выбранных элементов должны быть уникальны');
//= require selection-multi
$context.section('Событие');
//= require selection-changed
$context.section('Поиск элементов', 'По умолчанию для поиска выбранного элемента по ключу используется `this.item(key)`, но его можно задать явно через опцию `selection.lookup` ');
//= require selection-lookup
