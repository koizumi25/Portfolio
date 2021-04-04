var introduction = new Vue({
  el: '#intro',
  data: {
    message: 'rrr',
    message2: 'fff',
    title:[
      {id: 'sub_title_1', name:'SELFINTRO'},
      {id: 'sub_title_2', name:'SELFINTRO'},
      {id: 'sub_title_3', name:'SELFINTRO'},
      {id: 'sub_title_4', name:'SELFINTRO'},
      {id: 'sub_title_5', name:'SELFINTRO'}
    ],
      main_content: '名前は小泉祐樹です．人生の分岐点は大学院1年の夏',
      content: 'うんちがしたい'
  },
  methods: {
    mousemove(e){   //マウスが動いた時に呼び出される関数
      this.message2 = e.pageY;  //マウス位置取得
      this.message = document.getElementById("intro_title").style.fontSize;
     // this.message =this.$refs.refname[1].getBoundingClientRect().left;  //子コンポーネントにアクセス
    
      document.getElementById("sub_title_1").style.top = String(e.pageY-document.getElementById("intro_title").getBoundingClientRect().top - document.getElementById("intro_title").style.fontSize)+"px";    //これで移動できる！！！
     // this.$refs.refname[2]. = '100%';
    //  getComputedStyle(this.$refs.refname[0]).style.width = getComputedStyle(this.$refs.refname[2]).style.height;
     // document.getElementsByClassName('sub_title_1').style.height = 100;
    }
  }

})