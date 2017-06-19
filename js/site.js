function gmtl(lhs, rhs, subject) {
 document.write("<a property=\"schema:email\" class=\"email\" href=\"mailto");
 document.write(":" + lhs + "@");
 document.write(rhs + "?subject=" + subject + " \">" + lhs + "@" + rhs + "<\/a>");
};

var skillsdata = (function() {
 var skills = null;
 $.ajax({
  'async': false,
  'global': false,
  'url': "js/skills.json",
  'dataType': "json",
  'success': function(data) {
   skills = data;
  }
 });
 return skills;
})();

var skills = JSONTree.create(skillsdata);

function expColToggle(x) {
 x.classList.toggle("expst");
 x.classList.toggle("colst");
}

// Expand all jobs before print
/*(function() {
 var beforePrint = function() {
  $('.job-panel').each(function(i, obj) {
   if ($(this).hasClass('show') == false) {
    $(this).addClass('show');
    expColToggle($(this).prev().get(0));
   }
  });
 };
 var afterPrint = function() {};

 if (window.matchMedia) {
  var mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(function(mql) {
   if (mql.matches) {
    beforePrint();
   } else {
    afterPrint();
   }
  });
 }

 window.onbeforeprint = beforePrint;
 window.onafterprint = afterPrint;
}());
*/