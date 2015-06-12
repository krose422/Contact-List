this["template"] = this["template"] || {};
this["template"]["contactInfo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"sc\" id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"sc-fullname\" id=\"sc-fullname\">\n            <p>"
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n\n          <div class=\"sc-top\">\n\n            <div class=\"sc-avatar\" id=\"sc-avatar\">\n              <img src=\"images/User.png\">\n            </div>\n\n            <div class=\"sc-topright\">\n              <div class=\"phone\" id=\"sc-phone\">\n                <p><strong>Phone Number: </strong>"
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</p>\n              </div>\n\n              <div class=\"email\" id=\"sc-email\">\n                <p><strong>Email address: </strong><a href=\"#\">"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></p>\n              </div>\n\n              <div class=\"sc-website\">\n                <p><strong>Website: </strong><a href=\"#\">"
    + alias3(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "</a></p>\n              </div>\n            </div> <!-- end div topright -->\n\n          </div> <!-- end div sc-top -->\n\n          <div class=\"sc-bottom\">\n\n            <div class=\"sc-bottomleft\">\n              <div class=\"sc-address\" id=\"sc-address\">\n                <p>"
    + alias3(((helper = (helper = helpers.addressOne || (depth0 != null ? depth0.addressOne : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"addressOne","hash":{},"data":data}) : helper)))
    + "</p>\n                <p>"
    + alias3(((helper = (helper = helpers.addressTwo || (depth0 != null ? depth0.addressTwo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"addressTwo","hash":{},"data":data}) : helper)))
    + "</p>\n              </div>\n\n\n            </div> <!-- end sc-bottomleft div -->\n\n            <div class=\"googlemap\">\n\n            </div>\n\n          </div> <!-- end sc-bottom div -->\n\n          <div id=\"delete\" class=\"delete\">\n            <span>Delete Contact</span>\n          </div>\n        </div>\n";
},"useData":true});
this["template"] = this["template"] || {};
this["template"]["nameList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"indName\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n  "
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\n</li>\n";
},"useData":true});