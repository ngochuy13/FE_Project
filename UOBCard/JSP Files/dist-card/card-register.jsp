
<%@ include file="../url.jsp" %>
<%@ page import="com.uobgroup.cyberlink.Utility" %>
<%@ page import="WSM.forms.countryName" %>
<%@ page import="WSM.forms.bizType" %>
<%@ page import="WSM.forms.jobDesignation" %>
<%@ page import="WSM.forms.relationshipType" %>
<%@ page import="java.util.*" %>

<%
response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
response.setHeader("Pragma","no-cache"); //HTTP 1.0
response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
%>

<%
String strReferrerCode = null;
strReferrerCode = request.getParameter("u_rfid");

String strName = null;
String strTitle = null;

int idobDate = 0;
int idobMonth = 0;
int idobYear = 0;

String strLegalIdType = null;
String strLegalIdNo = null;
String strLegalIdCountry = null;
String NRIC1 = null;
int NRIC2=0;
String NRIC3=null;

String buildingNo = null;
String storeyNo = null;
String unitNo = null;
String postBox = null;
String postalCode = null;
String strBuildingName = null;
String strStreetName = null;
String strStateCityName = null;
String strCountryCode = null;
String strCountryName = null;

String strSpecialCode = "MU0044";

strName = request.getParameter("Name");
strTitle = request.getParameter("salutation");


if(request.getParameter("dobDate") != null)
  idobDate = Integer.parseInt((String)request.getParameter("dobDate"));
if(request.getParameter("dobMonth") != null) 
 idobMonth = Integer.parseInt((String)request.getParameter("dobMonth"));
if(request.getParameter("dobYfear") != null)
 idobYear = Integer.parseInt((String)request.getParameter("dobYear"));

strLegalIdType = request.getParameter("legalIdType");
strLegalIdNo = request.getParameter("legalIdNo");
strLegalIdCountry = request.getParameter("legalIdCountry");


buildingNo = request.getParameter("buildingNo");
storeyNo = request.getParameter("storeyNo");
unitNo = request.getParameter("unitNo");
postBox = request.getParameter("poBox");
postalCode = request.getParameter("postalCode");


strBuildingName = request.getParameter("buildingName");
strStreetName = request.getParameter("streetName");
strStateCityName = request.getParameter("stateCityName");
strCountryCode = request.getParameter("countryCode");     


countryName country = new countryName();
Vector vecCountryNames = country.getCountryNames();
Vector vecCountryCV = country.getCountryCodeValue();

bizType biz = new bizType();
Vector vecBizTypes = biz.getBizDescriptions();
Vector vecBizCV = biz.getBizCodeValue();

jobDesignation jobtype = new jobDesignation();
Vector vecJobTypes = jobtype.getJobDescriptions();
Vector vecJobCV = jobtype.getJobCodeValue();

relationshipType reltype = new relationshipType();
Vector vecRelationTypes = reltype.getRelationshipDescriptions();
Vector vecRelationCV = reltype.getRelationshipCodeValue();

if(strCountryCode != null)
  strCountryName = country.getCountryName(strCountryCode);
if(strLegalIdCountry != null)
  strLegalIdCountry = country.getCountryName(strLegalIdCountry);
  

if(strLegalIdType != null && strLegalIdNo != null && strLegalIdCountry != null && strLegalIdType.equalsIgnoreCase("IC"))
 {
 
   NRIC1 = strLegalIdNo.substring(0,1);
   NRIC2 = Integer.parseInt(strLegalIdNo.substring(1,8));
   NRIC3 = strLegalIdNo.substring(8,9);

  }

%>


<%

int jspInt_dd_dob = 0;
int jspInt_mm_dob = 0;
int jspInt_ep_expiry_dd = 0;
int jspInt_ep_expiry_mm = 0;
int jspInt_ep_expiry_yyyy = 0;
int jspInt_id_expiry_dd = 0;
int jspInt_id_expiry_mm = 0;
int jspInt_supp_card1_dd_dob = 0;
int jspInt_supp_card1_mm_dob = 0;
int jspInt_supp_card2_dd_dob = 0;
int jspInt_supp_card2_mm_dob = 0;


String tempStr= null;
String tempStr1= null;

String jspVar_referrer_code = null;
tempStr = request.getParameter("referrer_code");
if (tempStr != null) jspVar_referrer_code = tempStr;
if (strReferrerCode != null) jspVar_referrer_code = strReferrerCode;


String jspVar_creditcard = null;

String jspVar_name = null;
String jspVar_title = null;

String jspVar_nric = null;
String jspVar_nric1 = null;
String jspVar_nric2 = null;
String jspVar_nric3 = null;


String jspVar_dob = null;
String jspVar_dd_dob = null;
String jspVar_mm_dob = null;
String jspVar_yyyy_dob = null;



String jspVar_name_creditcard = null;
String jspVar_gender = null;
String jspVar_gender_orig = null;
String jspVar_nationality = "SG-Singapore";

String jspVar_singaporepr = null;

String jspVar_nationality_orig = null;
String jspVar_permanentresident = null;
String jspVar_foreigner_country = "SG-Singapore";
String jspVar_foreigner_country_orig = null;
String jspVar_passport = null;

String jspVar_ep_expiry_dd = null;
String jspVar_ep_expiry_mm = null;
String jspVar_ep_expiry_yyyy = null;
String jspVar_ep_expiry_date = null;

String jspVar_id_expiry_dd = null;
String jspVar_id_expiry_mm = null;
String jspVar_id_expiry_yyyy = null;
String jspVar_id_expiry_date = null;

String jspVar_race = null;
String jspVar_race_orig = null;
String jspVar_maritalstatus = null;
String jspVar_maritalstatus_orig = null;
String jspVar_qualification = null;
String jspVar_qualification_orig = null;
String jspVar_dependents = null;
String jspVar_billto = null;
String jspVar_homeaddr_blk_no = null;
String jspVar_homeaddr_storey_no = null;
String jspVar_homeaddr_sno_na = null;
String jspVar_homeaddr_unit_no = null;
String jspVar_homeaddr_uno_na = null;
String jspVar_homeaddr_build_name = null;
String jspVar_homeaddr_city_state = null;
String jspVar_homeaddr_pin = null;
String jspVar_homeaddr_street_name = null;
String jspVar_homeaddr_country = "SG-Singapore";
String jspVar_homeaddr_country_orig = null;
String jspVar_officeaddr_blk_no = null;
String jspVar_officeaddr_storey_no = null;
String jspVar_officeaddr_sno_na = null;
String jspVar_officeaddr_unit_no = null;
String jspVar_officeaddr_uno_na = null;
String jspVar_officeaddr_build_name = null;
String jspVar_officeaddr_city_state = null;
String jspVar_officeaddr_pin = null;
String jspVar_officeaddr_street_name = null;
String jspVar_officeaddr_country = "SG-Singapore";
String jspVar_officeaddr_country_orig = null;
String jspVar_residence = null;
String jspVar_rent_rate = null;

String jspVar_years_residence = null;
String jspVar_months_residence = null;
String jspVar_residence_type = null;
String jspVar_home_phone = null;

String jspVar_other_overseas_postal_address = null;
String jspVar_other_overseas_contact_number = null;

String jspVar_office_phone = null;
String jspVar_mobile_phone = null;
String jspVar_pager = null;
String jspVar_email = null;

String jspVar_service_years = null;
String jspVar_service_months = null;
String jspVar_designation = null;
String jspVar_current_business = null;
String jspVar_basic_monthly_income = null;
String jspVar_annual_gross_income = null;
String jspVar_previous_employer = null;
String jspVar_previous_employer_na = null;
String jspVar_previous_business = null;
String jspVar_service_years_previous = null;
String jspVar_service_mths_previous = null;
String jspVar_uob_customer = null;
String jspVar_CreditCards = null;
String jspVar_other_credit_card_name = null;
String jspVar_present_credit_cards = null;
String jspVar_UOB = null;
String jspVar_Citibank = null;
String jspVar_DBS = null;
String jspVar_SC = null;
String jspVar_HSBC = null;
String jspVar_OCBC = null;
String jspVar_Amex = null;
String jspVar_OtherCreditCards = null;
String jspVar_none = null;
String jspVar_employer = null;
String jspVar_self_employed = null;

String jspVar_relationship = null;
String jspVar_relationship_orig = null;
String jspVar_relative_name = null;
String jspVar_relative_home_phone = null;
String jspVar_relative_office_phone = null;
String jspVar_relative_pager_mobile = null;



String jspVar_apply_uob = null;
String jspVar_apply_creditcard = null;
String jspVar_accesscode_option = null;
String jspVar_pb_accesscode_option = null;
String jspVar_SpecialCode = null;

String jspVar_dependents_orig = null;
String jspVar_residence_type_orig = null;
String jspVar_residence_orig = null;
String jspVar_designation_orig = null;
String jspVar_current_business_orig = null;
String jspVar_previous_business_orig = null;


String jspVar_other_income = null;

String jspVar_previous_job_designation = null; 
String jspVar_previous_job_designation_orig = null; 
String jspVar_maiden_name = null;
String jspVar_spouse_name = null;
String jspVar_spouse_employer = null;
String jspVar_spouse_passport = null;
String jspVar_spouse_nric = null;
String jspVar_spouse_designation = null;
String jspVar_spouse_designation_orig = null;
String jspVar_spouse_annual_gross_income = null;
String jspVar_spouse_office_phone = null;


String jspVar_register_frequent_flyer = null;
String jspVar_krisflyerno = null;
String jspVar_krisflyer_number1 = null;
String jspVar_krisflyer_number2 = null;
String jspVar_krisflyer_number3 = null;
String jspVar_asiamilesno = null;
String jspVar_asiamiles_number1 = null;
String jspVar_asiamiles_number2 = null;
String jspVar_asiamiles_number3 = null;

String jspVar_register_swell = null;
String jspVar_shellcardno = null;
String jspVar_shellcard_number2 = null;
String jspVar_shellcard_number3 = null;

String jspVar_request_cardpin = null;
String jspVar_link_uobaccount = null;
String jspVar_currentaccountno = null;
String jspVar_currentaccount_number1 = null;
String jspVar_currentaccount_number2 = null;
String jspVar_currentaccount_number3 = null;
String jspVar_currentaccount_number4 = null;

String jspVar_savingsaccountno = null;
String jspVar_savingsaccount_number1 = null;
String jspVar_savingsaccount_number2 = null;
String jspVar_savingsaccount_number3 = null;
String jspVar_savingsaccount_number4 = null;
String jspVar_language = null;
String jspVar_enrol_creditshield = null;


String jspVar_apply_supplementary_card1 = null;
String jspVar_supp_card1_title = null;
String jspVar_supp_card1_name = null;
String jspVar_supp_card1_name_creditcard = null;

String jspVar_supp_card1_gender = null;
String jspVar_supp_card1_gender_orig = null;
String jspVar_supp_card1_race = null;
String jspVar_supp_card1_race_orig = null;


String jspVar_supp_card1_nationality = "SG-Singapore";
String jspVar_supp_card1_nationality_orig = null;
String jspVar_supp_card1_country = "SG-Singapore";
String jspVar_supp_card1_country_orig = null;
String jspVar_supp_card1_nric1 = null;
String jspVar_supp_card1_nric2 = null;
String jspVar_supp_card1_nric3 = null;
String jspVar_supp_card1_nric = null;
String jspVar_supp_card1_passport = null;

String jspVar_supp_card1_dob = null;
String jspVar_supp_card1_dd_dob = null;
String jspVar_supp_card1_mm_dob = null;
String jspVar_supp_card1_yyyy_dob = null;

String jspVar_supp_card1_email = null;
String jspVar_supp_card1_home_phone = null;
String jspVar_supp_card1_office_phone = null;
String jspVar_supp_card1_relationship = null;
String jspVar_supp_card1_relationship_orig = null;
String jspVar_supp_card1_mobile_phone = null;

String jspVar_apply_supplementary_card2 = null;
String jspVar_supp_card2_title = null;
String jspVar_supp_card2_name = null;
String jspVar_supp_card2_name_creditcard = null;

String jspVar_supp_card2_gender = null;
String jspVar_supp_card2_gender_orig = null;
String jspVar_supp_card2_race = null;
String jspVar_supp_card2_race_orig = null;

String jspVar_supp_card2_nationality = "SG-Singapore";
String jspVar_supp_card2_nationality_orig = null;
String jspVar_supp_card2_country = "SG-Singapore";
String jspVar_supp_card2_country_orig = null;


String jspVar_supp_card2_nric1 = null;
String jspVar_supp_card2_nric2 = null;
String jspVar_supp_card2_nric3 = null;
String jspVar_supp_card2_nric = null;
String jspVar_supp_card2_passport = null;

String jspVar_supp_card2_dob = null;
String jspVar_supp_card2_dd_dob = null;
String jspVar_supp_card2_mm_dob = null;
String jspVar_supp_card2_yyyy_dob = null;


String jspVar_supp_card2_email = null;
String jspVar_supp_card2_home_phone = null;
String jspVar_supp_card2_office_phone = null;
String jspVar_supp_card2_relationship = null;
String jspVar_supp_card2_relationship_orig = null;
String jspVar_supp_card2_mobile_phone = null;

String jspVar_apply_uob_cashplus = null;


tempStr = request.getParameter("creditcard");
if (tempStr != null) jspVar_creditcard = tempStr;

tempStr = request.getParameter("name");
if (tempStr != null) jspVar_name = tempStr;

tempStr = request.getParameter("title");
if (tempStr != null) jspVar_title = tempStr;

//tempStr = request.getParameter("nric");
//if (tempStr != null) jspVar_nric = tempStr;

tempStr = request.getParameter("nric1");
if (tempStr != null) jspVar_nric1 = tempStr;

tempStr = request.getParameter("nric2");
if (tempStr != null) jspVar_nric2 = tempStr;

tempStr = request.getParameter("nric3");
if (tempStr != null) jspVar_nric3 = tempStr;

jspVar_nric = jspVar_nric1+jspVar_nric2+jspVar_nric3;



//tempStr = request.getParameter("dob");
//if (tempStr != null) jspVar_dob = tempStr;


tempStr = request.getParameter("dd_dob");
if (tempStr != null) jspVar_dd_dob = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_dd_dob = Integer.parseInt(tempStr);

tempStr = request.getParameter("mm_dob");
if (tempStr != null) jspVar_mm_dob = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_mm_dob =Integer.parseInt(tempStr);

tempStr = request.getParameter("yyyy_dob");
if (tempStr != null) jspVar_yyyy_dob = tempStr;

jspVar_dob = jspVar_dd_dob+"-"+jspVar_mm_dob+"-"+jspVar_yyyy_dob;



tempStr = request.getParameter("name_creditcard");
if (tempStr != null) jspVar_name_creditcard = tempStr;
tempStr = request.getParameter("gender");
if (tempStr != null) jspVar_gender = tempStr;
if (tempStr != null) jspVar_gender_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("nationality");
if (tempStr != null) jspVar_nationality = tempStr;

tempStr = request.getParameter("singaporepr");
if (tempStr != null) jspVar_singaporepr = tempStr;

tempStr = request.getParameter("foreigner_country");
if (tempStr != null) jspVar_foreigner_country = tempStr;
if (tempStr != null) jspVar_foreigner_country_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("passport");
if (tempStr != null) jspVar_passport = tempStr;

tempStr = request.getParameter("ep_expiry_dd");
if (tempStr != null) jspVar_ep_expiry_dd = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_ep_expiry_dd = Integer.parseInt(tempStr);

tempStr = request.getParameter("ep_expiry_mm");
if (tempStr != null) jspVar_ep_expiry_mm = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_ep_expiry_mm = Integer.parseInt(tempStr);

tempStr = request.getParameter("ep_expiry_yyyy");
if (tempStr != null) jspVar_ep_expiry_yyyy = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_ep_expiry_yyyy = Integer.parseInt(tempStr);


jspVar_ep_expiry_date = jspVar_ep_expiry_dd+"-"+jspVar_ep_expiry_mm+"-"+jspVar_ep_expiry_yyyy;


tempStr = request.getParameter("id_expiry_dd");
if (tempStr != null) jspVar_id_expiry_dd = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_id_expiry_dd = Integer.parseInt(tempStr);

tempStr = request.getParameter("id_expiry_mm");
if (tempStr != null) jspVar_id_expiry_mm = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_id_expiry_mm = Integer.parseInt(tempStr);

tempStr = request.getParameter("id_expiry_yyyy");
if (tempStr != null) jspVar_id_expiry_yyyy = tempStr;


jspVar_id_expiry_date = jspVar_id_expiry_dd+"-"+jspVar_id_expiry_mm+"-"+jspVar_id_expiry_yyyy;



tempStr = request.getParameter("race");
if (tempStr != null) jspVar_race = tempStr;
if (tempStr != null) jspVar_race_orig = tempStr.substring(tempStr.indexOf("-")+1);
tempStr = request.getParameter("maritalstatus");
if (tempStr != null) jspVar_maritalstatus = tempStr;
if (tempStr != null) jspVar_maritalstatus_orig = tempStr.substring(tempStr.indexOf("-")+1);
tempStr = request.getParameter("qualification");
if (tempStr != null) jspVar_qualification = tempStr;
if (tempStr != null) jspVar_qualification_orig = tempStr.substring(tempStr.indexOf("-")+1);
tempStr = request.getParameter("dependents");
if (tempStr != null) jspVar_dependents = tempStr;
if (tempStr != null) jspVar_dependents_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("billto");
if (tempStr != null) jspVar_billto = tempStr;

tempStr = request.getParameter("homeaddr_blk_no");
if (tempStr != null) jspVar_homeaddr_blk_no = tempStr;

tempStr = request.getParameter("homeaddr_storey_no");
if (tempStr != null) jspVar_homeaddr_storey_no = tempStr;
tempStr = request.getParameter("homeaddr_sno_na");
if (tempStr != null) jspVar_homeaddr_sno_na =tempStr;



tempStr = request.getParameter("homeaddr_unit_no");
if (tempStr != null) jspVar_homeaddr_unit_no = tempStr;
tempStr = request.getParameter("homeaddr_uno_na");
if (tempStr != null) jspVar_homeaddr_uno_na = tempStr;



tempStr = request.getParameter("homeaddr_build_name");
if (tempStr != null) jspVar_homeaddr_build_name = tempStr;
tempStr = request.getParameter("homeaddr_city_state");
if (tempStr != null) jspVar_homeaddr_city_state = tempStr;
tempStr = request.getParameter("homeaddr_pin");
if (tempStr != null) jspVar_homeaddr_pin = tempStr;
tempStr = request.getParameter("homeaddr_street_name");
if (tempStr != null) jspVar_homeaddr_street_name = tempStr;
tempStr = request.getParameter("homeaddr_country");
if (tempStr != null) jspVar_homeaddr_country = tempStr;
if (tempStr != null) jspVar_homeaddr_country_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("officeaddr_blk_no");
if (tempStr != null) jspVar_officeaddr_blk_no = tempStr;

tempStr = request.getParameter("officeaddr_storey_no");
if (tempStr != null) jspVar_officeaddr_storey_no = tempStr;
tempStr = request.getParameter("officeaddr_sno_na");
if (tempStr != null) jspVar_officeaddr_sno_na = tempStr;


tempStr = request.getParameter("officeaddr_unit_no");
if (tempStr != null) jspVar_officeaddr_unit_no = tempStr;
tempStr = request.getParameter("officeaddr_uno_na");
if (tempStr != null) jspVar_officeaddr_uno_na = tempStr;


tempStr = request.getParameter("officeaddr_build_name");
if (tempStr != null) jspVar_officeaddr_build_name = tempStr;
tempStr = request.getParameter("officeaddr_city_state");
if (tempStr != null) jspVar_officeaddr_city_state = tempStr;
tempStr = request.getParameter("officeaddr_pin");
if (tempStr != null) jspVar_officeaddr_pin = tempStr;
tempStr = request.getParameter("officeaddr_street_name");
if (tempStr != null) jspVar_officeaddr_street_name = tempStr;
tempStr = request.getParameter("officeaddr_country");
if (tempStr != null) jspVar_officeaddr_country = tempStr;
if (tempStr != null) jspVar_officeaddr_country_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("residence");
if (tempStr != null) jspVar_residence = tempStr;
if (tempStr != null) jspVar_residence_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("rent_rate");
if (tempStr != null) jspVar_rent_rate = tempStr;

tempStr = request.getParameter("years_residence");
if (tempStr != null) jspVar_years_residence = tempStr;

tempStr = request.getParameter("months_residence");
if (tempStr != null) jspVar_months_residence = tempStr;

tempStr = request.getParameter("residence_type");
if (tempStr != null) jspVar_residence_type = tempStr;
if (tempStr != null) jspVar_residence_type_orig = tempStr.substring(tempStr.indexOf("-")+1);
tempStr = request.getParameter("home_phone");
if (tempStr != null) jspVar_home_phone = tempStr;

tempStr = request.getParameter("other_overseas_postal_address");
if (tempStr != null) jspVar_other_overseas_postal_address = tempStr;
tempStr = request.getParameter("other_overseas_contact_number");
if (tempStr != null) jspVar_other_overseas_contact_number = tempStr;

tempStr = request.getParameter("office_phone");
if (tempStr != null) jspVar_office_phone = tempStr;
tempStr = request.getParameter("mobile_phone");
if (tempStr != null) jspVar_mobile_phone = tempStr;
tempStr = request.getParameter("pager");
if (tempStr != null) jspVar_pager = tempStr;


tempStr = request.getParameter("email");
if (tempStr != null) jspVar_email = tempStr;

//tempStr = request.getParameter("officeaddr1");
//if (tempStr != null) jspVar_officeaddr1 = tempStr;
//tempStr = request.getParameter("officeaddr2");
//if (tempStr != null) jspVar_officeaddr2 = tempStr;
//tempStr = request.getParameter("officeaddr3");
//if (tempStr != null) jspVar_officeaddr3 = tempStr;
//jspVar_officeaddr = jspVar_officeaddr1+" "+jspVar_officeaddr2+" "+jspVar_officeaddr3;

tempStr = request.getParameter("officeaddr_pin");
if (tempStr != null) jspVar_officeaddr_pin = tempStr;

tempStr = request.getParameter("service_years");
if (tempStr != null) jspVar_service_years = tempStr;
tempStr = request.getParameter("service_months");
if (tempStr != null) jspVar_service_months = tempStr;

tempStr = request.getParameter("designation");
if (tempStr != null) jspVar_designation = tempStr;
if (tempStr != null) jspVar_designation_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("current_business");
if (tempStr != null) jspVar_current_business = tempStr;
if (tempStr != null) jspVar_current_business_orig = tempStr.substring(tempStr.indexOf("-")+1);

tempStr = request.getParameter("annual_gross_income");
if (tempStr != null) jspVar_annual_gross_income = tempStr;

tempStr = request.getParameter("previous_employer");
if (tempStr != null) jspVar_previous_employer = tempStr;

tempStr = request.getParameter("previous_employer_na");
if (tempStr != null) jspVar_previous_employer_na = tempStr;

tempStr = request.getParameter("previous_business");
if (tempStr != null) jspVar_previous_business = tempStr;
if (tempStr != null) jspVar_previous_business_orig = tempStr.substring(tempStr.indexOf("-")+1);
tempStr = request.getParameter("years_previous");
if (tempStr != null) jspVar_service_years_previous = tempStr;
tempStr = request.getParameter("mths_previous");
if (tempStr != null) jspVar_service_mths_previous = tempStr;

tempStr = request.getParameter("uob_customer");
if (tempStr != null) jspVar_uob_customer = tempStr;

tempStr = request.getParameter("CreditCards");
if (tempStr != null) jspVar_CreditCards = tempStr;

tempStr = request.getParameter("present_credit_cards");
if (tempStr != null) jspVar_present_credit_cards = tempStr;


tempStr = request.getParameter("UOB");
if (tempStr != null) jspVar_UOB = tempStr;

tempStr = request.getParameter("Citibank");
if (tempStr != null) jspVar_Citibank = tempStr;

tempStr = request.getParameter("DBS");
if (tempStr != null) jspVar_DBS = tempStr;

tempStr = request.getParameter("SC");
if (tempStr != null) jspVar_SC = tempStr;

tempStr = request.getParameter("HSBC");
if (tempStr != null) jspVar_HSBC = tempStr;

tempStr = request.getParameter("OCBC");
if (tempStr != null) jspVar_OCBC = tempStr;

tempStr = request.getParameter("Amex");
if (tempStr != null) jspVar_Amex = tempStr;

tempStr = request.getParameter("OtherCreditCards");
if (tempStr != null) jspVar_OtherCreditCards = tempStr;

tempStr = request.getParameter("none");
if (tempStr != null) jspVar_none = tempStr;

tempStr = request.getParameter("other_credit_card_name");
if (tempStr != null) jspVar_other_credit_card_name = tempStr;

tempStr = request.getParameter("employer");
if (tempStr != null) jspVar_employer = tempStr;

tempStr = request.getParameter("self_employed");
if (tempStr != null) jspVar_self_employed = tempStr;

tempStr = request.getParameter("relationship");
if (tempStr != null) jspVar_relationship = tempStr;

tempStr = request.getParameter("relative_name");
if (tempStr != null) jspVar_relative_name = tempStr;

tempStr = request.getParameter("relative_home_phone");
if (tempStr != null) jspVar_relative_home_phone = tempStr;

tempStr = request.getParameter("relative_office_phone");
if (tempStr != null) jspVar_relative_office_phone = tempStr;

tempStr = request.getParameter("relative_pager_mobile");
if (tempStr != null) jspVar_relative_pager_mobile = tempStr;

tempStr = request.getParameter("apply_uob");
if (tempStr != null) jspVar_apply_uob = tempStr;

tempStr = request.getParameter("apply_creditcard");
if (tempStr != null) jspVar_apply_creditcard = tempStr;

tempStr = request.getParameter("accesscode_option");
if (tempStr != null) jspVar_accesscode_option = tempStr;

tempStr = request.getParameter("pb_accesscode_option");
if (tempStr != null) jspVar_pb_accesscode_option = tempStr;

tempStr = request.getParameter("SpecialCode");
if (tempStr != null) jspVar_SpecialCode = tempStr;



tempStr = request.getParameter("other_income");
if (tempStr != null) jspVar_other_income = tempStr;



tempStr = request.getParameter("previous_job_designation");
if (tempStr != null) jspVar_previous_job_designation = tempStr;

tempStr = request.getParameter("maiden_name"); 
if (tempStr != null) jspVar_maiden_name = tempStr;

tempStr = request.getParameter("spouse_name");
if (tempStr != null) jspVar_spouse_name = tempStr;

tempStr = request.getParameter("spouse_employer");
if (tempStr != null) jspVar_spouse_employer = tempStr;

tempStr = request.getParameter("spouse_passport");
if (tempStr != null) jspVar_spouse_passport = tempStr;

tempStr = request.getParameter("spouse_nric");
if (tempStr != null) jspVar_spouse_nric = tempStr;

tempStr = request.getParameter("spouse_designation");
if (tempStr != null) jspVar_spouse_designation = tempStr;

tempStr = request.getParameter("spouse_annual_gross_income");
if (tempStr != null) jspVar_spouse_annual_gross_income = tempStr;

tempStr = request.getParameter("spouse_office_phone");
if (tempStr != null) jspVar_spouse_office_phone = tempStr;

tempStr = request.getParameter("register_frequent_flyer");
if (tempStr != null) jspVar_register_frequent_flyer = tempStr;

tempStr = request.getParameter("krisflyerno");
if (tempStr != null) jspVar_krisflyerno = tempStr;
tempStr = request.getParameter("krisflyer_number1");
if (tempStr != null) jspVar_krisflyer_number1 = tempStr;
tempStr = request.getParameter("krisflyer_number2");
if (tempStr != null) jspVar_krisflyer_number2 = tempStr;
tempStr = request.getParameter("krisflyer_number3");
if (tempStr != null) jspVar_krisflyer_number3 = tempStr;


tempStr = request.getParameter("asiamilesno");
if (tempStr != null) jspVar_asiamilesno = tempStr;
tempStr = request.getParameter("asiamiles_number1");
if (tempStr != null) jspVar_asiamiles_number1 = tempStr;
tempStr = request.getParameter("asiamiles_number2");
if (tempStr != null) jspVar_asiamiles_number2 = tempStr;
tempStr = request.getParameter("asiamiles_number3");
if (tempStr != null) jspVar_asiamiles_number3 = tempStr;


tempStr = request.getParameter("register_swell");
if (tempStr != null) jspVar_register_swell = tempStr;

tempStr = request.getParameter("shellcardno");
if (tempStr != null) jspVar_shellcardno = tempStr;
tempStr = request.getParameter("shellcard_number2");
if (tempStr != null) jspVar_shellcard_number2 = tempStr;
tempStr = request.getParameter("shellcard_number3");
if (tempStr != null) jspVar_shellcard_number3 = tempStr;


tempStr = request.getParameter("request_cardpin");
if (tempStr != null) jspVar_request_cardpin = tempStr;

tempStr = request.getParameter("link_uobaccount");
if (tempStr != null) jspVar_link_uobaccount = tempStr;

tempStr = request.getParameter("currentaccountno");
if (tempStr != null) jspVar_currentaccountno = tempStr;
tempStr = request.getParameter("currentaccount_number1");
if (tempStr != null) jspVar_currentaccount_number1 = tempStr;
tempStr = request.getParameter("currentaccount_number2");
if (tempStr != null) jspVar_currentaccount_number2 = tempStr;
tempStr = request.getParameter("currentaccount_number3");
if (tempStr != null) jspVar_currentaccount_number3 = tempStr;
tempStr = request.getParameter("currentaccount_number4");
if (tempStr != null) jspVar_currentaccount_number4 = tempStr;

tempStr = request.getParameter("language");
if (tempStr != null) jspVar_language = tempStr;

tempStr = request.getParameter("savingsaccountno");
if (tempStr != null) jspVar_savingsaccountno = tempStr;
tempStr = request.getParameter("savingsaccount_number1");
if (tempStr != null) jspVar_savingsaccount_number1 = tempStr;
tempStr = request.getParameter("savingsaccount_number2");
if (tempStr != null) jspVar_savingsaccount_number2 = tempStr;
tempStr = request.getParameter("savingsaccount_number3");
if (tempStr != null) jspVar_savingsaccount_number3 = tempStr;
tempStr = request.getParameter("savingsaccount_number4");
if (tempStr != null) jspVar_savingsaccount_number4 = tempStr;


tempStr = request.getParameter("enrol_creditshield");
if (tempStr != null) jspVar_enrol_creditshield = tempStr;

tempStr = request.getParameter("apply_supplementary_card1");
if (tempStr != null) jspVar_apply_supplementary_card1 = tempStr;

tempStr = request.getParameter("supp_card1_title");
if (tempStr != null) jspVar_supp_card1_title = tempStr;

tempStr = request.getParameter("supp_card1_name");
if (tempStr != null) jspVar_supp_card1_name = tempStr;

tempStr = request.getParameter("supp_card1_name_creditcard");
if (tempStr != null) jspVar_supp_card1_name_creditcard = tempStr;

tempStr = request.getParameter("supp_card1_gender");
if (tempStr != null) jspVar_supp_card1_gender = tempStr;

tempStr = request.getParameter("supp_card1_race");
if (tempStr != null) jspVar_supp_card1_race = tempStr;

tempStr = request.getParameter("supp_card1_nationality");
if (tempStr != null) jspVar_supp_card1_nationality = tempStr;

tempStr = request.getParameter("supp_card1_country");
if (tempStr != null) jspVar_supp_card1_country = tempStr;

tempStr = request.getParameter("supp_card1_nric1");
if (tempStr != null) jspVar_supp_card1_nric1 = tempStr;

tempStr = request.getParameter("supp_card1_nric2");
if (tempStr != null) jspVar_supp_card1_nric2 = tempStr;

tempStr = request.getParameter("supp_card1_nric3");
if (tempStr != null) jspVar_supp_card1_nric3 = tempStr;

jspVar_supp_card1_nric = jspVar_supp_card1_nric1+jspVar_supp_card1_nric2+jspVar_supp_card1_nric3;

tempStr = request.getParameter("supp_card1_passport");
if (tempStr != null) jspVar_supp_card1_passport = tempStr;

tempStr = request.getParameter("supp_card1_dd_dob");
if (tempStr != null) jspVar_supp_card1_dd_dob = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_supp_card1_dd_dob = Integer.parseInt(tempStr);

tempStr = request.getParameter("supp_card1_mm_dob");
if (tempStr != null) jspVar_supp_card1_mm_dob = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_supp_card1_mm_dob = Integer.parseInt(tempStr);

tempStr = request.getParameter("supp_card1_yyyy_dob");
if (tempStr != null) jspVar_supp_card1_yyyy_dob = tempStr;

jspVar_supp_card1_dob = jspVar_supp_card1_dd_dob+"-"+jspVar_supp_card1_mm_dob+"-"+jspVar_supp_card1_yyyy_dob;



tempStr = request.getParameter("supp_card1_home_phone");
if (tempStr != null) jspVar_supp_card1_home_phone = tempStr;

tempStr = request.getParameter("supp_card1_email");
if (tempStr != null) jspVar_supp_card1_email = tempStr;

tempStr = request.getParameter("supp_card1_home_phone");
if (tempStr != null) jspVar_supp_card1_home_phone = tempStr;

tempStr = request.getParameter("supp_card1_office_phone");
if (tempStr != null) jspVar_supp_card1_office_phone = tempStr;

tempStr = request.getParameter("supp_card1_relationship");
if (tempStr != null) jspVar_supp_card1_relationship = tempStr;

tempStr = request.getParameter("supp_card1_mobile_phone");
if (tempStr != null) jspVar_supp_card1_mobile_phone = tempStr;

tempStr = request.getParameter("apply_supplementary_card2");
if (tempStr != null) jspVar_apply_supplementary_card2 = tempStr;

tempStr = request.getParameter("supp_card2_title");
if (tempStr != null) jspVar_supp_card2_title = tempStr;

tempStr = request.getParameter("supp_card2_name"); 
if (tempStr != null) jspVar_supp_card2_name = tempStr;

tempStr = request.getParameter("supp_card2_name_creditcard");
if (tempStr != null) jspVar_supp_card2_name_creditcard = tempStr;

tempStr = request.getParameter("supp_card2_gender");
if (tempStr != null) jspVar_supp_card2_gender = tempStr;

tempStr = request.getParameter("supp_card2_race");
if (tempStr != null) jspVar_supp_card2_race = tempStr;


tempStr = request.getParameter("supp_card2_nationality");
if (tempStr != null) jspVar_supp_card2_nationality = tempStr;

tempStr = request.getParameter("supp_card2_country");
if (tempStr != null) jspVar_supp_card2_country = tempStr;


tempStr = request.getParameter("supp_card2_nric1");
if (tempStr != null) jspVar_supp_card2_nric1 = tempStr;

tempStr = request.getParameter("supp_card2_nric2");
if (tempStr != null) jspVar_supp_card2_nric2 = tempStr;

tempStr = request.getParameter("supp_card2_nric3");
if (tempStr != null) jspVar_supp_card2_nric3 = tempStr;

jspVar_supp_card2_nric = jspVar_supp_card2_nric1+jspVar_supp_card2_nric2+jspVar_supp_card2_nric3;

tempStr = request.getParameter("supp_card2_passport");
if (tempStr != null) jspVar_supp_card2_passport = tempStr;

tempStr = request.getParameter("supp_card2_dd_dob");
if (tempStr != null) jspVar_supp_card2_dd_dob = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_supp_card2_dd_dob = Integer.parseInt(tempStr);

tempStr = request.getParameter("supp_card2_mm_dob");
if (tempStr != null) jspVar_supp_card2_mm_dob = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_supp_card2_mm_dob = Integer.parseInt(tempStr);

tempStr = request.getParameter("supp_card2_yyyy_dob");
if (tempStr != null) jspVar_supp_card2_yyyy_dob = tempStr;

jspVar_supp_card2_dob = jspVar_supp_card2_dd_dob+"-"+jspVar_supp_card2_mm_dob+"-"+jspVar_supp_card2_yyyy_dob;




tempStr = request.getParameter("supp_card2_email");
if (tempStr != null) jspVar_supp_card2_email = tempStr;

tempStr = request.getParameter("supp_card2_home_phone");
if (tempStr != null) jspVar_supp_card2_home_phone = tempStr;

tempStr = request.getParameter("supp_card2_office_phone");
if (tempStr != null) jspVar_supp_card2_office_phone = tempStr;

tempStr = request.getParameter("supp_card2_relationship");
if (tempStr != null) jspVar_supp_card2_relationship = tempStr;

tempStr = request.getParameter("supp_card2_mobile_phone");
if (tempStr != null) jspVar_supp_card2_mobile_phone = tempStr;

tempStr = request.getParameter("apply_uob_cashplus");
if (tempStr != null) jspVar_apply_uob_cashplus = tempStr;

String jspVar_apply_uob_virtualcard= null;

tempStr = request.getParameter("apply_uob_virtualcard");
if (tempStr != null) jspVar_apply_uob_virtualcard = tempStr;



String jspVar_sourcecode = null;
tempStr = request.getParameter("s_cid");
if (tempStr != null) {
	jspVar_sourcecode = tempStr;
}

tempStr = request.getParameter("sourcecode");
if (tempStr != null) jspVar_sourcecode = tempStr;

String jspVar_cpf = null;
String jspVar_dd_cpf = null;
String jspVar_mm_cpf = null;
String jspVar_yyyy_cpf = null;

int jspInt_dd_cpf = 0;
int jspInt_mm_cpf = 0;

tempStr = request.getParameter("dd_cpf");
if (tempStr != null) jspVar_dd_cpf = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_dd_cpf = Integer.parseInt(tempStr);


tempStr = request.getParameter("mm_cpf");
if (tempStr != null) jspVar_mm_cpf = tempStr;
if (tempStr != null && !tempStr.equals("") )
jspInt_mm_cpf = Integer.parseInt(tempStr);

tempStr = request.getParameter("yyyy_cpf");
if (tempStr != null) jspVar_yyyy_cpf = tempStr;

jspVar_cpf = jspVar_dd_cpf+"-"+jspVar_mm_cpf+"-"+jspVar_yyyy_cpf;


String jspVar_CreditLimit= null;
tempStr = request.getParameter("CreditLimit");
if (tempStr != null) jspVar_CreditLimit = tempStr;

String jspVar_CLNoPref= null;
tempStr = request.getParameter("CLNoPref");
if (tempStr != null) jspVar_CLNoPref = tempStr;

String jspVar_CLPref= null;
tempStr = request.getParameter("CLPref");
if (tempStr != null) jspVar_CLPref = tempStr;


String jspVar_name_extracash_na = null;
tempStr = request.getParameter("name_extracash_na");
if (tempStr != null) jspVar_name_extracash_na = tempStr;

String jspVar_cards_extra_cash_yes_no = null;
tempStr = request.getParameter("cards_extra_cash_yes_no");
if (tempStr != null) jspVar_cards_extra_cash_yes_no = tempStr;

String jspVar_cards_fund_transfer_repay= null;
tempStr = request.getParameter("cards_fund_transfer_repay");
if (tempStr != null) jspVar_cards_fund_transfer_repay = tempStr;

String jspVar_name_of_bank= null;
tempStr = request.getParameter("name_of_bank");
if (tempStr != null) jspVar_name_of_bank = tempStr;

String jspVar_name_of_account_holder= null;
tempStr = request.getParameter("name_of_account_holder");
if (tempStr != null) jspVar_name_of_account_holder = tempStr;

String jspVar_bank_account_number= null;
tempStr = request.getParameter("bank_account_number");
if (tempStr != null) jspVar_bank_account_number = tempStr;

String jspVar_transfer_loan_amount= null;
tempStr = request.getParameter("transfer_loan_amount");
if (tempStr != null) jspVar_transfer_loan_amount = tempStr;

String jspVar_transfer_pl_inr= null;
tempStr = request.getParameter("transfer_pl_inr");
if (tempStr != null) jspVar_transfer_pl_inr = tempStr;


String jspVar_tenor= null;
tempStr = request.getParameter("tenor");
if (tempStr != null) jspVar_tenor = tempStr;
%>

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
                                <li class="step-1 active" data-related-step="card-register-step-1"><a href="#step1"><span class="icon icon-user"></span><span class="text hidden-xs">Basic Details</span><span class="text hidden-sm hidden-md hidden-lg">Step 1</span></a></li>
                                <li class="step-2" data-related-step="card-register-step-2"><a href="#step2"><span class="icon icon-phone"></span><span class="text hidden-xs">Applicant Information</span><span class="text hidden-sm hidden-md hidden-lg">Step 2</span></a></li>
                                <li class="step-3" data-related-step="card-register-step-3"><a href="#"><span class="icon icon-check"></span><span class="text hidden-xs">Confirmation</span><span class="text hidden-sm hidden-md hidden-lg">Step 3</span></a></li>
                                <li class="step-4" data-related-step="card-register-step-4"><a href="#"><span class="icon icon-like"></span><span class="text hidden-xs">Complete</span><span class="text hidden-sm hidden-md hidden-lg">Step 4</span></a></li>
                            </ul>
                            <span class="border"></span>
                        </div>
                    </div>
                </div>
                <div id="card-lead-gen-form" class="card-register-form">
                    <!-- Begin: Card Form Step 1 -->
                    <form method="POST" id="card-register-step-1" class="row card-register-step card-register-step-1 hide" data-percent-complete="2" name="leadGenForm" >
                        <div class="identify-customer">
                            <div class="customer-type-switch text-center form-group">
                                <label class="radio-input selected" data-target="#new-customer">
                                    <input type="radio" name="existing_cx" value="New Customer" checked /><span>New customer</span>
                                </label>
                                <label class="radio-input" data-target="#existing-customer">
                                    <input type="radio" name="existing_cx" value="Existing Customer" /><span>Existing UOB Card Customer</span>
                                </label>
                            </div>
                            <div class="lead-form-wrapper">
                                <p class="legend">* Denotes compulsory fields</p>
                                <div id="new-customer" class="new-customer">
                                    <div class="form-outer-bound hide" data-related-to="existing_cx" data-related-val="Existing Customer">
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
                                    <div class="separator or-separator text-center hide" data-related-to="existing_cx" data-related-val="Existing Customer">or</div>
                                    <div class="form-outer-bound">
                                        <div class="form-outer-bound-header hide" data-related-to="existing_cx" data-related-val="Existing Customer">
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
                                                        <input type="radio" data-type="Male" name="title" value="Mr" <% if(jspVar_title != null && jspVar_title.equalsIgnoreCase("Mr")) out.print("checked"); %> required />
                                                        <span>Mr</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Mrs" <% if(jspVar_title != null && jspVar_title.equalsIgnoreCase("Mrs")) out.print("checked"); %> required />
                                                        <span>Mrs</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Ms" <% if(jspVar_title != null && jspVar_title.equalsIgnoreCase("Ms")) out.print("checked"); %> required />
                                                        <span>Ms</span>
                                                    </label>
                                                    <br class="hidden-sm hidden-md hidden-lg">
                                                    <label class="radio-input">
                                                        <input type="radio" data-type="Female" name="title" value="Mdm" <% if(jspVar_title != null && jspVar_title.equalsIgnoreCase("Mdm")) out.print("checked"); %> required />
                                                        <span>Mdm</span>
                                                    </label>
                                                    <label class="radio-input">
                                                        <input type="radio" name="title" value="Dr" <% if(jspVar_title != null && jspVar_title.equalsIgnoreCase("Dr")) out.print("checked"); %> required />
                                                        <span>Dr</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group full-name">
                                                <label class="control-label">Full name as in your NRIC / Passport*</label>
                                                <input type="text" class="form-control" name="name" value="<% if(jspVar_name != null) out.print(jspVar_name);%>"  required />
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group email">
                                                <label class="control-label">Email address*</label>
                                                <input type="text" class="form-control" name="email" value="<% if(jspVar_email != null) out.print(jspVar_email);%>" required data-rule-email="true" />
                                            </div>
                                            <span class="separator"></span>
                                        </div>
                                        <div class="form-group-container">
                                            <div class="form-group mobile last">
                                                <label class="control-label">Mobile number*</label><br>
                                                <small>(Mandatory for card activation and One-time-Password-SMS-OTP)</small>
                                                <input type="number" class="form-control" name="mobile_phone" value="<% if(jspVar_mobile_phone != null) out.print(jspVar_mobile_phone);%>" required data-rule-mobile="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="submission step-1-submission">
                                <a href="#" class="btn primary-btn btn-1 btn-submit">Continue</a>
                            </div>
                        </div>
                    </form>
                    <form method="POST" name="registrationDetailForm" id="card-register-step-2" class="row card-register-step card-register-step-2 hide" data-percent-complete="89">
                    <!-- Begin: Card Form Step 2-->
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
                                    <input type="text" class="form-control" maxlength="19" name="name_creditcard"  value="<% if(jspVar_name_creditcard != null) out.print(jspVar_name_creditcard);%>"  required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Gender*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input radio-input-gender">
                                            <input type="radio" name="gender" value="M-Male" <% if(jspVar_gender != null && jspVar_gender.equalsIgnoreCase("M-Male")) out.print("checked"); %> required />
                                            <span class="icon-male"></span> <span>Male</span>
                                        </label>
                                        <label class="radio-input radio-input-gender">
                                            <input type="radio" name="gender" value="F-Female" <% if(jspVar_gender != null && jspVar_gender.equalsIgnoreCase("F-Female")) out.print("checked"); %> required />
                                            <span class="icon-female"></span> <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container form-group-fulldate-group">
                                <div class="form-group">
                                    <label class="control-label">Date of birth*</label>
                                    <input type="text" placeholder="DD / MM / YYYY" class="form-control resembled-date" name="dob" value="<% if(jspVar_dd_dob != null) out.print(jspVar_dd_dob); %>/<% if(jspVar_mm_dob != null) out.print(jspVar_mm_dob); %>/<% if(jspVar_yyyy_dob != null) out.print(jspVar_yyyy_dob); %>" data-rule-yearOldRule="true" required data-rule-dateITA="true" tab="-1" />
                                    <div class="fake-date-input">
                                        <input type="text" name="dd_dob" value="<% if(jspVar_dd_dob != null) out.print(jspVar_dd_dob); %>"  placeholder="DD" class="day-input ignore" maxlength="2" /><span>/</span>
                                        <input type="text" name="mm_dob" value="<% if(jspVar_mm_dob != null) out.print(jspVar_mm_dob); %>"  placeholder="MM" class="month-input ignore" maxlength="2" /><span>/</span>
                                        <input type="text" name="yyyy_dob" value="<% if(jspVar_yyyy_dob != null) out.print(jspVar_yyyy_dob); %>"  placeholder="YYYY" class="year-input ignore" maxlength="4" />
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Nationality*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="nationality" value="SG-Singapore" <% if(jspVar_nationality != null && jspVar_nationality.equalsIgnoreCase("SG-Singapore")) out.print("checked"); %> required />
                                            <span>Singaporean</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="nationality" value="SG-Singapore-PR" <% if(jspVar_nationality != null && jspVar_nationality.equalsIgnoreCase("SG-Singapore-PR")) out.print("checked"); %> required />
                                            <span>Singapore PR</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="nationality" value="Others" <% if(jspVar_nationality != null && jspVar_nationality.equalsIgnoreCase("Others")) out.print("checked"); %> required />
                                            <span>Foreigners</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <!-- Appear when Nationality is Singapore -->
                            <div class="hide" data-related-to="nationality" data-related-val="SG-Singapore|SG-Singapore-PR">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">NRIC/PR No.*</label>
                                        <input type="text" class="form-control nric-input" name="SingaporeNRIC" required data-rule-NRIC="true"/>
                                        <input type="hidden" class="nric-1" name="nric1" value="<% if(jspVar_nric1 != null) out.print(jspVar_nric1); %>" />
                                        <input type="hidden" class="nric-2" name="nric2" value="<% if(jspVar_nric2 != null) out.print(jspVar_nric2); %>"/>
                                        <input type="hidden" class="nric-3" name="nric3" value="<% if(jspVar_nric3 != null) out.print(jspVar_nric3); %>"/>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="hide" data-related-to="nationality" data-related-val="Others|SG-Singapore-PR">
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
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control resembled-date" name="id_expiry_date" value="<% if(jspVar_id_expiry_dd != null) out.print(jspVar_id_expiry_dd); %>/<% if(jspVar_id_expiry_mm != null) out.print(jspVar_id_expiry_mm); %>/<% if(jspVar_id_expiry_yyyy != null) out.print(jspVar_id_expiry_yyyy); %>" required data-rule-dateITA="true" tab="-1" />
                                        <div class="fake-date-input">
                                            <input type="text" name="id_expiry_dd" value="<% if(jspVar_id_expiry_dd != null) out.print(jspVar_id_expiry_dd); %>" placeholder="DD" class="form-control day-input ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="id_expiry_mm" value="<% if(jspVar_id_expiry_mm != null) out.print(jspVar_id_expiry_mm); %>" placeholder="MM" class="form-control month-input ignore" maxlength="2" /><span>/</span>
                                            <input type="text" name="id_expiry_yyyy" value="<% if(jspVar_id_expiry_yyyy != null) out.print(jspVar_id_expiry_yyyy); %>" placeholder="YYYY" class="form-control year-input ignore" maxlength="4" />
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <!-- Appear when Nationality is Foreigner -->
                            <div class="hide" data-related-to="nationality" data-related-val="Others">
                                <div class="form-group-container form-group-fulldate-group">
                                    <div class="form-group">
                                        <label class="control-label">Employment Passport expiry date*</label>
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control resembled-date" name="ep_expiry_date" value="<% if(jspInt_ep_expiry_dd != 0) out.print(jspInt_ep_expiry_dd); %>/<% if(jspInt_ep_expiry_mm != 0) out.print(jspInt_ep_expiry_mm); %>/<% if(jspInt_ep_expiry_yyyy != 0) out.print(jspInt_ep_expiry_yyyy); %>" required data-rule-dateITA="true" tab="-1" />
                                        <div class="fake-date-input">
                                            <input type="text" placeholder="DD" name="ep_expiry_dd" class="form-control day-input ignore" value="<% if(jspInt_ep_expiry_dd != 0) out.print(jspInt_ep_expiry_dd); %>" maxlength="2" /><span>/</span>
                                            <input type="text" placeholder="MM" name="ep_expiry_mm" class="form-control month-input ignore" value="<% if(jspInt_ep_expiry_mm != 0) out.print(jspInt_ep_expiry_mm); %>" maxlength="2" /><span>/</span>
                                            <input type="text" placeholder="YYYY" name="ep_expiry_yyyy" class="form-control year-input ignore" value="<% if(jspInt_ep_expiry_yyyy != 0) out.print(jspInt_ep_expiry_yyyy); %>" maxlength="4" />
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
                                            <option value="" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("")) out.print("Selected");%>></option>
                                            <option value="A-GCE A Level or Equivalent" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("A-GCE A Level or Equivalent")) out.print("Selected");%> >GCE A Level or Equivalent</option>
                                            <option value="B-Bachelor Degree" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("B-Bachelor Degree")) out.print("Selected");%>>Bachelor Degree</option>
                                            <option value="C-Certificate (NTC/LCCI/Others)" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("C-Certificate (NTC/LCCI/Others)")) out.print("Selected");%>>Certificate (NTC/LCCI/Others)</option>
                                            <option value="D-Diploma" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("D-Diploma")) out.print("Selected");%>>Diploma</option>
                                            <option value="F-Professional Qualification" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("F-Professional Qualification")) out.print("Selected");%>>Professional Qualification</option>
                                            <option value="G-Post Graduate Diploma" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("G-Post Graduate Diploma")) out.print("Selected");%>>Post Graduate Diploma</option>
                                            <option value="H-Honours Degree" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("H-Honours Degree")) out.print("Selected");%>>Honours Degree</option>
                                            <option value="M-Masters Degree" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("M-Masters Degree")) out.print("Selected");%>>Masters Degree</option>
                                            <option value="N-GCE N Level or Equivalent" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("N-GCE N Level or Equivalent")) out.print("Selected");%>>GCE N Level or Equivalent</option>
                                            <option value="O-GCE O Level or Equivalent" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("O-GCE O Level or Equivalent")) out.print("Selected");%>>GCE O Level or Equivalent</option>
                                            <option value="P-Primary" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("P-Primary")) out.print("Selected");%>>Primary</option>
                                            <option value="S-Secondary" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("S-Secondary")) out.print("Selected");%>>Secondary</option>
                                            <option value="T-Doctorate Degree" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("T-Doctorate Degree")) out.print("Selected");%>>Doctorate Degree</option>
                                            <option value="V-Advanced Diploma" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("V-Advanced Diploma")) out.print("Selected");%>>Advanced Diploma</option>
                                            <option value="X-No Formal Education" <%if(jspVar_qualification !=null && jspVar_qualification.equalsIgnoreCase("X-No Formal Education")) out.print("Selected");%>>No Formal Education</option>
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
                                            <input type="radio" name="maritalstatus" value="M-Married" <%if(jspVar_maritalstatus !=null && jspVar_maritalstatus.equalsIgnoreCase("M-Married")) out.print("checked");%> required />
                                            <span>Single</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="S-Single" <%if(jspVar_maritalstatus !=null && jspVar_maritalstatus.equalsIgnoreCase("S-Single")) out.print("checked");%> required />
                                            <span>Married</span>
                                        </label>
                                        <br class="hidden-sm hidden-md hidden-lg">
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="D-Divorced" <%if(jspVar_maritalstatus !=null && jspVar_maritalstatus.equalsIgnoreCase("D-Divorced")) out.print("checked");%> required />
                                            <span>Divorced</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="maritalstatus" value="W-Widowed" <%if(jspVar_maritalstatus !=null && jspVar_maritalstatus.equalsIgnoreCase("W-Widowed")) out.print("checked");%> required />
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
                                            <input type="radio" name="dependents" value="0" <%if(jspVar_dependents !=null && (jspVar_dependents.equalsIgnoreCase("") || jspVar_dependents.equalsIgnoreCase("0"))) out.print("checked");%> required />
                                            <span>0</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="1" <%if(jspVar_dependents !=null && jspVar_dependents.equalsIgnoreCase("1")) out.print("checked");%> required />
                                            <span>1</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="2" <%if(jspVar_dependents !=null && jspVar_dependents.equalsIgnoreCase("2")) out.print("checked");%> required />
                                            <span>2</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="3" <%if(jspVar_dependents !=null && jspVar_dependents.equalsIgnoreCase("3")) out.print("checked");%> required />
                                            <span>3</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="4" <%if(jspVar_dependents !=null && jspVar_dependents.equalsIgnoreCase("4")) out.print("checked");%> required />
                                            <span>4</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="5" <%if(jspVar_dependents !=null && jspVar_dependents.equalsIgnoreCase("5")) out.print("checked");%> required />
                                            <span>5</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="dependents" value="5+" <%if(jspVar_dependents !=null && jspVar_dependents.equalsIgnoreCase("5+")) out.print("checked");%> required />
                                            <span>More than 5</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Mother's maiden name*</label>
                                    <input type="text" class="form-control" name="maiden_name" value="<% if(jspVar_maiden_name != null) out.print(jspVar_maiden_name); %>" required maxlength="15" data-msg-maxlength="Maximum 15 characters" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Home contact number</label>
                                    <input type="number" class="form-control phone-number" name="home_phone" value="<% if(jspVar_home_phone != null) out.print(jspVar_home_phone); %>" data-rule-phone="true" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Office contact number</label>
                                    <input type="number" class="form-control phone-number" name="office_phone" value="<% if(jspVar_office_phone != null) out.print(jspVar_office_phone); %>" data-rule-phone="true" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="hide" data-related-to="nationality" data-related-val="Others">
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Oversea Contact No.*</label>
                                        <input type="number" class="form-control" name="other_overseas_contact_number" value="<% if(jspVar_other_overseas_contact_number != null) out.print(jspVar_other_overseas_contact_number); %>" minlength="5" required />
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">Oversea Address*</label>
                                        <input type="text" class="form-control" name="other_overseas_postal_address" value="<% if(jspVar_other_overseas_postal_address != null) out.print(jspVar_other_overseas_postal_address); %>" required />
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Home postal code*</label>
                                    <div class="row input-control-group">
                                        <div class="col-xs-8 col-md-8">
                                            <input type="text" class="form-control" name="homeaddr_pin" value="<% if(jspVar_homeaddr_pin != null) out.print(jspVar_homeaddr_pin); %>"  maxlength="6" minlength="6" data-type="numerals" required />
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
                                    <input type="text" class="form-control" name="homeaddr_street_name" value="<% if(jspVar_homeaddr_street_name != null) out.print(jspVar_homeaddr_street_name); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Building Name</label>
                                    <input type="text" class="form-control" name="homeaddr_build_name" value="<% if(jspVar_homeaddr_build_name != null) out.print(jspVar_homeaddr_build_name); %>"  />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Block / House No.*</label>
                                    <input type="text" class="form-control" name="homeaddr_blk_no" value="<% if(jspVar_homeaddr_blk_no != null) out.print(jspVar_homeaddr_blk_no); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Storey*</label>
                                    <input type="text" class="form-control" name="homeaddr_storey_no" value="<% if(jspVar_homeaddr_storey_no != null) out.print(jspVar_homeaddr_storey_no); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Unit No.*</label>
                                    <input type="text" class="form-control" name="homeaddr_unit_no" value="<% if(jspVar_homeaddr_unit_no != null) out.print(jspVar_homeaddr_unit_no); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">State / City</label>
                                    <input type="text" class="form-control" name="homeaddr_city_state" value="<% if(jspVar_homeaddr_city_state != null) out.print(jspVar_homeaddr_city_state); %>" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Residence Status*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Owned" <% if(jspVar_residence != null && jspVar_residence.equalsIgnoreCase("OU-Owned")) out.print("checked"); %> > required />
                                            <span>Owned</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Parents" <% if(jspVar_residence != null && jspVar_residence.equalsIgnoreCase("PA-parent's")) out.print("checked"); %> required />
                                            <span>Parent's</span>
                                        </label>
                                        <br class="hidden-sm hidden-md hidden-lg">
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Others" <% if(jspVar_residence != null && jspVar_residence.equalsIgnoreCase("XX-Others")) out.print("checked"); %> required />
                                            <span>Others</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence" value="Rented" <% if(jspVar_residence != null && jspVar_residence.equalsIgnoreCase("RN-Rented")) out.print("checked"); %> required />
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
                                            <%
                                             
                                               strTmpSelect = "";
                                               iVecSize = vecCountryNames.size();
                                               

                                               
                                               for (int i = 0; i < iVecSize ; i++) { 
                                                 
                                                 String strTmpValue = (String)vecCountryCV.get(i);
                                                 String strTmpName = (String)vecCountryNames.get(i);
                                                 
                                                    if (jspVar_homeaddr_country != null && strTmpValue.equalsIgnoreCase(jspVar_homeaddr_country))
                                                      {

                                                          strTmpSelect = "<option value=\"" + strTmpValue + "\" SELECTED>" + strTmpName + "</option>\n";
                                                          out.print(strTmpSelect);
                                                          
                                                      }
                                                   else
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
                            <div class="form-group-container form-group-container-date">
                                <div class="form-group">
                                    <label class="control-label">Years of living at the above address*</label>
                                    <div class="input-control-group date">
                                        <input type="text" class="duration-date-group" placeholder="YY" data-type="numerals" name="years_residence" maxlength="2" value="<% if(jspVar_years_residence != null) out.print(jspVar_years_residence);%>" /> Year(s) and <input type="text" class="duration-date-group" placeholder="MM" name="months_residence" data-type="numerals" maxlength="2" value="<% if(jspVar_months_residence != null) out.print(jspVar_months_residence);%>" /> Month(s)
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">What type of property is this*</label>
                                    <div class="input-control-group property-group">
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="H3-HDB - 3Rm/4Rm" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("H3-HDB - 3Rm/4Rm")) out.print("checked");%> required />
                                            <span>HDB (3Rm/4Rm)</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="H5-HDB - 5Rm/Executive Apartment" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("H5-HDB - 5Rm/Executive Apartment")) out.print("checked");%> required />
                                            <span>HDB (5Rm / Executive Apartment)</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="EC-Executive Condo/HUDC" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("EC-Executive Condo/HUDC")) out.print("checked");%> required />
                                            <span>Executive Condo / HUDC</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="PC-Private Apartment/Condominium" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("PC-Private Apartment/Condominium")) out.print("checked");%> required />
                                            <span>Private Apartment / Condominium</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="TE-Terrace" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("TE-Terrace")) out.print("checked");%> required />
                                            <span>Terrace</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="SM-Semi-Detached" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("SM-Semi-Detached")) out.print("checked");%> required />
                                            <span>Bungalow</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="residence_type" value="BG-Bungalow" <%if(jspVar_residence_type !=null && jspVar_residence_type.equalsIgnoreCase("BG-Bungalow")) out.print("checked");%> required />
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
                                            <input type="radio" name="self_employed" value="yes" <% if(jspVar_self_employed != null && jspVar_self_employed.equalsIgnoreCase("Yes")) out.print("checked"); %> required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="self_employed" value="no" <% if(jspVar_self_employed != null && jspVar_self_employed.equalsIgnoreCase("No")) out.print("checked"); %> required />
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
                                            <%
                                                    String strTmpSelectJob = "";
                                                    int iVecSizeJob = vecJobTypes.size();
                                             
                                                    for (int i = 0; i < iVecSizeJob ; i++) {

                                                    String strTmpValueJob = (String)vecJobCV.get(i);
                                                    String strTmpNameJob = (String)vecJobTypes.get(i);

                                                    if (jspVar_designation != null && strTmpValueJob.equalsIgnoreCase(jspVar_designation))
                                                      {

                                                        strTmpSelectJob = "<option value=\"" + strTmpValueJob + "\"  SELECTED>" + strTmpNameJob + "</option>\n";
                                                        out.print(strTmpSelectJob);
                                                          
                                                      }
                                                    else
                                                      {
                                                        strTmpSelectJob = "<option value=\"" + strTmpValueJob + "\" >" + strTmpNameJob + "</option>\n";
                                                        out.print(strTmpSelectJob);
                                                      }
                                                }
                                            %>
                                        </select>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container form-group-container-date">
                                <div class="form-group">
                                    <label class="control-label">Number of years in employment*</label>
                                    <div class="input-control-group date">
                                        <input type="text" class="duration-date-group-2" data-type="numerals" placeholder="YY" name="service_years" maxlength="2" value="<% if(jspVar_service_years != null) out.print(jspVar_service_years);%>" /> Year(s) and <input type="text" class="duration-date-group-2" placeholder="MM" name="service_months" data-type="numerals" maxlength="2" value="<% if(jspVar_service_months != null) out.print(jspVar_service_months);%>" data-rule-max="11" /> Month(s)
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Monthly gross income*</label>
                                    <div class="currency-wrapper">
                                        <span class="currency">S$</span><input type="text" class="form-control" data-type="numerals" data-format="currency" name="annualGrossInc" required />
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Office postal code*</label>
                                    <div class="row input-control-group">
                                        <div class="col-xs-8 col-md-8">
                                            <input type="text" class="form-control" name="officeaddr_pin" value="<% if(jspVar_officeaddr_pin != null) out.print(jspVar_officeaddr_pin);%>" maxlength="6" minlength="6" required data-type="numerals" />
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
                                    <input type="text" class="form-control" name="officeStreetName" value="<% if(jspVar_officeaddr_street_name != null) out.print(jspVar_officeaddr_street_name); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Building Name</label>
                                    <input type="text" class="form-control" name="officeBuildingName" value="<% if(jspVar_officeaddr_build_name != null) out.print(jspVar_officeaddr_build_name); %>"/>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Block / House No.*</label>
                                    <input type="text" class="form-control" name="officeBlockNumber" value="<% if(jspVar_officeaddr_blk_no != null) out.print(jspVar_officeaddr_blk_no); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Storey*</label>
                                    <input type="text" class="form-control" name="officeStorey" value="<% if(jspVar_officeaddr_storey_no != null) out.print(jspVar_officeaddr_storey_no); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Unit No.*</label>
                                    <input type="text" class="form-control" name="officeUnitNo" value="<% if(jspVar_officeaddr_unit_no != null) out.print(jspVar_officeaddr_unit_no); %>" required />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">State / City</label>
                                    <input type="text" class="form-control" name="officeState" value="<% if(jspVar_officeaddr_city_state != null) out.print(jspVar_officeaddr_city_state); %>" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Country*</label>
                                    <div class="select-control-group">
                                        <select name="officeCountry" class="selectUI theme-01" required>
                                                <%
                                                 
                                                   strTmpSelect = "";
                                                   iVecSize = vecCountryNames.size();
                                                   

                                                   
                                                   for (int i = 0; i < iVecSize ; i++) { 
                                                     
                                                     String strTmpValue = (String)vecCountryCV.get(i);
                                                     String strTmpName = (String)vecCountryNames.get(i);
                                                     
                                                        if (jspVar_officeaddr_country != null && strTmpValue.equalsIgnoreCase(jspVar_officeaddr_country))
                                                          {

                                                              strTmpSelect = "<option value=\"" + strTmpValue + "\" SELECTED>" + strTmpName + "</option>\n";
                                                              out.print(strTmpSelect);
                                                              
                                                          }
                                                       else
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
                                    <label class="control-label">My billing address will be...*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="billto" value="home" <% if(jspVar_billto != null && jspVar_billto.equalsIgnoreCase("Home")) out.print("checked");%> required />
                                            <span>My home address</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="billto" value="office" <% if(jspVar_billto != null && jspVar_billto.equalsIgnoreCase("Office")) out.print("checked");%> required />
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
                                        <input type="text" placeholder="DD / MM / YYYY" class="form-control resembled-date" name="CPFStatementDate" data-rule-dateITA="true" tab="-1" value="<% if(jspVar_dd_cpf != null) out.print(jspVar_dd_cpf); %>/<% if(jspVar_mm_cpf != null) out.print(jspVar_mm_cpf); %>/<% if(jspVar_yyyy_cpf != null) out.print(jspVar_yyyy_cpf); %>" />
                                        <div class="fake-date-input">
                                            <input type="text" placeholder="DD" name="dd_cpf" class="form-control day-input ignore" value="<% if(jspVar_dd_cpf != null) out.print(jspVar_dd_cpf); %>" maxlength="2" /><span>/</span>
                                            <input type="text" placeholder="MM" name="mm_cpf" class="form-control month-input ignore" value="<% if(jspVar_mm_cpf != null) out.print(jspVar_mm_cpf); %>" maxlength="2" /><span>/</span>
                                            <input type="text" placeholder="YYYY" name="yyyy_cpf" class="form-control year-input ignore" value="<% if(jspVar_yyyy_cpf != null) out.print(jspVar_yyyy_cpf); %>" maxlength="4" />
                                        </div>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div> -->
                            <div class="form-group-container hide singtel-acc">
                                <div class="form-group">
                                    <label class="control-label">Singtel account no.*</label>
                                    <input type="text" class="form-control" name="singtel_account_number" value="<% //if(jspVar_singtel_account_number != null) out.print(jspVar_singtel_account_number); %>" required data-type="numerals" />
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">Do you want to link your UOB Credit Card account to your Frequent Flyer membership?*</label><br>
                                    <small>A S$25 conversion fee will be charged to your Card for each conversion of UNI$ to frequent flyer miles.</small>
                                    <div class="input-control-group">
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="register_frequent_flyer" value="yes" <% if(jspVar_register_frequent_flyer != null && jspVar_register_frequent_flyer.equalsIgnoreCase("Yes")) out.print("checked");%> required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="register_frequent_flyer" value="no" <% if(jspVar_register_frequent_flyer != null && jspVar_register_frequent_flyer.equalsIgnoreCase("No")) out.print("checked");%> required />
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
                                        <input type="text" class="form-control kris-flyer" name="krisflyer_number1" value="<% if(jspVar_krisflyer_number1 != null) out.print(jspVar_krisflyer_number1); %>" data-type="numerals" /><br>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group">
                                        <label class="control-label">My Asia Miles membership number</label>
                                        <input type="text" class="form-control kris-flyer" name="asiamiles_number1" value="<% if(jspVar_asiamiles_number1 != null) out.print(jspVar_asiamiles_number1); %>" data-type="numerals" /><br>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                            </div>
                            <div class="form-group-container">
                                <div class="form-group">
                                    <label class="control-label">I would like to set my credit limit*</label>
                                    <div class="input-control-group">
                                        <label class="radio-input">
                                            <input type="radio" name="CLPref" value="no" <% if(jspVar_CLPref != null && jspVar_CLPref.equalsIgnoreCase("no")) out.print("checked");%> required />
                                            <span>I'm fine with what UOB decides</span>
                                        </label>
                                        <label class="radio-input">
                                            <input type="radio" name="CLPref" value="yes" <% if(jspVar_CLPref != null && jspVar_CLPref.equalsIgnoreCase("yes")) out.print("checked");%> required />
                                            <span>Yes, I want to set the limit</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="hide" data-related-to="CLPref" data-related-val="yes">
                                    <div class="range-block">
                                        <!-- Range slider -->
                                        <div class="range-blocks-container active" id="card-limit-slider">
                                            <div class="range-container active">
                                                <div class="range-slider"></div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <input id="card-limit" type="text" name="CreditLimit" value="<% if(jspVar_CreditLimit != null) out.print(jspVar_CreditLimit);%>" />
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
                                            <input type="radio" name="cards_extra_cash_yes_no" <% if(jspVar_cards_extra_cash_yes_no != null && jspVar_cards_extra_cash_yes_no.equalsIgnoreCase("yes")) out.print("checked");%> value="yes" required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="cards_extra_cash_yes_no" <% if(jspVar_cards_extra_cash_yes_no == null || jspVar_cards_extra_cash_yes_no.equalsIgnoreCase("no")) out.print("checked");%> value="no" required />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                                <span class="separator"></span>
                            </div>
                            <div class="hide" data-related-to="cards_extra_cash_yes_no" data-related-val="yes">
                                <div class="form-group-container payment-method">
                                    <div class="form-group">
                                        <label class="control-label">What kind of repayment method do you prefer?*</label>
                                        <div class="input-control-group">
                                            <label class="radio-input">
                                                <input type="radio" name="cards_fund_transfer_repay" value="Cards Funds Transfer" <% if(jspVar_cards_extra_cash_yes_no != null && jspVar_cards_extra_cash_yes_no.equalsIgnoreCase("Cards Funds Transfer")) out.print("checked");%> required />
                                                <span>Flexible repayment with Cards Funds Transfer</span>
                                            </label>
                                            <label class="radio-input">
                                                <input type="radio" name="cards_fund_transfer_repay" value="Cards Personal Loan" <% if(jspVar_cards_extra_cash_yes_no != null && jspVar_cards_extra_cash_yes_no.equalsIgnoreCase("Cards Personal Loan")) out.print("checked");%> required />
                                                <span>Fixed repayment with Cards Personal Loan</span>
                                            </label>
                                        </div>
                                    </div>
                                    <span class="separator"></span>
                                </div>
                                <div class="hide" data-related-to="cards_fund_transfer_repay" data-related-val="Cards Funds Transfer">
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Tenor*</label>
                                            <div class="input-control-group">
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="0% for 6 months with 2.5% fee" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("0% for 6 months with 2.5% fee")) out.print("checked");%> required />
                                                    <span>0% for 6 months with 2.5% fee</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="0% for 12 months with 4.5% fee" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("0% for 12 months with 4.5% fee")) out.print("checked");%> required />
                                                    <span>0% for 12 months with 4.5% fee</span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                </div>
                                <div class="hide" data-related-to="cards_fund_transfer_repay" data-related-val="Cards Personal Loan">
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Tenor*</label>
                                            <div class="input-control-group">
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="12 Months" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("12 Months")) out.print("checked");%> required />
                                                    <span>12 Months</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="24 Months" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("24 Months")) out.print("checked");%> required />
                                                    <span>24 Months</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="36 Months" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("36 Months")) out.print("checked");%> required />
                                                    <span>36 Months</span>
                                                </label>
                                                <br>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="48 Months" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("48 Months")) out.print("checked");%> required />
                                                    <span>48 Months</span>
                                                </label>
                                                <label class="radio-input">
                                                    <input type="radio" name="tenor" value="60 Months" <% if(jspVar_tenor != null && jspVar_tenor.equalsIgnoreCase("60 Months")) out.print("checked");%> required />
                                                    <span>60 Months</span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                </div>
                                <div class="hide" data-related-to="cards_extra_cash_yes_no" data-related-val="yes">
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Loan Amount*</label>
                                            <div class="currency-wrapper">
                                                <span class="currency">S$</span><input type="text" class="form-control" data-type="numerals" data-format="currency" name="transfer_loan_amount" value="<% if(jspVar_transfer_loan_amount != null) out.print(jspVar_transfer_loan_amount); %>" required />
                                            </div>
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Name of crediting bank*</label>
                                            <input type="text" class="form-control" name="name_of_bank" value="<% if(jspVar_name_of_bank != null) out.print(jspVar_name_of_bank); %>" required />
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Name of account holder*</label>
                                            <input type="text" class="form-control" name="name_of_account_holder" value="<% if(jspVar_name_of_account_holder != null) out.print(jspVar_name_of_account_holder); %>" required />
                                        </div>
                                        <span class="separator"></span>
                                    </div>
                                    <div class="form-group-container">
                                        <div class="form-group">
                                            <label class="control-label">Account number*</label>
                                            <input type="text" class="form-control" name="bank_account_number" value="<% if(jspVar_bank_account_number != null) out.print(jspVar_bank_account_number); %>" required />
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
                                            <input type="radio" name="samedayDelivery" value="yes" required />
                                            <span>Yes</span>
                                        </label>
                                        <label class="radio-input yes-no-choice">
                                            <input type="radio" name="samedayDelivery" value="no" required />
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
    <script src="scripts/card-register-ui.js"></script>
    <script src="assets/js/analytics.js"></script>
    <script type="text/javascript">_satellite.pageBottom();</script>
	
	<script type="text/javascript">
<!--
var eventsToOverride = "event6";
var eVar9ToOverride  = "IPA: UOB One Card";
//-->
</script>
<script type="text/javascript" src="https://uniservices1.uobgroup.com/secure/assets/js/analytics.js"></script>

</body>
</html>