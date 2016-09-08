var NextLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("GAME CLEAR!!", "Arial", 26);
        label.setPosition(size.width / 2, size.height / 2);
        this.addChild(label, 1);

        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
      level = [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 0, 0, 0, 0, 1],
          [1, 1, 3, 0, 2, 0, 1],
          [1, 0, 0, 4, 0, 0, 1],
          [1, 0, 3, 1, 2, 0, 1],
          [1, 0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
      ];
        cc.director.runScene(new gameScene());
        createflag = 0;
        gameflag = 0;
    },
});
var NextScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る                             R    G    B
              var backgroundLayer = new cc.LayerColor(new cc.Color(140, 200, 140, 128));
              this.addChild(backgroundLayer);

        var layer = new NextLayer();
        this.addChild(layer);
    }
});
