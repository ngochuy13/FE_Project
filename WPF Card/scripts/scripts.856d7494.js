"use strict";
angular.module("worldPolicyForumApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "ui.bootstrap", "toggle-switch"]).config(["$routeProvider", function(a) {
        a.when("/", {templateUrl: "views/main.html",controller: "MainCtrl",showSearchBar: !1,showHeader: !0,showFooter: !0}).when("/about", {templateUrl: "views/about.html",controller: "AboutCtrl",showSearchBar: !0,showHeader: !0,showFooter: !0}).when("/topic/:topicId", {templateUrl: "views/topic.html",controller: "TopicCtrl",showSearchBar: !0,showHeader: !0,showFooter: !0}).when("/policies/:policyId", {templateUrl: "views/policy.html",controller: "PolicyCtrl",showSearchBar: !0,showHeader: !0,showFooter: !0}).when("/news/:newsId", {templateUrl: "views/news.html",controller: "NewsCtrl",showSearchBar: !0,showHeader: !0,showFooter: !0}).when("/country/:countryId", {templateUrl: "views/country.html",controller: "CountryCtrl",showSearchBar: !0,showHeader: !0,showFooter: !0}).when("/about", {redirectTo: "/about/mission",showHeader: !0,showFooter: !0}).when("/about/mission", {templateUrl: "views/about/mission.html",controller: "AboutMissionCtrl",showSearchBar: !0,showHeader: !0,showFooter: !1}).when("/about/history", {templateUrl: "views/about/history.html",controller: "AboutHistoryCtrl",showSearchBar: !0,showHeader: !0,showFooter: !1}).when("/about/partners", {templateUrl: "views/about/partners.html",controller: "AboutPartnersCtrl",showSearchBar: !0,showHeader: !0,showFooter: !1}).when("/about/contact", {templateUrl: "views/about/contact.html",controller: "AboutContactCtrl",showSearchBar: !0,showHeader: !0,showFooter: !1}).otherwise({redirectTo: "/"})
    }]), angular.module("worldPolicyForumApp").controller("MainCtrl", ["$scope", "$location", "api", function(a, b, c) {
        function d() {
            e()
        }
        function e() {
            c.getHomepage().then(function(b) {
                a.homepage = b.data.data
            }), c.getTopics().then(function(b) {
                a.topics = b.data.list
            }), c.getNews().then(function(b) {
                a.news = b.data.list
            })
        }
        a.$location = b, a.homepage = null, a.topics = null, a.news = null, d()
    }]), angular.module("worldPolicyForumApp").controller("AboutCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").controller("TopicCtrl", ["$scope", "$route", "api", function(a, b, c) {
        function d() {
            e(), a.$watch("selected.topic", f)
        }
        function e() {
            var d = b.current.params.topicId;
            c.getTopicDetails(d).then(function(b) {
                a.topicDetails = b.data.data, a.selected.topic = a.topicDetails.name
            })
        }
        a.topicDetails = null, a.policies = null, a.selected = {topic: null,tab: "policies"}, a.isLoading = !1;
        var f = function(b) {
            b && (a.isLoading = !0, c.getPoliciesOfTopic(b).then(function(b) {
                a.policies = b.data.list, a.isLoading = !1
            }))
        }.bind(this);
        d()
    }]), angular.module("worldPolicyForumApp").controller("PolicyCtrl", ["$scope", "$route", "api", function(a, b, c) {
        function d() {
            c.getPolicyDetails(b.current.params.policyId).then(function(b) {
                a.policyDetails = b.data.data
            })
        }
        a.policyDetails = null, d()
    }]), function(a) {
    a.extend(a.fn, {validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function(b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },valid: function() {
            if (a(this[0]).is("form"))
                return this.validate().form();
            var b = !0, c = a(this[0].form).validate();
            return this.each(function() {
                b = b && c.element(this)
            }), b
        },removeAttrs: function(b) {
            var c = {}, d = this;
            return a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },rules: function(b, c) {
            var d = this[0];
            if (b) {
                var e = a.data(d.form, "validator").settings, f = e.rules, g = a.validator.staticRules(d);
                switch (b) {
                    case "add":
                        a.extend(g, a.validator.normalizeRule(c)), delete g.messages, f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                        break;
                    case "remove":
                        if (!c)
                            return delete f[d.name], g;
                        var h = {};
                        return a.each(c.split(/\s/), function(a, b) {
                            h[b] = g[b], delete g[b]
                        }), h
                }
            }
            var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
            if (i.required) {
                var j = i.required;
                delete i.required, i = a.extend({required: j}, i)
            }
            return i
        }}), a.extend(a.expr[":"], {blank: function(b) {
            return !a.trim("" + a(b).val())
        },filled: function(b) {
            return !!a.trim("" + a(b).val())
        },unchecked: function(b) {
            return !a(b).prop("checked")
        }}), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {defaults: {messages: {},groups: {},rules: {},errorClass: "error",validClass: "valid",errorElement: "label",focusInvalid: !0,errorContainer: a([]),errorLabelContainer: a([]),onsubmit: !0,ignore: ":hidden",ignoreTitle: !1,onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },onkeyup: function(a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }},setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },messages: {required: "This field is required.",remote: "Please fix this field.",email: "Please enter a valid email address.",url: "Please enter a valid URL.",date: "Please enter a valid date.",dateISO: "Please enter a valid date (ISO).",number: "Please enter a valid number.",digits: "Please enter only digits.",creditcard: "Please enter a valid credit card number.",equalTo: "Please enter the same value again.",maxlength: a.validator.format("Please enter no more than {0} characters."),minlength: a.validator.format("Please enter at least {0} characters."),rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),range: a.validator.format("Please enter a value between {0} and {1}."),max: a.validator.format("Please enter a value less than or equal to {0}."),min: a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges: !1,prototype: {init: function() {
                function b(b) {
                    var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function(b, d) {
                    "string" == typeof d && (d = d.split(/\s/)), a.each(d, function(a, d) {
                        c[d] = b
                    })
                });
                var d = this.settings.rules;
                a.each(d, function(b, c) {
                    d[b] = a.validator.normalizeRule(c)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },element: function(b) {
                b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
                var c = this.check(b) !== !1;
                return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
            },showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b)
                        this.errorList.push({message: b[c],element: this.findByName(c)[0]});
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },objectLength: function(a) {
                var b = 0;
                for (var c in a)
                    b++;
                return b
            },hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },valid: function() {
                return 0 === this.size()
            },size: function() {
                return this.errorList.length
            },focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {
                    }
            },findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },elements: function() {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },clean: function(b) {
                return a(b)[0]
            },errors: function() {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },elementValue: function(b) {
                var c = a(b).attr("type"), d = a(b).val();
                return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
            },check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d = a(b).rules(), e = !1, f = this.elementValue(b);
                for (var g in d) {
                    var h = {method: g,parameters: d[g]};
                    try {
                        if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, h), !1
                    } catch (i) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + h.method + "' method.", i), i
                    }
                }
                return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
            },customDataMessage: function(b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
            },customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },findDefined: function() {
                for (var a = 0; arguments.length > a; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a];
                return void 0
            },defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({message: d,element: b}), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },defaultShowErrors: function() {
                var a, b;
                for (a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },showLabel: function(b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
            },errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") === c
                })
            },idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c))
                            return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },dependTypes: {"boolean": function(a) {
                    return a
                },string: function(b, c) {
                    return !!a(b, c.form).length
                },"function": function(a, b) {
                    return a(b)
                }},optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },stopRequest: function(b, c) {
                this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {old: null,valid: !0,message: this.defaultMessage(b, "remote")})
            }},classRuleSettings: {required: {required: !0},email: {email: !0},url: {url: !0},date: {date: !0},dateISO: {dateISO: !0},number: {number: !0},digits: {digits: !0},creditcard: {creditcard: !0}},addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },classRules: function(b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },attributeRules: function(b) {
            var c = {}, d = a(b), e = d[0].getAttribute("type");
            for (var f in a.validator.methods) {
                var g;
                "required" === f ? (g = d.get(0).getAttribute(f), "" === g && (g = !0), g = !!g) : g = d.attr(f), /min|max/.test(f) && (null === e || /number|range|text/.test(e)) && (g = Number(g)), g ? c[f] = g : e === f && "range" !== e && (c[f] = !0)
            }
            return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
        },dataRules: function(b) {
            var c, d, e = {}, f = a(b);
            for (c in a.validator.methods)
                d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },staticRules: function(b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 3 > c.length && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },methods: {required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },email: function(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },url: function(a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test("" + new Date(a))
            },dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
            },number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },creditcard: function(a, b) {
                if (this.optional(b))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a))
                    return !1;
                var c = 0, d = 0, e = !1;
                a = a.replace(/\D/g, "");
                for (var f = a.length - 1; f >= 0; f--) {
                    var g = a.charAt(f);
                    d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
                }
                return 0 === c % 10
            },minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && d[1] >= e
            },min: function(a, b, c) {
                return this.optional(b) || a >= c
            },max: function(a, b, c) {
                return this.optional(b) || c >= a
            },range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && c[1] >= a
            },equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },remote: function(b, c, d) {
                if (this.optional(c))
                    return "dependency-mismatch";
                var e = this.previousValue(c);
                if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {url: d} || d, e.old === b)
                    return e.valid;
                e.old = b;
                var f = this;
                this.startRequest(c);
                var g = {};
                return g[c.name] = b, a.ajax(a.extend(!0, {url: d,mode: "abort",port: "validate" + c.name,dataType: "json",data: g,success: function(d) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var g = d === !0 || "true" === d;
                        if (g) {
                            var h = f.formSubmitted;
                            f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                        } else {
                            var i = {}, j = d || f.defaultMessage(c, "remote");
                            i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                        }
                        e.valid = g, f.stopRequest(c, g)
                    }}, d)), "pending"
            }}}), a.format = a.validator.format
}(jQuery), function(a) {
    var b = {};
    if (a.ajaxPrefilter)
        a.ajaxPrefilter(function(a, c, d) {
            var e = a.port;
            "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
        });
    else {
        var c = a.ajax;
        a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments), b[f]) : c.apply(this, arguments)
        }
    }
}(jQuery), function(a) {
    a.extend(a.fn, {validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }})
}(jQuery), !function(a) {
    var b = {}, c = {mode: "horizontal",slideSelector: "",infiniteLoop: !0,hideControlOnEnd: !1,speed: 500,easing: null,slideMargin: 0,startSlide: 0,randomStart: !1,captions: !1,ticker: !1,tickerHover: !1,adaptiveHeight: !1,adaptiveHeightSpeed: 500,video: !1,useCSS: !0,preloadImages: "visible",responsive: !0,slideZIndex: 50,touchEnabled: !0,swipeThreshold: 50,oneToOneTouch: !0,preventDefaultSwipeX: !0,preventDefaultSwipeY: !1,pager: !0,pagerType: "full",pagerShortSeparator: " / ",pagerSelector: null,buildPager: null,pagerCustom: null,controls: !0,nextText: "Next",prevText: "Prev",nextSelector: null,prevSelector: null,autoControls: !1,startText: "Start",stopText: "Stop",autoControlsCombine: !1,autoControlsSelector: null,auto: !1,pause: 4e3,autoStart: !0,autoDirection: "next",autoHover: !1,autoDelay: 0,minSlides: 1,maxSlides: 1,moveSlides: 0,slideWidth: 0,onSliderLoad: function() {
        },onSlideBefore: function() {
        },onSlideAfter: function() {
        },onSlideNext: function() {
        },onSlidePrev: function() {
        },onSliderResize: function() {
        }};
    a.fn.bxSlider = function(d) {
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                a(this).bxSlider(d)
            }), this;
        var e = {}, f = this;
        b.el = this;
        var g = a(window).width(), h = a(window).height(), j = function() {
            e.settings = a.extend({}, c, d), e.settings.slideWidth = parseInt(e.settings.slideWidth), e.children = f.children(e.settings.slideSelector), e.children.length < e.settings.minSlides && (e.settings.minSlides = e.children.length), e.children.length < e.settings.maxSlides && (e.settings.maxSlides = e.children.length), e.settings.randomStart && (e.settings.startSlide = Math.floor(Math.random() * e.children.length)), e.active = {index: e.settings.startSlide}, e.carousel = e.settings.minSlides > 1 || e.settings.maxSlides > 1, e.carousel && (e.settings.preloadImages = "all"), e.minThreshold = e.settings.minSlides * e.settings.slideWidth + (e.settings.minSlides - 1) * e.settings.slideMargin, e.maxThreshold = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin, e.working = !1, e.controls = {}, e.interval = null, e.animProp = "vertical" == e.settings.mode ? "top" : "left", e.usingCSS = e.settings.useCSS && "fade" != e.settings.mode && function() {
                var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var c in b)
                    if (void 0 !== a.style[b[c]])
                        return e.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), e.animProp = "-" + e.cssPrefix + "-transform", !0;
                return !1
            }(), "vertical" == e.settings.mode && (e.settings.maxSlides = e.settings.minSlides), f.data("origStyle", f.attr("style")), f.children(e.settings.slideSelector).each(function() {
                a(this).data("origStyle", a(this).attr("style"))
            }), k()
        }, k = function() {
            f.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), e.viewport = f.parent(), e.loader = a('<div class="bx-loading" />'), e.viewport.prepend(e.loader), f.css({width: "horizontal" == e.settings.mode ? 100 * e.children.length + 215 + "%" : "auto",position: "relative"}), e.usingCSS && e.settings.easing ? f.css("-" + e.cssPrefix + "-transition-timing-function", e.settings.easing) : e.settings.easing || (e.settings.easing = "swing"), q(), e.viewport.css({width: "100%",overflow: "hidden",position: "relative"}), e.viewport.parent().css({maxWidth: o()}), e.settings.pager || e.viewport.parent().css({margin: "0 auto 0px"}), e.children.css({"float": "horizontal" == e.settings.mode ? "left" : "none",listStyle: "none",position: "relative"}), e.children.css("width", p()), "horizontal" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginRight", e.settings.slideMargin), "vertical" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginBottom", e.settings.slideMargin), "fade" == e.settings.mode && (e.children.css({position: "absolute",zIndex: 0,display: "none"}), e.children.eq(e.settings.startSlide).css({zIndex: e.settings.slideZIndex,display: "block"})), e.controls.el = a('<div class="bx-controls" />'), e.settings.captions && z(), e.active.last = e.settings.startSlide == r() - 1, e.settings.video && f.fitVids();
            var b = e.children.eq(e.settings.startSlide);
            "all" == e.settings.preloadImages && (b = e.children), e.settings.ticker ? e.settings.pager = !1 : (e.settings.pager && w(), e.settings.controls && x(), e.settings.auto && e.settings.autoControls && y(), (e.settings.controls || e.settings.autoControls || e.settings.pager) && e.viewport.after(e.controls.el)), l(b, m)
        }, l = function(b, c) {
            var d = b.find("img, iframe").length;
            if (0 == d)
                return void c();
            var e = 0;
            b.find("img, iframe").each(function() {
                a(this).one("load", function() {
                    ++e == d && c()
                }).each(function() {
                    this.complete && a(this).load()
                })
            })
        }, m = function() {
            if (e.settings.infiniteLoop && "fade" != e.settings.mode && !e.settings.ticker) {
                var b = "vertical" == e.settings.mode ? e.settings.minSlides : e.settings.maxSlides, c = e.children.slice(0, b).clone().addClass("bx-clone"), d = e.children.slice(-b).clone().addClass("bx-clone");
                f.append(c).prepend(d)
            }
            e.loader.remove(), t(), "vertical" == e.settings.mode && (e.settings.adaptiveHeight = !0), e.viewport.height(n()), f.redrawSlider(), e.settings.onSliderLoad(e.active.index), e.initialized = !0, e.settings.responsive && a(window).bind("resize", Q), e.settings.auto && e.settings.autoStart && J(), e.settings.ticker && K(), e.settings.pager && F(e.settings.startSlide), e.settings.controls && I(), e.settings.touchEnabled && !e.settings.ticker && M()
        }, n = function() {
            var b = 0, c = a();
            if ("vertical" == e.settings.mode || e.settings.adaptiveHeight)
                if (e.carousel) {
                    var d = 1 == e.settings.moveSlides ? e.active.index : e.active.index * s();
                    for (c = e.children.eq(d), i = 1; i <= e.settings.maxSlides - 1; i++)
                        c = c.add(d + i >= e.children.length ? e.children.eq(i - 1) : e.children.eq(d + i))
                } else
                    c = e.children.eq(e.active.index);
            else
                c = e.children;
            return "vertical" == e.settings.mode ? (c.each(function() {
                b += a(this).outerHeight()
            }), e.settings.slideMargin > 0 && (b += e.settings.slideMargin * (e.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function() {
                return a(this).outerHeight(!1)
            }).get()), b
        }, o = function() {
            var a = "100%";
            return e.settings.slideWidth > 0 && (a = "horizontal" == e.settings.mode ? e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin : e.settings.slideWidth), a
        }, p = function() {
            var a = e.settings.slideWidth, b = e.viewport.width();
            return 0 == e.settings.slideWidth || e.settings.slideWidth > b && !e.carousel || "vertical" == e.settings.mode ? a = b : e.settings.maxSlides > 1 && "horizontal" == e.settings.mode && (b > e.maxThreshold || b < e.minThreshold && (a = (b - e.settings.slideMargin * (e.settings.minSlides - 1)) / e.settings.minSlides)), a
        }, q = function() {
            var a = 1;
            if ("horizontal" == e.settings.mode && e.settings.slideWidth > 0)
                if (e.viewport.width() < e.minThreshold)
                    a = e.settings.minSlides;
                else if (e.viewport.width() > e.maxThreshold)
                    a = e.settings.maxSlides;
                else {
                    var b = e.children.first().width();
                    a = Math.floor(e.viewport.width() / b)
                }
            else
                "vertical" == e.settings.mode && (a = e.settings.minSlides);
            return a
        }, r = function() {
            var a = 0;
            if (e.settings.moveSlides > 0)
                if (e.settings.infiniteLoop)
                    a = e.children.length / s();
                else
                    for (var b = 0, c = 0; b < e.children.length; )
                        ++a, b = c + q(), c += e.settings.moveSlides <= q() ? e.settings.moveSlides : q();
            else
                a = Math.ceil(e.children.length / q());
            return a
        }, s = function() {
            return e.settings.moveSlides > 0 && e.settings.moveSlides <= q() ? e.settings.moveSlides : q()
        }, t = function() {
            if (e.children.length > e.settings.maxSlides && e.active.last && !e.settings.infiniteLoop) {
                if ("horizontal" == e.settings.mode) {
                    var a = e.children.last(), b = a.position();
                    u(-(b.left - (e.viewport.width() - a.width())), "reset", 0)
                } else if ("vertical" == e.settings.mode) {
                    var c = e.children.length - e.settings.minSlides, b = e.children.eq(c).position();
                    u(-b.top, "reset", 0)
                }
            } else {
                var b = e.children.eq(e.active.index * s()).position();
                e.active.index == r() - 1 && (e.active.last = !0), void 0 != b && ("horizontal" == e.settings.mode ? u(-b.left, "reset", 0) : "vertical" == e.settings.mode && u(-b.top, "reset", 0))
            }
        }, u = function(a, b, c, d) {
            if (e.usingCSS) {
                var g = "vertical" == e.settings.mode ? "translate3d(0, " + a + "px, 0)" : "translate3d(" + a + "px, 0, 0)";
                f.css("-" + e.cssPrefix + "-transition-duration", c / 1e3 + "s"), "slide" == b ? (f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), G()
                })) : "reset" == b ? f.css(e.animProp, g) : "ticker" == b && (f.css("-" + e.cssPrefix + "-transition-timing-function", "linear"), f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), u(d.resetValue, "reset", 0), L()
                }))
            } else {
                var h = {};
                h[e.animProp] = a, "slide" == b ? f.animate(h, c, e.settings.easing, function() {
                    G()
                }) : "reset" == b ? f.css(e.animProp, a) : "ticker" == b && f.animate(h, speed, "linear", function() {
                    u(d.resetValue, "reset", 0), L()
                })
            }
        }, v = function() {
            for (var b = "", c = r(), d = 0; c > d; d++) {
                var f = "";
                e.settings.buildPager && a.isFunction(e.settings.buildPager) ? (f = e.settings.buildPager(d), e.pagerEl.addClass("bx-custom-pager")) : (f = d + 1, e.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + d + '" class="bx-pager-link">' + f + "</a></div>"
            }
            e.pagerEl.html(b)
        }, w = function() {
            e.settings.pagerCustom ? e.pagerEl = a(e.settings.pagerCustom) : (e.pagerEl = a('<div class="bx-pager" />'), e.settings.pagerSelector ? a(e.settings.pagerSelector).html(e.pagerEl) : e.controls.el.addClass("bx-has-pager").append(e.pagerEl), v()), e.pagerEl.on("click", "a", E)
        }, x = function() {
            e.controls.next = a('<a class="bx-next" href="">' + e.settings.nextText + "</a>"), e.controls.prev = a('<a class="bx-prev" href="">' + e.settings.prevText + "</a>"), e.controls.next.bind("click", A), e.controls.prev.bind("click", B), e.settings.nextSelector && a(e.settings.nextSelector).append(e.controls.next), e.settings.prevSelector && a(e.settings.prevSelector).append(e.controls.prev), e.settings.nextSelector || e.settings.prevSelector || (e.controls.directionEl = a('<div class="bx-controls-direction" />'), e.controls.directionEl.append(e.controls.prev).append(e.controls.next), e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl))
        }, y = function() {
            e.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + e.settings.startText + "</a></div>"), e.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + e.settings.stopText + "</a></div>"), e.controls.autoEl = a('<div class="bx-controls-auto" />'), e.controls.autoEl.on("click", ".bx-start", C), e.controls.autoEl.on("click", ".bx-stop", D), e.settings.autoControlsCombine ? e.controls.autoEl.append(e.controls.start) : e.controls.autoEl.append(e.controls.start).append(e.controls.stop), e.settings.autoControlsSelector ? a(e.settings.autoControlsSelector).html(e.controls.autoEl) : e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl), H(e.settings.autoStart ? "stop" : "start")
        }, z = function() {
            e.children.each(function() {
                var b = a(this).find("img:first").attr("title");
                void 0 != b && ("" + b).length && a(this).append('<div class="bx-caption"><span>' + b + "</span></div>")
            })
        }, A = function(a) {
            e.settings.auto && f.stopAuto(), f.goToNextSlide(), a.preventDefault()
        }, B = function(a) {
            e.settings.auto && f.stopAuto(), f.goToPrevSlide(), a.preventDefault()
        }, C = function(a) {
            f.startAuto(), a.preventDefault()
        }, D = function(a) {
            f.stopAuto(), a.preventDefault()
        }, E = function(b) {
            e.settings.auto && f.stopAuto();
            var c = a(b.currentTarget), d = parseInt(c.attr("data-slide-index"));
            d != e.active.index && f.goToSlide(d), b.preventDefault()
        }, F = function(b) {
            var c = e.children.length;
            return "short" == e.settings.pagerType ? (e.settings.maxSlides > 1 && (c = Math.ceil(e.children.length / e.settings.maxSlides)), void e.pagerEl.html(b + 1 + e.settings.pagerShortSeparator + c)) : (e.pagerEl.find("a").removeClass("active"), void e.pagerEl.each(function(c, d) {
                a(d).find("a").eq(b).addClass("active")
            }))
        }, G = function() {
            if (e.settings.infiniteLoop) {
                var a = "";
                0 == e.active.index ? a = e.children.eq(0).position() : e.active.index == r() - 1 && e.carousel ? a = e.children.eq((r() - 1) * s()).position() : e.active.index == e.children.length - 1 && (a = e.children.eq(e.children.length - 1).position()), a && ("horizontal" == e.settings.mode ? u(-a.left, "reset", 0) : "vertical" == e.settings.mode && u(-a.top, "reset", 0))
            }
            e.working = !1, e.settings.onSlideAfter(e.children.eq(e.active.index), e.oldIndex, e.active.index)
        }, H = function(a) {
            e.settings.autoControlsCombine ? e.controls.autoEl.html(e.controls[a]) : (e.controls.autoEl.find("a").removeClass("active"), e.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
        }, I = function() {
            1 == r() ? (e.controls.prev.addClass("disabled"), e.controls.next.addClass("disabled")) : !e.settings.infiniteLoop && e.settings.hideControlOnEnd && (0 == e.active.index ? (e.controls.prev.addClass("disabled"), e.controls.next.removeClass("disabled")) : e.active.index == r() - 1 ? (e.controls.next.addClass("disabled"), e.controls.prev.removeClass("disabled")) : (e.controls.prev.removeClass("disabled"), e.controls.next.removeClass("disabled")))
        }, J = function() {
            e.settings.autoDelay > 0 ? setTimeout(f.startAuto, e.settings.autoDelay) : f.startAuto(), e.settings.autoHover && f.hover(function() {
                e.interval && (f.stopAuto(!0), e.autoPaused = !0)
            }, function() {
                e.autoPaused && (f.startAuto(!0), e.autoPaused = null)
            })
        }, K = function() {
            var b = 0;
            if ("next" == e.settings.autoDirection)
                f.append(e.children.clone().addClass("bx-clone"));
            else {
                f.prepend(e.children.clone().addClass("bx-clone"));
                var c = e.children.first().position();
                b = "horizontal" == e.settings.mode ? -c.left : -c.top
            }
            u(b, "reset", 0), e.settings.pager = !1, e.settings.controls = !1, e.settings.autoControls = !1, e.settings.tickerHover && !e.usingCSS && e.viewport.hover(function() {
                f.stop()
            }, function() {
                var b = 0;
                e.children.each(function() {
                    b += "horizontal" == e.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                });
                var c = e.settings.speed / b, d = "horizontal" == e.settings.mode ? "left" : "top", g = c * (b - Math.abs(parseInt(f.css(d))));
                L(g)
            }), L()
        }, L = function(a) {
            speed = a ? a : e.settings.speed;
            var b = {left: 0,top: 0}, c = {left: 0,top: 0};
            "next" == e.settings.autoDirection ? b = f.find(".bx-clone").first().position() : c = e.children.first().position();
            var d = "horizontal" == e.settings.mode ? -b.left : -b.top, g = "horizontal" == e.settings.mode ? -c.left : -c.top, h = {resetValue: g};
            u(d, "ticker", speed, h)
        }, M = function() {
            e.touch = {start: {x: 0,y: 0},end: {x: 0,y: 0}}, e.viewport.bind("touchstart", N)
        }, N = function(a) {
            if (e.working)
                a.preventDefault();
            else {
                e.touch.originalPos = f.position();
                var b = a.originalEvent;
                e.touch.start.x = b.changedTouches[0].pageX, e.touch.start.y = b.changedTouches[0].pageY, e.viewport.bind("touchmove", O), e.viewport.bind("touchend", P)
            }
        }, O = function(a) {
            var b = a.originalEvent, c = Math.abs(b.changedTouches[0].pageX - e.touch.start.x), d = Math.abs(b.changedTouches[0].pageY - e.touch.start.y);
            if (3 * c > d && e.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * d > c && e.settings.preventDefaultSwipeY && a.preventDefault(), "fade" != e.settings.mode && e.settings.oneToOneTouch) {
                var f = 0;
                if ("horizontal" == e.settings.mode) {
                    var g = b.changedTouches[0].pageX - e.touch.start.x;
                    f = e.touch.originalPos.left + g
                } else {
                    var g = b.changedTouches[0].pageY - e.touch.start.y;
                    f = e.touch.originalPos.top + g
                }
                u(f, "reset", 0)
            }
        }, P = function(a) {
            e.viewport.unbind("touchmove", O);
            var b = a.originalEvent, c = 0;
            if (e.touch.end.x = b.changedTouches[0].pageX, e.touch.end.y = b.changedTouches[0].pageY, "fade" == e.settings.mode) {
                var d = Math.abs(e.touch.start.x - e.touch.end.x);
                d >= e.settings.swipeThreshold && (e.touch.start.x > e.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto())
            } else {
                var d = 0;
                "horizontal" == e.settings.mode ? (d = e.touch.end.x - e.touch.start.x, c = e.touch.originalPos.left) : (d = e.touch.end.y - e.touch.start.y, c = e.touch.originalPos.top), !e.settings.infiniteLoop && (0 == e.active.index && d > 0 || e.active.last && 0 > d) ? u(c, "reset", 200) : Math.abs(d) >= e.settings.swipeThreshold ? (0 > d ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto()) : u(c, "reset", 200)
            }
            e.viewport.unbind("touchend", P)
        }, Q = function() {
            var b = a(window).width(), c = a(window).height();
            (g != b || h != c) && (g = b, h = c, f.redrawSlider(), e.settings.onSliderResize.call(f, e.active.index))
        };
        return f.goToSlide = function(b, c) {
            if (!e.working && e.active.index != b)
                if (e.working = !0, e.oldIndex = e.active.index, e.active.index = 0 > b ? r() - 1 : b >= r() ? 0 : b, e.settings.onSlideBefore(e.children.eq(e.active.index), e.oldIndex, e.active.index), "next" == c ? e.settings.onSlideNext(e.children.eq(e.active.index), e.oldIndex, e.active.index) : "prev" == c && e.settings.onSlidePrev(e.children.eq(e.active.index), e.oldIndex, e.active.index), e.active.last = e.active.index >= r() - 1, e.settings.pager && F(e.active.index), e.settings.controls && I(), "fade" == e.settings.mode)
                    e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({height: n()}, e.settings.adaptiveHeightSpeed), e.children.filter(":visible").fadeOut(e.settings.speed).css({zIndex: 0}), e.children.eq(e.active.index).css("zIndex", e.settings.slideZIndex + 1).fadeIn(e.settings.speed, function() {
                        a(this).css("zIndex", e.settings.slideZIndex), G()
                    });
                else {
                    e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({height: n()}, e.settings.adaptiveHeightSpeed);
                    var d = 0, g = {left: 0,top: 0};
                    if (!e.settings.infiniteLoop && e.carousel && e.active.last)
                        if ("horizontal" == e.settings.mode) {
                            var h = e.children.eq(e.children.length - 1);
                            g = h.position(), d = e.viewport.width() - h.outerWidth()
                        } else {
                            var i = e.children.length - e.settings.minSlides;
                            g = e.children.eq(i).position()
                        }
                    else if (e.carousel && e.active.last && "prev" == c) {
                        var j = 1 == e.settings.moveSlides ? e.settings.maxSlides - s() : (r() - 1) * s() - (e.children.length - e.settings.maxSlides), h = f.children(".bx-clone").eq(j);
                        g = h.position()
                    } else if ("next" == c && 0 == e.active.index)
                        g = f.find("> .bx-clone").eq(e.settings.maxSlides).position(), e.active.last = !1;
                    else if (b >= 0) {
                        var k = b * s();
                        g = e.children.eq(k).position()
                    }
                    if ("undefined" != typeof g) {
                        var l = "horizontal" == e.settings.mode ? -(g.left - d) : -g.top;
                        u(l, "slide", e.settings.speed)
                    }
                }
        }, f.goToNextSlide = function() {
            if (e.settings.infiniteLoop || !e.active.last) {
                var a = parseInt(e.active.index) + 1;
                f.goToSlide(a, "next")
            }
        }, f.goToPrevSlide = function() {
            if (e.settings.infiniteLoop || 0 != e.active.index) {
                var a = parseInt(e.active.index) - 1;
                f.goToSlide(a, "prev")
            }
        }, f.startAuto = function(a) {
            e.interval || (e.interval = setInterval(function() {
                "next" == e.settings.autoDirection ? f.goToNextSlide() : f.goToPrevSlide()
            }, e.settings.pause), e.settings.autoControls && 1 != a && H("stop"))
        }, f.stopAuto = function(a) {
            e.interval && (clearInterval(e.interval), e.interval = null, e.settings.autoControls && 1 != a && H("start"))
        }, f.getCurrentSlide = function() {
            return e.active.index
        }, f.getCurrentSlideElement = function() {
            return e.children.eq(e.active.index)
        }, f.getSlideCount = function() {
            return e.children.length
        }, f.redrawSlider = function() {
            e.children.add(f.find(".bx-clone")).outerWidth(p()), e.viewport.css("height", n()), e.settings.ticker || t(), e.active.last && (e.active.index = r() - 1), e.active.index >= r() && (e.active.last = !0), e.settings.pager && !e.settings.pagerCustom && (v(), F(e.active.index))
        }, f.destroySlider = function() {
            e.initialized && (e.initialized = !1, a(".bx-clone", this).remove(), e.children.each(function() {
                void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
            }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), e.controls.el && e.controls.el.remove(), e.controls.next && e.controls.next.remove(), e.controls.prev && e.controls.prev.remove(), e.pagerEl && e.settings.controls && e.pagerEl.remove(), a(".bx-caption", this).remove(), e.controls.autoEl && e.controls.autoEl.remove(), clearInterval(e.interval), e.settings.responsive && a(window).unbind("resize", Q))
        }, f.reloadSlider = function(a) {
            void 0 != a && (d = a), f.destroySlider(), j()
        }, j(), this
    }
}(jQuery), !function(a) {
    function b() {
    }
    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }
        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l)
                                    return l
                            } else
                                f("no such method '" + e + "' for " + b + " instance");
                        else
                            f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement, d = function() {
    };
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {
    };
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d,unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(this), function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }
    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }
    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }
    var f = a.document, g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function() {
    function a() {
    }
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c,once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {listener: b,once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])
                return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)
                if (b = c[e] + a, "string" == typeof d[b])
                    return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function(a) {
    function b(a) {
        var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }
    function c() {
    }
    function d() {
        for (var a = {width: 0,height: 0,innerWidth: 0,innerHeight: 0,outerWidth: 0,outerHeight: 0}, b = 0, c = g.length; c > b; b++) {
            var d = g[b];
            a[d] = 0
        }
        return a
    }
    function e(c) {
        function e() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function() {
                    var a = d ? function(a) {
                        return d(a, null)
                    } : function(a) {
                        return a.currentStyle
                    };
                    return function(b) {
                        var c = a(b);
                        return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                    }
                }(), k = c("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                    var g = document.body || document.documentElement;
                    g.appendChild(e);
                    var h = j(e);
                    l = 200 === b(h.width), g.removeChild(e)
                }
            }
        }
        function h(a) {
            if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var c = j(a);
                if ("none" === c.display)
                    return d();
                var f = {};
                f.width = a.offsetWidth, f.height = a.offsetHeight;
                for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                    var o = g[m], p = c[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom, t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom, v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = h && l, y = b(c.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = b(c.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
            }
        }
        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%"))
                return c;
            var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
            return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
        }
        var j, k, l, m = !1;
        return h
    }
    var f = "undefined" == typeof console ? c : function(a) {
        console.error(a)
    }, g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
}(window), function(a) {
    function b(a, b) {
        return a[g](b)
    }
    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }
    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
            if (d[e] === a)
                return !0;
        return !1
    }
    function e(a, d) {
        return c(a), b(a, d)
    }
    var f, g = function() {
        if (a.matchesSelector)
            return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c], f = e + "MatchesSelector";
            if (a[f])
                return f
        }
    }();
    if (g) {
        var h = document.createElement("div"), i = b(h, "div");
        f = i ? b : e
    } else
        f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a) {
        for (var b in a)
            return !1;
        return b = null, !0
    }
    function d(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    function e(a, e, f) {
        function h(a, b) {
            a && (this.element = a, this.layout = b, this.position = {x: 0,y: 0}, this._create())
        }
        var i = f("transition"), j = f("transform"), k = i && j, l = !!f("perspective"), m = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "otransitionend",transition: "transitionend"}[i], n = ["transform", "transition", "transitionDuration", "transitionProperty"], o = function() {
            for (var a = {}, b = 0, c = n.length; c > b; b++) {
                var d = n[b], e = f(d);
                e && e !== d && (a[d] = e)
            }
            return a
        }();
        b(h.prototype, a.prototype), h.prototype._create = function() {
            this._transn = {ingProperties: {},clean: {},onEnd: {}}, this.css({position: "absolute"})
        }, h.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, h.prototype.getSize = function() {
            this.size = e(this.element)
        }, h.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = o[c] || c;
                b[d] = a[c]
            }
        }, h.prototype.getPosition = function() {
            var a = g(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = parseInt(a[c ? "left" : "right"], 10), f = parseInt(a[d ? "top" : "bottom"], 10);
            e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
            var h = this.layout.size;
            e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
        }, h.prototype.layoutPosition = function() {
            var a = this.layout.size, b = this.layout.options, c = {};
            b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
        };
        var p = l ? function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)"
        } : function(a, b) {
            return "translate(" + a + "px, " + b + "px)"
        };
        h.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning)
                return void this.layoutPosition();
            var h = a - c, i = b - d, j = {}, k = this.layout.options;
            h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({to: j,onTransitionEnd: {transform: this.layoutPosition},isCleaning: !0})
        }, h.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, h.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd)
                a.onTransitionEnd[b].call(this)
        }, h.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd)
                b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to)
                b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var q = j && d(j) + ",opacity";
        h.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({transitionProperty: q,transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(m, this, !1))
        }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, h.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var r = {"-webkit-transform": "transform","-moz-transform": "transform","-o-transform": "transform"};
        h.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn, d = r[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                    var e = b.onEnd[d];
                    e.call(this), delete b.onEnd[d]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, h.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
        }, h.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a)
                b[c] = "";
            this.css(b)
        };
        var s = {transitionProperty: "",transitionDuration: ""};
        return h.prototype.removeTransitionStyles = function() {
            this.css(s)
        }, h.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, h.prototype.remove = function() {
            if (!i || !parseFloat(this.layout.options.transitionDuration))
                return void this.removeElem();
            var a = this;
            this.on("transitionEnd", function() {
                return a.removeElem(), !0
            }), this.hide()
        }, h.prototype.reveal = function() {
            delete this.isHidden, this.css({display: ""});
            var a = this.layout.options;
            this.transition({from: a.hiddenStyle,to: a.visibleStyle,isCleaning: !0})
        }, h.prototype.hide = function() {
            this.isHidden = !0, this.css({display: ""});
            var a = this.layout.options;
            this.transition({from: a.visibleStyle,to: a.hiddenStyle,isCleaning: !0,onTransitionEnd: {opacity: function() {
                        this.isHidden && this.css({display: "none"})
                    }}})
        }, h.prototype.destroy = function() {
            this.css({position: "",left: "",right: "",top: "",bottom: "",transition: "",transform: ""})
        }, h
    }
    var f = a.getComputedStyle, g = f ? function(a) {
        return f(a, null)
    } : function(a) {
        return a.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
}(window), function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a) {
        return "[object Array]" === l.call(a)
    }
    function d(a) {
        var b = [];
        if (c(a))
            b = a;
        else if (a && "number" == typeof a.length)
            for (var d = 0, e = a.length; e > d; d++)
                b.push(a[d]);
        else
            b.push(a);
        return b
    }
    function e(a, b) {
        var c = n(b, a);
        -1 !== c && b.splice(c, 1)
    }
    function f(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    }
    function g(c, g, l, n, o, p) {
        function q(a, c) {
            if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a))
                return void (i && i.error("Bad " + this.constructor.namespace + " element: " + a));
            this.element = a, this.options = b({}, this.constructor.defaults), this.option(c);
            var d = ++r;
            this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var r = 0, s = {};
        return q.namespace = "outlayer", q.Item = p, q.defaults = {containerStyle: {position: "relative"},isInitLayout: !0,isOriginLeft: !0,isOriginTop: !0,isResizeBound: !0,isResizingContainer: !0,transitionDuration: "0.4s",hiddenStyle: {opacity: 0,transform: "scale(0.001)"},visibleStyle: {opacity: 1,transform: "scale(1)"}}, b(q.prototype, l.prototype), q.prototype.option = function(a) {
            b(this.options, a)
        }, q.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, q.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, q.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e], h = new c(g, this);
                d.push(h)
            }
            return d
        }, q.prototype._filterFindItemElements = function(a) {
            a = d(a);
            for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                if (m(g))
                    if (b) {
                        o(g, b) && c.push(g);
                        for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++)
                            c.push(h[i])
                    } else
                        c.push(g)
            }
            return c
        }, q.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++)
                a.push(this.items[b].element);
            return a
        }, q.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
            this.getSize()
        }, q.prototype.getSize = function() {
            this.size = n(this.element)
        }, q.prototype._getMeasurement = function(a, b) {
            var c, d = this.options[a];
            d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
        }, q.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, q.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, q.prototype._layoutItems = function(a, b) {
            function c() {
                d.emitEvent("layoutComplete", [d, a])
            }
            var d = this;
            if (!a || !a.length)
                return void c();
            this._itemsOn(a, "layout", c);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f], i = this._getItemLayoutPosition(h);
                i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i)
            }
            this._processLayoutQueue(e)
        }, q.prototype._getItemLayoutPosition = function() {
            return {x: 0,y: 0}
        }, q.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, q.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, q.prototype._postLayout = function() {
            this.resizeContainer()
        }, q.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, q.prototype._itemsOn = function(a, b, c) {
            function d() {
                return e++, e === f && c.call(g), !0
            }
            for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                j.on(b, d)
            }
        }, q.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, q.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, q.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, q.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e(d, this.stamps), this.unignore(d)
                }
        }, q.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
        }, q.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, q.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(), b = this.size;
            this._boundingRect = {left: a.left + b.paddingLeft + b.borderLeftWidth,top: a.top + b.paddingTop + b.borderTopWidth,right: a.right - (b.paddingRight + b.borderRightWidth),bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)}
        }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(), c = this._boundingRect, d = n(a), e = {left: b.left - c.left - d.marginLeft,top: b.top - c.top - d.marginTop,right: c.right - b.right - d.marginRight,bottom: c.bottom - b.bottom - d.marginBottom};
            return e
        }, q.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, q.prototype.bindResize = function() {
            this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
        }, q.prototype.unbindResize = function() {
            this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1
        }, q.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, q.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, q.prototype.needsResizeLayout = function() {
            var a = n(this.element), b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, q.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, q.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, q.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, q.prototype.reveal = function(a) {
            var b = a && a.length;
            if (b)
                for (var c = 0; b > c; c++) {
                    var d = a[c];
                    d.reveal()
                }
        }, q.prototype.hide = function(a) {
            var b = a && a.length;
            if (b)
                for (var c = 0; b > c; c++) {
                    var d = a[c];
                    d.hide()
                }
        }, q.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a)
                    return d
            }
        }, q.prototype.getItems = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c], f = this.getItem(e);
                    f && b.push(f)
                }
                return b
            }
        }, q.prototype.remove = function(a) {
            a = d(a);
            var b = this.getItems(a);
            if (b && b.length) {
                this._itemsOn(b, "remove", function() {
                    this.emitEvent("removeComplete", [this, b])
                });
                for (var c = 0, f = b.length; f > c; c++) {
                    var g = b[c];
                    g.remove(), e(g, this.items)
                }
            }
        }, q.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete s[e], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
        }, q.data = function(a) {
            var b = a && a.outlayerGUID;
            return b && s[b]
        }, q.create = function(a, c) {
            function d() {
                q.apply(this, arguments)
            }
            return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function() {
                p.apply(this, arguments)
            }, d.Item.prototype = new p, g(function() {
                for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                    var l, m = c[g], n = m.getAttribute(e);
                    try {
                        l = n && JSON.parse(n)
                    } catch (o) {
                        i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                        continue
                    }
                    var p = new d(m, l);
                    j && j.data(m, a, p)
                }
            }), j && j.bridget && j.bridget(a, d), d
        }, q.Item = p, q
    }
    var h = a.document, i = a.console, j = a.jQuery, k = function() {
    }, l = Object.prototype.toString, m = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    } : function(a) {
        return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
    }, n = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return c;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : "object" == typeof exports ? module.exports = g(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
}(window), function(a) {
    function b(a, b) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--; )
                this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0], c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil", e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {x: this.columnWidth * h,y: g}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
                this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a)
                return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)
                this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {height: this.maxY};
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; )
                a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }
    var c = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    } : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            if (e === b)
                return c
        }
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
}(window), angular.module("worldPolicyForumApp").service("api", ["$http", function(a) {
        var b = null;
        this.getHomepage = function() {
            return a.get("/api/home.php")
        }, this.getNews = function() {
            return a.get("/api/news.php")
        }, this.getNewsDetails = function(b) {
            return a.get("/api/news/" + b + ".php")
        }, this.getPolicies = function() {
            return a.get("/api/policies.json")
        }, this.getPoliciesOfTopic = function() {
            return this.getPolicies()
        }, this.getPolicyDetails = function(b) {
            return a.get("/api/policies/" + b + ".json")
        }, this.getTopics = function() {
            return b || (b = a.get("/api/topics.json")), b
        }, this.getTopicDetails = function(b) {
            return a.get("/api/topics/" + b + ".json")
        }, this.query = function() {
            return this.getPolicies()
        }
    }]), angular.module("worldPolicyForumApp").controller("AppController", ["$scope", "settings", function(a, b) {
        function c() {
        }
        a.settings = b, c()
    }]), angular.module("worldPolicyForumApp").service("settings", ["$rootScope", "$route", function(a, b) {
        function c() {
            a.$on("$routeChangeSuccess", d), d()
        }
        function d() {
            try {
                e.route = b.current.$$route, console.log("Setting was updated", e)
            } catch (a) {
            }
        }
        var e = this;
        c()
    }]), angular.module("worldPolicyForumApp").directive("bxSlider", ["$window", function(a) {
        return {restrict: "A",link: function(b, c) {
                function d() {
                    $(c).find(".bx-viewpoert").css("height", f.height())
                }
                var e = c.find(".bx-slider"), f = c.find(".overlay");
                $("img", e).load(function() {
                    e.fadeIn(500)
                }), e.bxSlider({mode: "fade",auto: !0,speed: 5e3,pager: !1,controls: !1,easing: "linear",responsive: !1}), d(), angular.element(a).on("resize", d)
            }}
    }]), angular.module("worldPolicyForumApp").directive("searchResult", function() {
    return {templateUrl: "views/directives/search-result.html",restrict: "E",replace: !0,scope: !0,controllerAs: "searchResultController",controller: ["$scope", "$element", "$document", "$timeout", function(a, b, c) {
                $(".result-list", b);
                a.isOpen = !1, a.isLoading = !1, a.results = {policies: null}, a.searchGroup = null, this.init = function(b) {
                    a.searchGroup = b, a.$on("queryStarted-" + b, this.onQueryStarted), a.$on("queryResult-" + b, this.onQueryResult), a.$on("exitQuery-" + b, this.onExitQuery), a.$on("$destroy", this.destroy)
                }, this.destroy = function() {
                }.bind(this), this.onQueryStarted = function() {
                    this.openResult()
                }.bind(this), this.onQueryResult = function(b, c) {
                    a.results.policies = c.policies, a.isLoading = !1
                }.bind(this), this.onExitQuery = function() {
                    this.closeResult()
                }.bind(this), this.onDocumentClick = function(a) {
                    $(a.target).closest(".search-result").length || $(a.target).closest(".categories .btn").length || $(a.target).closest(".advanced-search .researcher").length || $(a.target).closest("input.search").length || this.closeResult()
                }.bind(this), this.openResult = function() {
                    a.isOpen || ($(b).fadeIn(), $(c).on("click", this.onDocumentClick), a.isOpen = !0, a.isLoading = !0)
                }, this.closeResult = function() {
                    a.isOpen && ($(b).fadeOut(), $(c).off("click", this.onDocumentClick), a.isOpen = !1)
                }
            }],link: function(a, b, c, d) {
            d.init(c.searchGroup)
        }}
}), angular.module("worldPolicyForumApp").service("search", ["$rootScope", "api", function(a, b) {
        this.results = null, this.query = function(c, d) {
            console.log("query:", c), a.$broadcast("queryStarted-" + d), b.query(c).then(function(b) {
                var c = b.data.list;
                a.$broadcast("queryResult-" + d, {policies: c})
            })
        }, this.exit = function(b) {
            console.log("exit query"), a.$broadcast("exitQuery-" + b)
        }
    }]), angular.module("worldPolicyForumApp").directive("searchInput", ["search", function(a) {
        return {template: '<input type="text" ng-model="query" class="search form-control" placeholder="Search rights, laws, policies, publications and resources...">',restrict: "E",scope: !0,link: function(b, c, d) {
                b.query = null, b.searchGroup = d.searchGroup, b.$watch("query", function(c) {
                    c && c.length ? a.query(c, b.searchGroup) : a.exit(b.searchGroup)
                })
            }}
    }]), angular.module("worldPolicyForumApp").controller("NewsCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").directive("topicAccordion", ["api", function(a) {
        return {templateUrl: "views/directives/topic-accordion.html",restrict: "E",replace: !0,scope: {selectedTopic: "=?"},controllerAs: "topicAccordionController",controller: ["$scope", "$element", function(b) {
                    b.topics = null;
                    var c = this;
                    this.init = function() {
                        a.getTopics().then(function(a) {
                            b.topics = a.data.list, c.watchTopicOpen(), c.update(b.selectedTopic)
                        }), b.$watch("selectedTopic", this.update)
                    }, this.watchTopicOpen = function() {
                        for (var a = 0; a < b.topics.length; a++)
                            b.$watch("topics[" + a + "].isOpen", this.onIsOpenChange.bind(this, a))
                    }, this.onIsOpenChange = function(a, c) {
                        c && (b.selectedTopic = b.topics[a].name)
                    }, this.update = function(a) {
                        try {
                            for (var c = 0; c < b.topics.length; c++)
                                b.topics[c].isOpen = b.topics[c].name === a
                        } catch (d) {
                        }
                    }.bind(this)
                }],link: function(a, b, c, d) {
                d.init()
            }}
    }]), angular.module("worldPolicyForumApp").directive("policyList", ["$timeout", function() {
        return {templateUrl: "views/directives/policy-list.html",restrict: "E",replace: !0,scope: {policies: "="},controllerAs: "policyListController",controller: ["$scope", "$element", function() {
                    this.init = function() {
                    }
                }],link: function(a, b, c, d) {
                d.init()
            }}
    }]), angular.module("worldPolicyForumApp").directive("masonry", ["$timeout", function(a) {
        return {restrict: "AC",link: function(b, c, d) {
                var e = c[0], f = angular.extend({itemSelector: ".item"}, angular.fromJson(d.masonry)), g = b.masonry = new Masonry(e, f), h = 0;
                b.update = function() {
                    h && a.cancel(h), h = a(function() {
                        h = 0, g.reloadItems(), g.layout(), c.children(f.itemSelector).css("visibility", "visible")
                    }, 120)
                }, b.layout = function() {
                    g.layout()
                }, b.removeBrick = function() {
                    a(function() {
                        g.reloadItems(), g.layout()
                    }, 500)
                }, b.appendBricks = function(a) {
                    g.appended(a)
                }, b.$on("masonry.layout", function() {
                    b.layout()
                }), b.$on("masonry.update", function() {
                    b.update()
                }), b.update()
            }}
    }]).directive("masonryTile", function() {
    return {restrict: "AC",link: function(a, b) {
            b.css("visibility", "hidden");
            var c = b.parent("*[masonry]:first").scope(), d = c.update, e = c.removeBrick, f = c.appendBricks;
            d && (imagesLoaded(b.get(0), d), b.ready(d)), f && imagesLoaded(b.get(0), f(b)), a.$on("$destroy", function() {
                e && e()
            })
        }}
}), angular.module("worldPolicyForumApp").directive("globalMap", function() {
    return {templateUrl: "views/directives/global-map.html",restrict: "E",replace: !0,controllerAs: "globalMapController",controller: ["$scope", "$element", "$window", "Map", "configs", function(a, b, c, d, e) {
                a.legends = [{name: "No public special education",color: "#ef6d52"}, {name: "Extra color for key",color: "#f2a866"}, {name: "Low degree of integration",color: "#e1d495"}, {name: "At least medium degree of integration",color: "#92d2bc"}, {name: "High degree of integration",color: "#146a78"}], a.filters = [{name: "Action"}, {name: "Another action"}, {name: "Something else here"}], a.datasetTitle = "Select Education Level:", a.datasets = [{name: "Primary"}, {name: "Beginning of Secondary"}, {name: "Completing of Secondary"}, {name: "Higher"}], a.blindMode = !1, a.selectedDataset = 0;
                var f = null, g = $(b).find(".map-container");
                this.init = function() {
                    f = new d(g.get(0), e.map), this.onResize(), e.isDebugging && (c.map = f), angular.element(window).on("resize", this.onResize), a.$on("$destroy", this.onDestroy)
                }, this.onDestroy = function() {
                    console.log("Destroy map"), angular.element(window).off("resize", this.onResize), f.destroy()
                }.bind(this), this.onResize = function() {
                    f.adjust(g.width(), g.height())
                }.bind(this), this.zoomIn = function() {
                    f.zoom(e.map.zoomStep)
                }, this.zoomOut = function() {
                    f.zoom(1 / e.map.zoomStep)
                }, this.applyFilter = function(a) {
                    console.log("TODO: update filter:", a)
                }, this.updateBlindMode = function(a) {
                    console.log("TODO: update blind mode:", a)
                }, this.updateDataset = function(a) {
                    console.log("TODO: update dataset:", a)
                }
            }],link: function(a, b, c, d) {
            d.init()
        }}
}), angular.module("worldPolicyForumApp").constant("configs", {isDebugging: !0,map: {svgWidth: 818,svgHeight: 486,defaultColor: "#e3e3e3",minScale: 1,maxScale: Math.pow(1.5, 5),zoomStep: 1.5,animate: !0}}), angular.module("worldPolicyForumApp").factory("Map", function() {
    function a(a, b) {
        this.configs = b, this.transform = {x: 0,y: 0,scale: 1}, this.dragging = {lastX: 0,lastY: 0,enabled: !1}, this.paper = Raphael(a), this.paper.setViewBox(0, 0, this.configs.svgWidth, this.configs.svgHeight), this.loadSVG()
    }
    return a.prototype.destroy = function() {
        $(this.paper.canvas).off("mousedown", this.startDraggingDelegate), $(this.paper.canvas).off("mousemove", this.updateDraggingDelegate), $(this.paper.canvas).off("mouseup", this.endDraggingDelegate), $(this.paper.canvas).off("mouseleave", this.endDraggingDelegate)
    }, a.prototype.loadSVG = function() {
        var a = this;
        $.ajax({type: "GET",url: "svgs/world_vision_country_codes_pins.svg",dataType: "xml",success: function(b) {
                a.initMap(b)
            }})
    }, a.prototype.initMap = function(a) {
        this.mapSet = this.paper.importSVG(a);
        var b = this;
        this.paper.forEach(function(a) {
            a.attr("pins" === a.node.getAttribute("data-svg-group") ? {opacity: 0} : {fill: b.configs.defaultColor})
        }), this.startDraggingDelegate = this.startDragging.bind(this), $(this.paper.canvas).on("mousedown", this.startDraggingDelegate), this.updateDraggingDelegate = this.updateDragging.bind(this), $(this.paper.canvas).on("mousemove", this.updateDraggingDelegate), this.endDraggingDelegate = this.endDragging.bind(this), $(this.paper.canvas).on("mouseup", this.endDraggingDelegate), $(this.paper.canvas).on("mouseleave", this.endDraggingDelegate)
    }, a.prototype.adjust = function(a) {
        this.width = a, this.height = this.configs.svgHeight * this.width / this.configs.svgWidth, this.height = Math.min(this.height, 768), this.paper.setSize(this.width, this.height)
    }, a.prototype.zoom = function(a) {
        var b = (this.configs.svgWidth / 2 - this.transform.x) / (this.configs.svgWidth * this.transform.scale), c = (this.configs.svgHeight / 2 - this.transform.y) / (this.configs.svgHeight * this.transform.scale), d = this.transform.scale;
        this.transform.scale = Math.max(Math.min(this.transform.scale * a, this.configs.maxScale), this.configs.minScale), this.transform.x -= (this.transform.scale * this.configs.svgWidth - d * this.configs.svgWidth) / (1 / b), this.transform.y -= (this.transform.scale * this.configs.svgHeight - d * this.configs.svgHeight) / (1 / c), this.applyTransform(!0 && this.configs.animate)
    }, a.prototype.pan = function(a, b) {
        this.transform.x += a, this.transform.y += b, this.applyTransform(!1)
    }, a.prototype.applyTransform = function(a) {
        var b = "t" + this.transform.x + "," + this.transform.y + "s" + this.transform.scale + "," + this.transform.scale + ",0,0";
        a ? (this.transformAnimation && this.mapSet.stop(this.transformAnimation), this.transformAnimation = Raphael.animation({transform: b}, 500), this.mapSet.animate(this.transformAnimation)) : this.mapSet.transform(b)
    }, a.prototype.startDragging = function(a) {
        this.dragging.enabled = !0, this.dragging.lastX = a.offsetX, this.dragging.lastY = a.offsetY
    }, a.prototype.updateDragging = function(a) {
        this.dragging.enabled && (this.pan(a.offsetX - this.dragging.lastX, a.offsetY - this.dragging.lastY), this.dragging.lastX = a.offsetX, this.dragging.lastY = a.offsetY)
    }, a.prototype.endDragging = function() {
        this.dragging.enabled = !1
    }, a
}), angular.module("worldPolicyForumApp").directive("selector", function() {
    return {template: '<div class="selector" ng-transclude></div>',restrict: "E",replace: !0,transclude: !0,require: ["selector", "ngModel"],controllerAs: "selectorController",controller: ["$scope", "$element", "$timeout", function(a, b, c) {
                var d = [], e = 0, f = this, g = null;
                this.init = function(a) {
                    g = a, g.$render = this.render.bind(this)
                }, this.addItem = function(a) {
                    d.push(a), e && c.cancel(e), e = c(function() {
                        f.layout(), f.update()
                    }, 100)
                }, this.layout = function() {
                    for (var a = b.width(), c = a / (d.length - 1), e = 0; e < d.length; e++) {
                        var f = d[e];
                        f.setPosition(c * e), f.setIndex(e)
                    }
                }, this.select = function(a) {
                    g.$setViewValue(a), this.update()
                }, this.update = function() {
                    for (var a = 0; a < d.length; a++) {
                        var b = d[a];
                        b.setSelected(a === g.$modelValue)
                    }
                }, this.render = function() {
                    this.update()
                }
            }],link: function(a, b, c, d) {
            d[0].init(d[1])
        }}
}).directive("selectorItem", function() {
    return {template: '<div class="selector-item" ng-class="{selected: selected}"><a href class="dot" ng-click="selectorItemController.select()"></a><a href class="item-label" ng-click="selectorItemController.select()" ng-show="label" ng-bind="label"></a></div>',restrict: "E",replace: !0,scope: {label: "=?"},require: ["selectorItem", "^selector"],controllerAs: "selectorItemController",controller: ["$scope", "$element", function(a, b) {
                a.selected = !1, a.index = -1;
                var c = null;
                this.init = function(a) {
                    c = a, c.addItem(this)
                }, this.select = function() {
                    c.select(a.index)
                }, this.setPosition = function(a) {
                    $(b).css("left", a)
                }, this.setIndex = function(b) {
                    a.index = b
                }, this.setSelected = function(b) {
                    a.selected = b
                }
            }],link: function(a, b, c, d) {
            d[0].init(d[1])
        }}
}), angular.module("worldPolicyForumApp").controller("CountryCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").controller("AboutMissionCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").controller("AboutHistoryCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").controller("AboutPartnersCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").controller("AboutContactCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("worldPolicyForumApp").directive("aboutMenu", function() {
    return {templateUrl: "views/directives/about-menu.html",restrict: "E",replace: !0,controllerAs: "aboutMenuController",controller: ["$scope", "$location", function(a, b) {
                this.isActive = function(a) {
                    return a === b.path()
                }
            }],link: function() {
        }}
});
