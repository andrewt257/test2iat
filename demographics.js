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

    API.addQuestionsSet('age',{
        inherit:'singleChoicedrop',
        name:'age',
        stem:'How old are you?',
        answers: Range(1,100)
    });

    API.addQuestionsSet('genderIdentity',{
        inherit: 'multiChoice',
        name: 'genderIdentity',
        stem: 'What gender do you identify as',
        answers: [
            {text:'Male',value:1},
            {text:'Female',value:2}, 
            {text:'Non-binary/genderfluid/genderqueer',value:3}, 
            {text:'Other/Don\'t know',value:0}, 
        ]
    });

    API.addQuestionsSet('genderOther',{
        inherit:'text',
        name:'genderOther',
        stem:'Other'
    });

    API.addQuestionsSet('race',{
        inherit: 'multiChoice',
        name: 'raceomb002',
        stem: 'Please select all of the following which describe your race/ethinicity.',
        autoSubmit: false,
        answers: [
            {text:'American Indian/Native American/Alaska Native',value:1},
            {text:'Asian',value:2},
            {text:'Black/African American',value:3},
            {text:'Latino or Hispanic',value:4},
            {text:'Middle Eastern/North Africa',value:5},
            {text:'Native Hawaiian/Other Pacific Islander',value:6},
            {text:'White/European American',value:7},
            {text:'Other/Unknown',value:0}
        ]
    });

    API.addQuestionsSet('raceOther',{
        inherit:'text',
        name:'raceOther',
        stem:'Other'
    });

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
            {text:'Pre-Nursing',value:7},
            {text:'Psychology',value:8},
            {text:'Radiologic Technology',value:9},
            {text:'Sports Medicine',value:10},
            {text:'Undeclared',value:11},
            {text:'Other', value:0}
        ]
    });

    API.addQuestionsSet('majorOther',{
        inherit:'text',
        name:'majorOther',
        stem:'Other'
    });

    API.addQuestionsSet('hlthFuture', {
        inherit: 'singleChoicedrop',
        name:'hlthFuture',
        stem:'What area of healthcare are you looking to go into?',
        answers: [
            {text:'Administration', value:1},
            {text:'Nursing', value:2},
            {text:'Occupational Therapy', value:3},
            {text:'Physical Therapy', value:4},
            {text:'Physician', value:5},
            {text:'Physician Assistant/Associate', value:6},
            {text:'Psychology', value:7},
            {text:'Public Health', value:8},
            {text:'Radiology', value:9},
            {text:'Researcher', value:10},
            {text:'Radiology technologist', value:11},
            {text:'Other', value:0}
        ]
    });

    API.addQuestionsSet('careerOther',{
        inherit:'text',
        name:'careerOther',
        stem:'Other'
    });

    API.addQuestionsSet('hlthWork', {
        inherit:'singleChoice',
        name:'hlthWork',
        stem:'Do you currently or have you ever worked in healthcare?',
        answers:[
            {text:'Yes', value:1},
            {text:'No', value:0}
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
            {text:'Other', value:0}
        ]
    });

    API.addQuestionsSet('workOther',{
        inherit:'text',
        name:'workOther',
        stem:'Other'
    });

    API.addQuestionsSet('workExp',{
        inherit: 'singleChoicedrop',
        required:false,
        name: 'workExp',
        stem: 'How long have you worked in healthcare?',
        answers:[
            {text:'0', value:0},
            {text:'1 month', value:101},
            {text:'2 months', value:102},
            {text:'3 months', value:103},
            {text:'4 months', value:104},
            {text:'5 months', value:105},
            {text:'6 months', value:106},
            {text:'7 months', value:107},
            {text:'8 months', value:108},
            {text:'9 months', value:109},
            {text:'10 months', value:110},
            {text:'11 months', value:111},
            {text:'12 months', value:112},
            {text:'1 year', value:1},
            {text:'2 years', value:2},
            {text:'3 years', value:3},
            {text:'4 years', value:4},
            {text:'5 years', value:5},
            {text:'6 years', value:6},
            {text:'7 years', value:7},
            {text:'8 years', value:8},
            {text:'9 years', value:9},
            {text:'10 years', value:10},
            {text:'11 years', value:11},
            {text:'12 years', value:12},
            {text:'13 years', value:13},
            {text:'14 years', value:14},
            {text:'15 years', value:15},
            {text:'16 years', value:16},
            {text:'17 years', value:17},
            {text:'18 years', value:18},
            {text:'19 years', value:19},
            {text:'20 years', value:20},
            {text:'21 years', value:21},
            {text:'22 years', value:22},
            {text:'23 years', value:23},
            {text:'24 years', value:24},
            {text:'25 years', value:25},
            {text:'26 years', value:26},
            {text:'27 years', value:27},
            {text:'28 years', value:28},
            {text:'29 years', value:29},
            {text:'30 years', value:30},
            {text:'31 years', value:31},
            {text:'32 years', value:32},
            {text:'33 years', value:33},
            {text:'34 years', value:34},
            {text:'35 years', value:35},
            {text:'36 years', value:36},
            {text:'37 years', value:37},
            {text:'38 years', value:38},
            {text:'39 years', value:39},
            {text:'40 years', value:40},
            {text:'41+ years', value:41},
        ]
    });

    API.addQuestionsSet('cannPersonal',{
        inherit:'singleChoice',
        name: 'cannPersonalnow',
        stem:'Do you currently/have you ever used marijuana (even once)?',
        answers:[
            {text:'Yes, for recreational use only', value:2},
            {text:'Yes, for medical use only', value:1},
            {text:'Yes, for both recreational and medical use', value:3},
            {text:'No', value:0}
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
                {inherit: 'genderIdentity'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.genderIdentity.response',to:0}],
                    data: [
                        {inherit:'genderOther'}
                    ]
                },
            ]
        },
                {
            inherit: 'basicPage',
            questions: [ 
                {inherit:'race', autoSubmit:true},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.race.response',to:0}],
                    data: [
                        {inherit:'raceOther'}
                    ]
                },
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
                {inherit:'hlthWork'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'occuSelf'}
                    ]
                },
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.occuSelf.response',to:0}],
                    data: [
                        {inherit:'workOther'}
                    ]
                },
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                // minor occupation
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'workExp'}
                    ]
                },
            ]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'cannPersonal'}]
        },
    ]);

    if (!isTouch) API.addSequence([
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
                {inherit: 'genderIdentity'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.genderIdentity.response',to:0}],
                    data: [
                        {inherit:'genderOther'}
                    ]
                },
            ]
        },
                {
            inherit: 'basicPage',
            questions: [ 
                {inherit:'race', autoSubmit:true},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.race.response',to:0}],
                    data: [
                        {inherit:'raceOther'}
                    ]
                },
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
                {inherit:'hlthWork'},
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'occuSelf'}
                    ]
                },
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.occuSelf.response',to:0}],
                    data: [
                        {inherit:'workOther'}
                    ]
                },
            ]
        },
        {
            inherit: 'basicPage',
            questions: [
                // minor occupation
                {
                    mixer:'branch',
                    remix:true,
                    conditions:[{compare: 'questions.hlthWork.response',to:1}],
                    data: [
                        {inherit:'workExp'}
                    ]
                },
            ]
        },
        {
            inherit:'basicPage',
            questions: [{inherit:'cannPersonal'}]
        },
    ]);

    return API.script;
});