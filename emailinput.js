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

    API.addQuestionsSet('text',{
        inherit: 'basicQ',
        type: 'text',
        noSubmit:false
    });

    addQuestionsSet('email',
    {
        inherit: 'text',
        name: 'email',
        stem: 'Please provide your email address',
    })
    addEventListener

    if (isTouch) API.addSequence ([
        {
            inherit: 'basicPage',
            questions:[
                {inherit:'email'},
            ]
        }
    ])

    if (!isTOuch) API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {inherit: 'email'}
            ]
        }

    ])

    return API.script;
});