define(['questAPI','underscore'], function(Quest,_){

    var API = new Quest();
    var isTouch = API.getGlobal().isTouch;

    /**
	* Settings
	*/
    API.addSettings('logger',{pulse: 3});

    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        header: 'Demographics',
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 6' : 'Page <%= pagesMeta.number %> out of 14'
    });

    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: true,
        required : true,
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
        },
        autoSubmit:true,
        numericValues:true
    });

    API.addQuestionsSet('singleChoice',{
        inherit: 'basicQ',
        type: 'selectOne', 
        help: '<%= pagesMeta.number < 10 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
    });

    API.addQuestionsSet('text',{
        inherit: 'basicQ',
        type: 'text',
        noSubmit:false
    });

    API.addQuestionsSet('singleChoicedrop',{
        inherit: 'basicQ',
        autoSubmit:false,
        type: 'dropdown'
    });

    API.addQuestionsSet('multiChoice',{
        inherit: 'basicQ',
        type: 'selectMulti'
    });

    API.addQuestionsSet('boolean',{
        inherit: 'basicQ',
        type: 'selectOne',
        buttons: true,
        answers : [
            {text:'Yes', value:1},
            {text:'No', value:0}
        ]
    });

    /**
	* Actual questions
	*/
    API.addQuestionsSet('birthSex',{
        inherit: 'singleChoice',
        name: 'birthSex',
        stem: 'What sex were you assigned at birth, on your original birth certificate?',
        answers: [
            {text:'Male',value:1},
            {text:'Female',value:2}
        ]
    });

    API.addQuestionsSet('genderIdentity',{
        inherit: 'multiChoice',
        name: 'genderIdentity',
        stem: 'What is your current gender identity? (check all that apply)',
        answers: [
            {text:'Male',value:1},
            {text:'Female',value:2}, 
            {text:'Trans gender',value:3}, 
            {text:'Other',value:4}, 
        ]
    });

    API.addQuestionsSet('birthMonth',{
        inherit: 'singleChoice',
        style:'multiButtons',
        name: 'birthmonth',
        stem: 'What is your birth month?',
        answers: [
            {text:'January',value:1},
            {text:'February',value:2},
            {text:'March',value:3},
            {text:'April',value:4},
            {text:'May',value:5},
            {text:'June',value:6},
            {text:'July',value:7},
            {text:'August',value:8},
            {text:'September',value:9},
            {text:'October',value:10},
            {text:'November',value:11},
            {text:'December',value:12}
        ]
    });

    API.addQuestionsSet('birthYear',{
        inherit: 'singleChoicedrop',
        name: 'birthyear',
        stem: 'What is your birth year?',
        answers: _.range((new Date()).getFullYear()-5, 1910, -1) // use underscore to create an array of years from ten years ago back to 1910
    });

    API.addQuestionsSet('raceomb',{
        inherit: 'singleChoicedrop',
        name: 'raceomb002',
        stem: 'What is your race?',
        autoSubmit: false,
        answers: [
            {text:'American Indian/Alaska Native',value:1},
            {text:'East Asian',value:2},
            {text:'South Asian',value:3},
            {text:'Native Hawaiian or other Pacific Islander',value:4},
            {text:'Black or African American',value:5},
            {text:'White or European American',value:6},
            {text:'Other or Unknown',value:7},
            {text:'Multiracial',value:8}
        ]
    });

    API.addQuestionsSet('raceombmulti',{
        inherit: 'multiChoice',
        name: 'raceombmulti',
        stem: 'Please select the categories that comprise your race. (Click a category once to select it. Click it again to deselect. You may select as many categories as you wish. When you are finished, click Submit.)',
        answers: [
            {text:'American Indian/Alaska Native',value:1},
            {text:'East Asian',value:2},
            {text:'South Asian',value:3},
            {text:'Native Hawaiian or other Pacific Islander',value:4},
            {text:'Black or African American',value:5},
            {text:'White or European American',value:6},
            {text:'Other or Unknown',value:7}
        ]
    });

    API.addQuestionsSet('ethnicityomb',{
        inherit: isTouch ? 'singleChoice' : 'singleChoicedrop',
        name: 'ethnicityomb',
        autoSubmit: false,
        stem: 'Are you of Hispanic/Latino origin?',
        answers: [
            {text:'Yes',value:1},
            {text:'No',value:2},
            {text:'Unknown',value:3}
        ]
    });

    API.addQuestionsSet('maritalStatus',{
    inherit: 'singleChoice',
    name: 'maritalStatus',
    stem: 'What is your marital status?',
    answers: [
        {text:'Single/never married', value:0},
        {text:'Married', value:1},
        {text:'Domestic partnership/civil union', value:2},
        {text:'Separated', value:3},
        {text:'Divorced', value:4},
        {text:'Widowed', value:5},
    ]
    });

    API.addQuestionsSet('numChildren',{
        inherit: 'singleChoice',
        name: 'numChildren',
        stem: 'How many children do you have?',
        answers: [
            {text:'0', value:0},
            {text:'1', value:1},
            {text:'2', value:2},
            {text:'3', value:3},
            {text:'4', value:4},
            {text:'5 or more', value:5}
        ]
    })
    API.addQuestionsSet('politicalid',{
        inherit: 'singleChoice',
        name: 'politicalid7',
        stem: 'What is your political identity?',
        answers: [
            {text:'Strongly Conservative',value:1},
            {text:'Moderately Conservative',value:2},
            {text:'Slightly Conservative',value:3},
            {text:'Neutral',value:4},
            {text:'Slightly Liberal',value:5},
            {text:'Moderately Liberal',value:6},
            {text:'Strongly Liberal',value:7}
        ]
    });

    API.addQuestionsSet('politicalParty',{
        inherit:'singleChoice',
        name: 'politicalParty',
        stem: 'What is your political party affiliation?',
        answers: [
            {text:'Democratic Party', value:1},
            {text:'Republican Party', value:2},
            {text:'Libertarian Party', value:3},
            {text:'Independent/no party affiliation', value:4},
            {text:'Not registered to vote', value:4},
            {text:'Other', value:5}
        ]
    });
    API.addQuestionsSet('num',{
        inherit: 'singleChoice',
        name: 'num002',
        style:'multiButtons',
        stem: 'How many Implicit Association Tests (IATs) have you previously performed?',
        answers: [
            '0',
            '1',
            '2',
            '3-5',
            '6+'
        ]
    });

    API.addQuestionsSet('religionid',{
        inherit: 'singleChoice',
        name: 'religionid',
        stem: 'How religious do you consider yourself to be?',
        answers: [
            {text:'Strongly religious', value:'4'},
            {text:'Moderately religious', value:'3'},
            {text:'Slightly religious', value:'2'},
            {text:'Not at all religious', value:'1'}
        ]
    });

    API.addQuestionsSet('religion2014',{
        inherit: 'singleChoice',
        name: 'religion2014',
        stem: 'What is your religious affiliation?',
        answers: [
            {text:'Buddhist/Confucian/Shinto', value:'1'},
            {text:'Christian: Catholic or Orthodox', value:'2'},
            {text:'Christian: Protestant or Other', value:'3'},
            {text:'Hindu', value:'4'},
            {text:'Jewish', value:'5'},
            {text:'Mormon/LDS', value:'6'},
            {text:'Muslim/Islamic', value:'7'},
            {text:'Not Religious', value:'8'},
            {text:'Other Religion', value:'9'},
        ]
    });

    var countriesArray = [
        {text:'U.S.A. ',value:1},
        {text:'Afghanistan',value:2},
        {text:'Albania',value:3},
        {text:'Algeria',value:4},
        {text:'American Samoa',value:5},
        {text:'Andorra',value:6},
        {text:'Angola',value:7},
        {text:'Anguilla',value:8},
        {text:'Antarctica',value:9},
        {text:'Antigua And Barbuda',value:10},
        {text:'Argentina',value:11},
        {text:'Armenia',value:12},
        {text:'Aruba',value:13},
        {text:'Australia',value:14},
        {text:'Austria',value:15},
        {text:'Azerbaijan',value:16},
        {text:'Bahamas, The',value:17},
        {text:'Bahrain',value:18},
        {text:'Bangladesh',value:19},
        {text:'Barbados',value:20},
        {text:'Belarus',value:21},
        {text:'Belgium',value:22},
        {text:'Belize',value:23},
        {text:'Benin',value:24},
        {text:'Bermuda',value:25},
        {text:'Bhutan',value:26},
        {text:'Bolivia',value:27},
        {text:'Bosnia and Herzegovina',value:28},
        {text:'Botswana',value:29},
        {text:'Bouvet Island',value:30},
        {text:'Brazil',value:31},
        {text:'British Indian Ocean Territory',value:32},
        {text:'Brunei',value:33},
        {text:'Bulgaria',value:34},
        {text:'Burkina Faso',value:35},
        {text:'Burundi',value:36},
        {text:'Cambodia',value:37},
        {text:'Cameroon',value:38},
        {text:'Canada',value:39},
        {text:'Cape Verde',value:40},
        {text:'Cayman Islands',value:41},
        {text:'Central African Republic',value:42},
        {text:'Chad',value:43},
        {text:'Chile',value:44},
        {text:'China',value:45},
        {text:'Christmas Island',value:46},
        {text:'Cocos (Keeling) Islands',value:47},
        {text:'Colombia',value:48},
        {text:'Comoros',value:49},
        {text:'Congo',value:50},
        {text:'Congo, Democractic Republic of the',value:51},
        {text:'Cook Islands',value:52},
        {text:'Costa Rica',value:53},
        {text:'Cote D\'Ivoire (Ivory Coast)',value:54},
        {text:'Croatia (Hrvatska)',value:55},
        {text:'Cuba',value:56},
        {text:'Cyprus',value:57},
        {text:'Czech Republic',value:58},
        {text:'Denmark',value:59},
        {text:'Djibouti',value:60},
        {text:'Dominica',value:61},
        {text:'Dominican Republic',value:62},
        {text:'East Timor',value:63},
        {text:'Ecuador',value:64},
        {text:'Egypt',value:65},
        {text:'El Salvador',value:66},
        {text:'Equatorial Guinea',value:67},
        {text:'Eritrea',value:68},
        {text:'Estonia',value:69},
        {text:'Ethiopia',value:70},
        {text:'Falkland Islands (Islas Malvinas)',value:71},
        {text:'Faroe Islands',value:72},
        {text:'Fiji Islands',value:73},
        {text:'Finland',value:74},
        {text:'France',value:75},
        {text:'French Guiana',value:76},
        {text:'French Polynesia',value:77},
        {text:'French Southern Territories',value:78},
        {text:'Gabon',value:79},
        {text:'Gambia, The',value:80},
        {text:'Georgia',value:81},
        {text:'Germany',value:82},
        {text:'Ghana',value:83},
        {text:'Gibraltar',value:84},
        {text:'Greece',value:85},
        {text:'Greenland',value:86},
        {text:'Grenada',value:87},
        {text:'Guadeloupe',value:88},
        {text:'Guam',value:89},
        {text:'Guatemala',value:90},
        {text:'Guinea',value:91},
        {text:'Guinea-Bissau',value:92},
        {text:'Guyana',value:93},
        {text:'Haiti',value:94},
        {text:'Heard and McDonald Islands',value:95},
        {text:'Honduras ',value:96},
        {text:'Hong Kong S.A.R. ',value:97},
        {text:'Hungary ',value:98},
        {text:'Iceland ',value:99},
        {text:'India ',value:100},
        {text:'Indonesia ',value:101},
        {text:'Iran ',value:102},
        {text:'Iraq ',value:103},
        {text:'Ireland ',value:104},
        {text:'Israel ',value:105},
        {text:'Italy ',value:106},
        {text:'Jamaica ',value:107},
        {text:'Japan ',value:108},
        {text:'Jordan ',value:109},
        {text:'Kazakhstan ',value:110},
        {text:'Kenya ',value:111},
        {text:'Kiribati ',value:112},
        {text:'Korea ',value:113},
        {text:'Korea, North',value:114},
        {text:'Kuwait ',value:115},
        {text:'Kyrgyzstan ',value:116},
        {text:'Laos ',value:117},
        {text:'Latvia ',value:118},
        {text:'Lebanon ',value:119},
        {text:'Lesotho ',value:120},
        {text:'Liberia ',value:121},
        {text:'Libya ',value:122},
        {text:'Liechtenstein ',value:123},
        {text:'Lithuania ',value:124},
        {text:'Luxembourg ',value:125},
        {text:'Macau S.A.R. ',value:126},
        {text:'Macedonia, Former Yugoslav Republic of ',value:127},
        {text:'Madagascar ',value:128},
        {text:'Malawi ',value:129},
        {text:'Malaysia ',value:130},
        {text:'Maldives ',value:131},
        {text:'Mali ',value:132},
        {text:'Malta ',value:133},
        {text:'Marshall Islands ',value:134},
        {text:'Martinique ',value:135},
        {text:'Mauritania ',value:136},
        {text:'Mauritius ',value:137},
        {text:'Mayotte ',value:138},
        {text:'Mexico ',value:139},
        {text:'Micronesia ',value:140},
        {text:'Moldova ',value:141},
        {text:'Monaco ',value:142},
        {text:'Mongolia ',value:143},
        {text:'Montenegro',value:144},
        {text:'Montserrat ',value:145},
        {text:'Morocco ',value:146},
        {text:'Mozambique ',value:147},
        {text:'Myanmar ',value:148},
        {text:'Namibia ',value:149},
        {text:'Nauru ',value:150},
        {text:'Nepal ',value:151},
        {text:'Netherlands Antilles ',value:152},
        {text:'The Netherlands',value:153},
        {text:'New Caledonia ',value:154},
        {text:'New Zealand ',value:155},
        {text:'Nicaragua ',value:156},
        {text:'Niger ',value:157},
        {text:'Nigeria ',value:158},
        {text:'Niue ',value:159},
        {text:'Norfolk Island ',value:160},
        {text:'Northern Mariana Islands ',value:161},
        {text:'Norway ',value:162},
        {text:'Oman ',value:163},
        {text:'Pakistan ',value:164},
        {text:'Palau ',value:165},
        {text:'Palestine', value:240},
        {text:'Panama ',value:166},
        {text:'Papua new Guinea ',value:167},
        {text:'Paraguay ',value:168},
        {text:'Peru ',value:169},
        {text:'Philippines ',value:170},
        {text:'Pitcairn Island ',value:171},
        {text:'Poland ',value:172},
        {text:'Portugal ',value:173},
        {text:'Puerto Rico ',value:174},
        {text:'Qatar ',value:175},
        {text:'Reunion ',value:176},
        {text:'Romania ',value:177},
        {text:'Russia ',value:178},
        {text:'Rwanda ',value:179},
        {text:'Saint Helena ',value:180},
        {text:'Saint Kitts And Nevis ',value:181},
        {text:'Saint Lucia ',value:182},
        {text:'Saint Pierre and Miquelon ',value:183},
        {text:'Saint Vincent And The Grenadines ',value:184},
        {text:'Samoa ',value:185},
        {text:'San Marino ',value:186},
        {text:'Sao Tome and Principe ',value:187},
        {text:'Saudi Arabia ',value:188},
        {text:'Senegal ',value:189},
        {text:'Serbia',value:241},
        {text:'Seychelles ',value:190},
        {text:'Sierra Leone ',value:191},
        {text:'Singapore ',value:192},
        {text:'Slovakia ',value:193},
        {text:'Slovenia ',value:194},
        {text:'Solomon Islands ',value:195},
        {text:'Somalia ',value:196},
        {text:'South Africa ',value:197},
        {text:'South Georgia And The South Sandwich Islands ',value:198},
        {text:'South Sudan',value:199},
        {text:'Spain ',value:200},
        {text:'Sri Lanka ',value:201},
        {text:'Sudan ',value:202},
        {text:'Suriname ',value:203},
        {text:'Svalbard And Jan Mayen Islands ',value:204},
        {text:'Swaziland ',value:205},
        {text:'Sweden ',value:206},
        {text:'Switzerland ',value:207},
        {text:'Syria ',value:208},
        {text:'Taiwan ',value:209},
        {text:'Tajikistan ',value:210},
        {text:'Tanzania ',value:211},
        {text:'Thailand ',value:212},
        {text:'Togo ',value:213},
        {text:'Tokelau ',value:214},
        {text:'Tonga ',value:215},
        {text:'Trinidad And Tobago ',value:216},
        {text:'Tunisia ',value:217},
        {text:'Turkey ',value:218},
        {text:'Turkmenistan ',value:219},
        {text:'Turks And Caicos Islands ',value:220},
        {text:'Tuvalu ',value:221},
        {text:'Uganda ',value:222},
        {text:'Ukraine ',value:223},
        {text:'United Arab Emirates ',value:224},
        {text:'United Kingdom ',value:225},
        {text:'U.S.A. ',value:1},
        {text:'United States Minor Outlying Islands ',value:226},
        {text:'Uruguay ',value:227},
        {text:'Uzbekistan ',value:228},
        {text:'Vanuatu ',value:229},
        {text:'Vatican City State (Holy See) ',value:230},
        {text:'Venezuela ',value:231},
        {text:'Vietnam ',value:232},
        {text:'Virgin Islands (British) ',value:233},
        {text:'Virgin Islands (US) ',value:234},
        {text:'Wallis And Futuna Islands ',value:235},
        {text:'Yemen ',value:236},
        {text:'Zambia ',value:238},
        {text:'Zimbabwe', value:239}
    ];

    API.addQuestionsSet('countrycit',{
        inherit: 'singleChoicedrop',
        name: 'countrycit002',
        stem: 'What\'s your country/region of primary citizenship?',
        answers: countriesArray
    });

    API.addQuestionsSet('countryres',{
        inherit: 'singleChoicedrop',
        name: 'countryres002',
        stem: 'What is your country/region of residence?',
        answers: countriesArray
    });

    var statesArray = [
        {text: 'Alabama', value:1},
        {text:'Alaska', value:2},
        {text:'Arizona', value:3},
        {text:'Arkansas', value:4},
        {text:'California', value:5},
        {text:'Colorado', value:6},
        {text:'Connecticut', value:7},
        {text:'Delaware', value:8},
        {text:'Florida', value:9},
        {text:'Georgia', value:10},
        {text:'Hawaii', value:11},
        {text:'Idaho', value:12},
        {text:'Illinois', value:13},
        {text:'Indiana', value:14},
        {text:'Iowa', value:15},
        {text:'Kansas', value:16},
        {text:'Kentucky', value:17},
        {text:'Louisiana', value:18},
        {text:'Maine', value:19},
        {text:'Maryland', value:20},
        {text:'Massachusetts', value:21},
        {text:'Michigan', value:22},
        {text:'Minnesota', value:23},
        {text:'Mississippi', value:24},
        {text:'Missouri', value:25},
        {text:'Montana', value:26},
        {text:'Nebraska', value:27},
        {text:'Nevada', value:28},
        {text:'New Hampshire', value:29},
        {text:'New Jersey', value:30},
        {text:'New Mexico', value:31},
        {text:'New York', value:32},
        {text:'North Carolina', value:33},
        {text:'North Dakota', value:34},
        {text:'Ohio', value:35},
        {text:'Oklahoma', value:36},
        {text:'Oregon', value:37},
        {text:'Pennsylvania', value:38},
        {text:'Rhode Island', value:39},
        {text:'South Carolina', value:40},
        {text:'South Dakota', value:41},
        {text:'Tennessee', value:42},
        {text:'Texas', value:43},
        {text:'Utah', value:44},
        {text:'Vermont', value:45},
        {text:'Virginia', value:46},
        {text:'Washington', value:47},
        {text:'West Virginia', value:48},
        {text:'Wisconsin', value:49},
        {text:'Wyoming', value:50},
    ]
    API.addQuestionsSet('postcodenow',{
        inherit: 'singleChoicedrop',
        name: 'postcodenow',
        stem: 'In what state is your primary residence located?',
        answers: statesArray
    });

    API.addQuestionsSet('postcodelong',{
        inherit: 'singleChoicedrop',
        name: 'postcodelong',
        stem: 'In what state do you practice medicine?',
        answers: statesArray
    });

    API.addQuestionsSet('citStatus',{
        inherit: 'singleChoice',
        name: 'citStatus',
        stem: 'What is your citizenship status?',
        answers: [
            {text:'U.S. citizen by birth', value:1},
            {text:'U.S. citizen by naturalization', value:2},
            {text:'Documented permanet resident', value:3},
            {text:'Documented temporary resident', value:4},
            {text:'Undocumented resident', value:5},
        ]
    });

    API.addQuestionsSet('studentOrNot',{
        inherit: 'singleChoice',
        name: 'studentOrNot',
        stem: 'Are you presently a student in a primary school, secondary school, college, or graduate degree program?',
        answers: [
            {text:'Yes', value:1},
            {text:'No', value:2}
        ]
    });

    API.addQuestionsSet('eduStudent',{
        inherit: 'singleChoicedrop',
        name: 'eduStudent',
        stem: 'Please indicate your present student status',
        answers: [
            {text:'Student in elementary school',value:1},
            {text:'Student in junior high or middle school',value:2},
            {text:'Student in high school',value:3},
            {text:'Student in the first or second year of college',value:4},
            {text:'Student in the third or higher year of college',value:5},
            {text:'Student in M.B.A. program',value:6},
            {text:'Student in other master\'s degree program',value:7},
            {text:'Student in J.D. program',value:8},
            {text:'Student in M.D. program',value:9},
            {text:'Student in Ph.D. program',value:10},
            {text:'Student in other advanced degree program',value:11}
        ]
    });

    API.addQuestionsSet('edu',{
        inherit: 'singleChoicedrop',
        name: 'edu',
        stem: 'Please indicate the highest level of education that you have completed.',
        answers: [
            {text:'Elementary school',value:1},
            {text:'Junior high or middle school',value:2},
            {text:'Some high school',value:3},
            {text:'High school graduate',value:4},
            {text:'Some college',value:5},
            {text:'Associate\'s degree',value:6},
            {text:'Bachelor\'s degree',value:7},
            {text:'Some graduate school',value:8},
            {text:'Master\'s degree',value:9},
            {text:'M.B.A.',value:14},
            {text:'J.D.',value:10},
            {text:'M.D.',value:11},
            {text:'Ph.D.',value:12},
            {text:'Other advanced degree', value:13}
        ]
    });

    API.addQuestionsSet('employment',{
        inherit: 'singleChoice',
        name: 'employment',
        stem: 'Please indicate your present employment status.',
        answers: [
            {text:'Never employed', value:1},
            {text:'Previously employed; now retired', value:2},
            {text:'Presently unemployed but previously part-time employed', value:3},
            {text:'Presently unemployed but previously full-time employed', value:4},
            {text:'Presently part-time employed', value:5},
            {text:'Presently full-time employed', value:6},
            {text:'Non-standard employment (e.g. self-employed, multiple job holder)', value:7}
        ]
    });

    API.addQuestionsSet('occuSelf',{
        inherit: 'singleChoicedrop',
        name: 'occuSelf',
        stem: 'What is your job title?.',
        numericValues:false,
        answers: [
            {text:'Doctor of Medicine (MD)', value:'1-'},
            {text:'Doctor of Ostepathic Medicine (DO)', value:'2-'},
            {text:'Nurse Practitioner (NP)', value:'3-'},
            {text:'Physician Associate (PA)', value:'4-'},
            {text:'Construction/Extraction', value:'47-'},
            {text:'Education', value:'25-'},
            {text:'Engineers/Architects', value:'17-'},
            {text:'Farming, Fishing, Forestry', value:'45-'},
            {text:'Food Service', value:'35-'},
            {text:'Healthcare', value:'2931'},
            {text:'Homemaker or Parenting', value:'00-'},
            {text:'Legal', value:'23-'},
            {text:'Maintenance', value:'37-'},
            {text:'Management', value:'11-'},
            {text:'Military', value:'55-'},
            {text:'Production', value:'51-'},
            {text:'Protective Service', value:'33-'},
            {text:'Repair/Installation', value:'49-'},
            {text:'Sales', value:'41-'},
            {text:'Science', value:'19-'},
            {text:'Service and Personal Care', value:'39-'},
            {text:'Social Service', value:'21-'},
            {text:'Transportation', value:'53-'},
            {text:'Unemployed', value:'9998'}
        ]
    });

    API.addQuestionsSet('occupationCategory',{
        inherit: 'singleChoicedrop',
        required:false,
        name: 'occuSelfDetail',
        stem: 'What is your specialty?:'
    });

    var medSpecialties = [
        {text:'Allergy and Immunology', value:1},
        {text:'Anesthesiology', vlaue:2},
        {text:'Dermatology', value:3},
        {text:'Diagnostic Radiology', value:4},
        {text:'Emergency Medicine', value:5},
        {text:'Family Medicine', value:6},
        {text:'Internal Medicine', value:7},
        {text:'Medical Genetics', value:8},
        {text:'Neurology', value:9},
        {text:'Nuclear Medicine', value:10},
        {text:'Obstetrics and Gynecology', value:11},
        {text:'Ophthalmology', value:12},
        {text:'Pathology', value:13},
        {text:'Pediatrics', value:14},
        {text:'Physical Medicine and Rehabilitation', value:15},
        {text:'Preventative Medicine', value:16},
        {text:'Psychiatry', value:17},
        {text:'Radiation oncology', value:18},
        {text:'Surgery', value:19},
        {text:'Urology', value:20},
        {text:'Other', value:0}
    ];

    API.addQuestionsSet('occuSelfDetail1',{
        inherit: 'occupationCategory',
        answers: medSpecialties
    });

    API.addQuestionsSet('occuSelfDetail2',{
        inherit: 'occupationCategory',
        answers: medSpecialties
    });

    API.addQuestionsSet('occuSelfDetail3',{
        inherit: 'occupationCategory',
        answers: medSpecialties
    });

    API.addQuestionsSet('occuSelfDetail4',{
        inherit: 'occupationCategory',
        answers: medSpecialties
    });

    API.addQuestionsSet('occuSelfDetail47',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'47-1000'},
            {text:'Construction Trades', value:'47-2000'},
            {text:'Helpers, Construction Trades', value:'47-3000'},
            {text:'Extraction (e.g., mining, oil)', value:'47-5000'},
            {text:'Other', value:'47-4000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail25',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Postsecondary Teachers', value:'25-1000'},
            {text:'Primary, Secondary, and Special Ed Teachers', value:'25-2000'},
            {text:'Other teachers and instructors', value:'25-3000'},
            {text:'Librarians, Curators, Archivists', value:'25-4000'},
            {text:'Other education, training, and library occupations', value:'25-9000'},
            {text:'Student', value:'25-9999'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail17',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Architects, Surveyors, Cartographers', value:'17-1000'},
            {text:'Engineers', value:'17-2000'},
            {text:'Drafters, Engineering and Mapping Technicians', value:'17-3000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail45',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'45-1000'},
            {text:'Agriculture', value:'45-2000'},
            {text:'Fishing and Hunting', value:'45-3000'},
            {text:'Forest, Conservation, Logging', value:'45-4000'},
            {text:'Other', value:'45-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail35',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'35-1000'},
            {text:'Cooks and food prep', value:'35-2000'},
            {text:'Servers', value:'35-3000'},
            {text:'Other food service workers (e.g., dishwasher, host)', value:'35-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail2931',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Diagnosing and Treating Practitioners (MD, Dentist, etc.)', value:'29-1000'},
            {text:'Technologists and Technicians', value:'29-2000'},
            {text:'Nursing and Home Health Assistants', value:'31-1000'},
            {text:'Occupational and Physical Therapist Assistants', value:'31-2000'},
            {text:'Other healthcare support', value:'31-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail00',{
        inherit: 'occupationCategory',
        dflt: '00-0000',
        answers: [
            {text:'Homemaker or Parenting', value:'00-0000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail23',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Lawyers, Judges, and related workers', value:'23-1000'},
            {text:'Legal support workers', value:'23-2000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail37',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Building and Grounds Supervisors', value:'37-1000'},
            {text:'Building workers', value:'37-2000'},
            {text:'Grounds Maintenance', value:'37-3000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail11',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Top Executives', value:'1'},
            {text:'Advertising, Sales, PR, Marketing', value:'11-2000'},
            {text:'Operations Specialists', value:'11-3000'},
            {text:'Other Management Occupations', value:'11-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail55',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Officer and Tactical Leaders/Managers', value:'55-1000'},
            {text:'First-line enlisted supervisor/manager', value:'55-2000'},
            {text:'Enlisted tactical, air/weapons, crew, other', value:'55-3000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail51',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'51-1000'},
            {text:'Assemblers and Fabricators', value:'51-2000'},
            {text:'Food processing', value:'51-3000'},
            {text:'Metal and Plastic', value:'51-4000'},
            {text:'Printers', value:'51-5000'},
            {text:'Textile, Apparel, Furnishings', value:'51-6000'},
            {text:'Woodworkers', value:'51-7000'},
            {text:'Plant and System Operators', value:'51-8000'},
            {text:'Other', value:'51-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail33',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'33-1000'},
            {text:'Fire fighting and prevention', value:'33-2000'},
            {text:'Law Enforcement', value:'33-3000'},
            {text:'Other (e.g., security, lifeguards, crossing guards)', value:'33-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail49',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'49-1000'},
            {text:'Electrical and Electronic', value:'49-2000'},
            {text:'Vehicle and Mobile Equipment', value:'49-3000'},
            {text:'Other', value:'49-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail41',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'1000'},
            {text:'Retail', value:'41-2000'},
            {text:'Sales Representatives and Services', value:'41-3000'},
            {text:'Wholesale and Manufacturing', value:'41-4000'},
            {text:'Other sales (e.g., telemarketers, real estate)', value:'41-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail19',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Life Scientists', value:'19-1000'},
            {text:'Physical scientists', value:'19-2000'},
            {text:'Social Scientists', value:'19-3000'},
            {text:'Life, Physical, Social Science Technicians', value:'19-4000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail39',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'39-1000'},
            {text:'Animal Care', value:'39-2000'},
            {text:'Entertainment attendants', value:'39-3000'},
            {text:'Funeral Service', value:'39-4000'},
            {text:'Personal Appearance', value:'39-5000'},
            {text:'Transportation, Tourism, Lodging', value:'39-6000'},
            {text:'Other service (e.g., child care, fitness)', value:'39-9000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail21',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Counselors, Social Workers, Community specialists', value:'21-1000'},
            {text:'Religious Workers', value:'21-2000'}
        ]
    });

    API.addQuestionsSet('occuSelfDetail53',{
        inherit: 'occupationCategory',
        answers: [
            {text:'Supervisors', value:'53-1000'},
            {text:'Air Transportation', value:'53-2000'},
            {text:'Motor Vehicle Operators', value:'53-3000'},
            {text:'Rail Transport', value:'53-4000'},
            {text:'Water Transport', value:'53-5000'},
            {text:'Material Moving', value:'53-7000'},
            {text:'Other', value:'53-6000'}
        ]
    });

    API.addQuestionsSet('occuSupporter',{
        inherit: 'occuSelf',
        name: 'occuSupporter',
        stem: 'Please indicate the occupation of the person who is most responsible for your support.  ' +
            'If that person is retired or otherwise not presently employed, please answer by indicating that person\'s previous employment.'
    });

    API.addQuestionsSet('occuSupporterDetail1',{
        inherit: 'occuSelfDetail1',
        name : 'occuSupporterDetail1'
    });

    API.addQuestionsSet('occuSupporterDetail2',{
        inherit: 'occuSelfDetail2',
        name : 'occuSupporterDetail2'
    });

    API.addQuestionsSet('occuSupporterDetail3',{
        inherit: 'occuSelfDetail3',
        name : 'occuSupporterDetail3'
    });

    API.addQuestionsSet('occuSupporterDetail4',{
        inherit: 'occuSelfDetail4',
        name : 'occuSupporterDetail4'
    });

    API.addQuestionsSet('occuSupporterDetail47',{
        inherit: 'occuSelfDetail47',
        name : 'occuSupporterDetail47'
    });

    API.addQuestionsSet('occuSupporterDetail25',{
        inherit: 'occuSelfDetail25',
        name : 'occuSupporterDetail25'
    });

    API.addQuestionsSet('occuSupporterDetail17',{
        inherit: 'occuSelfDetail17',
        name : 'occuSupporterDetail17'
    });

    API.addQuestionsSet('occuSupporterDetail45',{
        inherit: 'occuSelfDetail45',
        name : 'occuSupporterDetail45'
    });

    API.addQuestionsSet('occuSupporterDetail35',{
        inherit: 'occuSelfDetail35',
        name : 'occuSupporterDetail35'
    });

    API.addQuestionsSet('occuSupporterDetail2931',{
        inherit: 'occuSelfDetail2931',
        name : 'occuSupporterDetail2931'
    });

    API.addQuestionsSet('occuSupporterDetail00',{
        inherit: 'occuSelfDetail00',
        name : 'occuSupporterDetail00'
    });

    API.addQuestionsSet('occuSupporterDetail23',{
        inherit: 'occuSelfDetail23',
        name : 'occuSupporterDetail23'
    });

    API.addQuestionsSet('occuSupporterDetail37',{
        inherit: 'occuSelfDetail37',
        name : 'occuSupporterDetail37'
    });

    API.addQuestionsSet('occuSupporterDetail11',{
        inherit: 'occuSelfDetail11',
        name : 'occuSupporterDetail11'
    });

    API.addQuestionsSet('occuSupporterDetail55',{
        inherit: 'occuSelfDetail55',
        name : 'occuSupporterDetail55'
    });

    API.addQuestionsSet('occuSupporterDetail51',{
        inherit: 'occuSelfDetail51',
        name : 'occuSupporterDetail51'
    });

    API.addQuestionsSet('occuSupporterDetail33',{
        inherit: 'occuSelfDetail33',
        name : 'occuSupporterDetail33'
    });

    API.addQuestionsSet('occuSupporterDetail49',{
        inherit: 'occuSelfDetail49',
        name : 'occuSupporterDetail49'
    });

    API.addQuestionsSet('occuSupporterDetail41',{
        inherit: 'occuSelfDetail41',
        name : 'occuSupporterDetail41'
    });

    API.addQuestionsSet('occuSupporterDetail19',{
        inherit: 'occuSelfDetail19',
        name : 'occuSupporterDetail19'
    });

    API.addQuestionsSet('occuSupporterDetail39',{
        inherit: 'occuSelfDetail39',
        name : 'occuSupporterDetail39'
    });

    API.addQuestionsSet('occuSupporterDetail21',{
        inherit: 'occuSelfDetail21',
        name : 'occuSupporterDetail21'
    });

    API.addQuestionsSet('occuSupporterDetail53',{
        inherit: 'occuSelfDetail53',
        name : 'occuSupporterDetail53'
    });

    API.addQuestionsSet('incomeSelf',{
        inherit: 'singleChoicedrop',
        name : 'incomeSelf',
        stem: 'Please indicate your yearly income. ',
        answers: [
            {text:'Less than $25,00 per year', value:1},
            {text:'$25,001 - $50,000 per year', value:2},
            {text:'$50,001 - $75,000 per year', value:3},
            {text:'$75,001 - $100,000 per year', value:4},
            {text:'$100,001 - $150,000 per year', value:5},
            {text:'$150,001 - $200,000 per year', value:6},
            {text:'$200,0001 or more per year', value:7},
        ]
    });

    if (isTouch) API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {inherit:'birthSex'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'genderIdentity'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'birthYear'}]
        },
        {
            inherit: 'basicPage',
            questions: [ 
                {inherit:'ethnicityomb', autoSubmit:true}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [ 
                {inherit:'raceombmulti', autoSubmit:true}
            ]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'maritalStatus'}]
        },
        {
            inherit:'basicPage',
            questions:[{inherit:'numChildren'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'politicalid'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'politicalParty'}]
        },
        {
            inherit: 'basicPage',
            questions:[{inherit: 'citStatus'}]
        },
    ]);

    if (!isTouch) API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'birthMonth'},
                {inherit: 'birthYear'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'birthSex', helpText: '', autoSubmit:false}, 
                {inherit: 'genderIdentity', autoSubmit:false}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [ //If required would be set to true, then participants cannot select one and leave the other empty.
                {inherit:'raceomb', required:false},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.raceomb002.response',to:8}],
                    data: [
                        {inherit:'raceombmulti'}
                    ]
                },
                {inherit:'ethnicityomb', required:false}
            ]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'maritalStatus'}]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'numChildren'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'politicalid'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'politicalParty'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'religion2014'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'religionid'}]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'countrycit'},
                {inherit: 'countryres'}
            ]
        },
        {
            inherit: 'basicPage',
            questions:[{inherit: 'citStatus'}]
        },
        {
            inherit: 'basicPage',
            questions: [//If required would be set to true, then participants cannot select one and leave the other empty.
                {inherit: 'postcodenow', required:false},
                {inherit: 'postcodelong', required:false}]
        },
        /**
         * Select occupation
         */
        {
            inherit: 'basicPage',
            questions: [
                // major occupation
                {inherit: 'occuSelf'},
                // minor occupation
                {
                    mixer: 'multiBranch',
                    remix:true,
                    branches: [
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'1-'}],
                            data: [{inherit: 'occuSelfDetail43'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'2-'}],
                            data: [{inherit: 'occuSelfDetail27'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'3-'}],
                            data: [{inherit: 'occuSelfDetail13'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'4-'}],
                            data: [{inherit: 'occuSelfDetail15'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'47-'}],
                            data: [{inherit: 'occuSelfDetail47'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'25-'}],
                            data: [{inherit: 'occuSelfDetail25'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'17-'}],
                            data: [{inherit: 'occuSelfDetail17'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'45-'}],
                            data: [{inherit: 'occuSelfDetail45'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'35-'}],
                            data: [{inherit: 'occuSelfDetail35'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'2931'}],
                            data: [{inherit: 'occuSelfDetail2931'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'00-'}],
                            data: [{inherit: 'occuSelfDetail00'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'23-'}],
                            data: [{inherit: 'occuSelfDetail23'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'37-'}],
                            data: [{inherit: 'occuSelfDetail37'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'11-'}],
                            data: [{inherit: 'occuSelfDetail11'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'55-'}],
                            data: [{inherit: 'occuSelfDetail55'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'51-'}],
                            data: [{inherit: 'occuSelfDetail51'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'33-'}],
                            data: [{inherit: 'occuSelfDetail33'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'49-'}],
                            data: [{inherit: 'occuSelfDetail49'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'41-'}],
                            data: [{inherit: 'occuSelfDetail41'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'19-'}],
                            data: [{inherit: 'occuSelfDetail19'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'39-'}],
                            data: [{inherit: 'occuSelfDetail39'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'21-'}],
                            data: [{inherit: 'occuSelfDetail21'}]
                        },
                        {
                            conditions:[{compare: 'questions.occuSelf.response',to:'53-'}],
                            data: [{inherit: 'occuSelfDetail53'}]
                        }
                    ]
                }
            ]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit : 'incomeSelf'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'num'}]
        },
    ]);

    return API.script;
});