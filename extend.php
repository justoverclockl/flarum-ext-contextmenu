<?php

/*
 * This file is part of justoverclock/flarum-ext-contextmenu.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\ContextMenu;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__.'/resources/locale'),
    (new Extend\Settings)
        ->serializeToForum('Link1', 'justoverclock-contextmenu.link1'),
    (new Extend\Settings)
        ->serializeToForum('Link2', 'justoverclock-contextmenu.link2'),
    (new Extend\Settings)
        ->serializeToForum('Link2url', 'justoverclock-contextmenu.link2url'),
    (new Extend\Settings)
        ->serializeToForum('Link1url', 'justoverclock-contextmenu.link1url'),
];
