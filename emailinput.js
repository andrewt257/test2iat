define(['questAPI'], function(Quest){
    var API = new Quest();
    var isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/

    API.addCurrent({
		baseURL: './images/',
    });

    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Vignettes',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 3'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
    });

    API.addQuestionsSet('text',{
        inherit: 'basicQ',
        type: 'text',
        noSubmit:false
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('emailAddress',{
        inherit : 'text',
        name: 'emailAddress',
        stem: 'Please provide your email address'
    });

    API.addSequence([
        {
            mixer : 'wrapper', 
            data : [
                        {
                        inherit:'basicPage'            , 
                        questions : {inherit:'emailAddress'}           
                        } 
                    ]
                },
    ]);

    return API.script;
});