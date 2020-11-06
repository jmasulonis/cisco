(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [
        { name: "cisco_160x600_skyscraper_atlas_1", frames: [[0, 1026, 538, 433], [540, 1026, 408, 63], [1026, 0, 322, 1202], [540, 1091, 210, 94], [0, 0, 1024, 1024]] }
    ];


    (lib.AnMovieClip = function () {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        }
        this.play = function () {
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        }
        this.stop = function () {
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:



    (lib.CachedBmp_16 = function () {
        this.initialize(ss["cisco_160x600_skyscraper_atlas_1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_15 = function () {
        this.initialize(ss["cisco_160x600_skyscraper_atlas_1"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_14 = function () {
        this.initialize(ss["cisco_160x600_skyscraper_atlas_1"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.CachedBmp_13 = function () {
        this.initialize(ss["cisco_160x600_skyscraper_atlas_1"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Operations_fc_1024 = function () {
        this.initialize(ss["cisco_160x600_skyscraper_atlas_1"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.SDWAN_copy = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.CachedBmp_16();
        this.instance.setTransform(-134.5, -114, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.SDWAN_copy, new cjs.Rectangle(-134.5, -114, 269, 216.5), null);


    (lib.operations_fc = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.Operations_fc_1024();
        this.instance.setTransform(-112.45, -112.45, 0.2197, 0.2197);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.operations_fc, new cjs.Rectangle(-112.4, -112.4, 224.9, 224.9), null);


    (lib.IDC_btn = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.instance = new lib.CachedBmp_13();
        this.instance.setTransform(-52.5, -15.6, 0.5, 0.5);

        this.instance_1 = new lib.CachedBmp_15();
        this.instance_1.setTransform(-102.05, -15.6, 0.5, 0.5);

        this.instance_2 = new lib.CachedBmp_14();
        this.instance_2.setTransform(-81, -387, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] }, 3).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-102, -387, 204, 601);


    (lib.Cisco_logo = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AC2CrQgTgTAAgbQAAgbATgTQASgTAdAAQAdAAASATQAUATgBAbQABAbgUATQgSATgdAAQgdAAgSgTgADOBmQgKAJAAAOQAAAOAKAKQAKAJANAAQAOAAAKgJQAJgKAAgOQAAgOgJgJQgKgKgOAAQgOAAgJAKgAA3CtQgVgTAAgdQAAgcATgSQATgTAdAAQAPAAAOAFIAAAhQgLgGgQAAQgPAAgKAJQgKAKAAAOQAAAOAKAKQAKAJAPAAQASAAAJgGIAAAhQgMAFgRAAQgcAAgSgRgAhRC6IAAgcIALACQALACAIAAQAXAAgBgLQABgIgOgFIgHgCQghgLAAgaQAAgRANgLQAMgLAXAAQAPAAAPAEIAAAbQgOgEgLAAQgTAAAAAKQAAAIAPAEIAIADQAdAKAAAaQAAAVgQAMQgOAJgVAAQgXAAgLgEgAkSCtQgUgTAAgdQAAgcATgSQATgTAcAAQAQAAANAFIAAAhQgLgGgPAAQgPAAgKAJQgKAKAAAOQAAAOAKAKQAJAJAQAAQARAAAJgGIAAAhQgMAFgRAAQgbAAgTgRgAicC8IAAh9IAhAAIAAB9gAChADQgEgDAAgHIAAimQAAgGAEgFQAFgFAHAAQAGAAAFAFQAEAFAAAGIAACmQAAAHgEADQgFAFgGAAQgHAAgFgFgAi2ADQgFgDABgHIAAimQgBgGAFgFQAEgFAHAAQAGAAAFAFQAEAFAAAGIAACmQAAAHgEADQgFAFgGAAQgHAAgEgFgAFOgbQgFgFAAgGIAAghQAAgGAFgFQAEgFAHAAQAGAAAEAFQAFAFAAAGIAAAhQAAAGgFAFQgEAFgGAAQgHAAgEgFgAD3gbQgFgEAAgHIAAhMQAAgHAFgEQAFgFAGAAQAHAAAEAFQAFAEAAAHIAABMQAAAGgFAFQgEAFgHAAQgGAAgFgFgABLgbQgFgFAAgGIAAhMQAAgHAFgEQAFgFAGAAQAGAAAFAFQAFAEAAAHIAABMQAAAHgFAEQgEAFgHAAQgGAAgFgFgAgKgbQgFgFABgGIAAghQgBgGAFgFQAFgFAFAAQAGAAAFAFQAFAFgBAGIAAAhQABAGgFAFQgFAFgGAAQgFAAgFgFgAhggbQgEgFgBgGIAAhMQABgHAEgEQAFgFAGAAQAGAAAFAFQAFAEAAAHIAABMQAAAGgFAFQgFAFgGAAQgGAAgFgFgAkMgbQgFgEAAgHIAAhMQAAgHAFgEQAFgFAGAAQAGAAAFAFQAFAEAAAHIAABMQAAAGgFAFQgFAFgGAAQgGAAgFgFgAljgbQgEgEAAgHIAAghQAAgGAEgFQAFgFAHAAQAGAAAFAFQAEAFAAAGIAAAhQAAAGgEAFQgFAFgGAAQgHAAgFgFg");
        this.shape.setTransform(0, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        this._renderFirstFrame();

    }).prototype = getMCSymbolPrototype(lib.Cisco_logo, new cjs.Rectangle(-36, -18.9, 72, 37.9), null);


    (lib.btn_clicktag = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EgMaAuzMAAAhdlIY1AAMAAABdlg");
        this.shape.setTransform(0, 0.025);
        this.shape._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-79.5, -299.4, 159, 598.9);


    // stage content:
    (lib.cisco160x600_skyscraper = function (mode, startPosition, loop, reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        this.actionFrames = [79];
        // timeline functions:
        this.frame_79 = function () {
            /* Stop at This Frame
            The  timeline will stop/pause at the frame where you insert this code.
            Can also be used to stop/pause the timeline of movieclips.
            */

            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

        // clickTag_btn
        this.btn_clickTag = new lib.btn_clicktag();
        this.btn_clickTag.name = "btn_clickTag";
        this.btn_clickTag.setTransform(80, 300, 1.0063, 1.0018);
        new cjs.ButtonHelper(this.btn_clickTag, 0, 1, 2, false, new lib.btn_clicktag(), 3);

        this.timeline.addTween(cjs.Tween.get(this.btn_clickTag).wait(80));

        // Cisco_logo
        this.instance = new lib.Cisco_logo();
        this.instance.setTransform(80, 56.05);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({ x: -92 }, 0).wait(1).to({ x: -18.907, alpha: 0.425 }, 0).wait(1).to({ x: 6.5925, alpha: 0.5732 }, 0).wait(1).to({ x: 24.079, alpha: 0.6749 }, 0).wait(1).to({ x: 37.3199, alpha: 0.7519 }, 0).wait(1).to({ x: 47.7703, alpha: 0.8126 }, 0).wait(1).to({ x: 56.1707, alpha: 0.8615 }, 0).wait(1).to({ x: 62.9541, alpha: 0.9009 }, 0).wait(1).to({ x: 68.3946, alpha: 0.9325 }, 0).wait(1).to({ x: 72.6733, alpha: 0.9574 }, 0).wait(1).to({ x: 75.9114, alpha: 0.9762 }, 0).wait(1).to({ x: 78.1872, alpha: 0.9895 }, 0).wait(1).to({ x: 79.5454, alpha: 0.9974 }, 0).wait(1).to({ x: 80, alpha: 1 }, 0).wait(36));

        // copy
        this.instance_1 = new lib.SDWAN_copy();
        this.instance_1.setTransform(80, 234.05);
        this.instance_1.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({ x: -92 }, 0).wait(32).to({ regY: -5.8, x: -21.25, y: 228.25, alpha: 0.4111 }, 0).wait(1).to({ x: 3.55, alpha: 0.5557 }, 0).wait(1).to({ x: 20.75, alpha: 0.6556 }, 0).wait(1).to({ x: 33.85, alpha: 0.7318 }, 0).wait(1).to({ x: 44.3, alpha: 0.7925 }, 0).wait(1).to({ x: 52.75, alpha: 0.8418 }, 0).wait(1).to({ x: 59.7, alpha: 0.8822 }, 0).wait(1).to({ x: 65.4, alpha: 0.9153 }, 0).wait(1).to({ x: 70, alpha: 0.9421 }, 0).wait(1).to({ x: 73.7, alpha: 0.9634 }, 0).wait(1).to({ x: 76.45, alpha: 0.9795 }, 0).wait(1).to({ x: 78.4, alpha: 0.9909 }, 0).wait(1).to({ x: 79.6, alpha: 0.9977 }, 0).wait(1).to({ regY: 0, x: 80, y: 234.05, alpha: 1 }, 0).wait(24));

        // IDC_cta
        this.instance_2 = new lib.IDC_btn();
        this.instance_2.setTransform(80, 388);
        this.instance_2.alpha = 0;
        new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.IDC_btn(), 3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({ x: -92 }, 0).wait(42).to({ regY: -86.5, x: -27.2, y: 301.5, alpha: 0.3767 }, 0).wait(1).to({ x: -3.95, alpha: 0.5118 }, 0).wait(1).to({ x: 12.3, alpha: 0.6065 }, 0).wait(1).to({ x: 24.95, alpha: 0.68 }, 0).wait(1).to({ x: 35.2, alpha: 0.7396 }, 0).wait(1).to({ x: 43.7, alpha: 0.7892 }, 0).wait(1).to({ x: 50.9, alpha: 0.8311 }, 0).wait(1).to({ x: 57, alpha: 0.8665 }, 0).wait(1).to({ x: 62.2, alpha: 0.8967 }, 0).wait(1).to({ x: 66.6, alpha: 0.9222 }, 0).wait(1).to({ x: 70.25, alpha: 0.9435 }, 0).wait(1).to({ x: 73.3, alpha: 0.9611 }, 0).wait(1).to({ x: 75.7, alpha: 0.9753 }, 0).wait(1).to({ x: 77.6, alpha: 0.9861 }, 0).wait(1).to({ x: 78.9, alpha: 0.9938 }, 0).wait(1).to({ x: 79.7, alpha: 0.9985 }, 0).wait(1).to({ regY: 0, x: 80, y: 388, alpha: 1 }, 0).wait(11));

        // operations_fc
        this.instance_3 = new lib.operations_fc();
        this.instance_3.setTransform(80, 518.85, 0.5201, 0.5201);
        this.instance_3.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({ x: -92 }, 0).wait(1).to({ x: -23.4423, alpha: 0.3986 }, 0).wait(1).to({ x: 0.8502, alpha: 0.5398 }, 0).wait(1).to({ x: 17.7194, alpha: 0.6379 }, 0).wait(1).to({ x: 30.6729, alpha: 0.7132 }, 0).wait(1).to({ x: 41.0679, alpha: 0.7737 }, 0).wait(1).to({ x: 49.5974, alpha: 0.8232 }, 0).wait(1).to({ x: 56.6696, alpha: 0.8644 }, 0).wait(1).to({ x: 62.5461, alpha: 0.8985 }, 0).wait(1).to({ x: 67.4042, alpha: 0.9268 }, 0).wait(1).to({ x: 71.3676, alpha: 0.9498 }, 0).wait(1).to({ x: 74.5239, alpha: 0.9682 }, 0).wait(1).to({ x: 76.934, alpha: 0.9822 }, 0).wait(1).to({ x: 78.638, alpha: 0.9921 }, 0).wait(1).to({ x: 79.6582, alpha: 0.998 }, 0).wait(1).to({ x: 80, alpha: 1 }, 0).wait(54));

        this._renderFirstFrame();

    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(-146.5, 300, 361, 302);
    // library properties:
    lib.properties = {
        id: '2C8278C5EC2E43438215B111A9A4FF14',
        width: 160,
        height: 600,
        fps: 30,
        color: "#00BCEB",
        opacity: 1.00,
        manifest: [
            { src: "images/cisco_160x600_skyscraper_atlas_1.png?1604685704436", id: "cisco_160x600_skyscraper_atlas_1" }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['2C8278C5EC2E43438215B111A9A4FF14'] = {
        getStage: function () { return exportRoot.stage; },
        getLibrary: function () { return lib; },
        getSpriteSheet: function () { return ss; },
        getImages: function () { return img; }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused || stageChild.ignorePause) {
                stageChild.syncStreamSounds();
            }
        }
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initSkyscraper() {
    canvas = document.getElementById("canvas_skyscraper");
    anim_container = document.getElementById("animation_container_skyscraper");
    dom_overlay_container = document.getElementById("dom_overlay_container_skyscraper");
    var comp = AdobeAn.getComposition("2C8278C5EC2E43438215B111A9A4FF14");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib.cisco160x600_skyscraper();
    stage = new lib.Stage(canvas);
    stage.enableMouseOver();
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
