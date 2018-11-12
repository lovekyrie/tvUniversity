<template>
    <div class="upload-wrap" v-if="show">
        <div class="clipper-container" ref="clipper">
            <!--底部背景-->
            <div class="upload-bg-canvas">
                <div class="bCanvas-container">
                    <canvas ref="canvas"></canvas>
                </div>
            </div>
            <!--裁剪-->
            <div class="clipper-part">
                <div class="pCanvas-container">
                    <canvas ref="pCanvas"></canvas>
                </div>
            </div>
            <!--底部按钮-->
            <div class="action-bar">
                <button class="btn-cancel" @click="_cancel">取消</button>
                <button class="btn-ok" @click="_clipper">确定</button>
            </div>
            <div class="upload-mask" :class="{opacity: maskShow}"></div>
            <div class="gesture-mask" ref="gesture"></div>
        </div>
        <!--<div class="upload">
            <input type="file" id="upload_file" capture="camera" accept="image/*" multiple="multiple"  @change="upload">
        </div>-->
    </div>

</template>
<script>
  export default {
    data(){
      return{
        $img:null,
        imgX:null,//img对于canvas的坐标
        imgY:null,
        imgLoaded:null,
        imgLoading:null,
        imgCurrentWidth: null,
        imgCurrentHeight: null,
        picValue:null,
        ctx:null,
        pCtx: null,
        originXDiff:null,//裁剪canvas与原图canvas坐标原点上的差值
        originYDiff:null,
        cWidth:null,//图片canvas宽高
        cHeight:null,
        show:false,
        maskShow:true,
        maskShowTimer: null
      }
    },
    props: {
      selector:{
        type:String,
        default:'',
      },
      clipperImgWidth: {
        type: Number,
        default: 500
      },
      clipperImgHeight: {
        type: Number,
        default: 300
      }
    },
    mounted(){
    },
    methods:{
      _initListen(){
        let vm = this;
        this.$nextTick(()=>{
          let dom = document.getElementById(this.selector);
          dom.addEventListener("change",function (e) {
            vm.upload(e);
          },false);
        })
      },
      _cancel(){
        let file = document.getElementById(this.selector);
        file.value = "";
        this.$img = null;
        let $gesture = this.$refs.gesture;
        $gesture.ontouchstart = null;
        $gesture.ontouchmove = null;
        $gesture.outouchend = null;
        this.imgLoaded = null;
        this.imgLoading = null;
        this.picValue = null;
        this.ctx = null;
        this.pCtx = null;
        this.show = false;
      },
      _clipper(){
        let imgData = null;
        try {
          imgData = this.$refs.pCanvas.toDataURL();
        } catch (e) {
          console.error('请在response header加上Access-Control-Allow-Origin，否则canvas无法裁剪未经许可的跨域图片');
        }
        this._cancel();
        this.$emit('on-finish', imgData);
      },
      //读取file对象
      upload (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.picValue = files[0];
        return this.imgPreview(this.picValue);
      },
      //转换file
      imgPreview(file){
        let self = this;
        this.show = true;
        if (!file || !window.FileReader) return;
        if (/^image/.test(file.type)){
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = function () {
            let result = this.result;
            let img = new Image(),
              onLoad = e =>{
                img.removeEventListener('load',onLoad,false);
                self.imgLoaded = true;
                self.imgLoading = false;
                self.$img = img;
                setTimeout(() => {
                  self._initClipper();
                }, 25);
              },
              onError = e =>{
                img.removeEventListener('error', onError, false);
                self.imgLoaded = true;
                self.imgLoading = false;
                self.show = false;
                self.$emit('err');
              }
            img.src = result;
            self.imgLoaded = false;
            self.imgLoading = true;
            img.crossOrigin = 'Anonymous';
            img.addEventListener('load', onLoad, false);
            img.addEventListener('error', onError, false);
          }
        }
      },
      //初始化canvas,img,event
      _initClipper(){
        this._initCanvas();
        this._initImg(this.$img.width,this.$img.height);
        this._initEvent();
      },
      _initCanvas(){
        let $canvas = this.$refs.canvas,
          $pCanvas = this.$refs.pCanvas,
          clipperClientRect = this.$refs.clipper.getBoundingClientRect(),
          clipperWidth = parseInt(this.clipperImgWidth / window.devicePixelRatio),
          clipperHeight = parseInt(this.clipperImgHeight / window.devicePixelRatio);
        this.ctx = $canvas.getContext('2d');
        this.pCtx = $pCanvas.getContext('2d');
        //判断clipperWidth与clipperHeight有没有超过容器值
        if (clipperWidth < 0 || clipperWidth > clipperClientRect.width) {
          clipperWidth = 250
        }
        if (clipperHeight < 0 || clipperHeight > clipperClientRect.height) {
          clipperHeight = 100
        }

        //因为canvas在手机上会被放大，因此里面的内容会模糊，这里根据手机的devicePixelRatio来放大canvas，然后再通过设置css来收缩，因此关于canvas的所有值或坐标都要乘以devicePixelRatio
        $canvas.style.width = clipperClientRect.width + 'px';
        $canvas.style.height = clipperClientRect.height + 'px';
        $canvas.width = this._ratio(clipperClientRect.width);
        $canvas.height = this._ratio(clipperClientRect.height);
        $pCanvas.style.width = clipperWidth + 'px';
        $pCanvas.style.height = clipperHeight + 'px';
        $pCanvas.width = this._ratio(clipperWidth);
        $pCanvas.height = this._ratio(clipperHeight);

        //计算两个canvas原点的x y差值
        let cClientRect = $canvas.getBoundingClientRect(),
          pClientRect = $pCanvas.getBoundingClientRect();
        this.originXDiff = pClientRect.left - cClientRect.left;
        this.originYDiff = pClientRect.top - cClientRect.top;
        this.cWidth = cClientRect.width;
        this.cHeight = cClientRect.height;
      },
      _initEvent() {
        let $gesture = this.$refs.gesture,
          cClientRect = this.$refs.pCanvas.getBoundingClientRect(),
          biw = this.imgCurrentWidth/2,bih = this.imgCurrentHeight/2,
          bcw = cClientRect.width/2,bch = cClientRect.height/2,
          endX = this.imgCurrentWidth > cClientRect.width ? biw - bcw : bcw - biw,
          endY = this.imgCurrentHeight > cClientRect.height ? bih - bch : bch - bih,
          tx = null, ty =null,
          f2x = 0, f2y = 0;
        let iX = this.imgX,
          iY = this.imgY;
        $gesture.addEventListener('touchstart', e => {
          if (!this.imgLoaded) {
            return;
          }
          let finger = e.touches[0];
          tx = finger.pageX;
          ty = finger.pageY;
        }, false);
        $gesture.addEventListener('touchmove', e => {
          e.preventDefault();
          if (!this.imgLoaded) {
            return;
          }
          this.maskShowTimer && clearTimeout(this.maskShowTimer);

          let finger1 = e.touches[0],
            scx = finger1.pageX - tx,
            scy = finger1.pageY - ty,
            gx = 0,gy = 0;
          //限制移动距离
          if(f2x + scx >= endX){
            gx = endX;
          }else if(f2x + scx <= -endX){
            gx = -endX;
          }else {
            gx = f2x + scx;
          }
          if(f2y + scy >= endY){
            gy = endY;
          }else if(f2y + scy <= -endY){
            gy = -endY;
          }else {
            gy = f2y + scy;
          }
          /*this.maskShow = false;*/
          this._drawImage(iX+gx,iY+gy, this.imgCurrentWidth, this.imgCurrentHeight);
        }, false);
        $gesture.addEventListener('touchend', e => {
          if (!this.imgLoaded) {
            return;
          }
          let finger1 = e.changedTouches[0],
            x = finger1.pageX - tx,
            y = finger1.pageY - ty;
          //限制移动距离
          if(f2x + x >= endX){
            f2x = endX
          }else if(f2x + x <= -endX){
            f2x = -endX;
          }else {
            f2x += x;
          }
          if(f2y + y >= endY){
            f2y = endY
          }else if(f2y + y <= -endY){
            f2y = -endY;
          }else {
            f2y += y;
          }
          this._drawImage(iX+f2x,iY+f2y, this.imgCurrentWidth, this.imgCurrentHeight);
          /*this.maskShowTimer = setTimeout(() => {
            this.maskShow = true;
          }, 300);*/
        });
      },
      _initImg(w, h) {
        let eW = null,
          eH = null,
          maxW = this.cWidth,
          maxH = this.cHeight;
        //如果图片的宽高都少于容器的宽高，则不做处理
        if (w <= maxW && h <= maxH) {
          eW = w;
          eH = h;
        } else if (w > maxW && h <= maxH) {
          eW = maxW;
          eH = parseInt(h / w * maxW);
        } else if (w <= maxW && h > maxH) {
          eW = parseInt(w / h * maxH);
          eH = maxH;
        } else {
          //判断是横图还是竖图
          if (h > w) {
            eW = parseInt(w / h * maxH);
            eH = maxH;
          } else {
            eW = maxW;
            eH = parseInt(h / w * maxW);
          }
        }
        if (eW <= maxW && eH <= maxH) {
          this._drawImage((maxW - eW) / 2, (maxH - eH) / 2, eW, eH);
        } else {
          this._initImg(eW, eH);
        }
      },
      _drawImage(x, y, w, h) {
        this._clearCanvas();
        this.imgX = parseInt(x);
        this.imgY = parseInt(y);
        this.imgCurrentWidth = parseInt(w);
        this.imgCurrentHeight = parseInt(h);
        //更新canvas
        this.ctx.drawImage(this.$img, this._ratio(x), this._ratio(y), this._ratio(w), this._ratio(h));
        //更新pCanvas，只需要减去两个canvas坐标原点对应的差值即可
        this.pCtx.drawImage(this.$img, this._ratio(x - this.originXDiff), this._ratio(y - this.originYDiff), this._ratio(w), this._ratio(h));
      },
      _clearCanvas() {
        let $canvas = this.$refs.canvas,
          $pCanvas = this.$refs.pCanvas;
        $canvas.width = $canvas.width;
        $canvas.height = $canvas.height;
        $pCanvas.width = $pCanvas.width;
        $pCanvas.height = $pCanvas.height;
      },
      _ratio(size) {
        return parseInt(window.devicePixelRatio * size);
      },
      getBase64(dataURL) {
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
      }
    }
  }

</script>
<style lang="less">
    .upload-wrap{
        line-height: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 50;
        top:0;
        left: 0;
    }
    .upload_bg{
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .clipper-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        z-index: 100;
        overflow: hidden;
    }
    .upload-bg-canvas{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 61px;
        z-index: 101;

        .bCanvas-container{
            position: absolute;
            z-index: 101;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .upload-mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 102;
        transition: opacity 500ms;
        background-color: #000;
        opacity: 0;
    }
    .opacity {
        opacity: 0.8;
    }
    .clipper-part{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 61px;
        z-index: 103;

        .pCanvas-container {
            position: absolute;
            z-index: 104;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid #fff;
        }
    }
    .action-bar {
        background-color: #000000;
        width: 100%;
        box-sizing: content-box;
        position: absolute;
        top: 0;
        left: 0;
        top: auto;
        bottom: 0;
        z-index: 105;
        height: 60px;
        line-height: 60px;
        border-top: 1px solid rgba(256, 256, 256, 0.3);
        button {
            display: block;
            padding: 0 15px;
            line-height: 60px;
            font-size: 16px;
            color: #fff;
            background: none;
            border: none;
            outline: 0;
            &.btn-cancel {
                float: left;
            }
            &.btn-ok {
                float: right;
            }
        }
    }
    .gesture-mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 61px;
        z-index: 105;
    }
</style>
/**
* @premise 引入组件
* @param   selector:上传input(id) onFinish(flow){ flow:图片文件流}
* @mode   this.$hero.imgUpLoad._init(param)
*/