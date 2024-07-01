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
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 6' : 'Page <%= pagesMeta.number %> out of 21'
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
    /*API.addQuestionsSet('birthYear',{
            inherit: 'singleChoicedrop',
            name: 'birthyear',
            stem: 'What is your birth year?',
            answers: _.range((new Date()).getFullYear()-5, 1910, -1) // use underscore to create an array of years from ten years ago back to 1910
        });
        */

    API.addQuestionsSet('age',{
        inherit:'singleChoice',
        name:'age',
        stem:'How old are you?',
        answers: [
            {text:'Younger than 16', value:0},
            {text:'16-17', value:1},
            {text:'18-24', value:2},
            {text:'25-30', value:3},
            {text:'31-40', value:4},
            {text:'41+', value:5}
        ]
    });

    API.addQuestionsSet('genderIdentity',{
        inherit: 'multiChoice',
        name: 'genderIdentity',
        stem: 'What gender do you identify as',
        answers: [
            {text:'Male',value:1},
            {text:'Female',value:2}, 
            {text:'Non-binary/genderfluid/genderqueer',value:3}, 
            {text:'Other',value:4}, 
        ]
    });

    API.addQuestionsSet('race',{
        inherit: 'singleChoicedrop',
        name: 'raceomb002',
        stem: 'How would you best describe your race?',
        autoSubmit: false,
        answers: [
            {text:'American Indian/Native American/Alaska Native',value:1},
            {text:'Asian',value:2},
            {text:'Black/African American',value:3},
            {text:'Middle Eastern/North Africa',value:4},
            {text:'Native Hawaiian or other Pacific Islander',value:5},
            {text:'White/European American',value:6},
            {text:'Mixed/Multiple',value:7},
            {text:'Other/Unknown',value:8}
        ]
    });

    /*API.addQuestionsSet('raceombmulti',{
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
    });*/

    API.addQuestionsSet('ethnicity',{
        inherit: isTouch ? 'singleChoice' : 'singleChoicedrop',
        name: 'ethnicityomb',
        autoSubmit: false,
        stem: 'Do you identify as Latino or Hispanic?',
        answers: [
            {text:'Yes',value:1},
            {text:'No',value:2},
            //{text:'Unknown',value:3}
        ]
    });

    API.addQuestionsSet('maritalStatus',{
        inherit: 'singleChoice',
        name: 'maritalStatus',
        stem: 'What is your marital status?',
        answers: [
            {text:'Never married', value:0},
            {text:'Married', value:1},
            {text:'Domestic partnership/civil union', value:2},
            {text:'Separated', value:3},
            {text:'Divorced', value:4},
            {text:'Widowed(not remarried)', value:5},
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
        stem: 'How would you describe your political views?',
        answers: [
            {text:'Strongly Liberal',value:1},
            {text:'Moderately Liberal',value:2},
            {text:'Slightly Liberal',value:3},
            {text:'Moderate/Neither',value:4},
            {text:'Slightly Conservative',value:5},
            {text:'Moderately Conservative',value:6},
            {text:'Strongly Conservative',value:7}
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
            {text:'Political Party Not listed', value:4},
            {text:'Independent/no party affiliation', value:5},
            {text:'Not registered to vote', value:6},
        ]
    });
    API.addQuestionsSet('numIAT',{
        inherit: 'singleChoice',
        name: 'numIAT',
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

    API.addQuestionsSet('religionStrength',{
        inherit: 'singleChoice',
        name: 'religionid',
        stem: 'How religious or spiritual do you consider yourself to be?',
        answers: [
            {text:'Strongly religious', value:4},
            {text:'Moderately religious', value:3},
            {text:'Slightly religious', value:2},
            {text:'Not at all religious', value:1}
        ]
    });

    API.addQuestionsSet('religionID',{
        inherit: 'singleChoice',
        name: 'religion2014',
        stem: 'What is your religious affiliation?',
        answers: [
            {text:'Buddhist/Confucian/Shinto', value:1},
            {text:'Christian: Catholic or Orthodox', value:2},
            {text:'Christian: Protestant or Other', value:3},
            {text:'Folk & Traditional Religions', value:4},
            {text:'Hindu', value:5},
            {text:'Jewish', value:6},
            {text:'Mormon/LDS', value:7},
            {text:'Muslim/Islamic', value:8},
            {text:'Shinto/Sikh/Taoism/Confucianism/Jainism', value:9},
            {text:'Other Religion', value:10},
            {text:'Unaffiliated but Religious/Spiritual', value:11},
            {text:'Not religious', value:12}
        ]
    });

    API.addQuestionsSet('classStanding',{
        inherit: 'singleChoice',
        name: 'classStanding',
        stem: 'What is your class standing?',
        answers: [
            {text:'Freshman', value:1},
            {text:'Sophmore', value:2},
            {text:'Junior', value:3},
            {text:'Senior', value:4},
            {text:'Nontraditional Student', value:5},
        ]
    });

    /*API.addQuestionsSet('studentOrNot',{
        inherit: 'boolean',
        name: 'studentOrNot',
        stem: 'Are you presently a student in a primary school, secondary school, college, or graduate degree program?',
    });*/

    API.addQuestionsSet('major',{
        inherit: 'singleChoicedrop',
        name: 'major',
        stem: 'What is your major?',
        answers: [
            {text:'Biology',value:1},
            {text:'Biochemistry',value:2},
            {text:'Chemistry',value:3},
            {text:'Health Science',value:4},
            {text:'Kinesiology',value:5},
            {text:'Nursing',value:6},
            {text:'Pre-Medicine',value:7},
            {text:'Pre-Nursing',value:8},
            {text:'Psychology',value:9},
            {text:'Radiologic Technology',value:10},
            {text:'Sports Medicine',value:11},
            {text:'Other', value:12}
        ]
    });

    API.addQuestionsSet('hlthFuture', {
        inherit: 'singleChoice',
        name:'hlthFuture',
        stem:'What area of healthcare are you looking to go into?',
        answers: [
            {text:'Administration', value:0},
            {text:'Nursing', value:1},
            {text:'Occupational Therapy', value:2},
            {text:'Physical Therapy', value:3},
            {text:'Physician', value:4},
            {text:'Psychology', value:5},
            {text:'Public Health', value:6},
            {text:'Radiology', value:7},
            {text:'Researcher', value:8},
            {text:'Radiology technologist', value:9},
            {text:'Other', value:10}
        ]
    });

    API.addQuestionsSet('employmentStatus',{
        inherit: 'singleChoice',
        name: 'employment',
        stem: 'Please indicate your current employment status.',
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

    API.addQuestionsSet('hlthWork', {
        inherit:'singleChoice',
        name:'hlthWork',
        stem:'Do you currently or have you ever worked in healthcare?',
        answers:[
            {text:'Yes', value:1},
            {text:'No', value:2}
        ]

    });

    API.addQuestionsSet('occuSelf',{
        inherit: 'multiChoice',
        name: 'occuSelf',
        stem: 'Have you ever worked in any of these roles? (check all that apply).',
        numericValues:false,
        answers: [
            {text:'Certified Nursing Assitant', value:1},
            {text:'Emergency Medical Technician', value:2},
            {text:'Home Health Aide', value:3},
            {text:'Medical Assistant', value:4},
            {text:'Pharmacy Technician', value:5},
            {text:'Phlebotomist', value:6},
            {text:'Physical Therapy Assistant', value:7},
            {text:'Surgical Technician', value:8},
            {text:'Nonclinical', value:9},
        ]
    });

    API.addQuestionsSet('workExp',{
        inherit: 'singleChoicedrop',
        required:false,
        name: 'workExp',
        stem: 'How many years have you worked under your current job title?',
        answers:[
            {text:'0', value:0},
            {text:'1', value:1},
            {text:'2', value:2},
            {text:'3', value:3},
            {text:'4', value:4},
            {text:'5', value:5},
            {text:'6', value:6},
            {text:'7', value:7},
            {text:'8', value:8},
            {text:'9', value:9},
            {text:'10', value:10},
            {text:'11', value:11},
            {text:'12', value:12},
            {text:'13', value:13},
            {text:'14', value:14},
            {text:'15', value:15},
            {text:'16', value:16},
            {text:'17', value:17},
            {text:'18', value:18},
            {text:'19', value:19},
            {text:'20', value:20},
            {text:'21', value:21},
            {text:'22', value:22},
            {text:'23', value:23},
            {text:'24', value:24},
            {text:'25', value:25},
            {text:'26', value:26},
            {text:'27', value:27},
            {text:'28', value:28},
            {text:'29', value:29},
            {text:'30', value:30},
            {text:'31', value:31},
            {text:'32', value:32},
            {text:'33', value:33},
            {text:'34', value:34},
            {text:'35', value:35},
            {text:'36', value:36},
            {text:'37', value:37},
            {text:'38', value:38},
            {text:'39', value:39},
            {text:'40', value:40},
            {text:'41+', value:41},
        ]
    });

    API.addQuestionsSet('mcKnowledge',{
        inherit: 'singleChoice',
        name : 'mcKnowledge',
        stem: 'How knowledgeable do you consider yourself to be on medical marijuana. ',
        answers: [
            {text:'Very knowledgeable', value:4},
            {text:'Moderately knowledgeable', value:3},
            {text:'Somewhat knowledgeable', value:2},
            {text:'Slightly knowledgeable', value:1},
            {text:'Not at all knowledgeable', value:0},
        ]
    });

    API.addQuestionsSet('mcRecommend', {
        inherit:'singleChoice',
        name: 'mcRecommend',
        stem: 'How open would you be to recommending medical marijuana as a future clinician?',
        answers:[
            {text:'Very', value:4},
            {text:'Moderately', value:3},
            {text:'Somewhat', value:2},
            {text:'Slightly', value:1},
            {text:'Not at all', value:0}
        ]
    });

    API.addQuestionsSet('mcSupport',{
        inherit:'singleChoice',
        name: 'mcPrescribe',
        stem:'How supportive would you be of your patients use of medical marijuana?',
        answers:[
            {text:'Very', value:4},
            {text:'Moderately', value:3},
            {text:'Somewhat', value:2},
            {text:'Slightly', value:1},
            {text:'Not at all', value:0}
        ]
    });

    API.addQuestionsSet('cannPersonalnow',{
        inherit:'singleChoice',
        name: 'cannPersonalnow',
        stem:'Do you currently use marijuana personally?',
        answers:[
            {text:'Yes, for recreational use only', value:2},
            {text:'Yes, for medical use only', value:1},
            {text:'Yes, for both recreational and medical use', value:3},
            {text:'No', value:0}
        ]
    });

    API.addQuestionsSet('cannPersonalever',{
        inherit:'singleChoice',
        name: 'cannPersonalever',
        stem:'Have you ever -even once- used marijuana?',
        answers:[
            {text:'Yes, for recreational use only', value:2},
            {text:'Yes, for medical use only', value:1},
            {text:'Yes, for both recreational and medical use', value:3},
            {text:'No', value:0}
        ]
    });

    API.addQuestionsSet('rsnsNoMC',{
            inherit:'singleChoice',
            name: 'rsnsNoMC',
            stem:'If not, for what reasons have you refrained from using marijuana?',
            answers:[
                {text:'No interst', value:1},
                {text:'Fear of legal consequences', value:2},
                {text:'Concern over reactions from friends and family', value:3},
                {text:'Limted access to cannabis', value:4},
                {text:'Use would put employment at risk', value:5},
                {text:'Concerns regarding interactions with medications', value:6},
                {text:'Concerns about side effects', value:7},
                {text:'Financial limitations/cost', value:8},
                {text:'Religious reasons', value:9},
                {text:'Lack of knowledge', value:10},
                {text:'Other', value:11},
            ]
        });
    if (isTouch) API.addSequence([
        {
            inherit:'basicPage',
            questions:[
                {inherit:'birthMonth'},
                {inherit:'age'}
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
            questions: [ 
                {inherit:'race', autoSubmit:true},
                {inherit:'ethnicity', autoSubmit:true}
            ]
        },
        {
            inherit:'basicPage',
            questions: [
                {inherit:'maritalStatus'},
                {inherit:'numChildren'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'politicalID'},
                {inherit: 'politicalParty'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'religionStrength'},
                {inherit: 'religionID'}
            ]
        },
        {
            inherit: 'basicPage',
            questions:[
                {inherit: 'major'},
                {inherit: 'hlthFuture'}
            ]
        },
        {
            inherit:'basicPage',
            questions:[
                {inherit:'employmentStatus'},
                {inherit:'hlthWork'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                // major occupation
                {inherit: 'occuSelf'},
                // minor occupation
                {inherit: 'workExp'},
            ]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit:'mcKnowledge'}]
        },
        {
            inherit:'basicPage',
            questions:[
                {inherit:'mcRecommend'},
                {inherit:'mcSupport'}
            ]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'cannPersonalnow'}]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'cannPersonalever'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit:'rsnsNoMC'}]
        },
    ]);

    if (!isTouch) API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'birthMonth'},
                {inherit: 'age'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [ 
                {inherit: 'genderIdentity', autoSubmit:false}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [ //If required would be set to true, then participants cannot select one and leave the other empty.
                {inherit:'race', required:false},
                {inherit:'ethnicity', required:false}
            ]
        },
        {
            inherit:'basicPage',
            questions: [
                {inherit:'maritalStatus'},
                {inherit:'numChildren'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'politicalID'},
                {inherit: 'politicalParty'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'religionStrength'},
                {inherit: 'religionID'}
            ]
        },
        {
            inherit: 'basicPage',
            questions:[
                {inherit: 'classStanding'},
                {inherit: 'major'},
                {inherit: 'hlthFuture'}
            ]
        },
        {
            inherit: 'basicPage',
            questions: [//If required would be set to true, then participants cannot select one and leave the other empty.
                {inherit: 'employmentStatus'},
                {inherit: 'hlthWork'}]
        },
        {
            inherit: 'basicPage',
            questions: [
                // major occupation
                {inherit: 'occuSelf'},
                // minor occupation
                {inherit: 'workExp'},
            ]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit:'mcKnowledge'}]
        },
        {
            inherit:'basicPage',
            questions:[
                {inherit: 'mcRecommend'},
                {inherit: 'mcSupport'}
            ]
        },
        {
            inherit:'basicPage',
            questions:[{inherit: 'cannPersonalnow'}]
        },
        {
            inherit:'basicPage',
            questions:[{inherit: 'cannPersonalever'}]
        },
        {
            inherit: 'basicPage',
            questions: [{inherit: 'rsnsNoMC'}]
        },
    ]);

    return API.script;
});