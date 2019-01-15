$(function () {
    $(".glitch").mgGlitch({
        // set 'true' to stop glitching
        destroy: false,
        // set 'false' to stop glitching
        glitch: true,
        // set 'false' to stop scaling
        scale: true,
        // set 'false' to stop glitch blending
        blend: true,
        // select blend mode type
        blendModeType: 'hue',
        // set min and max times for glitch elems
        glitch1TimeMin: 600,
        glitch1TimeMax: 900,
        glitch2TimeMin: 10,
        glitch2TimeMax: 115,
        zIndexStart: 8
    });
});