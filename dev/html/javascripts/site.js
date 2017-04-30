function gmtl(lhs, rhs, subject) {
    document.write("<a property=\"schema:email\" class=\"email\" href=\"mailto");
    document.write(":" + lhs + "@");
    document.write(rhs + "?subject=" + subject + " \">" + lhs + "@" + rhs + "<\/a>");
};