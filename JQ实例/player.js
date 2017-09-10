
//玩家
function Player(pname, hp, ele){
	//名字
	this.pname = pname;
	//血量
	this.hp = hp;
	//敌人
	this.enemy = null;
	//显示玩家的标签
	this.ele = ele;
	//技能
	this.skills = ["发起了猛烈的进攻，打的他满地找牙, 对方损失了",
					"使用了大招，对方的假发被打掉了！损失了",
					"使用了魅惑技能，对方被迷的神魂颠倒，瞬间掉了2W的粉丝，损失了",
					"查看了葵花宝典，逼格提升了51%，对方被吓破了胆，损失了",
					"炫耀了他的大块肌肉，对方损失了",
					"狠狠的鄙视了对方一下，造成了巨大伤害，对方损失",
					"使用了情侣花式虐狗秀恩爱，一下子打中了对方的小心脏，对方损失"];
	
	//受到攻击/损害
	this.hurt = function(damage){
		//计算当前的血量
		this.hp -= damage;
	};
	//回复
	this.recover = function(num){
		this.hp += num;
	};
	
	//选择技能
	this.skilling = function(){
		//返回随机的技能
		return {
			//技能的名字
			skillName : this.skills[parseInt(Math.random()*7)],
			//技能的伤害
			val : parseInt(Math.random()*30)
		}
	}
}










