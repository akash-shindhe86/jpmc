
use(function () {

    var pageStack = [];

    var level = currentPage.getDepth();

    // To store the traversed page (object) from the root
     for(var i=1;i<level;i++)
    {  // Here I used i=1 for mycase(i=0 will be /content)

        var titl = currentPage.getAbsoluteParent(i).getTitle();

        var hidInNav = currentPage.getAbsoluteParent(i).isHideInNav();



        pageStack.push({title : titl,hidInNav : hidInNav});
      	//Stack to maintain the pages
    }
    return {
        pageStack:pageStack

    };
});
