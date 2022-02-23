(function ($) {

    cellphones.forEach(function(val, index) {
        
        var phones = `
        <div class="w3-col l3 m6  relPos w3-center ">
            <div class="selectProduct w3-padding" data-brand="${val.Brand}" data-id="${val.Model}" data-title="${val.Model.replace(" ","")}" data-screen="${val.screen}" data-processor="${val.processor}" data-ram="${val.ram}" data-memorystore="${val.processor}" data-battery="${val.battery}" data-camera="${val.camera}" data-os="${val.os}">
                <a class="w3-btn-floating w3-light-grey addButtonCircular addToCompare">+</a>
                <img src="img/${val.photo}" width="110" height="120" class="imgFill productImg">
                <h4>${val.Model}</h4>
            </div>
        </div>
        `;

        $("#rows").append(phones);
    });

    var list = [];

    $(document).on('click', '.addToCompare', function () {
        $(".comparePanle").show();
        $(this).toggleClass("rotateBtn");
        $(this).parents(".selectProduct").toggleClass("selected");
        var productID = $(this).parents('.selectProduct').attr('data-title');

        var inArray = $.inArray(productID, list);
        if (inArray < 0) {
            if (list.length > 2) {
                $("#WarningModal").show();
                $("#warningModalClose").click(function () {
                    $("#WarningModal").hide();
                });
                $(this).toggleClass("rotateBtn");
                $(this).parents(".selectProduct").toggleClass("selected");
                return;
            }

            if (list.length < 3) {
                list.push(productID);

                var displayTitle = $(this).parents('.selectProduct').attr('data-id');

                var image = $(this).siblings(".productImg").attr('src');

                $(".comparePan").append('<div id="' + productID + '" class="relPos titleMargin w3-margin-bottom   w3-col l3 m4 s4"><div class="w3-white titleMargin"><a class="selectedItemCloseBtn w3-closebtn cursor">&times</a><img src="' + image + '" alt="image" style="height:100px;"/><p id="' + productID + '" class="titleMargin1">' + displayTitle + '</p></div></div>');
            }
        } else {
            list.splice($.inArray(productID, list), 1);
            var prod = productID.replace(" ", "");
            $('#' + prod).remove();
            hideComparePanel();

        }
        if (list.length > 1) {

            $(".cmprBtn").addClass("active");
            $(".cmprBtn").removeAttr('disabled');
        } else {
            $(".cmprBtn").removeClass("active");
            $(".cmprBtn").attr('disabled', '');
        }

    });
    /*function to be executed when compare button is clicked*/
    $(document).on('click', '.cmprBtn', function () {
        if ($(".cmprBtn").hasClass("active")) {
            
            var headers = `
                    <div class="w3-col s3 m3 l3 compareItemParent relPos">
                        <ul class="product">
                            <li class=" relPos compHeader">
                                <p class="w3-display-middle"><br>Características</b></p>
                            </li>
                            <li>Modelo</li>
                            <li>Pantalla</li>
                            <li>Procesador</li>
                            <li>RAM</li>
                            <li>Almacenamiento</li>
                            <li>Cámara</li>
                            <li>Batería</li>
                            <li>Sistema operativo</li>
                        </ul>
                    </div>
            `;
            $(".contentPop").append(headers);

            for (var i = 0; i < list.length; i++) {
                /* this is to add the items to popup which are selected for comparision */
                product = $('.selectProduct[data-title="' + list[i] + '"]');
                var image = $('[data-title=' + list[i] + ']').find(".productImg").attr('src');
                var title = $('[data-title=' + list[i] + ']').attr('data-id');
                /*appending to div*/

                var body = `
                <div class="w3-col s3 m3 l3 compareItemParent relPos">
                    <ul class="product">
                        <li class="compHeader">
                            <img src="${image}" class="compareThumb">
                        </li>
                        <li>${$(product).data('id')}</li>
                        <li>${$(product).data('screen')}</li>
                        <li>${$(product).data('processor')}</li>
                        <li>${$(product).data('ram')}</li>
                        <li>${$(product).data('memorystore')}</li>
                        <li>${$(product).data('camera')}</li>
                        <li>${$(product).data('battery')}</li>
                        <li>${$(product).data('os')}</li>
                    </ul>
                </div>`;

                $(product).data('weight')

                $(".contentPop").append(body);
            }
        }
        $(".modPos").show();
    });

    /* function to close the comparision popup */
    $(document).on('click', '.closeBtn', function () {
        $(".contentPop").empty();
        $(".comparePan").empty();
        $(".comparePanle").hide();
        $(".modPos").hide();
        $(".selectProduct").removeClass("selected");
        $(".cmprBtn").attr('disabled', '');
        list.length = 0;
        $(".rotateBtn").toggleClass("rotateBtn");
    });

    /*function to remove item from preview panel*/
    $(document).on('click', '.selectedItemCloseBtn', function () {

        var test = $(this).siblings("p").attr('id');
        $('[data-title=' + test + ']').find(".addToCompare").click();
        hideComparePanel();
    });

    function hideComparePanel() {
        if (!list.length) {
            $(".comparePan").empty();
            $(".comparePanle").hide();
        }
    }
})(jQuery);
