var hearder = new Vue({
    el: '#experience',
    data: {
        title:[
            {class: 'main_title', name:'EXPERIENCE'},
            {class: 'sub_title_1', name:'EXPERIENCE'},
            {class: 'sub_title_2', name:'EXPERIENCE'},
            {class: 'sub_title_3', name:'EXPERIENCE'},
            {class: 'sub_title_4', name:'EXPERIENCE'},
            {class: 'sub_title_5', name:'EXPERIENCE'}
          ],
        experience_lists:
        [
            {class: 'ex_list1',content_class: "ex_cont_list1", content: '資格：基本情報技術者（大学2年春），応用情報技術者（大学3年春），TOEIC660点（大学4年）',image_class: 'ex_image_list1',image: 'image/ex_list1.jpg'},
            {class: 'ex_list2',content_class: "ex_cont_list2", content: '国際学会論文投稿2回（大学4年次&大学院1年次）',image_class: 'ex_image_list2',image: 'image/ex_list2.jpg'},
            {class: 'ex_list3',content_class: "ex_cont_list3", content: '女の子に告白経験2回（小学4年次&大学1年次）',image_class: 'ex_image_list3',image: 'image/ex_list3.jpg'},
            {class: 'ex_list4',content_class: "ex_cont_list4", content: 'フィリピンに短期留学',image_class: 'ex_image_list4',image: 'image/ex_list4.jpg'}

        ]
    }
    
}) 

