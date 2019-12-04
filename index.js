var MainMenu = (function () {
    var MainMenu = function (config) {
        config = config || {};
        this.toggleBtn = $(config.toggleBtn);
        this.menu = $(config.menu);
        this.close = $(config.close);

        this.init();
        config = null;
    };
    // public interface
    MainMenu.prototype = {
        constructor: MainMenu,
        init: function () {
            this.eventManager();
        },
        eventManager: function () {
            this.toggleBtn.on('click.openMenu', onButtonClickHandler.bind(this));
            this.close.on('click.closeMenu', onCloseClickHandler.bind(this));
        }
    };
    // private interface
    function onButtonClickHandler(menu, evt) {
        if (!this.menu.hasClass('open')) {
            this.menu.addClass('open');
        };

    }

    function onCloseClickHandler(evt) {
        this.menu.removeClass('open')
    }

    function onDocumentClickHandler(evt) {
        var $target = $(evt.target);

        if (!$target.closest(this.menuForm).length && !$target.closest(this.menuContent).length && this.menu.hasClass('open')) {
            this.menu.removeClass('open')
        }
    }

    return MainMenu;
})();


$(document).ready(function () {
    var mainMenu = new MainMenu({
        menu: '.main-menu',
        toggleBtn: '.main-menu-btn',
        close: '.main-menu-close'
    });
});

$(document).ready(function () {
    $("#contenido").load('inicio.html');
});

$(document).ready(function () {
    $("#btninicio").click(function (event) {
        $("#contenido").load('inicio.html');
    });
});


$(document).ready(function () {
    $("#btnjustificacion").click(function (event) {
        $("#contenido").load('justificacion.html');
    });
});


$(document).ready(function () {
    $("#btnmetodologia").click(function (event) {
        $("#contenido").load('metodologia.html');
    });
});


$(document).ready(function () {
    $("#btnmodulos").click(function (event) {
        $("#contenido").load('modulos.html');
    });
});


$(document).ready(function () {
    $("#btnobjetivo").click(function (event) {
        $("#contenido").load('objetivo.html');
    });
});


$(document).ready(function () {
    $("#btntecnologia").click(function (event) {
        $("#contenido").load('tecnologia.html');
    });
});


$(document).ready(function () {
    $("#btnvistas").click(function (event) {
        $("#contenido").load('vistas.html');
    });
});

$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
