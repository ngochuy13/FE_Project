window.accounting=window.accounting||{},window.UOB=window.UOB||{},window.UOB.formMethod=window.UOB.formMethod||{},window.UOB.formMethod.numeralsOnly=function(e,a){var t=$(a).val();-1!==t.indexOf(".")&&(190===e.keyCode||110===e.keyCode)&&e.preventDefault(),-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||65===e.keyCode&&e.ctrlKey===!0||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105))&&e.preventDefault()},window.UOB.formMethod.formatCurrency=function(e,a){var t=window.accounting.formatMoney($(a).val(),"",2);$(a).val(t)},jQuery(function(e){e.validator.addMethod("username",function(e){return!/[!@#$%\^&*(){}[\]<>?/|\-]/.test(e)},"Please enter a valid name."),e.validator.addMethod("NRIC",function(e){return/^[STFGstfg]\d{7}[A-Za-z]$/.test(e)},"Please enter a valid NRIC code."),e.validator.addMethod("money",function(e){return window.accounting.unformat(e)>0},"This field is required."),e.validator.addMethod("yearOldRule",function(e){var a=new Date;a.setFullYear(a.getFullYear()-21);var t=e.split("/"),r=new Date(t[2],t[1]-1,t[0]),i=Date.parse(r);return a-i>0},"Need to be greater than 21 years old!!"),e.validator.addMethod("mobile",function(e){return/^[89]\d{7}$/.test(e)},"Please enter correct mobile number."),e.validator.addMethod("phone",function(a){return""===e.trim(a)||/^[6]\d{7}$/.test(a)},"Please enter correct phone number."),e(".checkbox-item input[type='checkbox']").unbind("click").bind("click",function(){e(this).is(":checked")?e(this).closest(".checkbox-item").addClass("checked"):e(this).closest(".checkbox-item").removeClass("checked")}),e("#tab-required-documents a").click(function(a){a.preventDefault(),e(this).tab("show")}),window.CardRegistration=function(){var a,t,r,i={},n=e(".form-status"),s={yearofLivingInAboveAddr:{require_from_group:[1,".duration-date-group"]},monthofLivingInAboveAddr:{require_from_group:[1,".duration-date-group"]},yearofEmployment:{require_from_group:[1,".duration-date-group-2"]},monthofEmployment:{require_from_group:[1,".duration-date-group-2"]},krisflyerNumber:{require_from_group:[1,".kris-flyer"]},asiaMemberNumber:{require_from_group:[1,".kris-flyer"]},CPFStatementDate:{required:function(){return 1===e("#check-confirm-cpf-submission:checked").length}}},d={one:{title:"One Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=ONE_Card","card-face":"images/card-register/card-faces/one-card-face.png"},delight:{title:"Delight Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Delight_CreditCard","card-face":"images/card-register/card-faces/delight-card-face.png"},lady:{title:"Lady Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Ladys_Platinum_Card","card-face":"images/card-register/card-faces/lady-card-face.png"},"preferred-platinum-visa":{title:"Preferred Platinum VISA Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=preferredplatinumcard","card-face":"images/card-register/card-faces/preferred-platinum-visa-face.png"},"prvi-amex":{title:"PRVI AMEX Card","sms-link":"http://www.uob.com.sg/personal/cards/credit/prvimilesamex-apply.html","card-face":"images/card-register/card-faces/prvi-amex-face.png"},"prvi-visa":{title:"PRVI VISA Card","sms-link":" http://www.uob.com.sg/personal/cards/credit/prvimilesvisa-apply.html","card-face":"images/card-register/card-faces/prvi-visa-face.png"},"prvi-mastercard":{title:"PRVI MasterCard","sms-link":"http://www.uob.com.sg/personal/cards/credit/prvimilesmaster-apply.html","card-face":"images/card-register/card-faces/prvi-mastercard-face.png"},jcb:{title:"JCB Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=JCB_Platinum","card-face":"images/card-register/card-faces/jcb-face.png"},metro:{title:"Metro Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Metro-UOB_Platinum","card-face":"images/card-register/card-faces/metro-face.png"},singtel:{title:"Singtel Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=SingTel-UOB_Platinum","card-face":"images/card-register/card-faces/singtel-face.png"},unionpay:{title:"Union Pay Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=UnionPay_Platinum","card-face":"images/card-register/card-faces/union-pay-face.png"},"visa-signature":{title:"Visa Signature Card","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Visa_Signature","card-face":"images/card-register/card-faces/visa-signature-face.png"},"cash-plus":{title:"Cash Plus","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Visa_Signature","card-face":"images/card-register/card-faces/cash-plus-face.png"},"preferred-platinum-card-account":{title:"Preferred Platinum Card Account","sms-link":"https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=Preferred_Platinum_Account","card-face":"images/card-register/card-faces/prvi-amex-face.png","card-face-second":"images/card-register/card-faces/prvi-mastercard-face.png","header-image":"images/card-register/card-faces/prvi-card-account.png"}},c=wNumb({decimals:0,thousand:",",prefix:"S$"}),o=function(){var a;e("input[name='cardType']").length?a=e("input[name='cardType']").val():window.location.hash?window.location.hash.length&&(a=window.location.hash.substr(1)):a=document.location.hash.substr(1),""!==a&&d[a]&&(e(".apply-vs-sms .media-heading a").attr("href",d[a]["sms-link"]),e(".card-icon img").attr("src",d[a]["card-face"]),e('.card-wrapper .card-face[data-card="first"]').attr("src",d[a]["card-face"]),e(".header-content .card-title").html(d[a].title));var t=e('.card-wrapper .card-face[data-card="second"]');switch(a){case"lady":e(".customer-title input[data-type='Male']").closest(".radio-input").hide("hide"),e("input[name='gender'][value='Male']").closest(".radio-input").addClass("hide");break;case"singtel":e(".singtel-acc").removeClass("hide");break;case"preferred-platinum-card-account":t.attr("src",d[a]["card-face-second"]).removeClass("hide"),t.parents(".card-wrapper").removeClass("hide"),e(".card-icon img").attr("src",d[a]["header-image"])}},l=function(a){e("html, body").animate({scrollTop:a},200)},u=function(){var a=e("body").find(".form-group-container.error:not(:hidden)");if(a.length)var t=e(a).eq(0).offset().top;else var r=e("body").find(".checkbox-item .error:not(:hidden)"),t=e(r).eq(0).closest(".checkbox-item").offset().top;e(window).width()>=1024&&(t-=e(".header").height()),l(t)},f=function(a,t){var r=e(t).closest(".form-group-container");r.length?r.append(a):e(t).parent().append(a)},m=function(a,t){e(a).closest(".form-group-container").addClass("error")},p=function(a,t){e(a).closest(".form-group-container").removeClass("error")},h=function(){var t=a.find(".customer-type-switch input:checked").val();e(".lead-form-wrapper").children(":not(p)").not(".hide").each(function(){var r=e(this).find(".full-name input").val(),i=e(this).find(".email input").val(),n=e(this).find(".mobile input").val(),s=e(this).find(".customer-title input:checked").val();a.find("[name='fullnameOnCard']").val(r),a.find("[name='fullname']").val(r),a.find("[name='email']").val(i),a.find("[name='mobile']").val(n),a.find("[name='title']").val(s),a.find("[name='existingCustomer']").val(t),a.find(".card-register-step-2 .card-name").html(r);var d=e(this).find(".customer-title input:checked").val();if("Mr"===d||"Dr"===d)var c="Male";else var c="Female";a.find("[name='gender']").removeAttr("checked").parent().removeClass("selected").end().filter("[value='"+c+"']").prop("checked","checked").parent().addClass("selected").siblings().removeClass("selected")})},g=function(){var t=a.get(0);e(".card-register-step-3 tr").removeClass("hide"),e(".card-register-step-3 .label-data").each(function(){var r=e(this).attr("data-model");if(a.get(0)[r]){var i=a.find("[name="+r+"]");if(i.filter(":visible").length){var n;"input"===i.get(0).tagName.toLowerCase()?n="radio"===i.attr("type")?i.filter(":checked").val():i.val():"select"===i.get(0).tagName.toLowerCase()&&(n=i.val()),""===n?e(this).parent().addClass("hide"):e(this).html(n)}else i.filter("[type='hidden']").length?e(this).html(i.val()):e(this).html("").parent().addClass("hide")}else{var n="";switch(r){case"NRIC":var s=e("input[name='nationality']:checked").val();n="Singaporean"==s?a.get(0).SingaporeNRIC.value:"Singapore PR"==s?a.get(0)["SingaporePR-NRIC"].value:a.get(0).passport.value;break;case"timeofLivingInAboveAddr":n=t.yearofLivingInAboveAddr.value+" year(s) "+t.monthofLivingInAboveAddr.value+" month(s)";break;case"timeofEmployment":n=t.yearofEmployment.value+" year(s) "+t.monthofEmployment.value+" month(s)";break;case"country":var s=e("input[name='nationality']:checked").val();"Singapore PR"==s?n=a.get(0).countrySingPR.value:"Foreigners"==s&&(n=a.get(0).countryForeigner.value),""===n&&e(this).parent().addClass("hide")}e(this).html(n)}}),e(".card-register-step-3 .confirm-table").each(function(){0===e(this).find("tr:not('.hide')").length?e(this).addClass("hide").prev("h3").addClass("hide"):e(this).removeClass("hide").prev("h3").removeClass("hide")})},v=function(a){e(".header").toggleClass("in-step-1",a).sticky("update")},C=function(a){e(a).find(".input-control-group").each(function(){var a=0,t=e(this).find("label.radio-input").attr("style");t&&t.indexOf("width")>=0||e(this).find("label.radio-input:not(:hidden)").each(function(){a<e(this).width()+2&&(a=e(this).width()+2)}).width(a)});var t=e(a).find(".radio-input");t.first().data("styleCache")?e.fn.matchHeight._update():e(a).find(".radio-input").matchHeight()},y=function(){a.on("submit",function(e){return e.originalEvent?!1:void 0}),a.find(".step-1-submission .btn-submit").on("click",function(e){e.preventDefault(),a.valid()?(v(!1),a.find(".card-register-step-1").addClass("hide"),a.find(".card-register-step-2").removeClass("hide").find(".frm-name-card input").focus(),n.find("[data-related-step='card-register-step-2']").addClass("active").prevAll().addClass("active").end().nextAll().removeClass("active"),l(0),t.css("width","28%"),h(),C(".card-register-step-2")):u()}),a.find(".step-2-submission .btn-submit").on("click",function(e){e.preventDefault(),a.valid()?(g(),a.find(".card-register-step-2").addClass("hide"),a.find(".card-register-step-3").removeClass("hide"),n.find("[data-related-step='card-register-step-3']").addClass("active").prevAll().addClass("active").end().nextAll().removeClass("active"),l(0),t.css("width","89%")):u()}),a.find(".submit-footer .btn-regis-done").on("click",function(e){e.preventDefault(),a.valid()?(a.find(".form-status").find("li").addClass("active"),a.submit()):u()}),a.find(".btn-edit-register").on("click",function(){var a=e(this).attr("data-target");v("card-register-step-1"==a);var r=e(this).closest(".card-register-step").addClass("hide").siblings("#"+a).removeClass("hide");n.find("[data-related-step='"+e(this).attr("data-target")+"']").addClass("active").prevAll().addClass("active").end().nextAll().removeClass("active"),l(0),t.css("width",r.attr("data-percent-complete")+"%")})};return i.formStatusInit=function(){n.find("a").on("click",function(a){a.preventDefault();var t=e(this).closest("li");if(t.hasClass("active")){if(!e("#"+t.attr("data-related-step")).hasClass("hide"))return;e(".card-register-step").addClass("hide");var r=t.attr("data-related-step");v("card-register-step-1"==r),e("#"+r).removeClass("hide"),t.addClass("active").nextAll().removeClass("active")}})},i.init=function(){return i.formStatusInit(),a=e(".card-register-form"),0===a.length?i:(t=e(".card-register-page .process-bar .status-percent"),o(),e(".read-full-text-disappear").on("click",function(){e(this).hide()}),e(".selectUI").length&&e(".selectUI").selectUI({autoTemplate:!0,onAfterChange:function(a){e(a).valid()}}),e(".form-group-fulldate-group").each(function(){e(this).find(".fake-date-input input").on("change",function(){var a=e(this).parent(),t=a.children("input");a.prev().val(t.get(0).value+"/"+t.get(1).value+"/"+t.get(2).value).trigger("keyup")}).filter(":not(.fake-year)").on("keyup",function(){2==this.value.length&&e(this).next().next().focus().val("")}),e(this).find(".real-date").on("focus",function(){e(this).prev().find("input:first").focus()})}),e(".form-group-container-date").each(function(){e(this).find("input").on("keyup",function(){2==this.value.length&&e(this).next().focus()})}),a.find('input[data-type="numerals"]').on("keydown",function(a){window.UOB.formMethod.numeralsOnly(a,e(this))}),a.find('input[data-format="currency"]').on("blur",function(a){window.UOB.formMethod.formatCurrency(a,e(this))}),a.find('[name="SingaporeNRIC"], [name="SingaporePR-NRIC"]').on("change",function(){e('[name="'+e(this).attr("data-binding-field")+'"]').val(this.value)}),r=a.validate({rules:s,errorElement:"span",errorPlacement:f,highlight:m,unhighlight:p,focusinvalid:!1,ignore:".ignore, :hidden"}),y(),e(".customer-type-switch input[type='radio']").on("change",function(){e(this).parent().addClass("selected").siblings().removeClass("selected");var a=e(this).parent().attr("data-target");e(a).removeClass("hide").siblings().addClass("hide"),C(a)}),e("div[data-related-to]").each(function(){var a=e(this).attr("data-related-to"),t=e(this).attr("data-related-val"),r=e(this);e("input[type='radio'][name='"+a+"']").on("change",function(){r.toggleClass("hide",this.value!==t),this.value===t&&C(r)})}),e("input[name='company']").on("change",function(){a.find("span.company-name").html(this.value)}),e(".form-group label.radio-input").on("click",function(){e(this).addClass("selected").siblings().removeClass("selected")}).find("input").filter(":checked").parent().addClass("selected"),e("#card-limit-slider .range-slider").noUiSlider({start:4e3,range:{min:[2e3,100],max:5e4}}).Link("lower").to('-inline-<div class="range-slider-value has-text"></div>',function(a){var t=Math.round(a);e("#card-limit").val(window.accounting.formatMoney(t,"",2)),e(this).html("<span>Card Limit</span><br><strong>"+c.to(t)+"</strong>"),e("#card-limit-slider").find(".noUi-marker-large").removeClass("active").filter(":lt("+Math.floor(t/1e4)+")").addClass("active")}),e("#card-limit-slider .range-slider").noUiSlider_pips({mode:"values",values:[1e4,2e4,3e4,4e4],format:c,density:1}),e("[name='fullnameOnCard']").on("change",function(){e(".card-name").html(this.value)}),a.find("#check-confirm-cpf-submission").on("change",function(){if(this.checked){var e=a.find(".CPFSubmissionDate"),t=new Date,r=t.getDate(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getFullYear();e.find(".fake-day").val(r),e.find(".fake-month").val(i),e.find(".fake-year").val(n).trigger("change")}}),void C(".card-register-step-1"))},i.init()}(),e("[placeholder]:first").length&&e("[placeholder]").placeholder()}),window.onload=function(){};