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
