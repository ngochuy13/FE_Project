<!doctype html>
<!--[if lt IE 7 ]> <html class="ie ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Credit Cards – Apply online for your UOB Cards and get S$60 Cash Credit | UOB Singapore</title>
    <link rel="stylesheet" href="vendors/bootstrap.min.css">
    <link rel="stylesheet" href="vendors/idangerous.swiper.css">
    <link rel="stylesheet" href="vendors/jquery.nouislider.min.css">
    <link rel="stylesheet" href="vendors/jquery.nouislider.pips.min.css">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css styles/vendor.css -->
    <!-- bower:css -->
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css styles/main.css -->
    <link rel="stylesheet" href="styles/main.css">
    <!-- endbuild -->
    <!-- build:css styles/card-register-uni.css -->
    <link rel="stylesheet" href="styles/card-register-uni.css">
    <!-- endbuild -->
    <!-- build:js scripts/vendor/modernizr.js -->
    <script src="/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
    <script type='text/javascript' src="vendors/css3-mediaqueries.js"></script>
    <!--[if lt IE 9]>
        <script type='text/javascript' src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script type='text/javascript' src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
    <![endif]-->
</head>

<body class="one-card card-page card-register-page">
    <div class="content-container">
        <div class="header in-step-1">
            <div class="container">
                <div class="header-wrap">
                    <div class="logo pull-left">
                        <a href="promo.html" class="logo-uob">
                            <img src="images/card-register/logo-uob.png" height="42" width="117" alt="UOB logo">
                        </a>
                    </div>
                    <div class="pull-right">
                        <a href="#" class="card-icon">
                            <img src="images/card-register/card-1.png" alt="UOB logo">
                        </a>
                    </div>
                    <div class="clearfix visible-xs"></div>
                    <div class="header-content">
                        <h2>Thank you for choosing <span class="card-title">UOB One</span>.</h2>
                        <div class="media">
                          <div class="media-left">
                            <img class="media-object" src="images/card-register/icon-car.png" alt="icon car">
                          </div>
                          <div class="media-body">
                            <p><strong>Guaranteed same day delivery</strong></p>
                            <p>if you complete the application and send us <a href="#" title="" data-toggle="modal" data-target="#require-document">these documents</a>  by 1 p.m.</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="process-bar">
                    <div class="status-percent">&nbsp;</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="form-status-wrapper col-xs-12">
                        <div class="form-status">
                            <ul>
                                <li class="step-1 active" data-related-step="card-register-step-1"><a href="#"><span class="icon icon-user"></span><span class="text hidden-xs">Basic Details</span><span class="text hidden-sm hidden-md hidden-lg">Step 1</span></a></li>
                                <li class="step-2" data-related-step="card-register-step-2"><a href="#"><span class="icon icon-phone"></span><span class="text hidden-xs">Applicant Information</span><span class="text hidden-sm hidden-md hidden-lg">Step 2</span></a></li>
                                <li class="step-3" data-related-step="card-register-step-3"><a href="#"><span class="icon icon-check"></span><span class="text hidden-xs">Confirmation</span><span class="text hidden-sm hidden-md hidden-lg">Step 3</span></a></li>
                                <li class="step-4" data-related-step="card-register-step-4"><a href="#"><span class="icon icon-like"></span><span class="text hidden-xs">Complete</span><span class="text hidden-sm hidden-md hidden-lg">Step 4</span></a></li>
                            </ul>
                            <span class="border"></span>
                        </div>
                    </div>
                </div>
                <form method="POST" id="card-register-form" class="card-register-form" action="card-register-application-thankyou.html">
                    <!-- Begin: Card Form Step 1 -->
                    <div id="card-register-step-1" class="row card-register-step card-register-step-1" data-percent-complete="2">
                        <div class="identify-customer">
                            <div class="customer-type-switch text-center">
                                <label class="radio-input selected" data-target="#new-customer">
                                    <input type="radio" name="customerChoice" value="New Customer" checked /><span>New customer</span>
                                </label>
                                <label class="radio-input" data-target="#existing-customer">
                                    <input type="radio" name="customerChoice" value="Existing Customer" /><span>Existing UOB Card Customer</span>
                                </label>
                            </div>
                            <div class="lead-form-wrapper">
                                <p class="legend">* Denotes compulsory fields</p>
                                <div id="new-customer" class="new-customer">
                                    <div class="form-outer-bound">
                                        <div class="form-group-container">
                                            <div class="form-group customer-title">
                                                <label class="control-label">Title*</label>
                                                <div class="input-control-group">
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Male" name="title" value="Mr" required />
                                                        <span>Mr</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Mrs" required />
                                                        <span>Mrs</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Ms" required />
                                                        <span>Ms</span>
                                                    </label>
                                                    <br class="hidden-sm hidden-md hidden-lg">
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Mdm" required />
                                                        <span>Mdm</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" name="title" value="Dr" required />
                                                        <span>Dr</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group full-name">
                                                <label class="control-label">Full name as in your NRIC / Passport*</label>
                                                <input type="text" class="form-control" name="name" value="<%=jspVar_name%>"  required />
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group email">
                                                <label class="control-label">Email address*</label>
                                                <input type="text" class="form-control" name="email" value="<%=jspVar_email%>" required data-rule-email="true" />
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group mobile last">
                                                <label class="control-label">Mobile number*</label><br>
                                                <small>(Mandatory for card activation and One-time-Password-SMS-OTP)</small>
                                                <input type="number" class="form-control" name="mobile_phone" value="<%=jspVar_mobile_phone%>" required data-rule-mobile="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="existing-customer" class="existing-customer hide">
                                    <div class="form-outer-bound">
                                        <div class="form-outer-bound-header apply-vs-sms">
                                            <div class="media">
                                              <div class="media-left">
                                                <img class="media-object" src="images/card-register/icon-sms.png" alt="sms registration">
                                              </div>
                                              <div class="media-body">
                                                <h4 class="media-heading"><a href="https://uniservices1.uobgroup.com/secure/forms/add_on_cards_contact_form.jsp?CT=ONE_Card" target="_blank">Apply via SMS  for Singapore citizens and PRs</a></h4>
                                                <p>You will get your card in 10 working days</p>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="separator or-separator text-center">or</p>
                                    <div class="form-outer-bound">
                                        <div class="form-outer-bound-header">
                                            <div class="media">
                                              <div class="media-left">
                                                <img class="media-object" src="images/card-register/icon-globe.png" alt="normal registration">
                                              </div>
                                              <div class="media-body">
                                                <h4 class="media-heading">Apply online for foreigners or if you require same day delivery.</h4>
                                                <p>To begin, fill up the following form.</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group customer-title">
                                                <label class="control-label">Title*</label>
                                                <div class="input-control-group">
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Male" name="title" value="Mr" required />
                                                        <span>Mr</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Mrs" required />
                                                        <span>Mrs</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Ms" required selected />
                                                        <span>Ms</span>
                                                    </label>
                                                    <br class="hidden-sm hidden-md hidden-lg">
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Mdm" required />
                                                        <span>Mdm</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" name="title" value="Dr" required />
                                                        <span>Dr</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group full-name">
                                                <label class="control-label">Full name as in your NRIC / Passport*</label>
                                                <input type="text" class="form-control" name="name" value="<%=jspVar_name%>" placeholder="" required />
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group email">
                                                <label class="control-label">Email address*</label>
                                                <input type="text" class="form-control" name="email" value="<%=jspVar_email%>" required data-rule-email="true" />
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group mobile last">
                                                <label class="control-label blank">Mobile number*</label><br>
                                                <small>(Mandatory for card activation and One-time-Password-SMS-OTP)</small>
                                                <input type="number" class="form-control" name="mobile_phone" value="<%=jspVar_mobile_phone%>" required data-rule-mobile="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="submission step-1-submission">
                                <a href="#" class="btn primary-btn btn-1 btn-submit">Continue</a>
                            </div>
                        </div>
                    </div>
                    <!-- End: Card Form -->
                    <div id="card-register-step-2" class="row card-register-step card-register-step-2 hide" data-percent-complete="28">
                    <!-- Begin: Card Form Step 2-->
                        <input type="hidden" name="existingCustomer" />
                        <input type="hidden" name="title" />
                        <input type="hidden" name="fullname" />
                        <input type="hidden" name="email" value="<%=jspVar_email%>" />
                        <input type="hidden" name="mobile" />
                        <div class="container">
                            <div class="row">
                              <div class="col-sm-12">
                                <p class="legend">* Denotes compulsory fields</p>
                              </div>
                              <div class="col-sm-6">
                                <div class="card-wrapper">
                                    <div class="card-name"></div>
                                    <img class="card-face" data-card="first" src="images/card-register/card-1.png" alt="card 1" />
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="card-wrapper hide">
                                    <div class="card-name"></div>
                                    <img class="card-face" data-card="second" src="images/card-register/card-1.png" alt="card 1" />
                                </div>
                              </div>
                            </div>
                            
                            <div class="form-group-container">
                                <div class="form-group frm-name-card">
                                    <label class="control-label">Name to display on Card*</label>
                                    <input type="text" class="form-control" maxlength="19" name="name_creditcard"  value="<%=jspVar_name_creditcard%>"  required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Gender*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input radio-input-gender">
                                            <input type="radio" name="gender" value="Male" required />
                                            <span class="icon-male"></span> <span>Male</span>
                                        </label>
                                        <label class="radio-input radio-input-gender">
                                            <input type="radio" name="gender" value="Female" required />
                                            <span class="icon-female"></span> <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container form-group-fulldate-group">
                                <div class="form-group">
                                    <label class="control-label">Date of birth*</label>
                                    <input type="text" placeholder="DD / MM / YYYY" class="form-control real-date" name="dob" value="<%=jspVar_dob%>" data-rule-yearOldRule="true" required data-rule-dateITA="true" tab="-1" />
                                    <div class="fake-date-input">
                                        <input type="text" name="dd_dob" value="<%=jspVar_dd_dob%>"  placeholder="DD" class="form-control fake-day ignore" maxlength="2" /><span>/</span>
                                        <input type="text" name="mm_dob" value="<%=jspVar_mm_dob%>"  placeholder="MM" class="form-control fake-month ignore" maxlength="2" /><span>/</span>
                                        <input type="text" name="yyyy_dob" value="<%=jspVar_yyyy_dob%>"  placeholder="YYYY" class="form-control fake-year ignore" maxlength="4" />
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Nationality*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="nationality" value="Singaporean" required />
                                            <span>Singaporean</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="nationality" value="Singapore PR" required />
                                            <span>Singapore PR</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="nationality" value="Foreigners" required />
                                            <span>Foreigners</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <!-- Appear when Nationality is Singapore -->
                            <div class="hide" data-related-to="nationality" data-related-val="Singaporean">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">NRIC/PR No.*</label>
                                        <input type="text" class="form-control" name="nric"  value="<%=jspVar_nric%>" required data-rule-NRIC="true" data-binding-field="SingaporePR-NRIC"/>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="hide" data-related-to="nationality" data-related-val="Singapore PR">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">NRIC/PR No.*</label>
                                        <input type="text" class="form-control" name="SingaporePR-NRIC" required data-rule-NRIC="true" data-binding-field="nric"/>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Country*</label>
                                        <div class="select-control-group">
                                            <select name="foreigner_country" class="selectUI theme-01" required>
                                                <option value="">Country</option>
                                                <%
                                                    String  strTmpSelect = "";
                                                   int iVecSize = vecCountryNames.size();   
                                                       for (int i = 0; i < iVecSize ; i++) 
                                                       {                                     
                                                         String strTmpValue = (String)vecCountryCV.get(i);
                                                         String strTmpName = (String)vecCountryNames.get(i);
                                                         if (jspVar_foreigner_country != null && !strTmpName.equalsIgnoreCase("Singapore")  && strTmpValue.equalsIgnoreCase(jspVar_foreigner_country))
                                                              {                             
                                                                  strTmpSelect = "<option value=\"" + strTmpValue + "\" SELECTED>" + strTmpName + "</option>\n";
                                                                  out.print(strTmpSelect);                                            
                                                              }
                                                           else if(!strTmpName.equalsIgnoreCase("Singapore"))
                                                              {
                                                                strTmpSelect = "<option value=\"" + strTmpValue + "\" >" + strTmpName + "</option>\n";
                                                                out.print(strTmpSelect);
                                                              }                         
                                                        }
                                                %>
                                            </select>
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Passport Number*</label>
                                        <input type="text" name="passport" class="form-control" required value="<% if(jspVar_passport != null) out.print(jspVar_passport);%>" />
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container form-group-fulldate-group">
                                    <div class="form-group">
                                        <label class="control-label">Passport expiry date*</label>
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control real-date" name="ep_expiry_date" value="<%=jspVar_ep_expiry_date%>" required data-rule-dateITA="true" tab="-1" />
                                        <div class="fake-date-input">
                                            <input type="text" name="id_expiry_dd" value="<%=jspVar_id_expiry_dd%>" placeholder="DD" class="form-control fake-day ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="id_expiry_mm" value="<%=jspVar_id_expiry_mm%>" placeholder="MM" class="form-control fake-month ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="id_expiry_yyyy" value="<%=jspVar_id_expiry_yyyy%>" placeholder="YYYY" class="form-control fake-year ignore" maxlength="4" />
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <!-- Appear when Nationality is not Singapore -->
                            <div class="hide" data-related-to="nationality" data-related-val="Foreigners">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Country*</label>
                                        <div class="select-control-group">
                                            <select name="foreigner_country" class="selectUI theme-01" required>
                                                <option value="">Country</option>
                                                <%
                                                    String  strTmpSelect = "";
                                                   int iVecSize = vecCountryNames.size();   
                                                       for (int i = 0; i < iVecSize ; i++) 
                                                       {                                     
                                                         String strTmpValue = (String)vecCountryCV.get(i);
                                                         String strTmpName = (String)vecCountryNames.get(i);
                                                         if (jspVar_foreigner_country != null && !strTmpName.equalsIgnoreCase("Singapore")  && strTmpValue.equalsIgnoreCase(jspVar_foreigner_country))
                                                              {                             
                                                                  strTmpSelect = "<option value=\"" + strTmpValue + "\" SELECTED>" + strTmpName + "</option>\n";
                                                                  out.print(strTmpSelect);                                            
                                                              }
                                                           else if(!strTmpName.equalsIgnoreCase("Singapore"))
                                                              {
                                                                strTmpSelect = "<option value=\"" + strTmpValue + "\" >" + strTmpName + "</option>\n";
                                                                out.print(strTmpSelect);
                                                              }                         
                                                        }
                                                %>
                                            </select>
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Passport Number*</label>
                                        <input type="text" name="passport" value="<%=jspVar_passport%>" class="form-control" required />
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container form-group-fulldate-group">
                                    <div class="form-group">
                                        <label class="control-label">Passport expiry date*</label>
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control real-date"  name="ep_expiry_date" value="<%=jspVar_ep_expiry_date%>" required data-rule-dateITA="true" tab="-1" />
                                        <div class="fake-date-input">
                                            <input type="text" name="id_expiry_dd" value="<%=jspVar_id_expiry_dd%>" placeholder="DD" class="form-control fake-day ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="id_expiry_mm" value="<%=jspVar_id_expiry_mm%>" placeholder="MM" class="form-control fake-month ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="id_expiry_yyyy" value="<%=jspVar_id_expiry_yyyy%>" placeholder="YYYY" class="form-control fake-year ignore" maxlength="4" />
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container form-group-fulldate-group">
                                    <div class="form-group">
                                        <label class="control-label">Employment Passport expiry date*</label>
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control real-date" name="ep_expiry_date" value="<%=jspVar_ep_expiry_date%>" required data-rule-dateITA="true" tab="-1" />
                                        <div class="fake-date-input">
                                            <input type="text" name="ep_expiry_dd" value="<%=jspVar_ep_expiry_dd%>" placeholder="DD" class="form-control fake-day ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="ep_expiry_mm" value="<%=jspVar_ep_expiry_mm%>" placeholder="MM" class="form-control fake-month ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="ep_expiry_yyyy" value="<%=jspVar_ep_expiry_yyyy%>" placeholder="YYYY" class="form-control fake-year ignore" maxlength="4" />
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Highest education*</label>
                                    <div class="select-control-group">
                                        <select name="qualification" class="selectUI theme-01" required>
                                            <option value="">Select</option>
                                            <option value="GCE A Level or Equivalent">GCE A Level or Equivalent</option>
                                            <option value="Bachelor Degree">Bachelor Degree</option>
                                            <option value="Certificate (NTC / LCCI / Others)">Certificate (NTC / LCCI / Others)</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Professional Qualification">Professional Qualification</option>
                                            <option value="Post Graduate Diploma">Post Graduate Diploma</option>
                                            <option value="Honours Degree">Honours Degree</option>
                                            <option value="Masters Degree">Masters Degree</option>
                                            <option value="GCE N Level or Equivalent">GCE N Level or Equivalent</option>
                                            <option value="GCE O Level or Equivalent">GCE O Level or Equivalent</option>
                                            <option value="Primary">Primary</option>
                                            <option value="Secondary">Secondary</option>
                                            <option value="Doctorate Degree">Doctorate Degree</option>
                                            <option value="Advanced Diploma">Advanced Diploma</option>
                                            <option value="No Formal Education">No Formal Education</option>
                                        </select>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Marital status*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="single" required />
                                            <span>Single</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="married" required />
                                            <span>Married</span>
                                        </label>
                                        <br class="hidden-sm hidden-md hidden-lg">
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="divorced" required />
                                            <span>Divorced</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="widowed" required />
                                            <span>Widowed</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Number of dependents*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="0" required />
                                            <span>0</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="1" required />
                                            <span>1</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="2" required />
                                            <span>2</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="3" required />
                                            <span>3</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="4" required />
                                            <span>4</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="5" required />
                                            <span>5</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="5+" required />
                                            <span>More than 5</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Mother's maiden name*</label>
                                    <input type="text" class="form-control" name="maiden_name" value="<%=jspVar_maiden_name%>" required maxlength="15" data-msg-maxlength="Maximum 15 characters" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Home contact number</label>
                                    <input type="number" class="form-control phone-number" name="home_phone" value="<%=jspVar_home_phone%>" data-rule-phone="true" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Office contact number</label>
                                    <input type="number" class="form-control phone-number" name="office_phone" value="<%=jspVar_office_phone%>" data-rule-phone="true" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="hide" data-related-to="nationality" data-related-val="Foreigners">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Oversea Contact No.*</label>
                                        <input type="number" class="form-control" name="other_overseas_contact_number" value="<%=jspVar_other_overseas_contact_number%>" minlength="5" required />
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Oversea Address*</label>
                                        <input type="text" class="form-control" name="other_overseas_postal_address" value="<%=jspVar_other_overseas_postal_address%>" required />
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Home postal code*</label>
                                    <div class="row input-control-group">
                                        <div class="col-xs-8 col-md-8">
                                            <input type="text" class="form-control" name="homeaddr_pin" value="<%=jspVar_homeaddr_pin%>"  maxlength="6" minlength="6" data-type="numerals" required />
                                        </div>
                                        <div class="col-xs-4 col-md-4">
                                            <button class="btn btn-3 pull-right btn-find"><img src="images/card-register/icon-search.png" alt="Find" /></button>
                                        </div>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Street Name*</label>
                                    <input type="text" class="form-control" name="officeaddr_street_name" value="<%=jspVar_officeaddr_street_name%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Building Name</label>
                                    <input type="text" class="form-control" name="officeaddr_build_name" value="<%=jspVar_officeaddr_build_name%>"  />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Block / House No.*</label>
                                    <input type="text" class="form-control" name="officeaddr_blk_no" value="<%=jspVar_officeaddr_blk_no%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Storey*</label>
                                    <input type="text" class="form-control" name="officeaddr_storey_no" value="<%=jspVar_officeaddr_storey_no%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Unit No.*</label>
                                    <input type="text" class="form-control" name="officeaddr_unit_no" value="<%=jspVar_officeaddr_unit_no%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">State / City</label>
                                    <input type="text" class="form-control" name="officeaddr_city_state" value="<%=jspVar_officeaddr_city_state%>" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Residence Status*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Owned" required />
                                            <span>Owned</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Parents" required />
                                            <span>Parent's</span>
                                        </label>
                                        <br class="hidden-sm hidden-md hidden-lg">
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Others" required />
                                            <span>Others</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Rented" required />
                                            <span>Rented</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Country of residence*</label><br>
                                    <small>Country you are currently residing in or intend to reside in for more than 1 year (e.g. Singapore)</small>
                                    <div class="select-control-group">
                                        <select name="homeaddr_country" class="selectUI theme-01" required>
                                                <option value="">Country</option>
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Canary Islands">Canary Islands</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Channel Islands">Channel Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Island">Cocos Island</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote DIvoire">Cote D'Ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaco">Curacao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Ter">French Southern Ter</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Great Britain">Great Britain</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea North">Korea North</option>
                                                <option value="Korea Sout">Korea South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nambia">Nambia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherland Antilles">Netherland Antilles</option>
                                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                <option value="Nevis">Nevis</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau Island">Palau Island</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Phillipines">Philippines</option>
                                                <option value="Pitcairn Island">Pitcairn Island</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                <option value="Republic of Serbia">Republic of Serbia</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="St Barthelemy">St Barthelemy</option>
                                                <option value="St Eustatius">St Eustatius</option>
                                                <option value="St Helena">St Helena</option>
                                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                <option value="St Lucia">St Lucia</option>
                                                <option value="St Maarten">St Maarten</option>
                                                <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                                                <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                                                <option value="Saipan">Saipan</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="Samoa American">Samoa American</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore" selected="selected">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tahiti">Tahiti</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Erimates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States of America">United States of America</option>
                                                <option value="Uraguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State">Vatican City State</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                <option value="Wake Island">Wake Island</option>
                                                <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container form-group-container-date">
                                <div class="form-group">
                                    <label class="control-label">Years of living at the above address*</label>
                                    <div class="input-control-group date">
                                        <input type="text" class="duration-date-group" placeholder="YY" data-type="numerals" name="years_residence" value="<%=jspVar_years_residence%>" maxlength="2" /> Year(s) and <input type="text" class="duration-date-group" placeholder="MM" name="months_residence" value="<%=jspVar_months_residence%>" data-type="numerals" maxlength="2" /> Month(s)
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">What type of property is this*</label>
                                    <div class="input-control-group property-group">
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="HDB (3Rm/4Rm)" required />
                                            <span>HDB (3Rm/4Rm)</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="HDB (5Rm / Executive Apartment)" required />
                                            <span>HDB (5Rm / Executive Apartment)</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="Executive Condo / HUDC" required />
                                            <span>Executive Condo / HUDC</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="Private Apartment / Condominium" required />
                                            <span>Private Apartment / Condominium</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="Terrace" required />
                                            <span>Terrace</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="Bungalow" required />
                                            <span>Bungalow</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="Semi-Detached" required />
                                            <span>Semi-Detached</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Company name*</label>
                                    <input type="text" class="form-control" name="employer" required value="<% if(jspVar_employer != null) out.print(jspVar_employer);%>" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Are you self-employed?*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="self_employed" value="yes" required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="self_employed" value="no" required />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">What type of business is <span class="company-name"></span> into?*</label>
                                    <div class="select-control-group">
                                        <select name="current_business" class="selectUI theme-01" required>
                                            <option value="">Select</option>
                                            <%
                                               String strTmpSelectBiz = "";
                                               int iVecSizeBiz = vecBizTypes.size();
                                              
                                               for (int i = 0; i < iVecSizeBiz ; i++) {
                                                
                                                 String strTmpValueBiz = (String)vecBizCV.get(i);
                                                 String strTmpNameBiz = (String)vecBizTypes.get(i);

                                                    if (jspVar_current_business != null && strTmpValueBiz.equalsIgnoreCase(jspVar_current_business))
                                                      {

                                                 strTmpSelectBiz = "<option value=\"" + strTmpValueBiz + "\" SELECTED>" + strTmpNameBiz + "</option>\n";
                                                 out.print(strTmpSelectBiz);
                                                          
                                                      }
                                                    else
                                                      {
                                                 strTmpSelectBiz = "<option value=\"" + strTmpValueBiz + "\" >" + strTmpNameBiz + "</option>\n";
                                                 out.print(strTmpSelectBiz);
                                                      }
                                                }
                                            %>
                                        </select>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Occupation*</label>
                                    <div class="select-control-group">
                                        <select name="designation" class="selectUI theme-01" required>
                                            <option value="">Select</option>
                                            <option value="Accounts Assistant">Accounts Assistant</option>
                                            <option value="Government Officer">Government Officer</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Operation Assistant">Operation Assistant</option>
                                            <option value="Service Industry Staff">Service Industry Staff</option>
                                            <option value="Accountant / Financial Controller">Accountant / Financial Controller</option>
                                            <option value="Director / Managing Director / Chairman">Director / Managing Director / Chairman</option>
                                            <option value="Insurance Agent / Financial Planner">Insurance Agent / Financial Planner</option>
                                            <option value="Sole Proprietor / Partner">Sole Proprietor / Partner</option>
                                            <option value="Technician / Engineering Assistant / Traffic Assistant">Technician / Engineering Assistant / Traffic Assistant</option>
                                            <option value="Consultant">Consultant</option>
                                            <option value="Engineer">Engineer</option>
                                            <option value="Marketing Executive">Marketing Executive</option>
                                            <option value="Sales Assistant">Sales Assistant</option>
                                            <option value="Sales Executive">Sales Executive</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container form-group-container-date">
                                <div class="form-group">
                                    <label class="control-label">Number of years in employment*</label>
                                    <div class="input-control-group date">
                                        <input type="text" class="duration-date-group-2" data-type="numerals" placeholder="YY" name="service_years" value="<%=jspVar_service_years%>" maxlength="2" /> Year(s) and <input type="text" class="duration-date-group-2" placeholder="MM" name="service_months" value="<%=jspVar_service_months%>" data-type="numerals" maxlength="2" /> Month(s)
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Monthly gross income*</label>
                                    <div class="currency-wrapper">
                                        <span class="currency">S$</span><input type="text" class="form-control" data-type="numerals" data-format="currency" name="annual_gross_income" value="<%=jspVar_annual_gross_income%>" required />
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Office postal code*</label>
                                    <div class="row input-control-group">
                                        <div class="col-xs-8 col-md-8">
                                            <input type="text" class="form-control" name="officeaddr_pin" value="<%=jspVar_officeaddr_pin%>" maxlength="6" minlength="6" required data-type="numerals" />
                                        </div>
                                        <div class="col-xs-4 col-md-4">
                                            <button class="btn btn-3 pull-right btn-find"><img src="images/card-register/icon-search.png" alt="Find" /></button>
                                        </div>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Street Name*</label>
                                    <input type="text" class="form-control" name="officeaddr_street_name" value="<%=jspVar_officeaddr_street_name%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Building Name</label>
                                    <input type="text" class="form-control" name="officeaddr_build_name" value="<%=jspVar_officeaddr_build_name%>"/>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Block / House No.*</label>
                                    <input type="text" class="form-control" name="officeaddr_blk_no" value="<%=jspVar_officeaddr_blk_no%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Storey*</label>
                                    <input type="text" class="form-control" name="officeaddr_storey_no" value="<%=jspVar_officeaddr_storey_no%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Unit No.*</label>
                                    <input type="text" class="form-control" name="officeaddr_unit_no" value="<%=jspVar_officeaddr_unit_no%>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">State / City</label>
                                    <input type="text" class="form-control" name="officeaddr_city_state" value="<%=jspVar_officeaddr_city_state%>" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Country*</label>
                                    <div class="select-control-group">
                                        <select name="officeaddr_country" class="selectUI theme-01" required>
                                                <option value="">Country</option>
                                                <option value="Afganistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Canary Islands">Canary Islands</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Channel Islands">Channel Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos Island">Cocos Island</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote DIvoire">Cote D'Ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaco">Curacao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands">Falkland Islands</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Ter">French Southern Ter</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Great Britain">Great Britain</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea North">Korea North</option>
                                                <option value="Korea Sout">Korea South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nambia">Nambia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherland Antilles">Netherland Antilles</option>
                                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                <option value="Nevis">Nevis</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau Island">Palau Island</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Phillipines">Philippines</option>
                                                <option value="Pitcairn Island">Pitcairn Island</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                <option value="Republic of Serbia">Republic of Serbia</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="St Barthelemy">St Barthelemy</option>
                                                <option value="St Eustatius">St Eustatius</option>
                                                <option value="St Helena">St Helena</option>
                                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                <option value="St Lucia">St Lucia</option>
                                                <option value="St Maarten">St Maarten</option>
                                                <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                                                <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                                                <option value="Saipan">Saipan</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="Samoa American">Samoa American</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore" selected="selected">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Tahiti">Tahiti</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Erimates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States of America">United States of America</option>
                                                <option value="Uraguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State">Vatican City State</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                <option value="Wake Island">Wake Island</option>
                                                <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">My billing address will be...*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="billto" value="home" required />
                                            <span>My home address</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="billto" value="office" required />
                                            <span>My office address</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <!-- <div class="form-group-container form-group-fulldate-group">
                                <div class="form-group">
                                    <label class="control-label">Provide your CPF Contribution History Statement (optional)</label><br>
                                    <small>Latest 12 months' CPF Contribution History Statement Submit via <a href="http://www.uob.com.sg/submitcpfstmt.html" target="_blank">CPF link</a> here. (You will need your Singpass to gain access) </small>
                                    <div class="CPF-submission-confirmation">
                                        <label class="checkbox-item">
                                            <input type="checkbox" id="check-confirm-cpf-submission" name="checkConfirmCpfSubmission">
                                            <span class="checkbox-1">&nbsp;</span>
                                            <span class="text">I have submitted my CPF Contribution History Statement</span>
                                        </label>
                                    </div>
                                    <div class="CPFSubmissionDate">
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control real-date" name="CPFStatementDate" data-rule-dateITA="true" tab="-1" />
                                        <div class="fake-date-input">
                                            <input type="text" placeholder="DD" name="fakeCPFDayInput" class="form-control fake-day ignore" maxlength="2" /><span>/</span>
                                            <input type="text" placeholder="MM" name="fakeCPFMonthInput" class="form-control fake-month ignore" maxlength="2" /><span>/</span>
                                            <input type="text" placeholder="YYYY" name="fakeCPFYearInput" class="form-control fake-year ignore" maxlength="4" />
                                        </div>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div> -->
                            <div class="form-group-container hide singtel-acc">
                                <div class="form-group">
                                    <label class="control-label">Singtel account no.*</label>
                                    <input type="text" class="form-control" name="singtel_account_number"  value="<%=jspVar_singtel_account_number%>" required data-type="numerals" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Do you want to link your UOB Credit Card account to your Frequent Flyer membership?*</label><br>
                                    <small>A S$25 conversion fee will be charged to your Card for each conversion of UNI$ to frequent flyer miles.</small>
                                    <div class="input-control-group">
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" value="yes" required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" value="no" required />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="hide" data-related-to="linkKrisFlyer" data-related-val="yes">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">My KrisFlyer member number</label>
                                        <input type="text" class="form-control kris-flyer" name="krisflyer_number" value="<%=jspVar_krisflyer_number%>" data-type="numerals" /><br>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">My Asia Miles membership number</label>
                                        <input type="text" class="form-control kris-flyer" name="asiamiles_number" value="<%=jspVar_asiamiles_number%>" data-type="numerals" /><br>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">I would like to set my credit limit*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="CLPref" value="no" required />
                                            <span>I'm fine with what UOB decides</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="CLPref" value="yes" required />
                                            <span>Yes, I want to set the limit</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="hide" data-related-to="setCreditLimitConfirm" data-related-val="yes">
                                    <div class="range-block">
                                        <!-- Range slider -->
                                        <div class="range-blocks-container active" id="card-limit-slider">
                                            <div class="range-container active">
                                                <div class="range-slider"></div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <input id="card-limit" type="text" name="CreditLimit" value="<%=jspVar_CreditLimit%>" />
                                        </div>
                                        <div class="col-xs-12 col-md-6 col-md-push-3">
                                        </div>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">I want to enjoy extra cash at low interest rates – apply for a UOB Personal Loans or Funds Transfer*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" value="yes" required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" checked value="no" required />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="hide" data-related-to="extraCash" data-related-val="yes">
                                <div class="form-group-container payment-method">
                                    <div class="form-group">
                                        <label class="control-label">What kind of repayment method do you prefer?*</label>
                                        <div class="input-control-group">
                                            <label class="radio-input">
                                                <input type="radio" name="cards_fund_transfer_repay" value="flexible" required />
                                                <span>Flexible repayment with Cards Funds Transfer</span>
                                            </label>
                                            <label class="radio-input">
                                                <input type="radio" name="cards_fund_transfer_repay" value="fixed" required />
                                                <span>Fixed repayment with Cards Personal Loan</span>
                                            </label>
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="hide" data-related-to="repaymentMethod" data-related-val="flexible">
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Tenor*</label>
                                            <div class="input-control-group">
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="0% for 6 months with 2.5% fee" required />
                                                    <span>0% for 6 months with 2.5% fee</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="0% for 12 months with 4.5% fee" required />
                                                    <span>0% for 12 months with 4.5% fee</span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                </div>
                                <div class="hide" data-related-to="repaymentMethod" data-related-val="fixed">
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Tenor*</label>
                                            <div class="input-control-group">
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="12 Months" required />
                                                    <span>12 Months</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="24 Months" required />
                                                    <span>24 Months</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="36 Months" required />
                                                    <span>36 Months</span>
                                                </label>
                                                <br>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="48 Months" required />
                                                    <span>48 Months</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="60 Months" required />
                                                    <span>60 Months</span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                </div>
                                <div class="hide" data-related-to="extraCash" data-related-val="yes">
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Loan Amount*</label>
                                            <div class="currency-wrapper">
                                                <span class="currency">S$</span><input type="text" class="form-control" data-type="numerals" data-format="currency" name="transfer_loan_amount" value="<%=jspVar_transfer_loan_amount%>" required />
                                            </div>
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Name of crediting bank*</label>
                                            <input type="text" class="form-control" name="name_of_bank" value="<%=jspVar_name_of_bank%>" required />
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Name of account holder*</label>
                                            <input type="text" class="form-control" name="name_of_account_holder" value="<%=jspVar_name_of_account_holder%>" required />
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Account number*</label>
                                            <input type="text" class="form-control" name="bank_account_number" value="<%=jspVar_bank_account_number%>" required />
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">I want same-day delivery*</label><br>
                                    <small>Submit your documents to uobcc.credit@uobgroup.com before 1pm~</small>
                                    <div class="input-control-group">
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" value="yes" required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" value="no" required />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="row foot-note">
                              <div class="col-xs-12 text-left">
                                ~Same day card delivery is only applicable to credit card applications submitted online with complete required documents before 1 pm, Mon-Fri (excluding Public Holidays). For applications submitted on Sat and Sun, card will be delivered by Tuesday. Same day card delivery service is not applicable to: i) Contact form and Acceptance form submissions; ii) Incomplete applications pending further documentation; iii) Existing UOB customers holding a different NRIC / Passport / PR number per bank records.
                              </div>
                            </div>
                            <div class="submission step-2-submission">
                                <div class="row">
                                    <div class="col-xs-6 text-left">
                                        <a href="javascript:;" title="Previous" class="btn primary-btn btn-1 btn-edit-register" data-target="card-register-step-1">Previous</a>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <a href="#" class="btn primary-btn btn-1 btn-submit">Continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- End: Card Form -->
                    </div>
                    <div class="row card-register-step card-register-step-3 hide" data-percent-complete="89">
                    <!-- Begin: Card Confirm Step 3-->
                        <div class="confirm-content">
                            <h2 class="confirm-title">Please review your details and conﬁrm…</h2>
                            <h3>Your Particulars</h3>
                            <table class="table confirm-table">
                                <tr>
                                    <td class="label-name">Title</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="title"><%=jspVar_title%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Full Name as in your NRIC / Passport</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="fullname"><%=jspVar_fullname%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Email address</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="email"><%=jspVar_email%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Mobile number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="mobile"><%=jspVar_mobile%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Name to display on Card</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="name_creditcard"><%=jspVar_name_creditcard%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Gender</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="gender"><%=jspVar_gender%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Date of birth</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="dob"><%=jspVar_dob%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Nationality</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="nationality"><%=jspVar_nationality%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">NRIC No*</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="NRIC"><%=jspVar_NRIC%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Country</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="country"><%=jspVar_country%></td>
                                </tr>
                                <!-- For Singapore PR -->
                                <tr>
                                    <td class="label-name">Passport number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="passport"><%=jspVar_passport%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Passport expiry date</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="ep_expiry_date"><%=jspVar_ep_expiry_date%></td>
                                </tr>
                                <!-- END For Singapore PR -->
                                <!-- For Foreigner -->
                                <tr>
                                    <td class="label-name">Passport number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="passport"><%=jspVar_passport%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Passport expiry date</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="passport"><%=jspVar_passport%></td>
                                </tr>
                                <!-- END For Foreigner -->
                                <tr>
                                    <td class="label-name">Highest education</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="qualification"><%=jspVar_qualification%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Marital status</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="maritalstatus"><%=jspVar_maritalstatus%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Number of dependents</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="dependents"><%=jspVar_dependents%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Mother’s maiden name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="maiden_name"><%=jspVar_maiden_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home contact number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="home_phone" <%=jspVar_%><%=jspVar_</td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office contact number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="office_phone"><%=jspVar_office_phone%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Overseas contact number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="other_overseas_contact_number"><%=jspVar_other_overseas_contact_number%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Overseas address</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="other_overseas_postal_address"><%=jspVar_other_overseas_postal_address%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Street Name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_street_name"><%=jspVar_officeaddr_street_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Building Name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_build_name"><%=jspVar_officeaddr_build_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Block Number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_blk_no"><%=jspVar_officeaddr_blk_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Storey No</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_storey_no"><%=jspVar_officeaddr_storey_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Unit No</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_unit_no"><%=jspVar_officeaddr_unit_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home State</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_city_state"><%=jspVar_officeaddr_city_state%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Residence Status</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="residence"><%=jspVar_residence%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Country of Residence</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="homeaddr_country"><%=jspVar_homeaddr_country%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Years living in the home address</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="timeofLivingInAboveAddr"><%=jspVar_timeofLivingInAboveAddr%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Property type</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="residence_type"><%=jspVar_residence_type%></td>
                                </tr>
                              </table>
                              <h3>Your Workplace</h3>
                              <table class="table confirm-table">  
                                <tr>
                                    <td class="label-name">Company name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="employer"><%=jspVar_employer%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Self-employed</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="self_employed"><%=jspVar_self_employed%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Business type</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="current_business"><%=jspVar_current_business%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Occupation</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="designation"><%=jspVar_designation%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Years in employment</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data"  data-model="timeofEmployment"><%=jspVar_timeofEmployment%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Annual gross income</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data currency" data-model="annual_gross_income"><%=jspVar_annual_gross_income%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office Street Name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_street_name"><%=jspVar_officeaddr_street_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office Buidling Name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_build_name"><%=jspVar_officeaddr_build_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office Block Number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_blk_no"><%=jspVar_officeaddr_blk_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office Storey Number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_storey_no"><%=jspVar_officeaddr_storey_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office Unit Number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_unit_no"><%=jspVar_officeaddr_unit_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office State</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_city_state"><%=jspVar_officeaddr_city_state%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Office Country</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="officeaddr_country"><%=jspVar_officeaddr_country%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Prefered billing address</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="billto"><%=jspVar_billto%></td>
                                </tr>
                                <!-- <tr>
                                    <td class="label-name">CPF statement submission date</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="CPFStatementDate"><%=jspVar_CPFStatementDate%></td>
                                </tr> -->
                                <tr>
                                    <td class="label-name">Singtel account number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="singtel_account_number"><%=jspVar_singtel_account_number%></td>
                                </tr>
                              </table>
                              <h3>Your fund transfer and personal loan application</h3>
                              <table class="table confirm-table">
                                <tr>
                                    <td class="label-name">Additional loan</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="cards_extra_cash_yes_no"><%=jspVar_cards_extra_cash_yes_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Tenor</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="tenor"><%=jspVar_tenor%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Loan amount</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data currency" data-model="transfer_loan_amount"><%=jspVar_transfer_loan_amount%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Name of crediting bank</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="name_of_bank"><%=jspVar_name_of_bank%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Name of account holder</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="name_of_account_holder"><%=jspVar_name_of_account_holder%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Account number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="bank_account_number"><%=jspVar_bank_account_number%></td>
                                </tr>
                              </table>
                              <h3>Your preferred credit limit</h3>
                              <table class="table confirm-table">  
                                <tr>
                                    <td class="label-name">Preferred credit limit</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data currency" data-model="CreditLimit"><%=jspVar_CreditLimit%></td>
                                </tr>
                              </table>
                              <h3>Your frequent flyer registration</h3>
                              <table class="table confirm-table">  
                                <tr>
                                    <td class="label-name">KrisFlyer member number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="krisflyer_number"><%=jspVar_krisflyer_number%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Asia Miles membership number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="asiamiles_number"><%=jspVar_asiamiles_number%></td>
                                </tr>
                              </table>
                              <h3>Other information</h3>
                              <table class="table confirm-table">
                                <tr>
                                    <td class="label-name">Same-day delivery</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="cards_extra_cash_yes_no"><%=jspVar_cards_extra_cash_yes_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Existing Customer</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="existingCustomer"><%=jspVar_existingCustomer%></td>
                                </tr>
                              </table>
                        </div>
                        <div class="confirm-footer footer">
                            <div class="container">
                                <div class="footer-content">
                                    <h3>Declaration & Authorization <small>(CACPDA-V6.0-21052014)</small></h3>
                                    <label class="checkbox-item" for="check-informed">
                                        <input type="checkbox" id="check-informed" name="acceptDAndA" required>
                                        <span class="checkbox-1">&nbsp;</span>
                                        <span class="text">I/We would like to be kept informed of promotions, offers, products and/or services marketed by United Overseas Bank Limited and its related corporations ("UOB Group Members") and, where applicable the co-brand partner associated with the card applied for in this application ("Co-Brand Partner") and I/we hereby give my/our consent to any UOB Group Member and the Co-Brand Partner to contact me/us via all modes of communication (voice calls, SMS/MMS, fax) using my/our telephone numbers in your records.</span>
                                        <span class="text">I/We agree that any consent given is additional to any other consent which I may have previously provided to UOB Group Members to inform me of marketing information; and does not supersede any rights which the UOB Group Members may have at law to collect, use and disclose my personal data.</span>
                                    </label>
                                    <h3>UOB Credit Card Online Acceptance</h3>
                                    <label class="checkbox-item" for="check-acceptance">
                                        <input type="checkbox" id="check-acceptance" name="acceptTAndC" required>
                                        <span class="checkbox-1">&nbsp;</span>
                                        <span class="text">YES, I have read and understood the Declaration and Authorization and the Terms and Conditions for UOB Online Application (collectively, the "Terms"). By clicking "submit", I accept and agree to be bound by the Terms and request the Bank to issue the selected credit card(s) to me. Click <a href="https://uniservices1.uobgroup.com/secure/forms/TermsAndConditions.jsp" target="_blank" title="Terms And Conditions">here</a> to read the Terms and Conditions for UOB Online Application. All other terms and conditions are available at <a href="http://www.uob.com.sg/" target="_blank" title="UOB : Personal Banking">uob.com.sg.</a> and at any branch.</span>
                                    </label>
                                    <p><a href="javascript:;" title="Read Full Text" data-toggle="modal" data-target="#declaration-information">Read Full Text</a></p>
                                </div>
                                <div class="footer-content">
                                    <h3>General Information</h3>
                                    <p>Please complete all ﬁelds and attach the required documents. Applications with incomplete information or supporting documents will result in delay in processing.</p>
                                    <p>Existing UOB Principal Cardmembers are only required to complete the first section under "Your Personal Details" and submit the form electronically. For your convenience, no income documents will be required. If you have had a change of employment, please also complete the full form and attach your updated income documents.</p>                                    
                                    <p><a href="javascript:;" title="Read Full Text" data-toggle="collapse" data-target="#collapseGeneralInfomation" aria-expanded="false" aria-controls="collapseGeneralInfomation" class="read-full-text-disappear">Read Full Text</a></p>
                                    <div class="collapse" id="collapseGeneralInfomation">
                                        <p>For new card applicants without UOB Personal Internet Banking and Mobile Services ("PIB/MBK"), the mobile phone number provided will be used for SMS-OTPs (One-Time Password), credit card security alerts, and authentication subscriptions. If you already have PIB/MBK, your new card or CashPlus account can be accessed with your existing PIB/MBK username and password. If your mobile phone number has since changed and you wish to have it updated, please complete a Change of Address/ Contact Details Form available at <a href="http://www.uob.com.sg/" target="_blank" title="UOB : Personal Banking">uob.com.sg.</a></p>
                                        <p>If you are already an existing UOB Phone Banking customer, your UOB Credit Card account will be linked to your current Access Code and PIN. If you are not an existing UOB Phone Banking customer, a new Access Code and PIN will be sent to you upon approval of your UOB Credit Card application.</p>
                                        <p>The provision of this application form does not automatically indicate that United Overseas Bank Limited will accept the contents and issue a UOB Card. United Overseas Bank Limited reserves the right to reject the application without assigning any reason whatsoever.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="submit-footer">
                            <div class="container">
                                <div class="pull-left">
                                    <a href="javascript:;" title="Edit" class="btn btn-2 btn-edit-register" data-target="card-register-step-2">Edit</a>
                                </div>
                                <div class="pull-right">
                                    <a href="#"class="btn primary-btn btn-1 btn-submit btn-regis-done">Done</a>
                                </div>
                            </div>
                        </div>
                    <!-- End: Card Confirm -->
                    </div>
                </form>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- div class="footer">
            <div class="container">
                
            </div>
        </div> -->
    </div>
    <div id="card-listing-popup"></div>

    <div class="modal modal-1 fade" id="declaration-information" tabindex="-1" role="modal" aria-hidden="true">
        <div class="container">
            <div class="modal-content row">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                <div class="declaration-content">
                    <h3>Declaration and authorisation (CACPDA-V6.0-21052014)</h3>
                    <h4>I/ We here by:</h4>
                    <ol>
                        <li>Represent and warrant:
                            <ul class="list-unstyled">
                                <li>a. That all information provided by me/us in this application and in any other document submitted to you is true, accurate and complete and if there is a change in the information provided or becomes inaccurate in any way, I/we shall promptly notify you of the change or inaccuracy; and</li>
                                <li>b. At the time of this application, I am/we are not an undischarged bankrupt and there has been no statutory demand served on me/us or any legal proceeding commenced against me/us.</li>
                            </ul>
                        </li>
                        <li>Acknowledge that you may choose to either approve or reject this application and I/we agree that you do not need to provide a reason for your approval or rejection. </li>
                        <li>Confirm that I/we have obtained, read, understood and agree to be bound by the following (“Terms”):
                            <ul class="list-unstyled">
                                <li>a. UOB Cardmember Agreement;</li>
                                <li>b. Terms and Conditions Governing UOB CashPlus;</li>
                                <li>c. Terms and Conditions Governing Accounts and Services; and</li>
                                <li>d. Terms and Conditions of UOB Personal Internet Banking and UOB Mobile Services;</li>
                                <li>e. Where applicable, NETS Terms and Conditions Governing the Use of NETS FlashPay; <br/>
                                [Terms are available at <a href="http://www.uob.com.sg/" target="_blank" title="UOB : Personal Banking">uob.com.sg.</a>]. </li>
                            </ul>
                        </li>
                        <li>Agree:
                            <ul class="list-unstyled">
                                <li>a. You may review and change my credit limit at any time without prior notice to me/us;</li>
                                <li>b. In addition to the modes and manner you may send notices and communications to me/us under the Terms, you may send notices and communications to me/us in any mode and manner you deem appropriate to my/our last known address, facsimile, telephone/mobile phone number and/or electronic mail address in your records;</li>
                                <li>c. The card applied for in this application ("Card") will be renewed upon its expiry without further reference to me/us unless the Card account(s) is terminated before that; </li>
                                <li>d. The Principal Cardmember is responsible for all liabilities (including liabilities incurred by all Supplementary Cardmembers, annual fees or any other fees/charges) and each Supplementary Cardmember is responsible for his/her liabilities incurred in respect of his/her card; and </li>
                                <li>e. If the card applied for in this application comes with a NETS FlashPay, Network for Electronic Transfer (Singapore) Private Limited ('NETS') is the holder and operator of the NETS FlashPay stored value facility. </li>
                            </ul>
                        </li>
                        <li>Consent and authorise you to conduct any credit check on me/us as you may require from time to time and to obtain, verify and/or disclose any information relating to me/us including information and details of the Card account(s) / UOB CashPlus account from or to the parties set out in the terms relating to your rights of disclosure under the Terms including any credit bureau and any person you deem appropriate or necessary for this application or as may be required by any applicable law; </li>
                        <li>Confirm that I/we have read and understood the Bank’s Privacy Notice (which forms part of the terms and conditions governing my/our relationship with you and a copy of which is available to me/us at uob.com.sg or the Bank’s branches) and consent to the Bank collecting, using and disclosing my/our Personal Data in accordance with the terms of the Privacy Notice and for the purposes set out in the Bank’s Privacy Notice, namely Basic Banking Purposes, Co-Branding Purpose, Research Purpose and Marketing Purpose (as defined in the Privacy Notice). I/we note that I/we may at any time withdraw all or part of the above consents at any branch and any withdrawal of consent for Research Purpose and Marketing Purpose will remain valid until I/we give my/our specific consent. </li>
                        <li>Agree that, for UOB Delight Credit Card, Metro-UOB Platinum Card and Singtel UOB Platinum Card (each a “Co-brand Card”), all personal data provided by me/us in this application for the Co-Brand Card and information and details of my/our Co-Brand Card account(s) which may be issued to me and transactions made thereunder may be shared by you with the respective co-brand partner associated with the Co-Brand Card ("Co-Brand Partner") to enable the Co-Brand Partner and its agents and authorised service providers to collect, use and disclose my/our personal data to any person the Co-Brand Partner deems appropriate or necessary for the purposes of:
                            <ul class="list-unstyled">
                                <li>a. Processing this application and provide services associated with the Co-Brand Card account; </li>
                                <li>b. Offering, marketing or promoting any promotion or offer relating to the Co-Brand Card account; </li>
                                <li>c. Administering any benefit, privilege and term applicable to the Co-Brand Card account; </li>
                                <li>d. Offering, marketing or promoting any product and/or service provided by the Co-Brand Partner; and</li>
                                <li>e. Conducting research or analysis relating to any product and/or service provided by the Co-Brand Partner, whether conducted by the Co-Brand Partner(s) or jointly with any other party. </li>
                            </ul>
                        </li>
                        <li>Acknowledge and agree that you and the Co-Brand Partner (if any) will be separately collecting, using and disclosing my/our personal data and each party shall only be responsible for its own collection, use or disclosure of my/our personal data, and shall not be liable for the other party’s handling or use thereof. I/we agree to directly address any queries, access or correction requests, or complaints in relation to the handling of my/our personal data to the relevant party. </li>
                        <li>Authorise that all bills from the SingTel Account specified in this application, be charged to the SingTel-UOB Platinum Card applied for, even if the SingTel-UOB Platinum Card has not been activated by me/us; </li>
                        <li>Acknowledge and agree that this application and all documents submitted to you including all verification documents obtained by you shall belong to you and will be retained by you; and </li>
                        <li>Confirm and agree that if this application has been sent by fax, you are authorised to rely and act upon on the faxed copy without the original.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-1 fade" id="require-document" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="container">
            <div class="modal-content row">
                <div role="tabpanel">                    
                    <!-- Nav tabs -->
                    <div class="require-header">
                        <ul class="nav nav-tabs" role="tablist" id="tab-required-documents">
                            <li role="presentation" class="active"><a href="#require-1" aria-controls="require-1" role="tab" data-toggle="tab">Salaried</a></li>
                            <li role="presentation"><a href="#require-2" aria-controls="require-2" role="tab" data-toggle="tab">Self-Employed</a></li>
                            <li role="presentation"><a href="#require-3" aria-controls="require-3" role="tab" data-toggle="tab">Commission Based</a></li>
                            <li role="presentation"><a href="#require-4" aria-controls="require-4" role="tab" data-toggle="tab">Foreigners</a></li>
                        </ul>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="require-1">
                            <h3>For Salaried Employees (Fixed Monthly Salary ≥ S$2,500)</h3>
                            <div class="inner">
                                <p>NRIC (front and back)</p>
                                <p>Latest 12 months’ CPF Contribution History Statement1 via uobgroup.com submitcpfstmt.jsp (Singpass required); or</p>
                                <p>Latest Computerised Payslip (in Singapore Dollar currency); or</p>
                                <p>Latest Income Tax Notice of Assessment2 with either Latest 12 months’ CPF Contribution History Statement1 or<br/>
                                Latest Computerised Payslip (in Singapore Dollar currency)</p>
                            </div>
                            <h3>For Salaried Employees (Fixed Monthly Salary < S$2,500)</h3>
                            <div class="inner">
                                <p>NRIC (front and back)</p>
                                <p>Latest 12 months’ CPF Contribution History Statement1 via uobgroup.com/submitcpfstmt.jsp (Singpass required); or</p>
                                <p>Latest 3 months’ Computerised Payslip; or</p>
                                <p>Latest Income Tax Notice of Assessment2 with either Latest 12 months’ CPF Contribution History Statement1 or<br/>
                                Latest Computerised Payslip (in Singapore Dollar currency)</p>
                            </div>
                            <h3>Note</h3>
                            <div class="inner">
                                <p>For CPF Contribution History Statement submission, the maximum credit limit is calculated based on the CPF salary ceiling of S$5,000 per month. Please submit your latest Income Tax Notice of Assessment together with your CPF</p>
                                <p>Contribution History Statement if your monthly salary is more than S$5,000.</p>
                                <p>Print your Income Tax Notice of Assessment via https://mytax.iras.gov.sg with your Singpass or IRAS PIN.</p>
                                <p>Note that if your income documents reflect a lower income than that in our bank records, we will have to reduce the current credit limit of your existing unsecured facilities to reflect prevailing earned income.</p>
                                <p>We reserve the right to request for information and income documents if deemed necessary.</p>
                            </div>
                            <h3>For Existing UOB Credit Cardmembers</h3>
                            <div class="inner">
                                <p>For CPF Contribution History Statement submission, the maximum credit limit is calculated based on the CPF salary ceiling of S$5,000 per month. Please submit your latest Income Tax Notice of Assessment together with your CPF</p>
                                <p>Contribution History Statement if your monthly salary is more than S$5,000.</p>
                                <p>Print your Income Tax Notice of Assessment via https://mytax.iras.gov.sg with your Singpass or IRAS PIN.</p>
                                <p>Note that if your income documents reflect a lower income than that in our bank records, we will have to reduce the current credit limit of your existing unsecured facilities to reflect prevailing earned income.</p>
                                <p>We reserve the right to request for information and income documents if deemed necessary.</p>
                            </div>
                            <h3>For Existing UOB Credit Cardmembers</h3>
                            <div class="inner">
                                <p>Latest income documents as above are required if you wish to Update the Credit Limit on your UOB Cards; or there has been a change in your previous employment</p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="require-2">
                            <h3>Required Documents for Self-Employed</h3>
                            <div class="inner">
                                <p>NRIC (front and back)</p>
                                <p>Latest Income Tax Notice of Assessment<sup>1</sup></p>
                            </div>
                            <h3>Note</h3>
                            <div class="inner">
                                <p><a href="https://mytax.iras.gov.sg/ESVWeb/default.aspx">Print your Income Tax Notice of Assessment via https://mytax.iras.gov.sg with your Singpass or IRAS PIN.</a></p>
                                <p>Note that if your income documents reflect a lower income than that in our bank records, we will have to reduce the current credit limit of your existing unsecured facilities to reflect prevailing earned income.</p>
                                <p>We reserve the right to request for information and income documents if deemed necessary.</p>
                            </div>
                            <h3>For Existing UOB Credit Cardmembers</h3>
                            <div class="inner">
                                <p>Latest income documents as above are required if you wish to</p>
                                <p>Update the Credit Limit on your UOB Cards; or</p>
                                <p>There has been a change in your previous employment</p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="require-3">
                            <h3>Required Documents for Commission-Based Employees</h3>
                            <div class="inner">
                                <p>NRIC (front and back)</p>
                                <p>Latest Income Tax Notice of Assessment<sup>1</sup></p>
                            </div>
                            <h3>Note</h3>
                            <div class="inner">
                                <p><a href="https://mytax.iras.gov.sg/ESVWeb/default.aspx">Print your Income Tax Notice of Assessment via https://mytax.iras.gov.sg with your Singpass or IRAS PIN.</a></p>
                                <p>Note that if your income documents reflect a lower income than that in our bank records, we will have to reduce the current credit limit of your existing unsecured facilities to reflect prevailing earned income.</p>
                                <p>We reserve the right to request for information and income documents if deemed necessary.</p>
                            </div>
                            <h3>For Existing UOB Credit Cardmembers</h3>
                            <div class="inner">
                                <p>Latest income documents as above are required if you wish to</p>
                                <p>Update the Credit Limit on your UOB Cards; or</p>
                                <p>There has been a change in your previous employment</p>
                            </div>
                        </div>




                        <div role="tabpanel" class="tab-pane" id="require-4">
                            <h3>Required Documents for Foreigners</h3>
                            <div class="inner">
                                <p>Valid Passport (with at least 6 months’ validity) AND</p>
                                <p>Employment Pass (Q Pass & EP Only with at least 6 months’ validity) AND</p>
                                <p>Latest billing proof as per your local residential address (e.g. telephone or utilities bill etc.) AND </p>
                            </div>
                            <h3>Income documents (Any one of the following)</h3>
                            <div class="inner">
                                <p>Latest Computerised Payslip (in Singapore Dollar currency); or</p>
                                <p>Latest Income Tax Notice of Assessment2 with Latest Computerised Payslip (in Singapore Dollar currency); or</p>
                                <p>Company Letter certifying Employment and Monthly Salary (in Singapore Dollar currency) dated within 3 months</p>
                            </div>
                            <h3>Note</h3>
                            <div class="inner">
                                <p><a href="https://mytax.iras.gov.sg/ESVWeb/default.aspx">Print your Income Tax Notice of Assessment via https://mytax.iras.gov.sg with your Singpass or IRAS PIN.</a></p>
                                <p>Note that if your income documents reflect a lower income than that in our bank records, we will have to reduce the current credit limit of your existing unsecured facilities to reflect prevailing earned income.</p>
                                <p>We reserve the right to request for information and income documents if deemed necessary.</p>
                            </div>
                            <h3>For Existing UOB Credit Cardmembers</h3>
                            <div class="inner">
                                <p>Latest income documents as above are required if you wish to</p>
                                <p>Update the Credit Limit on your UOB Cards; or</p>
                                <p>There has been a change in your previous employment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="modal-header">
                
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                ...
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
            </div>
        </div>
     
     </div>
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID.-->
    <script>
    (function(b, o, i, l, e, r) {
        b.GoogleAnalyticsObject = l;
        b[l] || (b[l] =
            function() {
                (b[l].q = b[l].q || []).push(arguments)
            });
        b[l].l = +new Date;
        e = o.createElement(i);
        r = o.getElementsByTagName(i)[0];
        e.src = '//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e, r)
    }(window, document, 'script', 'ga'));
    ga('create', 'UA-XXXXX-X');
    ga('send', 'pageview');
    </script>
    <!-- build:js scripts/vendor.js -->
    <script src="vendors/jquery-1.11.3.min.js"></script>
    <script src="vendors/bootstrap.min.js"></script>
    <script src="vendors/jquery.sticky.js"></script>
    <script src="vendors/idangerous.swiper.min.js"></script>
    <script src="vendors/jquery.nouislider.all.min.js"></script>
    <!-- endbuild -->
    <!-- build:js scripts/main.js -->
    <script src="scripts/main.js"></script>
    <!-- endbuild -->
    <!-- build:js scripts/card-registration-vendor.js -->
    <script src="vendors/jquery.matchHeight.js"></script>
    <script src="vendors/selectUI.js"></script>
    <script src="vendors/jquery.validate.js"></script>
    <script src="vendors/additional-methods.js"></script>
    <script src="vendors/accounting.js"></script>
    <script src="vendors/jquery.placeholder.js"></script>
    <script src="vendors/select2.min.js"></script>
    <!-- endbuild -->
    <!-- build:js scripts/card-registration.js -->
    <script src="scripts/card-registration.js"></script>
    <!-- endbuild -->
    <script src="assets/js/analytics.js"></script>
</body>
</html>