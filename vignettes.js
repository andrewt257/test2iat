define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/

    API.addCurrent({
		baseURL: './images/',
    });

    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Vignettes',
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 5'
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

    API.addQuestionsSet('basicQ1',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
        },
        autoSubmit:'false',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });

    API.addQuestionsSet('basicSlider', {
        inherit: 'basicQ1',
        type:'slider',
        min:1,
        max:7,
        steps:7,
        labels: ['Strongly Against', 'Neither Supportive nor Against', 'Strongly Supportive'],
        required:true,
        showTicks:true,
        highlightDirection: 'center',
        autoSubmit:false
    });
	
    /*API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });*/
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            
            {text:'Strongly Supportive', value:9},
            {text:'Moderately Supportive', value:8},
            {text:'Somewhat Supportive', value:7},
            {text:'Slightly Supportive', value:6},
            {text:'Neither Supportive nor Against', value:5},
            {text:'Slightly Against', value:4},
            {text:'Somewhat Against', value:3},
            {text:'Moderately Against', value:2},
            {text:'Strongly Against', value:1}
        ]
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('chronicPainFwhite',{
        inherit : 'therm',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including muscle tears and two herniated discs. She has had surgery to repair the tears but not the herniated discs. She experiences ongoing stiffness, weakness, and chronic lower back pain. These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>vwf3.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('chronicPainFblack',{
        inherit : 'therm',
        name: 'chronicPainFblack',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including muscle tears and two herniated discs. She has had surgery to repair the tears but not the herniated discs. She experiences ongoing stiffness, weakness, and chronic lower back pain. These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities. <img class="img-responsive" src="<%=current.baseURL%>vbf3.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],

    });

    API.addQuestionsSet('ptsdMwhite',{
        inherit : 'therm',
        name: 'ptsdMwhite',
        stem: ['A 51-year-old male who served in the Afghanistan war for two deployments has been struggling with post-traumatic stress disorder (PTSD). He has flashbacks of combat, is easily startled by loud noises, has difficulty sleeping due to vivid nightmares, trouble concentrating at work, and he avoids large crowds. He has become more isolated from people at work and longtime friends.<img class="img-responsive" src="<%=current.baseURL%>vwm1.jpg"> How supportive are you of this patient having access to medical marijuana for their PTSD?'],
        
    });

    API.addQuestionsSet('ptsdMblack',{
        inherit : 'therm',
        name: 'ptsdMblack',
        stem: ['A 51-year-old male who served in the Afghanistan war for two deployments has been struggling with post-traumatic stress disorder (PTSD). He has flashbacks of combat, is easily startled by loud noises, has difficulty sleeping due to vivid nightmares, trouble concentrating at work, and he avoids large crowds. He has become more isolated from people at work and longtime friends.<img class="img-responsive" src="<%=current.baseURL%>vbm1.jpg"> How supportive are you of this patient having access to medical marijuana for their PTSD?'],
        
    });

    API.addQuestionsSet('depressionFwhite',{
        inherit : 'therm',
        name: 'depressionFwhite',
        stem: ['A 27- year-old female who was diagnosed with clinical depression and has been experiencing fatigue, lack of motivation, feelings of hopelessness, sadness, and worthlessness. She has expressed that she has lost interest in doing things she once loved like hiking, reading, and dancing. She avoids daily tasks such as showering and returning text messages. She recently moved back home with her parents after having a difficult time living alone.<img class="img-responsive" src="<%=current.baseURL%>vbf1.jpg">How supportive are you of this patient having access to medical marijuana for their depression?']

    });

    API.addQuestionsSet('depressionFblack',{
        inherit : 'therm',
        name: 'depressionFblack',
        stem: ['A 27- year-old female who was diagnosed with clinical depression and has been experiencing fatigue, lack of motivation, feelings of hopelessness, sadness, and worthlessness. She has expressed that she has lost interest in doing things she once loved like hiking, reading, and dancing. She avoids daily tasks such as showering and returning text messages. She recently moved back home with her parents after having a difficult time living alone.<img class="img-responsive" src="<%=current.baseURL%>vwf1.jpg">How supportive are you of this patient having access to medical marijuana for their depression?']

    });

    API.addQuestionsSet('insomniaMwhite',{
        inherit : 'therm',
        name: 'insomniaMwhite',
        stem: ['A 57-year-old male has suffered from insomnia off and on for much of his adult life. He struggles with difficulty initiating and maintaining sleep, focusing during the day, motivation, fatigue, and irritability. Recently he has noticed an increase of anxiety and depression, with a lot of time worrying about his lack of sleep. Due to his fatigue and irritability, he is starting to experience interpersonal problems at work.<img class="img-responsive" src="<%=current.baseURL%>vwm2.jpg">How supportive are you of this patient having access to medical marijuana for their insomnia?']

    });

    API.addQuestionsSet('insomniaMblack',{
        inherit : 'therm',
        name: 'insomniaMblack',
        stem: ['A 57-year-old male has suffered from insomnia off and on for much of his adult life. He struggles with difficulty initiating and maintaining sleep, focusing during the day, motivation, fatigue, and irritability. Recently he has noticed an increase of anxiety and depression, with a lot of time worrying about his lack of sleep. Due to his fatigue and irritability, he is starting to experience interpersonal problems at work.<img class="img-responsive" src="<%=current.baseURL%>vbm2.jpg">How supportive are you of this patient having access to medical marijuana for their insomnia?']

    });

    API.addQuestionsSet('pregnancyFwhite',{
        inherit : 'therm',
        name: 'pregnancyFwhite',
        stem: ['A 29-year-old female, in her 12th week of pregnancy has been experiencing chronic nausea since week 6 of this first trimester. Her symptoms worsen first thing in the morning and from specific scents or foods. She is unable to eat most foods, even Saltines and Sprite, without nausea and vomiting. She has been to an Urgent Care clinic twice due to dehydration and is having a difficult time maintaining her weight.<img class="img-responsive" src="<%=current.baseURL%>vwf2.jpg">How supportive are you of this patient having access to medical marijuana for their nausea?']

    });

    API.addQuestionsSet('pregnancyFblack',{
        inherit : 'therm',
        name: 'pregnancyFblack',
        stem: ['A 29-year-old female, in her 12th week of pregnancy has been experiencing chronic nausea since week 6 of this first trimester. Her symptoms worsen first thing in the morning and from specific scents or foods. She is unable to eat most foods, even Saltines and Sprite, without nausea and vomiting. She has been to an Urgent Care clinic twice due to dehydration and is having a difficult time maintaining her weight.<img class="img-responsive" src="<%=current.baseURL%>vwf2.jpg">How supportive are you of this patient having access to medical marijuana for their nausea?']

    });

    /*API.addQuestionsSet('chronicPainFwhite',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('chronicPainFblack',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('ptsdMwhite',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('ptsdMblack',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('depressionFwhite',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('depressionFblack',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('insomniaMwhite',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('insomniaMblack',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('pregnancyFwhite',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });

    API.addQuestionsSet('pregnancyFblack',{
        inherit : 'basicSlider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });*/

    API.addSequence([
        {
            mixer : 'wrapper', 
            data : [   
                        {
                            mixer : 'choose',
                            wrapper:true,
                            n:1,
                            data : [
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'chronicPainFwhite'},
                                },
                                //{   
                                //    inherit: 'basicPage',
                                //    questions: {inherit: 'chronicPainFblack'}
                                //},
                            ]
                        },
                        {
                            mixer : 'choose',
                            wrapper:true,
                            n:1,
                            data : [
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'ptsdMwhite'},
                                },
                                {
                                    inherit: 'basicPage',
                                    questions: {inherit:'ptsdMblack'},
                                }
                            ]
                            							
                        },
                        {   
                            mixer:'choose',
                            wrapper:true,
                            n:1,
                            data: [
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'depressionFwhite'}
                                },
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'depressionFblack'},
                                }
                            ]
                            
                        },
                        {   
                            mixer:'choose',
                            wrapper:true,
                            n:1,
                            data: [
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'insomniaMwhite'}
                                },
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'insomniaMblack'},
                                }
                            ]
                            
                        },
                        {   
                            mixer:'choose',
                            wrapper:true,
                            n:1,
                            data: [
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'pregnancyFwhite'}
                                },
                                {
                                    inherit:'basicPage', 
                                    questions: {inherit:'pregnancyFblack'},
                                }
                            ]
                            
                        }
                    ]
                },
    ]);

    return API.script;
});