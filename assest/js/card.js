
    var itemsMaindiv = ('.cardCarousel');
    var itemsdiv = ('.cardCarousel-inner');
    var itemsWidth = "";

    $('.leftsideLst, .rightsideLst').click(function () {
        var condition = $(this).hasClass("leftsideLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselsize();




    $(window).resize(function () {
        ResCarouselsize();
    });

    //this function define the size of the items
    function ResCarouselsize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMaindiv).width();
        var bodyWidth = $('body').width();
        $(itemsdiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "cardCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemsWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemsWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemsWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemsWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemsWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemsWidth);
            });

            $(".leftsideLst").addClass("over");
            $(".rightsideLst").removeClass("over");

        });
    }


    //this function used to move the items
    function Rescarousel(e, el, s) {
        var leftBtn = ('.leftsideLst');
        var rightBtn = ('.rightsideLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsdiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemsWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemsWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsdiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemsWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemsWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsdiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        Rescarousel(ell, Parent, slide);
    }
