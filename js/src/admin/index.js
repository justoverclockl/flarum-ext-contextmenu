import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-contextmenu', () => {
  app.extensionData.for('justoverclock-contextmenu').registerSetting({
    setting: 'justoverclock-contextmenu.link1',
    name: 'Link1',
    type: 'text',
    label: app.translator.trans('flarum-ext-contextmenu.admin.link1title'),
    help: app.translator.trans('flarum-ext-contextmenu.admin.link1desc'),
  });
  app.extensionData.for('justoverclock-contextmenu').registerSetting({
    setting: 'justoverclock-contextmenu.link1url',
    name: 'Link1url',
    type: 'url',
    label: app.translator.trans('flarum-ext-contextmenu.admin.link1urltitle'),
    help: app.translator.trans('flarum-ext-contextmenu.admin.link1urldesc'),
  });
  app.extensionData.for('justoverclock-contextmenu').registerSetting({
    setting: 'justoverclock-contextmenu.link2',
    name: 'Link2',
    type: 'text',
    label: app.translator.trans('flarum-ext-contextmenu.admin.link2title'),
    help: app.translator.trans('flarum-ext-contextmenu.admin.link2desc'),
  });
  app.extensionData.for('justoverclock-contextmenu').registerSetting({
    setting: 'justoverclock-contextmenu.link2url',
    name: 'Link2url',
    type: 'url',
    label: app.translator.trans('flarum-ext-contextmenu.admin.link2urltitle'),
    help: app.translator.trans('flarum-ext-contextmenu.admin.link2urldesc'),
  });
});
