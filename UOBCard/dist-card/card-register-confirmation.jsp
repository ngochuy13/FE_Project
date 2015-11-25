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
    
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/card-register-separated.css">
    <script src="scripts/vendor/modernizr.js"></script>
    <script type='text/javascript' src="vendors/css3-mediaqueries.js"></script>
    <script src="//assets.adobedtm.com/4f0de1c2a678946ab5959eeb23f3c13fd6552995/satelliteLib-584985543080f70b51078cd33cdd0fd548906d90-staging.js"></script>
    <!--[if lt IE 9]>
        <script type='text/javascript' src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script type='text/javascript' src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
    <![endif]-->
</head>

<body class="one-card card-page card-register-page">
    <div class="content-container">
        <div class="header">
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
                    <div class="status-percent" style="width:89%;">&nbsp;</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="form-status-wrapper col-xs-12">
                        <div class="form-status">
                            <ul>
                                <li class="step-1 active" data-related-step="card-register-step-1"><a href="/card-register-confirmation.html#step-1"><span class="icon icon-user"></span><span class="text hidden-xs">Basic Details</span><span class="text hidden-sm hidden-md hidden-lg">Step 1</span></a></li>
                                <li class="step-2 active" data-related-step="card-register-step-2"><a href="/card-register-confirmation.html#step-2"><span class="icon icon-phone"></span><span class="text hidden-xs">Applicant Information</span><span class="text hidden-sm hidden-md hidden-lg">Step 2</span></a></li>
                                <li class="step-3 active" data-related-step="card-register-step-3"><a href="#"><span class="icon icon-check"></span><span class="text hidden-xs">Confirmation</span><span class="text hidden-sm hidden-md hidden-lg">Step 3</span></a></li>
                                <li class="step-4" data-related-step="card-register-step-4"><a href="#"><span class="icon icon-like"></span><span class="text hidden-xs">Complete</span><span class="text hidden-sm hidden-md hidden-lg">Step 4</span></a></li>
                            </ul>
                            <span class="border"></span>
                        </div>
                    </div>
                </div>
                <div id="card-register-form" class="card-register-form">
                    <form method="POST" class="row card-register-step card-register-step-3" data-percent-complete="89" action="">
                    
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
                                    <td class="label-data" data-model="dob"><%=jspVar_dd_dob%>/<%=jspVar_mm_dob%>/<%=jspVar_yyyy_dob%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Nationality</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="nationality"><%=jspVar_nationality%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">NRIC No*</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="NRIC"><%=jspVar_nric1%><%=jspVar_nric2%><%=jspVar_nric3%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Country</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="country"><%=jspVar_foreigner_country%></td>
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
                                    <td class="label-data" data-model="ep_expiry_date"><%=jspVar_ep_expiry_dd%>/<%=jspVar_ep_expiry_mm%>/<%=jspVar_ep_expiry_yyyy%></td>
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
                                    <td class="label-data" data-model="passport"><%=jspVar_id_expiry_dd%>/<%=jspVar_id_expiry_mm%>/<%=jspVar_id_expiry_yyyy%></td>
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
                                    <td class="label-data" data-model="home_phone"> <%=jspVar_home_phone%></td>
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
                                    <td class="label-data" data-model="homeaddr_street_name"><%=jspVar_homeaddr_street_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Building Name</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="homeaddr_build_name"><%=jspVar_homeaddr_build_name%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Block Number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="homeaddr_blk_no"><%=jspVar_homeaddr_blk_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Storey No</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="homeaddr_storey_no"><%=jspVar_homeaddr_storey_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home Unit No</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="homeaddr_unit_no"><%=jspVar_homeaddr_unit_no%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Home State</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="homeaddr_city_state"><%=jspVar_homeaddr_city_state%></td>
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
                                    <td class="label-data" data-model="timeofLivingInAboveAddr"><%=jspVar_years_residence%> Year(s) <%=jspVar_months_residence%> Month(s)</td>
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
                                    <td class="label-data" data-model="krisflyer_number"><%=jspVar_krisflyer_number1%></td>
                                </tr>
                                <tr>
                                    <td class="label-name">Asia Miles membership number</td>
                                    <td class="space">&nbsp;</td>
                                    <td class="label-data" data-model="asiamiles_number"><%=jspVar_asiamiles_number1%></td>
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
                                    <td class="label-data" data-model="existingCustomer"><%=jspVar_existing_cx%></td>
                                </tr>
                              </table>
                        </div>
                        <div class="confirm-footer footer">
                            <div class="container">
                                <div class="footer-content">
                                    <h3>Declaration & Authorization <small>(CACPDA-V6.0-21052014)</small></h3>
                                    <label class="checkbox-item" for="check-informed">
                                        <input type="checkbox" id="check-informed" name="acceptDAndA" required <%if (jspVar_acceptDAndA != null && "Yes".equalsIgnoreCase(jspVar_acceptDAndA)) out.print("checked");%>>
                                        <span class="checkbox-1">&nbsp;</span>
                                        <span class="text">I/We would like to be kept informed of promotions, offers, products and/or services marketed by United Overseas Bank Limited and its related corporations ("UOB Group Members") and, where applicable the co-brand partner associated with the card applied for in this application ("Co-Brand Partner") and I/we hereby give my/our consent to any UOB Group Member and the Co-Brand Partner to contact me/us via all modes of communication (voice calls, SMS/MMS, fax) using my/our telephone numbers in your records.</span>
                                        <span class="text">I/We agree that any consent given is additional to any other consent which I may have previously provided to UOB Group Members to inform me of marketing information; and does not supersede any rights which the UOB Group Members may have at law to collect, use and disclose my personal data.</span>
                                    </label>
                                    <h3>UOB Credit Card Online Acceptance</h3>
                                    <label class="checkbox-item" for="check-acceptance">
                                        <input type="checkbox" id="check-acceptance" name="acceptTAndC" required <%if (jspVar_acceptTAndC != null && "Yes".equalsIgnoreCase(jspVar_acceptTAndC)) out.print("checked");%>>
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
                    </form>
                </div>
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
    <script src="scripts/vendor.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/card-registration-vendor.js"></script>
    <script src="scripts/card-register-confirmation-ui.js"></script>
    <script src="assets/js/analytics.js"></script>
    <script type="text/javascript">_satellite.pageBottom();</script>
</body>
</html>