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

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });

    API.addQuestionsSet('slider', {
        inherit: 'basicQ',
        type:'slider',
        min:1,
        max:7,
        setps:7,
        labels: ['Strongly Against', 'Neither Supportive nor Against', 'Strongly Supportive'],
        required:true,
        showTicks:true,
        highlightDirection: 'center'
    });
	
    /*API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });*/
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            
            {text:'Strongly Supportive', value:6},
            {text:'Moderately Supportive', value:5},
            {text:'Slightly Supportive', value:4},
            {text:'Neither Supportive nor Against', value:3},
            {text:'Slightly Against', value:2},
            {text:'Moderately Against', value:1},
            {text:'Strongly Against', value:0}
        ]
    });

	
    /**
	*Specific questions
	*/	
    /*API.addQuestionsSet('chronicPainFwhite',{
        inherit : 'therm',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });*/

    API.addQuestionsSet('chronicPainFwhite',{
        inherit : 'slider',
        name: 'chronicPainFwhite',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities.<img class="img-responsive" src="<%=current.baseURL%>wf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],
    });
	
    API.addQuestionsSet('chronicPainFblack',{
        inherit : 'therm',
        name: 'chronicPainFblack',
        stem: ['A 34-year-old female who is a former Olympic gymnast suffers from chronic pain due to a history of multiple injuries, including a right side superior labrum anterior and posterior (SLAP) tear as well as herniated discs on T9 and T4. She has had surgery to repair the SLAP injury which required removing the torn part of the labrum; she experiences ongoing stiffness, weakness, and pain when doing activities that require overhead reach. She has not had surgery to repair the herniated discs and her symptoms include chronic lower back pain, flashes of shooting pain, and occasional numbness in the left leg.  These symptoms make it difficult for her to sit for long periods of time or do strenuous physical activities. <img class="img-responsive" src="<%=current.baseURL%>bf3_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their pain?'],

    });

    API.addQuestionsSet('ptsdMwhite',{
        inherit : 'therm',
        name: 'ptsdMwhite',
        stem: ['A 51-year-old male who served in the Afghanistan war for two terms has been struggling to cope with symptoms of post-traumatic stress disorder (PTSD). He has flashbacks about being in combat, is easily startled by loud noises, has difficulty sleeping due to vivid nightmares, trouble concentrating at work, and he avoids situations where he might have to spend time in large crowds.  These symptoms have led to becoming more isolated from people both at work and from longtime friends.<img class="img-responsive" src="<%=current.baseURL%>wm1_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their PTSD?'],
        
    });

    API.addQuestionsSet('ptsdMblack',{
        inherit : 'therm',
        name: 'ptsdMblack',
        stem: ['A 51-year-old male who served in the Afghanistan war for two terms has been struggling to cope with symptoms of post-traumatic stress disorder (PTSD). He has flashbacks about being in combat, is easily startled by loud noises, has difficulty sleeping due to vivid nightmares, trouble concentrating at work, and he avoids situations where he might have to spend time in large crowds.  These symptoms have led to becoming more isolated from people both at work and from longtime friends.<img class="img-responsive" src="<%=current.baseURL%>bm1_nc.jpg"> How supportive are you of this patient having access to medical marijuana for their PTSD?'],
        
    });

    API.addQuestionsSet('depressionFwhite',{
        inherit : 'therm',
        name: 'depressionFwhite',
        stem: ['A 27- year-old female who was diagnosed with clinical depression when she was 25 has been experiencing fatigue, lack of motivation, feelings of hopelessness, sadness, and worthlessness. She has recently expressed that she has lost interest in doing things she once loved like hiking, reading, and dancing. She has also found herself avoiding daily tasks such as showering, doing laundry, and returning text messages.  She has recently moved back home with her parents, as she was having a difficult time living alone.<img class="img-responsive" src="<%=current.baseURL%>bf1_nc.jpg">How supportive are you of this patient having access to medical marijuana for their depression?']

    });

    API.addQuestionsSet('depressionFblack',{
        inherit : 'therm',
        name: 'depressionFblack',
        stem: ['A 27- year-old female who was diagnosed with clinical depression when she was 25 has been experiencing fatigue, lack of motivation, feelings of hopelessness, sadness, and worthlessness. She has recently expressed that she has lost interest in doing things she once loved like hiking, reading, and dancing. She has also found herself avoiding daily tasks such as showering, doing laundry, and returning text messages.  She has recently moved back home with her parents, as she was having a difficult time living alone.<img class="img-responsive" src="<%=current.baseURL%>wf1_nc.jpg">How supportive are you of this patient having access to medical marijuana for their depression?']

    });

    API.addQuestionsSet('insomniaMwhite',{
        inherit : 'therm',
        name: 'insomniaMwhite',
        stem: ['A 57-year-old male has suffered from insomnia off and on for much of his adult life. He struggles with difficulty initiating and maintaining sleep, has trouble focusing during the day, decreased motivation, prominent fatigue, and irritability. Recently he has noticed an increase of anxiety and depression, with a lot of time worrying about his lack of sleep. He has tried taking naps during the day but has become so concerned about his lack of sleep at nighttime that even napping has not been not successful. Due to his chronic fatigue and irritability, he is starting to experience interpersonal problems at work.<img class="img-responsive" src="<%=current.baseURL%>wm2_nc.jpg">How supportive are you of this patient having access to medical marijuana for their insomnia?']

    });

    API.addQuestionsSet('insomniaMblack',{
        inherit : 'therm',
        name: 'insomniaMblack',
        stem: ['A 57-year-old male has suffered from insomnia off and on for much of his adult life. He struggles with difficulty initiating and maintaining sleep, has trouble focusing during the day, decreased motivation, prominent fatigue, and irritability. Recently he has noticed an increase of anxiety and depression, with a lot of time worrying about his lack of sleep. He has tried taking naps during the day but has become so concerned about his lack of sleep at nighttime that even napping has not been not successful. Due to his chronic fatigue and irritability, he is starting to experience interpersonal problems at work.<img class="img-responsive" src="<%=current.baseURL%>bm2_nc.jpg">How supportive are you of this patient having access to medical marijuana for their insomnia?']

    });

    API.addQuestionsSet('pregnancyFwhite',{
        inherit : 'therm',
        name: 'pregnancyFwhite',
        stem: ['A 29-year-old female, in her 12th week of pregnancy has been experiencing chronic nausea since week 6 of this first trimester. She describes her nausea as increased during movement such as driving or swimming and also worsened with specific scents or foods. She feels unable to eat a wide variety of foods, even Saltines and Sprite can be difficult for her to eat without nausea and emesis. She has been to an Urgent Care clinic twice due to dehydration and is having a difficult time maintaining her weight.<img class="img-responsive" src="<%=current.baseURL%>wf2_nc.jpg">How supportive are you of this patient having access to medical marijuana for their nausea?']

    });

    API.addQuestionsSet('pregnancyFblack',{
        inherit : 'therm',
        name: 'pregnancyFblack',
        stem: ['A 29-year-old female, in her 12th week of pregnancy has been experiencing chronic nausea since week 6 of this first trimester. She describes her nausea as increased during movement such as driving or swimming and also worsened with specific scents or foods. She feels unable to eat a wide variety of foods, even Saltines and Sprite can be difficult for her to eat without nausea and emesis. She has been to an Urgent Care clinic twice due to dehydration and is having a difficult time maintaining her weight.<img class="img-responsive" src="<%=current.baseURL%>wf2_nc.jpg">How supportive are you of this patient having access to medical marijuana for their nausea?']

    });

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
                                    questions: {inherit:'chronicPainFwhite'}
                                },
                                {   
                                    inherit: 'basicPage',
                                    questions: {inherit: 'chronicPainFblack'}
                                },
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