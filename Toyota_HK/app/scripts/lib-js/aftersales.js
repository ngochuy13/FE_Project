$(window).load(function() {
  //handle table after sales
  (function() {
    if($('.aftersales-content').length > 0) {
      $('.aftersales-content table').each(function() {
        var countTD = $(this).find('tr').first().find('td').length;
        if(countTD == 1) {
          $(this).addClass('tbl-onecol');
        }
        if(countTD == 2) {
          $(this).addClass('tbl-twocol');
        }
        if(countTD == 3) {
          $(this).addClass('tbl-threecol');
        }
      });
    }
  })();
})