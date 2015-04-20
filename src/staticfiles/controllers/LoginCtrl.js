'use strict';
angular.module('modal')
.service('modalService', ['$modal',
    function ($modal) {
	var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '../views/modal.html'
        };

        var modalOptions = {
            closeButtonText: undefined,
            actionButtonText: undefined,
            confirmText: undefined,
            headerText: undefined,
            warningText: undefined,
            bodyText: 'Ha ocurrido un error',
            rechazo: undefined,
            htmlBody: false,
            bodyTemplate: undefined
        };

        this.showModal = function (customModalDefaults, customModalOptions) {
            if (!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions);
        };
}]);