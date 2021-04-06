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
      content: 'とても眠たい',
      title_top:[0,0,0,0,0],
      title_left:[0,0,0,0,0]
  },
  methods: {
    mousemove(e){   //マウスが動いた時に呼び出される関数
      this.message2 = document.getElementById("intro").getBoundingClientRect().top;  //マウス位置取得
      this.message = document.getElementById("intro_title").style.fontSize;
     // this.message =this.$refs.refname[1].getBoundingClientRect().left;  //子コンポーネントにアクセス

      //アニメーション反応範囲指定
      if(e.pageY > document.getElementById("intro").getBoundingClientRect().top && e.pageY < document.getElementById("intro").getBoundingClientRect().bottom){
        //マウスの動きに応じて影が動く処理
        for(let i = 0; i < 5; i++){
          this.title_top.splice(i,1,(document.getElementById("intro_title").getBoundingClientRect().top -e.pageY)/window.innerHeight*10*(2*i+1));
          this.title_left.splice(i,1,(document.getElementById("intro_title").getBoundingClientRect().left - e.pageX)/window.innerWidth*10*(2*i+1));
          document.getElementById("sub_title_"+String(i+1)).style.top  = String(this.title_top[i])+"px";
          document.getElementById("sub_title_"+String(i+1)).style.left  = String(this.title_left[i])+"px";
        }

        //カーソル移動（ここは全体に適応させたい）
        document.getElementById("cursor").style.top = String(e.pageY)+"px";
        document.getElementById("cursor").style.left = String(e.pageX)+"px";

        //遅延させる処理（実際にはスリープさせている）
        setTimeout(function(){
          document.getElementById("follower").style.top = String(e.pageY-40/2)+"px";
          document.getElementById("follower").style.left = String(e.pageX-40/2)+"px";}.bind(this), 50);
        
    }


      //document.getElementById("sub_title_1").style.top = String(e.pageY-document.getElementById("intro_title").getBoundingClientRect().top - document.getElementById("intro_title").style.fontSize)+"px";    //これで移動できる！！！
      //document.getElementById("sub_title_1").style.left = String(e.pageY-document.getElementById("intro_title").getBoundingClientRect().left - document.getElementById("intro_title").style.fontSize)+"px";
      // this.$refs.refname[2]. = '100%';
    //  getComputedStyle(this.$refs.refname[0]).style.width = getComputedStyle(this.$refs.refname[2]).style.height;
     // document.getElementsByClassName('sub_title_1').style.height = 100;
    }
  }

})