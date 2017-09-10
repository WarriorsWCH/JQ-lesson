
//裁判
function Judge(){
	
	//定时器
	this.timer = null;
	//第几轮
	this.times = 0;
	//攻击者
	this.attacker = null;
	
	//开始游戏
	this.begin = function(player1,player2){
		//游戏一开始指定一方为攻击者
		this.attacker = player1;
		//this.attacker.enemy = player2;
		//双方互为敌人
		player1.enemy = player2;
		player2.enemy = player1;
		var self = this;
		//启动定时器
		this.timer = setInterval(function(){
			
			//选择技能  技能的名字和伤害
			var skilling =  self.attacker.skilling();
			
			//被攻击者受到伤害
			self.attacker.enemy.hurt(skilling.val);//计算被攻击者的伤害/剩余的血量
			console.log(self.attacker.enemy.pname,self.attacker.enemy.hp);
			
			self.times++;
			//使用p标签显示攻击状态
			var p =  $('<p></p>');
			//设置内容
			p.html('第' + self.times + '轮：【' + self.attacker.pname + '】' + skilling.skillName + skilling.val);
			//把内容添加到pkcontent内容区域
			$('.pkcontent').append(p);
			//设置动画
			p.fadeIn(500);
			
			//判断游戏是否结束
			if(self.attacker.enemy.hp <= 0){
				//被攻击者血量小于等于0，游戏结束
				//停止定时器 游戏结束
				clearInterval(self.timer);
				var overp = $('<p></p>');
				overp.html(self.attacker.enemy.pname + '筋疲力尽了，翘辫子了');
				overp.css({
					'color' : 'red',
					'background-color' : 'white'
				});
				$('.pkcontent').append(overp);
				overp.fadeIn(500);
			}
			
			//交换攻击对象
			self.attacker = self.attacker.enemy;
			
			//scrollIntoView() 自动滚动到底部
			document.getElementById('footer').scrollIntoView();
		},500);
	}
}
