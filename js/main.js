/*
Platform.js <https://mths.be/platform>
Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
Copyright 2011-2013 John-David Dalton
Available under MIT license <https://mths.be/mit>
 */
(function () {
    function a(l) {
        l = String(l);
        return l.charAt(0).toUpperCase() + l.slice(1)
    }
    function b(l, E) {
        var F = -1,
        w = l ? l.length : 0;
        if ("number" == typeof w && -1 < w && w <= t)
            for (; ++F < w; )
                E(l[F], F, l);
        else
            f(l, E)
    }
    function c(l) {
        l = String(l).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(l) ? l : a(l)
    }
    function f(l, E) {
        for (var F in l)
            y.call(l, F) && E(l[F], F, l)
    }
    function d(l) {
        return null == l ? a(l) : v.call(l).slice(8, -1)
    }
    function e(l, E) {
        var F = null != l ? typeof l[E] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(F) &&
        ("object" == F ? !!l[E] : !0)
    }
    function k(l) {
        return String(l).replace(/([ -])(?!$)/g, "$1?")
    }
    function g(l, E) {
        var F = null;
        b(l, function (w, u) {
            F = E(F, w, u, l)
        });
        return F
    }
    function n(l) {
        function E(N) {
            return g(N, function (J, I) {
                var O = I.pattern || k(I);
                !J && (J = RegExp("\\b" + O + " *\\d+[.\\w_]*", "i").exec(l) || RegExp("\\b" + O + " *\\w+-[\\w]*", "i").exec(l) || RegExp("\\b" + O + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(l)) && ((J = String(I.label && !RegExp(O, "i").test(I.label) ? I.label : J).split("/"))[1] && !/[\d.]+/.test(J[0]) && (J[0] +=
                        " " + J[1]), I = I.label || I, J = c(J[0].replace(RegExp(O, "i"), I).replace(RegExp("; *(?:" + I + "[_-])?", "i"), " ").replace(RegExp("(" + I + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return J
            })
        }
        function F(N) {
            return g(N, function (J, I) {
                return J || (RegExp(I + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(l) || 0)[1] || null
            })
        }
        var w = r,
        u = l && "object" == typeof l && "String" != d(l);
        u && (w = l, l = null);
        var D = w.navigator || {},
        A = D.userAgent || "";
        l || (l = A);
        var K = u ? !!D.likeChrome : /\bChrome\b/.test(l) && !/internal|\n/i.test(v.toString()),
        L = u ? "Object" : "ScriptBridgingProxyObject",
        M = u ? "Object" : "Environment",
        Q = u && w.java ? "JavaPackage" : d(w.java),
        U = u ? "Object" : "RuntimeObject";
        M = (Q = /\bJava/.test(Q) && w.java) && d(w.environment) == M;
        var ca = Q ? "a" : "\u03b1",
        da = Q ? "b" : "\u03b2",
        Y = w.document || {},
        S = w.operamini || w.opera,
        V = x.test(V = u && S ? S["[[Class]]"] : d(S)) ? V : S = null,
        q,
        W = l;
        u = [];
        var X = null,
        T = l == A;
        A = T && S && "function" == typeof S.version && S.version();
        var G = function (N) {
            return g(N, function (J, I) {
                return J || RegExp("\\b" + (I.pattern || k(I)) + "\\b", "i").exec(l) && (I.label ||
                    I)
            })
        }
        ([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
        B = function (N) {
            return g(N, function (J, I) {
                return J || RegExp("\\b" + (I.pattern || k(I)) + "\\b", "i").exec(l) && (I.label || I)
            })
        }
        (["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"]),
        H = E([{
                        label: "BlackBerry",
                        pattern: "BB10"
                    }, "BlackBerry", {
                        label: "Galaxy S",
                        pattern: "GT-I9000"
                    }, {
                        label: "Galaxy S2",
                        pattern: "GT-I9100"
                    }, {
                        label: "Galaxy S3",
                        pattern: "GT-I9300"
                    }, {
                        label: "Galaxy S4",
                        pattern: "GT-I9500"
                    }, {
                        label: "Galaxy S5",
                        pattern: "SM-G900"
                    }, {
                        label: "Galaxy S6",
                        pattern: "SM-G920"
                    }, {
                        label: "Galaxy S6 Edge",
                        pattern: "SM-G925"
                    }, {
                        label: "Galaxy S7",
                        pattern: "SM-G930"
                    }, {
                        label: "Galaxy S7 Edge",
                        pattern: "SM-G935"
                    }, "Google TV", "Lumia", "iPad",
                    "iPod", "iPhone", "Kindle", {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                        label: "Wii U",
                        pattern: "WiiU"
                    }, "Wii", "Xbox One", {
                        label: "Xbox 360",
                        pattern: "Xbox"
                    }, "Xoom"]),
        P = function (N) {
            return g(N, function (J, I, O) {
                return J || (I[H] || I[/^[a-z]+(?: +[a-z]+\b)*/i.exec(H)] || RegExp("\\b" + k(O) + "(?:\\b|\\w*\\d)", "i").exec(l)) && O
            })
        }
        ({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Archos: {},
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1,
                Nexus: 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                PlayStation: 1,
                "PlayStation Vita": 1
            }
        }),
        C = function (N) {
            return g(N, function (J, I) {
                var O = I.pattern || k(I);
                if (!J && (J = RegExp("\\b" + O + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(l))) {
                    var R = J,
                    Z = I.label || I,
                    aa = {
                        "10.0": "10",
                        "6.4": "10 Technical Preview",
                        "6.3": "8.1",
                        "6.2": "8",
                        "6.1": "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        "5.2": "Server 2003 / XP 64-bit",
                        "5.1": "XP",
                        "5.01": "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    O && Z && /^Win/i.test(R) && !/^Windows Phone /i.test(R) && (aa = aa[/[\d.]+$/.exec(R)]) && (R = "Windows " + aa);
                    R = String(R);
                    O && Z && (R = R.replace(RegExp(O, "i"), Z));
                    J = R = c(R.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                                " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }
                return J
            })
        }
        (["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "]);
        G && (G = [G]);
        P && !H && (H = E([P]));
        if (q = /\bGoogle TV\b/.exec(H))
            H = q[0];
        /\bSimulator\b/i.test(l) && (H = (H ? H + " " : "") + "Simulator");
        "Opera Mini" == B && /\bOPiOS\b/.test(l) && u.push("running in Turbo/Uncompressed mode");
        "IE" == B && /\blike iPhone OS\b/.test(l) ? (q = n(l.replace(/like iPhone OS/, "")), P = q.manufacturer, H = q.product) : /^iP/.test(H) ? (B || (B = "Safari"), C = "iOS" + ((q = / OS ([\d_]+)/i.exec(l)) ? " " + q[1].replace(/_/g, ".") : "")) : "Konqueror" != B || /buntu/i.test(C) ? P && "Google" != P && (/Chrome/.test(B) &&
            !/\bMobile Safari\b/i.test(l) || /\bVita\b/.test(H)) || /\bAndroid\b/.test(C) && /^Chrome/.test(B) && /\bVersion\//i.test(l) ? (B = "Android Browser", C = /\bAndroid\b/.test(C) ? C : "Android") : "Silk" == B ? (/\bMobi/i.test(l) || (C = "Android", u.unshift("desktop mode")), /Accelerated *= *true/i.test(l) && u.unshift("accelerated")) : "PaleMoon" == B && (q = /\bFirefox\/([\d.]+)\b/.exec(l)) ? u.push("identifying as Firefox " + q[1]) : "Firefox" == B && (q = /\b(Mobile|Tablet|TV)\b/i.exec(l)) ? (C || (C = "Firefox OS"), H || (H = q[1])) : !B || (q = !/\bMinefield\b/i.test(l) &&
                /\b(?:Firefox|Safari)\b/.exec(B)) ? (B && !H && /[\/,]|^[^(]+?\)/.test(l.slice(l.indexOf(q + "/") + 8)) && (B = null), (q = H || P || C) && (H || P || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(C)) && (B = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(C) ? C : q) + " Browser")) : "Electron" == B && (q = (/\bChrome\/([\d.]+)\b/.exec(l) || 0)[1]) && u.push("Chromium " + q) : C = "Kubuntu";
        A || (A = F(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", k(B), "(?:Firefox|Minefield|NetFront)"]));
        if (q = "iCab" == G && 3 < parseFloat(A) && "WebKit" || /\bOpera\b/.test(B) && (/\bOPR\b/.test(l) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(l) && !/^(?:Trident|EdgeHTML)$/.test(G) && "WebKit" || !G && /\bMSIE\b/i.test(l) && ("Mac OS" == C ? "Tasman" : "Trident") || "WebKit" == G && /\bPlayStation\b(?! Vita\b)/i.test(B) && "NetFront")
            G = [q];
        "IE" == B && (q = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(l) || 0)[1]) ? (B += " Mobile", C = "Windows Phone " + (/\+$/.test(q) ? q : q + ".x"), u.unshift("desktop mode")) : /\bWPDesktop\b/i.test(l) ? (B = "IE Mobile", C = "Windows Phone 8.x",
            u.unshift("desktop mode"), A || (A = (/\brv:([\d.]+)/.exec(l) || 0)[1])) : "IE" != B && "Trident" == G && (q = /\brv:([\d.]+)/.exec(l)) && (B && u.push("identifying as " + B + (A ? " " + A : "")), B = "IE", A = q[1]);
        if (T) {
            if (e(w, "global"))
                if (Q && (q = Q.lang.System, W = q.getProperty("os.arch"), C = C || q.getProperty("os.name") + " " + q.getProperty("os.version")), M) {
                    try {
                        A = w.require("ringo/engine").version.join("."),
                        B = "RingoJS"
                    } catch (N) {
                        (q = w.system) && q.global.system == w.system && (B = "Narwhal", C || (C = q[0].os || null))
                    }
                    B || (B = "Rhino")
                } else
                    "object" == typeof w.process &&
                    !w.process.browser && (q = w.process) && ("object" == typeof q.versions && ("string" == typeof q.versions.electron ? (u.push("Node " + q.versions.node), B = "Electron", A = q.versions.electron) : "string" == typeof q.versions.nw && (u.push("Chromium " + A, "Node " + q.versions.node), B = "NW.js", A = q.versions.nw)), B || (B = "Node.js", W = q.arch, C = q.platform, A = (A = /[\d.]+/.exec(q.version)) ? A[0] : null));
            else
                d(q = w.runtime) == L ? (B = "Adobe AIR", C = q.flash.system.Capabilities.os) : d(q = w.phantom) == U ? (B = "PhantomJS", A = (q = q.version || null) && q.major + "." + q.minor +
                    "." + q.patch) : "number" == typeof Y.documentMode && (q = /\bTrident\/(\d+)/i.exec(l)) ? (A = [A, Y.documentMode], (q = +q[1] + 4) != A[1] && (u.push("IE " + A[1] + " mode"), G && (G[1] = ""), A[1] = q), A = "IE" == B ? String(A[1].toFixed(1)) : A[0]) : "number" == typeof Y.documentMode && /^(?:Chrome|Firefox)\b/.test(B) && (u.push("masking as " + B + " " + A), B = "IE", A = "11.0", G = ["Trident"], C = "Windows");
            C = C && c(C)
        }
        A && (q = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(A) || /(?:alpha|beta)(?: ?\d)?/i.exec(l + ";" + (T && D.appMinorVersion)) || /\bMinefield\b/i.test(l) &&
                "a") && (X = /b/i.test(q) ? "beta" : "alpha", A = A.replace(RegExp(q + "\\+?$"), "") + ("beta" == X ? da : ca) + (/\d+\+?/.exec(q) || ""));
        if ("Fennec" == B || "Firefox" == B && /\b(?:Android|Firefox OS)\b/.test(C))
            B = "Firefox Mobile";
        else if ("Maxthon" == B && A)
            A = A.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(H))
            "Xbox 360" == H && (C = null), "Xbox 360" == H && /\bIEMobile\b/.test(l) && u.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(B) && (!B || H || /Browser|Mobi/.test(B)) || "Windows CE" != C && !/Mobi/i.test(l))
            if ("IE" == B && T)
                try {
                    null ===
                    w.external && u.unshift("platform preview")
                } catch (N) {
                    u.unshift("embedded")
                }
            else (/\bBlackBerry\b/.test(H) || /\bBB10\b/.test(l)) && (q = (RegExp(H.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(l) || 0)[1] || A) ? (q = [q, /BB10/.test(l)], C = (q[1] ? (H = null, P = "BlackBerry") : "Device Software") + " " + q[0], A = null) : this != f && "Wii" != H && (T && S || /Opera/.test(B) && /\b(?:MSIE|Firefox)\b/i.test(l) || "Firefox" == B && /\bOS X (?:\d+\.){2,}/.test(C) || "IE" == B && (C && !/^Win/.test(C) && 5.5 < A || /\bWindows XP\b/.test(C) && 8 < A || 8 == A && !/\bTrident\b/.test(l))) &&
                !x.test(q = n.call(f, l.replace(x, "") + ";")) && q.name && (q = "ing as " + q.name + ((q = q.version) ? " " + q : ""), x.test(B) ? (/\bIE\b/.test(q) && "Mac OS" == C && (C = null), q = "identify" + q) : (q = "mask" + q, B = V ? c(V.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(q) && (C = null), T || (A = null)), G = ["Presto"], u.push(q));
        else
            B += " Mobile";
        if (q = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(l) || 0)[1]) {
            q = [parseFloat(q.replace(/\.(\d)$/, ".0$1")), q];
            if ("Safari" == B && "+" == q[1].slice(-1))
                B = "WebKit Nightly", X = "alpha", A = q[1].slice(0, -1);
            else if (A ==
                q[1] || A == (q[2] = (/\bSafari\/([\d.]+\+?)/i.exec(l) || 0)[1]))
                A = null;
            q[1] = (/\bChrome\/([\d.]+)/i.exec(l) || 0)[1];
            537.36 == q[0] && 537.36 == q[2] && 28 <= parseFloat(q[1]) && "WebKit" == G && (G = ["Blink"]);
            T && (K || q[1]) ? (G && (G[1] = "like Chrome"), q = q[1] || (q = q[0], 530 > q ? 1 : 532 > q ? 2 : 532.05 > q ? 3 : 533 > q ? 4 : 534.03 > q ? 5 : 534.07 > q ? 6 : 534.1 > q ? 7 : 534.13 > q ? 8 : 534.16 > q ? 9 : 534.24 > q ? 10 : 534.3 > q ? 11 : 535.01 > q ? 12 : 535.02 > q ? "13+" : 535.07 > q ? 15 : 535.11 > q ? 16 : 535.19 > q ? 17 : 536.05 > q ? 18 : 536.1 > q ? 19 : 537.01 > q ? 20 : 537.11 > q ? "21+" : 537.13 > q ? 23 : 537.18 > q ? 24 : 537.24 > q ? 25 : 537.36 >
                        q ? 26 : "Blink" != G ? "27" : "28")) : (G && (G[1] = "like Safari"), q = (q = q[0], 400 > q ? 1 : 500 > q ? 2 : 526 > q ? 3 : 533 > q ? 4 : 534 > q ? "4+" : 535 > q ? 5 : 537 > q ? 6 : 538 > q ? 7 : 601 > q ? 8 : "8"));
            G && (G[1] += " " + (q += "number" == typeof q ? ".x" : /[.+]/.test(q) ? "" : "+"));
            "Safari" == B && (!A || 45 < parseInt(A)) && (A = q)
        }
        "Opera" == B && (q = /\bzbov|zvav$/.exec(C)) ? (B += " ", u.unshift("desktop mode"), "zvav" == q ? (B += "Mini", A = null) : B += "Mobile", C = C.replace(RegExp(" *" + q + "$"), "")) : "Safari" == B && /\bChrome\b/.exec(G && G[1]) && (u.unshift("desktop mode"), B = "Chrome Mobile", A = null, /\bOS X\b/.test(C) ?
            (P = "Apple", C = "iOS 4.3+") : C = null);
        A && 0 == A.indexOf(q = /[\d.]+$/.exec(C)) && -1 < l.indexOf("/" + q + "-") && (C = String(C.replace(q, "")).replace(/^ +| +$/g, ""));
        G && !/\b(?:Avant|Nook)\b/.test(B) && (/Browser|Lunascape|Maxthon/.test(B) || "Safari" != B && /^iOS/.test(C) && /\bSafari\b/.test(G[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(B) && G[1]) && (q = G[G.length - 1]) && u.push(q);
        u.length && (u = ["(" + u.join("; ") + ")"]);
        P && H && 0 > H.indexOf(P) && u.push("on " + P);
        H && u.push((/^on /.test(u[u.length -
                        1]) ? "" : "on ") + H);
        if (C) {
            var ba = (q = / ([\d.+]+)$/.exec(C)) && "/" == C.charAt(C.length - q[0].length - 1);
            C = {
                architecture: 32,
                family: q && !ba ? C.replace(q[0], "") : C,
                version: q ? q[1] : null,
                toString: function () {
                    var N = this.version;
                    return this.family + (N && !ba ? " " + N : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }
        (q = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W)) && !/\bi686\b/i.test(W) ? (C && (C.architecture = 64, C.family = C.family.replace(RegExp(" *" + q), "")), B && (/\bWOW64\b/i.test(l) || T && /\w(?:86|32)$/.test(D.cpuClass || D.platform) && !/\bWin64; x64\b/i.test(l)) &&
            u.unshift("32-bit")) : C && /^OS X/.test(C.family) && "Chrome" == B && 39 <= parseFloat(A) && (C.architecture = 64);
        l || (l = null);
        w = {};
        w.description = l;
        w.layout = G && G[0];
        w.manufacturer = P;
        w.name = B;
        w.prerelease = X;
        w.product = H;
        w.ua = l;
        w.version = B && A;
        w.os = C || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
                return "null"
            }
        };
        w.parse = n;
        w.toString = function () {
            return this.description || ""
        };
        w.version && u.unshift(A);
        w.name && u.unshift(B);
        C && B && (C != String(C).split(" ")[0] || C != B.split(" ")[0] && !H) && u.push(H ? "(" + C + ")" : "on " +
            C);
        u.length && (w.description = u.join(" "));
        return w
    }
    var m = {
        "function": !0,
        object: !0
    },
    r = m[typeof window] && window || this,
    p = m[typeof exports] && exports;
    m = m[typeof module] && module && !module.nodeType && module;
    var h = p && m && "object" == typeof global && global;
    !h || h.global !== h && h.window !== h && h.self !== h || (r = h);
    var t = Math.pow(2, 53) - 1,
    x = /\bOpera/;
    h = Object.prototype;
    var y = h.hasOwnProperty,
    v = h.toString,
    z = n();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (r.platform = z, define(function () {
            return z
        })) : p &&
    m ? f(z, function (l, E) {
        p[E] = l
    }) : r.platform = z
}).call(this);
function buildIOSMeta() {
    for (var a = [{
                name: "viewport",
                content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
            }, {
                name: "apple-mobile-web-app-capable",
                content: "yes"
            }, {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black"
            }
        ], b = 0; b < a.length; b++) {
        var c = document.createElement("meta");
        c.name = a[b].name;
        c.content = a[b].content;
        var f = window.document.head.querySelector('meta[name="' + c.name + '"]');
        f && f.parentNode.removeChild(f);
        window.document.head.appendChild(c)
    }
}
function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}
function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}
function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}
function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product)
        switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
            case 568:
                320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                break;
            case 667:
                375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
            case 736:
                414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 724:
                375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            case 808:
                414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                break;
            default:
                hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
        }
}
function iosResize() {
    __iosResize();
    setTimeout(function () {
        __iosResize()
    }, 500)
}
function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
function isIOSLessThen13() {
    var a = platform.os,
    b = a.family.toLowerCase();
    a = parseFloat(a.version);
    return "ios" === b && 13 > a ? !0 : !1
}
$(document).ready(function () {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});
(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
    b = "undefined" !== typeof module && module.exports,
    c = function () {
        for (var e, k = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], g = 0, n = k.length, m = {}; g < n; g++)
            if ((e = k[g]) && e[1]in a) {
                for (g = 0; g < e.length; g++)
                    m[k[0][g]] = e[g];
                return m
            }
        return !1
    }
    (),
    f = {
        change: c.fullscreenchange,
        error: c.fullscreenerror
    },
    d = {
        request: function (e) {
            return new Promise(function (k, g) {
                var n = function () {
                    this.off("change",
                        n);
                    k()
                }
                .bind(this);
                this.on("change", n);
                e = e || a.documentElement;
                Promise.resolve(e[c.requestFullscreen]())["catch"](g)
            }
                .bind(this))
        },
        exit: function () {
            return new Promise(function (e, k) {
                if (this.isFullscreen) {
                    var g = function () {
                        this.off("change", g);
                        e()
                    }
                    .bind(this);
                    this.on("change", g);
                    Promise.resolve(a[c.exitFullscreen]())["catch"](k)
                } else
                    e()
            }
                .bind(this))
        },
        toggle: function (e) {
            return this.isFullscreen ? this.exit() : this.request(e)
        },
        onchange: function (e) {
            this.on("change", e)
        },
        onerror: function (e) {
            this.on("error", e)
        },
        on: function (e, k) {
            var g = f[e];
            g && a.addEventListener(g, k, !1)
        },
        off: function (e, k) {
            var g = f[e];
            g && a.removeEventListener(g, k, !1)
        },
        raw: c
    };
    c ? (Object.defineProperties(d, {
            isFullscreen: {
                get: function () {
                    return !!a[c.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function () {
                    return a[c.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function () {
                    return !!a[c.fullscreenEnabled]
                }
            }
        }), b ? module.exports = d : window.screenfull = d) : b ? module.exports = {
        isEnabled: !1
    }
     : window.screenfull = {
        isEnabled: !1
    }
})();
var s_iScaleFactor = 1, s_bIsIphone = !1, s_iOffsetX, s_iOffsetY, s_bFocus = !0;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function () {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
function getSize(a) {
    var b = a.toLowerCase(),
    c = window.document,
    f = c.documentElement;
    if (void 0 === window["inner" + a])
        a = f["client" + a];
    else if (window["inner" + a] != f["client" + a]) {
        var d = c.createElement("body");
        d.id = "vpw-test-b";
        d.style.cssText = "overflow:scroll";
        var e = c.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + b + ":" + f["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        d.appendChild(e);
        f.insertBefore(d, c.head);
        a = 7 == e["offset" + a] ? f["client" + a] : window["inner" + a];
        f.removeChild(d)
    } else
        a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}
function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}
function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}
function isIOS() {
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length; )
        if (navigator.platform === a.pop())
            return s_bIsIphone = !0;
    return s_bIsIphone = !1
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var b = getSize("Width");
        s_bFocus && _checkOrientation(b, a);
        var c = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
        f = Math.round(CANVAS_WIDTH * c);
        c = Math.round(CANVAS_HEIGHT * c);
        if (c < a) {
            var d = a - c;
            c += d;
            f += CANVAS_WIDTH / CANVAS_HEIGHT * d
        } else
            f < b && (d = b - f, f += d, c += CANVAS_HEIGHT / CANVAS_WIDTH * d);
        d = a / 2 - c / 2;
        var e = b / 2 - f / 2,
        k = CANVAS_WIDTH / f;
        if (e * k < -EDGEBOARD_X ||
            d * k < -EDGEBOARD_Y)
            c = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), f = Math.round(CANVAS_WIDTH * c), c = Math.round(CANVAS_HEIGHT * c), d = (a - c) / 2, e = (b - f) / 2, k = CANVAS_WIDTH / f;
        s_iOffsetX = -1 * e * k;
        s_iOffsetY = -1 * d * k;
        0 <= d && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oSelectPlayers && s_oSelectPlayers.refreshButtonPos();
        $("#canvas").css("width", f + "px");
        $("#canvas").css("height", c + "px");
        0 > d || (d = (a -
                c) / 2);
        $("#canvas").css("top", d + "px");
        $("#canvas").css("left", e + "px");
        fullscreenHandler()
    }
}
function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
            s_oMain.stopUpdate()))
}
function playSound(a, b, c) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(b), s_aSounds[a].loop(c), s_aSounds[a]) : null
}
function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}
function setVolume(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(b)
}
function setMute(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(b)
}
function createBitmap(a, b, c) {
    var f = new createjs.Bitmap(a),
    d = new createjs.Shape;
    b && c ? d.graphics.beginFill("#fff").drawRect(0, 0, b, c) : d.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    f.hitArea = d;
    return f
}
function createSprite(a, b, c, f, d, e) {
    a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-c, -f, d, e);
    a.hitArea = b;
    return a
}
function pad(a, b, c) {
    a += "";
    return a.length >= b ? a : Array(b - a.length + 1).join(c || "0") + a
}
function linearFunction(a, b, c, f, d) {
    return (a - b) * (d - f) / (c - b) + f
}
function randomFloatBetween(a, b, c) {
    "undefined" === typeof c && (c = 2);
    return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(c))
}
function rotateVector2D(a, b) {
    var c = b.getX() * Math.cos(a) + b.getY() * Math.sin(a),
    f = b.getX() * -Math.sin(a) + b.getY() * Math.cos(a);
    b.set(c, f)
}
function tweenVectorsOnX(a, b, c) {
    return a + c * (b - a)
}
function shuffle(a) {
    for (var b = a.length, c, f; 0 !== b; )
        f = Math.floor(Math.random() * b), --b, c = a[b], a[b] = a[f], a[f] = c;
    return a
}
function bubbleSort(a) {
    do {
        var b = !1;
        for (var c = 0; c < a.length - 1; c++)
            a[c] > a[c + 1] && (b = a[c], a[c] = a[c + 1], a[c + 1] = b, b = !0)
    } while (b)
}
function compare(a, b) {
    return a.index > b.index ? -1 : a.index < b.index ? 1 : 0
}
function CircularList(a, b) {
    this.arr = a;
    this.currentIndex = b || 0
}
CircularList.prototype._getNextIndex = function () {
    var a = this.currentIndex;
    return a < this.arr.length - 1 ? a + 1 : 0
};
CircularList.prototype._getPrevIndex = function () {
    var a = this.currentIndex,
    b = this.arr;
    return 0 < a ? a - 1 : b.length - 1
};
CircularList.prototype.getNext = function () {
    return this.arr[this._getNextIndex()]
};
CircularList.prototype.getPrev = function () {
    return this.arr[this._getPrevIndex()]
};
CircularList.prototype.next = function () {
    this.currentIndex = this._getNextIndex();
    return this.current()
};
CircularList.prototype.prev = function () {
    this.currentIndex = this._getPrevIndex();
    return this.current()
};
CircularList.prototype.current = function () {
    return this.arr[this.currentIndex]
};
CircularList.prototype.removeElement = function (a) {
    a = this.arr.indexOf(a);
    -1 < a && this.arr.splice(a, 1)
};
CircularList.prototype.getArray = function () {
    return this.arr
};
CircularList.prototype.setCurrent = function (a) {
    a = this.arr.indexOf(a);
    return -1 < a ? (this.currentIndex = a, this.current()) : null
};
function easeLinear(a, b, c, f) {
    return c * a / f + b
}
function easeInQuad(a, b, c, f) {
    return c * (a /= f) * a + b
}
function easeInSine(a, b, c, f) {
    return -c * Math.cos(a / f * (Math.PI / 2)) + c + b
}
function easeInCubic(a, b, c, f) {
    return c * (a /= f) * a * a + b
}
function getTrajectoryPoint(a, b) {
    var c = new createjs.Point,
    f = (1 - a) * (1 - a),
    d = a * a;
    c.x = f * b.start.x + 2 * (1 - a) * a * b.traj.x + d * b.end.x;
    c.y = f * b.start.y + 2 * (1 - a) * a * b.traj.y + d * b.end.y;
    return c
}
function formatTime(a) {
    a /= 1E3;
    var b = Math.floor(a / 60);
    a = parseFloat(a - 60 * b).toFixed(1);
    var c = "";
    c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
    return 10 > a ? c + ("0" + a) : c + a
}
function degreesToRadians(a) {
    return a * Math.PI / 180
}
function checkRectCollision(a, b) {
    var c = getBounds(a, .9);
    var f = getBounds(b, .98);
    return calculateIntersection(c, f)
}
function calculateIntersection(a, b) {
    var c,
    f,
    d,
    e;
    var k = a.x + (c = a.width / 2);
    var g = a.y + (f = a.height / 2);
    var n = b.x + (d = b.width / 2);
    var m = b.y + (e = b.height / 2);
    k = Math.abs(k - n) - (c + d);
    g = Math.abs(g - m) - (f + e);
    return 0 > k && 0 > g ? (k = Math.min(Math.min(a.width, b.width), -k), g = Math.min(Math.min(a.height, b.height), -g), {
        x: Math.max(a.x, b.x),
        y: Math.max(a.y, b.y),
        width: k,
        height: g,
        rect1: a,
        rect2: b
    }) : null
}
function getBounds(a, b) {
    var c = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        c.x2 = -Infinity;
        c.y2 = -Infinity;
        var f = a.children,
        d = f.length,
        e;
        for (e = 0; e < d; e++) {
            var k = getBounds(f[e], 1);
            k.x < c.x && (c.x = k.x);
            k.y < c.y && (c.y = k.y);
            k.x + k.width > c.x2 && (c.x2 = k.x + k.width);
            k.y + k.height > c.y2 && (c.y2 = k.y + k.height)
        }
        Infinity == c.x && (c.x = 0);
        Infinity == c.y && (c.y = 0);
        Infinity == c.x2 && (c.x2 = 0);
        Infinity == c.y2 && (c.y2 = 0);
        c.width = c.x2 - c.x;
        c.height = c.y2 - c.y;
        delete c.x2;
        delete c.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            d =
                a.sourceRect || a.image;
            e = d.width * b;
            var g = d.height * b
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                d = a.spriteSheet.getFrame(a.currentFrame);
                e = d.rect.width;
                g = d.rect.height;
                f = d.regX;
                var n = d.regY
            } else
                c.x = a.x || 0, c.y = a.y || 0;
        else
            c.x = a.x || 0, c.y = a.y || 0;
        f = f || 0;
        e = e || 0;
        n = n || 0;
        g = g || 0;
        c.regX = f;
        c.regY = n;
        d = a.localToGlobal(0 - f, 0 - n);
        k = a.localToGlobal(e - f, g - n);
        e = a.localToGlobal(e - f, 0 - n);
        f = a.localToGlobal(0 - f, g - n);
        c.x =
            Math.min(Math.min(Math.min(d.x, k.x), e.x), f.x);
        c.y = Math.min(Math.min(Math.min(d.y, k.y), e.y), f.y);
        c.width = Math.max(Math.max(Math.max(d.x, k.x), e.x), f.x) - c.x;
        c.height = Math.max(Math.max(Math.max(d.y, k.y), e.y), f.y) - c.y
    }
    return c
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(a) {
    for (var b = a.length, c, f; 0 < b; )
        f = Math.floor(Math.random() * b), b--, c = a[b], a[b] = a[f], a[f] = c;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function (a) {
        switch (a.type) {
        case "touchstart":
            this.onTouchStart(a);
            break;
        case "touchmove":
            this.onTouchMove(a);
            break;
        case "touchend":
            this.onTouchEnd(a)
        }
    },
    onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function (a) {
        this.moved = !0
    },
    onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b)
        }
    }
};
(function () {
    function a(c) {
        var f = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        c = c || window.event;
        c.type in f ? document.body.className = f[c.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
    }
    var b = "hidden";
    b in document ? document.addEventListener("visibilitychange", a) : (b = "mozHidden")in document ? document.addEventListener("mozvisibilitychange",
        a) : (b = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", a) : (b = "msHidden")in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
    for (var b = window.location.search.substring(1).split("&"), c = 0; c < b.length; c++) {
        var f = b[c].split("=");
        if (f[0] == a)
            return f[1]
    }
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut())
}
if (screenfull.isEnabled)
    screenfull.on("change", function () {
        s_bFullscreen = screenfull.isFullscreen;
        null !== s_oInterface && s_oInterface.resetFullscreenBut();
        null !== s_oMenu && s_oMenu.resetFullscreenBut();
        null !== s_oSelectPlayers && s_oSelectPlayers.resetFullscreenBut()
    });
function CSpriteLibrary() {
    var a = {},
    b,
    c,
    f,
    d,
    e,
    k;
    this.init = function (g, n, m) {
        b = {};
        f = c = 0;
        d = g;
        e = n;
        k = m
    };
    this.addSprite = function (g, n) {
        if (!a.hasOwnProperty(g)) {
            var m = new Image;
            a[g] = b[g] = {
                szPath: n,
                oSprite: m,
                bLoaded: !1
            };
            c++
        }
    };
    this.getSprite = function (g) {
        return a.hasOwnProperty(g) ? a[g].oSprite : null
    };
    this._onSpritesLoaded = function () {
        c = 0;
        e.call(k)
    };
    this._onSpriteLoaded = function () {
        d.call(k);
        ++f === c && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var g in b)
            b[g].oSprite.oSpriteLibrary = this, b[g].oSprite.szKey =
                g, b[g].oSprite.onload = function () {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            },
        b[g].oSprite.onerror = function (n) {
            var m = n.currentTarget;
            setTimeout(function () {
                b[m.szKey].oSprite.src = b[m.szKey].szPath
            }, 500)
        },
        b[g].oSprite.src = b[g].szPath
    };
    this.setLoaded = function (g) {
        a[g].bLoaded = !0
    };
    this.isLoaded = function (g) {
        return a[g].bLoaded
    };
    this.getNumSprites = function () {
        return c
    }
}
function CTextButton(a, b, c, f, d, e, k, g) {
    var n,
    m,
    r,
    p,
    h,
    t,
    x,
    y,
    v,
    z,
    l,
    E;
    this._init = function (F, w, u, D, A, K, L, M) {
        n = !1;
        p = [];
        h = [];
        E = createBitmap(u);
        m = u.width;
        r = u.height;
        var Q = Math.ceil(L / 20);
        z = new createjs.Text(D, L + "px " + A, "#000000");
        var U = z.getBounds();
        z.textAlign = "center";
        z.lineWidth = .9 * m;
        z.textBaseline = "alphabetic";
        z.x = u.width / 2 + Q;
        z.y = Math.floor(u.height / 2) + U.height / 3 + Q;
        l = new createjs.Text(D, L + "px " + A, K);
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.lineWidth = .9 * m;
        l.x = u.width / 2;
        l.y = Math.floor(u.height /
                2) + U.height / 3;
        v = new createjs.Container;
        v.x = F;
        v.y = w;
        v.regX = u.width / 2;
        v.regY = u.height / 2;
        s_bMobile || (v.cursor = "pointer");
        v.addChild(E, z, l);
        !1 !== M && s_oStage.addChild(v);
        this._initListener()
    };
    this.unload = function () {
        v.off("mousedown", x);
        v.off("pressup", y);
        s_oStage.removeChild(v)
    };
    this.setVisible = function (F) {
        v.visible = F
    };
    this.setAlign = function (F) {
        l.textAlign = F;
        z.textAlign = F
    };
    this.enable = function () {
        n = !1;
        E.filters = [];
        E.cache(0, 0, m, r)
    };
    this.disable = function () {
        n = !0;
        var F = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        E.filters = [new createjs.ColorMatrixFilter(F)];
        E.cache(0, 0, m, r)
    };
    this._initListener = function () {
        x = v.on("mousedown", this.buttonDown);
        y = v.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (F, w, u) {
        p[F] = w;
        h[F] = u
    };
    this.addEventListenerWithParams = function (F, w, u, D) {
        p[F] = w;
        h[F] = u;
        t = D
    };
    this.buttonRelease = function () {
        n || (playSound("click", 1, !1), v.scaleX = 1, v.scaleY = 1, p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(h[ON_MOUSE_UP], t))
    };
    this.buttonDown = function () {
        n || (v.scaleX = .9, v.scaleY = .9, p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]))
    };
    this.setPosition = function (F, w) {
        v.x = F;
        v.y = w
    };
    this.changeText = function (F) {
        l.text = F;
        z.text = F
    };
    this.setX = function (F) {
        v.x = F
    };
    this.setY = function (F) {
        v.y = F
    };
    this.getButtonImage = function () {
        return v
    };
    this.getX = function () {
        return v.x
    };
    this.getY = function () {
        return v.y
    };
    this.getSprite = function () {
        return v
    };
    this._init(a, b, c, f, d, e, k, g);
    return this
}
function CToggle(a, b, c, f, d) {
    var e,
    k,
    g,
    n,
    m,
    r;
    this._init = function (p, h, t, x, y) {
        k = [];
        g = [];
        var v = new createjs.SpriteSheet({
            images: [t],
            frames: {
                width: t.width / 2,
                height: t.height,
                regX: t.width / 2 / 2,
                regY: t.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = x;
        r = createSprite(v, "state_" + e, t.width / 2 / 2, t.height / 2, t.width / 2, t.height);
        r.x = p;
        r.y = h;
        r.stop();
        r.cursor = "pointer";
        y.addChild(r);
        this._initListener()
    };
    this.unload = function () {
        r.off("mousedown", n);
        r.off("pressup", m);
        d.removeChild(r)
    };
    this._initListener = function () {
        n =
            r.on("mousedown", this.buttonDown);
        m = r.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (p, h, t) {
        k[p] = h;
        g[p] = t
    };
    this.setActive = function (p) {
        e = p;
        r.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function () {
        r.scaleX = 1;
        r.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        r.gotoAndStop("state_" + e);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(g[ON_MOUSE_UP], e)
    };
    this.buttonDown = function () {
        r.scaleX = .9;
        r.scaleY = .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function (p, h) {
        r.x = p;
        r.y = h
    };
    this._init(a,
        b, c, f, d)
}
function CGfxButton(a, b, c, f) {
    var d,
    e,
    k,
    g,
    n,
    m,
    r;
    this._init = function (h, t, x, y) {
        d = !1;
        e = 1;
        k = [];
        g = [];
        r = createBitmap(x);
        r.x = h;
        r.y = t;
        r.scaleX = r.scaleY = e;
        r.regX = x.width / 2;
        r.regY = x.height / 2;
        r.cursor = "pointer";
        y.addChild(r);
        this._initListener()
    };
    this.unload = function () {
        r.off("mousedown", n);
        r.off("pressup", m);
        createjs.Tween.removeTweens(r);
        f.removeChild(r)
    };
    this.setVisible = function (h) {
        r.visible = h
    };
    this.setClickable = function (h) {
        d = !h
    };
    this._initListener = function () {
        n = r.on("mousedown", this.buttonDown);
        m = r.on("pressup",
                this.buttonRelease)
    };
    this.addEventListener = function (h, t, x) {
        k[h] = t;
        g[h] = x
    };
    this.buttonRelease = function () {
        d || (r.scaleX = e, r.scaleY = e, k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(g[ON_MOUSE_UP]))
    };
    this.buttonDown = function () {
        d || (r.scaleX = .9 * e, r.scaleY = .9 * e, playSound("click", 1, !1), k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN]))
    };
    this.pulseAnimation = function () {
        createjs.Tween.get(r).to({
            scaleX: .9 * e,
            scaleY: .9 * e
        }, 850, createjs.Ease.quadOut).to({
            scaleX: e,
            scaleY: e
        }, 650, createjs.Ease.quadIn).call(function () {
            p.pulseAnimation()
        })
    };
    this.trembleAnimation = function () {
        createjs.Tween.get(r).to({
            rotation: 10
        }, 75, createjs.Ease.quadOut).to({
            rotation: -10
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).call(function () {
            p.trembleAnimation()
        })
    };
    this.removeAnimation = function () {
        r.scale = e;
        r.rotation = 0;
        createjs.Tween.removeTweens(r)
    };
    this.setPosition = function (h, t) {
        r.x = h;
        r.y = t
    };
    this.setX = function (h) {
        r.x = h
    };
    this.setY = function (h) {
        r.y = h
    };
    this.setImage = function (h) {
        r.image = h
    };
    this.getButtonImage = function () {
        return r
    };
    this.getX = function () {
        return r.x
    };
    this.getY = function () {
        return r.y
    };
    var p = this;
    this._init(a, b, c, f);
    return this
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function () {
        if (this._bFitText) {
            for (var a = this._iFontSize; (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a); );
            this._iFontSize = a
        }
    },
    __verticalAlign: function () {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
            (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function () {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
        case "middle":
            this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function (a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(0, 0, this._iWidth, this._iHeight), this._oDebugShape.x = this._x, this._oDebugShape.y = this._y, this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a, this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
        case "center":
            this._oText.x = this._x + this._iWidth / 2;
            break;
        case "left":
            this._oText.x = this._x + this._iPaddingH;
            break;
        case "right":
            this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function (a) {
        this._bVerticalAlign = a
    },
    setOutline: function (a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function (a, b, c, f) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, b, c, f))
    },
    setColor: function (a) {
        this._oText.color = a
    },
    setAlpha: function (a) {
        this._oText.alpha = a
    },
    setAlign: function (a) {
        this._oText.textAlign = a
    },
    removeTweens: function () {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function () {
        return this._oText
    },
    getX: function () {
        return this._x
    },
    getY: function () {
        return this._y
    },
    getFontSize: function () {
        return this._iFontSize
    },
    setY: function (a) {
        this._y = a;
        this._oText.y = this._y
    },
    setPos: function (a, b) {
        this._x = a;
        this._y = b;
        this._oText.x = this._x;
        this._oText.y = this._y;
        if (this._bDebug) {
            this._oContainer.removeChild(this._oDebugShape);
            var c = "left" === this._oText.textAlign ? 0 : -this._iWidth;
            this._oDebugShape = new createjs.Shape;
            this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(c, 0, this._iWidth, this._iHeight);
            this._oDebugShape.x = this._x;
            this._oDebugShape.y =
                this._y;
            this._oContainer.addChild(this._oDebugShape)
        }
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    },
    refreshText: function (a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
function CTLText(a, b, c, f, d, e, k, g, n, m, r, p, h, t, x, y, v) {
    this._oContainer = a;
    this._x = b;
    this._y = c;
    this._iWidth = f;
    this._iHeight = d;
    this._bMultiline = y;
    this._iFontSize = e;
    this._szAlign = k;
    this._szColor = g;
    this._szFont = n;
    this._iPaddingH = r;
    this._iPaddingV = p;
    this._bVerticalAlign = x;
    this._bFitText = t;
    this._bDebug = v;
    this._oDebugShape = null;
    this._fLineHeightFactor = m;
    this._oText = null;
    h && this.__createText(h)
}
!function () {
    function a(d) {
        var e = d;
        if (f[e])
            e = f[e];
        else {
            for (var k = e, g, n = [], m = 0; k; ) {
                if (null !== (g = c.text.exec(k)))
                    n.push(g[0]);
                else if (null !== (g = c.modulo.exec(k)))
                    n.push("%");
                else if (null !== (g = c.placeholder.exec(k))) {
                    if (g[2]) {
                        m |= 1;
                        var r = [],
                        p = g[2],
                        h;
                        if (null !== (h = c.key.exec(p)))
                            for (r.push(h[1]); "" !== (p = p.substring(h[0].length)); )
                                if (null !== (h = c.key_access.exec(p)))
                                    r.push(h[1]);
                                else if (null !== (h = c.index_access.exec(p)))
                                    r.push(h[1]);
                                else
                                    throw new SyntaxError("[sprintf] failed to parse named argument key");
                        else
                            throw new SyntaxError("[sprintf] failed to parse named argument key");
                        g[2] = r
                    } else
                        m |= 2;
                    if (3 === m)
                        throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    n.push({
                        placeholder: g[0],
                        param_no: g[1],
                        keys: g[2],
                        sign: g[3],
                        pad_char: g[4],
                        align: g[5],
                        width: g[6],
                        precision: g[7],
                        type: g[8]
                    })
                } else
                    throw new SyntaxError("[sprintf] unexpected placeholder");
                k = k.substring(g[0].length)
            }
            e = f[e] = n
        }
        k = arguments;
        g = 1;
        n = e.length;
        r = "";
        var t,
        x;
        for (p = 0; p < n; p++)
            if ("string" === typeof e[p])
                r += e[p];
            else if ("object" === typeof e[p]) {
                h = e[p];
                if (h.keys)
                    for (m = k[g], t = 0; t < h.keys.length; t++) {
                        if (void 0 == m)
                            throw Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', h.keys[t], h.keys[t - 1]));
                        m = m[h.keys[t]]
                    }
                else
                    m = h.param_no ? k[h.param_no] : k[g++];
                c.not_type.test(h.type) && c.not_primitive.test(h.type) && m instanceof Function && (m = m());
                if (c.numeric_arg.test(h.type) && "number" !== typeof m && isNaN(m))
                    throw new TypeError(a("[sprintf] expecting number but found %T", m));
                c.number.test(h.type) && (x = 0 <= m);
                switch (h.type) {
                case "b":
                    m = parseInt(m, 10).toString(2);
                    break;
                case "c":
                    m = String.fromCharCode(parseInt(m, 10));
                    break;
                case "d":
                case "i":
                    m = parseInt(m, 10);
                    break;
                case "j":
                    m = JSON.stringify(m, null, h.width ? parseInt(h.width) : 0);
                    break;
                case "e":
                    m = h.precision ? parseFloat(m).toExponential(h.precision) : parseFloat(m).toExponential();
                    break;
                case "f":
                    m = h.precision ? parseFloat(m).toFixed(h.precision) : parseFloat(m);
                    break;
                case "g":
                    m = h.precision ? String(Number(m.toPrecision(h.precision))) : parseFloat(m);
                    break;
                case "o":
                    m = (parseInt(m,
                            10) >>> 0).toString(8);
                    break;
                case "s":
                    m = String(m);
                    m = h.precision ? m.substring(0, h.precision) : m;
                    break;
                case "t":
                    m = String(!!m);
                    m = h.precision ? m.substring(0, h.precision) : m;
                    break;
                case "T":
                    m = Object.prototype.toString.call(m).slice(8, -1).toLowerCase();
                    m = h.precision ? m.substring(0, h.precision) : m;
                    break;
                case "u":
                    m = parseInt(m, 10) >>> 0;
                    break;
                case "v":
                    m = m.valueOf();
                    m = h.precision ? m.substring(0, h.precision) : m;
                    break;
                case "x":
                    m = (parseInt(m, 10) >>> 0).toString(16);
                    break;
                case "X":
                    m = (parseInt(m, 10) >>> 0).toString(16).toUpperCase()
                }
                if (c.json.test(h.type))
                    r +=
                    m;
                else {
                    if (!c.number.test(h.type) || x && !h.sign)
                        var y = "";
                    else
                        y = x ? "+" : "-", m = m.toString().replace(c.sign, "");
                    t = h.pad_char ? "0" === h.pad_char ? "0" : h.pad_char.charAt(1) : " ";
                    var v = h.width - (y + m).length;
                    v = h.width ? 0 < v ? t.repeat(v) : "" : "";
                    r += h.align ? y + m + v : "0" === t ? y + v + m : v + y + m
                }
            }
        return r
    }
    function b(d, e) {
        return a.apply(null, [d].concat(e || []))
    }
    var c = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    },
    f = Object.create(null);
    "undefined" !== typeof exports && (exports.sprintf = a, exports.vsprintf = b);
    "undefined" !== typeof window && (window.sprintf = a, window.vsprintf = b, "function" === typeof define && define.amd && define(function () {
            return {
                sprintf: a,
                vsprintf: b
            }
        }))
}
();
function CButLang(a, b, c, f, d, e) {
    var k = f,
    g,
    n,
    m,
    r,
    p,
    h;
    this._init = function (t, x, y, v) {
        g = [];
        n = [];
        h = new createjs.Container;
        h.x = t;
        h.y = x;
        r = h.on("mousedown", this._onPress, this);
        h.on("pressup", this.buttonRelease);
        m = h.on("click", this._onChangeLang, this);
        e.addChild(h);
        t = {};
        for (x = 0; x < y; x++)
            t["lang_" + x] = x;
        t = new createjs.SpriteSheet({
            images: [v],
            frames: {
                width: v.width / y,
                height: v.height
            },
            animations: t
        });
        p = createSprite(t, "lang_" + k, 0, 0, v.width / y, v.height);
        h.addChild(p);
        h.regX = v.width / y / 2;
        h.regY = v.height / 2
    };
    this.unload =
    function () {
        h.off("mousedown", r);
        h.off("pressup", r);
        h.off("click", m)
    };
    this.addEventListener = function (t, x, y) {
        g[t] = x;
        n[t] = y
    };
    this.setPosition = function (t, x) {
        h.x = t;
        h.y = x
    };
    this._onPress = function () {
        h.scale = .9
    };
    this.buttonRelease = function () {
        h.scale = 1;
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(n[ON_MOUSE_UP], "")
    };
    this._onChangeLang = function () {
        h.scale = 1;
        do {
            k++;
            k === c && (k = 0);
            var t = Object.keys(LANG_CODES).find(function (x) {
                return LANG_CODES[x] === k
            })
        } while (void 0 === t);
        p.gotoAndStop("lang_" + k);
        g[ON_SELECT_LANG] && g[ON_SELECT_LANG].call(n[ON_SELECT_LANG],
            k)
    };
    this.getButtonImage = function () {
        return h
    };
    this._init(a, b, c, d)
}
var CANVAS_WIDTH = 1920, CANVAS_HEIGHT = 1080, EDGEBOARD_X = 256, EDGEBOARD_Y = 84, PRIMARY_FONT = "RoundedMplus1c", FPS = 30, FPS_TIME = 1E3 / FPS, DISABLE_SOUND_MOBILE = !1, ENABLE_FULLSCREEN = !0, GAME_PLAYERIO_ID = "four-colors-o2yb5hcxu2o4lkmfuuykw", GAME_NAME = "four_colors", MULTIPLAYER_TEST_LOCAL = !1, COMBINED_PLAYERS_MODE = !1, STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, STATE_SELECT_PLAYERS = 4, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ON_CARD_DEALED = 6, ON_HOME = 7, ON_CHECK =
    8, ON_NEXT = 9, ON_SELECT_LANG = 11, ENABLE_CHECK_ORIENTATION, AD_SHOW_COUNTER, NUM_PLAYERS, STARTING_NUM_CARDS, CARD_WIDTH = 156, CARD_HEIGHT = 242, SOUNDTRACK_VOLUME_IN_GAME = .4, DEBUG_SHOW_CARDS = !1, CARD_SCORE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20, 50, 50], NUM_PENALTY_CARDS = 2, NUM_WILD_CARDS = 3, GAME_SCORE_WIN = 250, BOTTOM = 0, TOP = 1, LEFT = 2, RIGHT = 3, HAND_POS = [];
HAND_POS.num_player_2 = [{
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2 + 350,
        side: BOTTOM
    }, {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2 - 350,
        side: TOP
    }
];
HAND_POS.num_player_3 = [{
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2 + 350,
        side: BOTTOM
    }, {
        x: CANVAS_WIDTH / 2 - 650,
        y: CANVAS_HEIGHT / 2 - 40,
        side: LEFT
    }, {
        x: CANVAS_WIDTH / 2 + 650,
        y: CANVAS_HEIGHT / 2,
        side: RIGHT
    }
];
HAND_POS.num_player_4 = [{
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2 + 350,
        side: BOTTOM
    }, {
        x: CANVAS_WIDTH / 2 - 650,
        y: CANVAS_HEIGHT / 2 - 40,
        side: LEFT
    }, {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT / 2 - 350,
        side: TOP
    }, {
        x: CANVAS_WIDTH / 2 + 650,
        y: CANVAS_HEIGHT / 2 - 40,
        side: RIGHT
    }
];
var FOTOGRAM_COLOR = 52, FOTOGRAM_DRAW_FOUR = 53, ON_COLOR_SELECTED = 0, ACTION_NEXT_TURN = 0, ACTION_USE_CARD = 1, ACTION_ON_SHUFFLECARDS = 2, ACTION_ON_DRAWCARDS = 3, ACTION_ON_UNO_CLICK = 4, ACTION_SELECT_COLOR = 5, ACTION_DRAW_FOUR = 6, ACTION_BLOCK_TURN = 7, ACTION_INVERT_TURN = 8, ACTION_DRAW_TWO_COLORED = 9, EFFECT_SELECT_COLOR = 0, EFFECT_DRAW_FOUR = 1, EFFECT_STOP = 2, EFFECT_INVERT_TURN = 3, EFFECT_DRAW_TWO_COLORED = 4, EFFECT_NORMAL_CARD = 5, ON_APPLY_EFFECT = 0, ON_APPLY_PENALITY = 1, ON_UNO_CLICK = 2, DRAW_TYPE_NORMAL = 0, DRAW_TYPE_PENALITY = 1, DRAW_TYPE_DRAW2_COLORED =
    2, DRAW_TYPE_DRAW4 = 3, NUM_LANGUAGES = 7, LANG_EN = 0, LANG_ES = 1, LANG_FR = 2, LANG_DE = 3, LANG_PT = 4, LANG_IT = 5, LANG_RU = 6, LANG_CODES = {};
LANG_CODES.en = LANG_EN;
LANG_CODES.fr = LANG_FR;
LANG_CODES.it = LANG_IT;
LANG_CODES.ru = LANG_RU;
function CPreloader() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k,
    g,
    n;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    };
    this.unload = function () {
        n.removeAllChildren()
    };
    this._onImagesLoaded = function () {};
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
        var m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(m);
        m = s_oSpriteLibrary.getSprite("200x200");
        k = createBitmap(m);
        k.regX = .5 * m.width;
        k.regY = .5 * m.height;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 180;
        n.addChild(k);
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(k.x - 100, k.y - 100, 200, 200, 10);
        n.addChild(g);
        k.mask = g;
        m = s_oSpriteLibrary.getSprite("progress_bar");
        f = createBitmap(m);
        f.x = CANVAS_WIDTH / 2 -
            m.width / 2;
        f.y = CANVAS_HEIGHT / 2 + 50;
        n.addChild(f);
        a = m.width;
        b = m.height;
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(f.x, f.y, 1, b);
        n.addChild(d);
        f.mask = d;
        c = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 100;
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        n.addChild(c);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500).call(function () {
            createjs.Tween.removeTweens(e);
            n.removeChild(e)
        })
    };
    this.refreshLoader = function (m) {
        c.text = m + "%";
        100 === m && (s_oMain.onRemovePreloader(), c.visible = !1, f.visible = !1);
        d.graphics.clear();
        m = Math.floor(m * a / 100);
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(f.x, f.y, m, b)
    };
    this._init()
}
function CMain(a) {
    var b,
    c = 0,
    f = 0,
    d = STATE_LOADING,
    e,
    k;
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !0;
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = isMobile();
        !1 === s_bMobile && s_oStage.enableMouseOver(FPS);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary =
            new CSpriteLibrary;
        seekAndDestroy() ? e = new CPreloader : window.location.reload()
    };
    this.preloaderReady = function () {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        b = !0
    };
    this.soundLoaded = function () {
        c++;
        e.refreshLoader(Math.floor(c / f * 100))
    };
    this._initSounds = function () {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card_dealing",
            loop: !1,
            volume: 1,
            ingamename: "card_dealing"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "snap",
            loop: !1,
            volume: 1,
            ingamename: "snap"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card",
            loop: !1,
            volume: 1,
            ingamename: "card"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "special_card",
            loop: !1,
            volume: 1,
            ingamename: "special_card"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "change_color",
            loop: !1,
            volume: 1,
            ingamename: "change_color"
        });
        f += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var n = 0; n < s_aSoundsInfo.length; n++)
            this.tryToLoadSound(s_aSoundsInfo[n], !1)
    };
    this.tryToLoadSound = function (n, m) {
        setTimeout(function () {
            s_aSounds[n.ingamename] = new Howl({
                src: [n.path + n.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: n.loop,
                volume: n.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function (r, p) {
                    for (var h =
                            0; h < s_aSoundsInfo.length; h++)
                        if (r === s_aSounds[s_aSoundsInfo[h].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[h], !0);
                            break
                        }
                },
                onplayerror: function (r) {
                    for (var p = 0; p < s_aSoundsInfo.length; p++)
                        if (r === s_aSounds[s_aSoundsInfo[p].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[p].ingamename].once("unlock", function () {
                                s_aSounds[s_aSoundsInfo[p].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[p].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        },
            m ? 200 : 0)
    };
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("credits_panel", "./sprites/credits_panel.png");
        s_oSpriteLibrary.addSprite("select_color_panel", "./sprites/select_color_panel.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("but_exit_big", "./sprites/but_exit_big.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_uno", "./sprites/but_uno.png");
        s_oSpriteLibrary.addSprite("but_p2", "./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_p3", "./sprites/but_p3.png");
        s_oSpriteLibrary.addSprite("but_p4", "./sprites/but_p4.png");
        s_oSpriteLibrary.addSprite("but_red", "./sprites/but_red.png");
        s_oSpriteLibrary.addSprite("but_green", "./sprites/but_green.png");
        s_oSpriteLibrary.addSprite("but_blue", "./sprites/but_blue.png");
        s_oSpriteLibrary.addSprite("but_yellow", "./sprites/but_yellow.png");
        s_oSpriteLibrary.addSprite("stop_turn", "./sprites/stop_turn.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_select_players", "./sprites/bg_select_players.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
        s_oSpriteLibrary.addSprite("line_player", "./sprites/line_players.png");
        s_oSpriteLibrary.addSprite("cards", "./sprites/cards.png");
        s_oSpriteLibrary.addSprite("colors", "./sprites/colors.png");
        s_oSpriteLibrary.addSprite("draw_four_anim", "./sprites/draw_4.png");
        s_oSpriteLibrary.addSprite("draw_two_anim", "./sprites/draw_2.png");
        s_oSpriteLibrary.addSprite("stop_turn_anim", "./sprites/stop_turn.png");
        s_oSpriteLibrary.addSprite("clock_wise_anim", "./sprites/change_clockwise.png");
        s_oSpriteLibrary.addSprite("change_color", "./sprites/change_color.png");
        s_oSpriteLibrary.addSprite("cloud_uno", "./sprites/cloud.png");
        s_oSpriteLibrary.addSprite("finger", "./sprites/finger.png");
        s_oSpriteLibrary.addSprite("shuffle_anim",
            "./sprites/shuffle_anim.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_show", "./sprites/but_show.png");
        s_oSpriteLibrary.addSprite("score_icon", "./sprites/score_icon.png");
        s_oSpriteLibrary.addSprite("info_label", "./sprites/info_label.png");
        s_oSpriteLibrary.addSprite("cup_icon", "./sprites/cup_icon.png");
        s_oSpriteLibrary.addSprite("but_lang", "./sprites/but_lang.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        f += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function () {
        c++;
        e.refreshLoader(Math.floor(c / f * 100))
    };
    this._onAllImagesLoaded = function () {};
    this.onRemovePreloader = function () {
        e.unload();
        s_oSoundtrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function () {
        new CMenu;
        d = STATE_MENU
    };
    this.gotoSelectPlayers = function () {
        new CSelectPlayers;
        d = STATE_SELECT_PLAYERS
    };
    this.gotoGame = function () {
        s_oGame = k = new CGameSingle(g);
        d = STATE_GAME
    };
    this.gotoGameMulti = function (n) {
        NUM_PLAYERS = n;
        s_oGame = k = new CGameMulti(g);
        d = STATE_GAME
    };
    this.gotoGameWithBot = function () {
        NUM_PLAYERS = 2;
        s_oGame = k = new CGameSingleWithBot(g);
        d = STATE_GAME
    };
    this.gotoHelp = function () {
        new CHelp;
        d = STATE_HELP
    };
    this.stopUpdate = function () {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function () {
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function (n) {
        if (!1 !== b) {
            var m = (new Date).getTime();
            s_iTimeElaps = m - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = m;
            1E3 <= s_iCntTime &&
            (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            d === STATE_GAME && k.update();
            s_oStage.update(n)
        }
    };
    s_oMain = this;
    var g = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    STARTING_NUM_CARDS = a.starting_num_cards;
    s_bAudioActive = a.audio_enable_on_startup;
    a = navigator.language.split("-")[0];
    void 0 === LANG_CODES[a] && (a = "en");
    s_iCurLang = LANG_CODES[a];
    refreshLanguage();
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_bFullscreen = !1, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack = null, s_oCanvas, s_bFirstGame = !0, s_aSounds, s_aSoundsInfo, s_oGame, s_iCurLang = LANG_EN;
function CPanelTutorial() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k;
    this.init = function () {
        k = new createjs.Container;
        e = 0;
        a = new createjs.Container;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        b = new createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        b.regX = 398;
        b.regY = 258.5;
        b.alpha = .8;
        a.addChild(b);
        s_oStage.addChild(a);
        c = new CGfxButton(a.getBounds().width / 2 - 50, 0, s_oSpriteLibrary.getSprite("but_arrow"), a);
        c.addEventListener(ON_MOUSE_DOWN, this.onButNext, this);
        var g = s_oSpriteLibrary.getSprite("but_arrow");
        f = new CGfxButton( - (a.getBounds().width /
                    2 - 50), 0, g, a);
        f.addEventListener(ON_MOUSE_DOWN, this.onButBack, this);
        f.getButtonImage().rotation = 180;
        d = new CGfxButton(a.getBounds().width / 2 - 53, a.getBounds().height / 2 - 53, s_oSpriteLibrary.getSprite("but_skip"), a);
        d.addEventListener(ON_MOUSE_DOWN, this.onButSkip, this);
        this.loadPage(e)
    };
    this.loadPage = function (g) {
        switch (g) {
        case 0:
            f.setVisible(!1);
            new CTLText(k, -300, -200, 600, 50, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, TEXT_WELCOME, !0, !0, !0, !1);
            new CTLText(k, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT,
                1.2, 0, 0, sprintf(TEXT_TUTORIAL1, GAME_SCORE_WIN), !0, !0, !0, !1);
            g = new CCard(-215, 0, k, "card_1_7", 0, 0);
            g.setAnimTutorial("tutorial");
            a.addChild(k);
            break;
        case 1:
            f.setVisible(!0);
            new CTLText(k, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_TUTORIAL2, CARD_SCORE[12]), !0, !0, !0, !1);
            g = new CCard(-215, 0, k, "card_0_12", 0, 0);
            g.setAnimTutorial("draw2tutorial");
            break;
        case 2:
            new CTLText(k, -80, -105, 300, 210, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_TUTORIAL3, CARD_SCORE[10]), !0, !0, !0, !1);
            g = new CCard(-215, 0, k, "card_1_7", 0, 0);
            g.setAnimTutorial("stopTurnTutorial");
            break;
        case 3:
            new CTLText(k, -80, -105, 300, 210, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_TUTORIAL4, CARD_SCORE[11]), !0, !0, !0, !1);
            g = new CCard(-215, 0, k, "card_1_7", 0, 0);
            g.setAnimTutorial("changeClockWiseTutorial");
            break;
        case 4:
            new CTLText(k, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_TUTORIAL5, CARD_SCORE[13]), !0, !0, !0, !1);
            g = new CCard(-215, 0, k, FOTOGRAM_COLOR, 0, 0);
            g.instantShow();
            break;
        case 5:
            c.setVisible(!0);
            new CTLText(k, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_TUTORIAL6, CARD_SCORE[14]), !0, !0, !0, !1);
            g = new CCard(-215, 0, k, FOTOGRAM_DRAW_FOUR, 0, 0);
            g.instantShow();
            break;
        case 6:
            c.setVisible(!1),
            new CTLText(k, -80, -120, 300, 240, 50, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_TUTORIAL7, NUM_PENALTY_CARDS), !0, !0, !0, !1),
            g = new createBitmap(s_oSpriteLibrary.getSprite("but_uno")),
            g.regX = 50,
            g.regY = 50.5,
            g.x = -215,
            g.scaleX = 1.5,
            g.scaleY = 1.5,
            k.addChild(g)
        }
    };
    this.onButNext = function () {
        e++;
        k.removeAllChildren();
        this.loadPage(e)
    };
    this.onButBack = function () {
        e--;
        k.removeAllChildren();
        this.loadPage(e)
    };
    this.onButSkip = function () {
        s_oStage.removeChild(a);
        s_oGame._startGame()
    };
    this.init()
}
function CTurnManager() {
    var a,
    b,
    c,
    f,
    d;
    this.init = function () {
        a = !0;
        for (var e = [], k = 0; k < NUM_PLAYERS; k++)
            e.push(k);
        d = new CircularList(e);
        f = d.current();
        c = d.current();
        b = d.getNext();
        s_oTurnManager = this
    };
    this.changeClockWise = function () {
        a = !0 === a ? !1 : !0
    };
    this.nextTurn = function () {
        !0 === a ? (d.next(), c = d.current(), b = d.getNext()) : (d.prev(), c = d.current(), b = d.getPrev())
    };
    this.prevTurn = function () {
        !0 === a ? (d.prev(), c = d.current(), b = d.getNext()) : (d.next(), c = d.current(), b = d.getPrev())
    };
    this.setTurn = function (e) {
        d.setCurrent(e);
        c = d.current();
        b = !0 === a ? d.getNext() : d.getPrev()
    };
    this.setFirstPlayerToBegin = function () {
        do
            f++, f === NUM_PLAYERS && (f = 0);
        while (null === d.setCurrent(f));
        this.setTurn(f)
    };
    this.getFirstPlayerToBegin = function () {
        return f
    };
    this.resetClockWise = function () {
        a = !0
    };
    this.resetFirstPlayer = function () {
        f = -1
    };
    this.getTurn = function () {
        return c
    };
    this.getNextPlayer = function () {
        return b
    };
    this.getClockWise = function () {
        return a
    };
    this.removePlayer = function (e) {
        e === c ? (a ? this.prevTurn() : this.nextTurn(), d.removeElement(e)) : (d.removeElement(e),
            d.setCurrent(c))
    };
    this.init()
}
s_oTurnManager = null;
function CAnimation() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k;
    this.init = function () {
        e = !1;
        var g = s_oSpriteLibrary.getSprite("draw_four_anim");
        g = {
            images: [g],
            frames: {
                width: 292,
                height: 290,
                regX: 146,
                regY: 145
            },
            animations: {
                anim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    next: "stop",
                    speed: .8
                },
                reverse: {
                    frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                    next: [0],
                    speed: .8
                },
                stop: [13]
            }
        };
        g = new createjs.SpriteSheet(g);
        a = new createjs.Sprite(g, 0);
        g = s_oSpriteLibrary.getSprite("draw_two_anim");
        g = {
            images: [g],
            frames: {
                width: 292,
                height: 322,
                regX: 146,
                regY: 161
            },
            animations: {
                anim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    next: "stop",
                    speed: .8
                },
                reverse: {
                    frames: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                    next: [0],
                    speed: .8
                },
                stop: [13]
            }
        };
        g = new createjs.SpriteSheet(g);
        b = new createjs.Sprite(g, 0);
        g = s_oSpriteLibrary.getSprite("stop_turn_anim");
        c = new createBitmap(g, 292, 300);
        g = s_oSpriteLibrary.getSprite("clock_wise_anim");
        f = new createBitmap(g, 292, 300);
        g = s_oSpriteLibrary.getSprite("change_color");
        g = {
            images: [g],
            frames: {
                width: 328,
                height: 315,
                regX: 164,
                regY: 157.5
            },
            animations: {
                anim: {
                    frames: [0,
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    next: "anim",
                    speed: .8
                },
                stop: [16],
                color_0: {
                    frames: [0, 1, 2, 3, 4, 5, 6],
                    speed: .8
                },
                color_1: {
                    frames: [0, 1, 2],
                    speed: .8
                },
                color_2: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    speed: .8
                },
                color_3: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    speed: .8
                }
            }
        };
        g = new createjs.SpriteSheet(g);
        d = new createjs.Sprite(g, 0);
        g = s_oSpriteLibrary.getSprite("shuffle_anim");
        g = {
            images: [g],
            frames: {
                width: 403,
                height: 386,
                regX: 201.5,
                regY: 193
            },
            animations: {
                anim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    next: "anim"
                },
                idle: [17]
            }
        };
        g = new createjs.SpriteSheet(g);
        k = new createjs.Sprite(g, "idle")
    };
    this.drawFourAnim = function (g, n, m, r) {
        a.alpha = 0;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        a.scaleX = .01;
        a.scaleY = .01;
        s_oStage.addChild(a);
        a.stop();
        playSound("special_card", .5, !1);
        (new createjs.Tween.get(a)).to({
            alpha: 1,
            scaleX: 1.4,
            scaleY: 1.4
        }, 200, createjs.Ease.cubicOut).wait(200).call(function () {
            a.gotoAndPlay("anim")
        }).wait(1E3).call(function () {
            a.gotoAndPlay("reverse")
        }).wait(200).to({
            alpha: 0,
            scaleX: .01,
            scaleY: .01
        }, 200,
            createjs.Ease.cubicIn).call(function () {
            s_oStage.removeChild(a);
            s_oGame.drawCardsTween(g, n, m, r)
        })
    };
    this.drawTwoAnim = function (g, n, m, r) {
        b.alpha = 0;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.scaleX = .01;
        b.scaleY = .01;
        s_oStage.addChild(b);
        b.stop();
        playSound("special_card", .5, !1);
        (new createjs.Tween.get(b)).to({
            alpha: 1,
            scaleX: 1.4,
            scaleY: 1.4
        }, 200, createjs.Ease.cubicOut).wait(200).call(function () {
            b.gotoAndPlay("anim");
            setVolume("special_card", .2)
        }).wait(1E3).call(function () {
            b.gotoAndPlay("reverse");
            setVolume("special_card",
                .1)
        }).wait(200).to({
            alpha: 0,
            scaleX: .01,
            scaleY: .01
        }, 200, createjs.Ease.cubicIn).call(function () {
            s_oStage.removeChild(b);
            s_oGame.drawCardsTween(g, n, m, r)
        })
    };
    this.stopTurn = function () {
        return new Promise(function (g, n) {
            c.alpha = 0;
            c.regX = 146;
            c.regY = 150;
            c.x = CANVAS_WIDTH / 2;
            c.y = CANVAS_HEIGHT / 2;
            c.scaleX = .01;
            c.scaleY = .01;
            s_oStage.addChild(c);
            playSound("game_over", 1, !1);
            (new createjs.Tween.get(c)).to({
                alpha: 1,
                scaleX: 2,
                scaleY: 2
            }, 200, createjs.Ease.cubicOut).to({
                scaleX: 1.6,
                scaleY: 1.6
            }, 200).to({
                scaleX: 2,
                scaleY: 2
            }, 200).to({
                scaleX: 1.6,
                scaleY: 1.6
            }, 200).to({
                scaleX: 2,
                scaleY: 2
            }, 200).to({
                alpha: 0,
                scaleX: .01,
                scaleY: .01
            }, 200, createjs.Ease.cubicIn).call(function () {
                s_oStage.removeChild(c);
                g()
            })
        })
    };
    this.changeClockWise = function (g) {
        return new Promise(function (n, m) {
            f.alpha = 0;
            f.rotation = 0;
            f.regX = 146;
            f.regY = 150;
            f.x = CANVAS_WIDTH / 2;
            f.y = CANVAS_HEIGHT / 2;
            f.scaleX = .01;
            f.scaleY = .01;
            s_oStage.addChild(f);
            playSound("special_card", .5, !1);
            !1 === g ? (new createjs.Tween.get(f)).to({
                alpha: 1,
                scaleX: 2,
                scaleY: 2
            }, 200, createjs.Ease.cubicOut).to({
                rotation: 360
            }, 500).wait(500).to({
                rotation: -360
            },
                500).wait(500).to({
                alpha: 0,
                scaleX: .01,
                scaleY: .01
            }, 200, createjs.Ease.cubicIn).call(function () {
                s_oStage.removeChild(f);
                n()
            }) : (new createjs.Tween.get(f)).to({
                alpha: 1,
                scaleX: 2,
                scaleY: 2
            }, 200, createjs.Ease.cubicOut).to({
                rotation: -360
            }, 500).wait(500).to({
                rotation: 360
            }, 500).wait(500).to({
                alpha: 0,
                scaleX: .01,
                scaleY: .01
            }, 200, createjs.Ease.cubicIn).call(function () {
                s_oStage.removeChild(f);
                n()
            })
        })
    };
    this.changeColor = function (g) {
        return new Promise(function (n, m) {
            d.alpha = 0;
            d.x = CANVAS_WIDTH / 2;
            d.y = CANVAS_HEIGHT / 2;
            d.scaleX =
                .01;
            d.scaleY = .01;
            s_oStage.addChild(d);
            d.stop();
            playSound("change_color", .5, !1);
            (new createjs.Tween.get(d)).to({
                alpha: 1,
                scaleX: 1.4,
                scaleY: 1.4
            }, 200, createjs.Ease.cubicOut).call(function () {
                d.gotoAndPlay("anim")
            }).wait(1300).call(function () {
                e = !0;
                d.on("animationend", s_oCAnimation.endAnimation, s_oCAnimation, !1, n);
                d.gotoAndStop(16);
                d.gotoAndPlay("color_" + g)
            })
        })
    };
    this.endAnimation = function (g, n) {
        !0 === e && (stopSound("change_color"), playSound("special_card", 1, !1), e = !1, d.removeAllEventListeners(), d.stop(), (new createjs.Tween.get(d)).to({
                scaleX: 2,
                scaleY: 2
            }, 250).to({
                scaleX: 1.4,
                scaleY: 1.4
            }, 250).to({
                scaleX: 2,
                scaleY: 2
            }, 250).to({
                scaleX: 1.4,
                scaleY: 1.4
            }, 250).to({
                alpha: 0,
                scaleX: .1,
                scaleY: .1
            }, 200, createjs.Ease.cubicIn).call(function () {
                s_oStage.removeChild(d);
                d.gotoAndStop(0);
                n()
            }))
    };
    this.shuffleAnimation = function () {
        return new Promise(function (g, n) {
            k.alpha = 0;
            k.x = CANVAS_WIDTH / 2;
            k.y = CANVAS_HEIGHT / 2;
            k.scaleX = .01;
            k.scaleY = .01;
            s_oStage.addChild(k);
            k.stop();
            (new createjs.Tween.get(k)).to({
                alpha: 1,
                scaleX: 1.6,
                scaleY: 1.6
            }, 400, createjs.Ease.cubicOut).call(function () {
                k.gotoAndPlay("anim");
                playSound("card_dealing", 1, !0)
            }).wait(1700).call(function () {
                k.gotoAndStop("idle");
                stopSound("change_color")
            }).to({
                alpha: 0,
                scaleX: .01,
                scaleY: .01
            }, 300, createjs.Ease.cubicIn).call(function () {
                s_oStage.removeChild(k);
                stopSound("card_dealing");
                g()
            })
        })
    };
    this.init();
    s_oCAnimation = this
}
s_oCAnimation = null;
function CMenu() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k,
    g,
    n,
    m,
    r,
    p,
    h,
    t,
    x,
    y = null,
    v = null;
    this._init = function () {
        n = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(n);
        var z = s_oSpriteLibrary.getSprite("but_play");
        m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 250, z, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButLocalRelease, this);
        z = s_oSpriteLibrary.getSprite("but_info");
        k = z.width / 2 + 10;
        g = z.height / 2 + 10;
        var l = s_oSpriteLibrary.getSprite("but_lang");
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (z = s_oSpriteLibrary.getSprite("audio_icon"), d = CANVAS_WIDTH - z.height / 2 - 10, e = z.height / 2 + 10, p = new CToggle(d, e, z, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), a = d - l.width / NUM_LANGUAGES - 10, b = e - 6) : (a = CANVAS_WIDTH - z.width / 4 - 10, b = z.height / 2 + 10);
        t = new CButLang(a, b, NUM_LANGUAGES, s_iCurLang, l, s_oStage);
        t.addEventListener(ON_SELECT_LANG, this._onChangeLang, this);
        z = window.document;
        l =
            z.documentElement;
        y = l.requestFullscreen || l.mozRequestFullScreen || l.webkitRequestFullScreen || l.msRequestFullscreen;
        v = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (y = !1);
        y && screenfull.isEnabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), c = k, f = g, x = new CToggle(c, f, z, s_bFullscreen, s_oStage), 
        x.addEventListener(ON_MOUSE_UP, () => {
            window.open("index.html", "_blank")
        }, this));
        z = s_oSpriteLibrary.getSprite("logo_menu");
        l = createBitmap(z);
        l.regX = z.width / 2;
        l.regY =
            z.height / 2;
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2 - 100;
        l.scale = .1;
        s_oStage.addChild(l);
        r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(r);
        createjs.Tween.get(r).to({
            alpha: 0
        }, 1E3, createjs.Ease.cubicOut).call(function () {
            r.visible = !1
        });
        createjs.Tween.get(l).to({
            scale: 1
        }, 1E3, createjs.Ease.elasticOut);
        null !== s_oSoundtrack && setVolume("soundtrack", 1);
        this.refreshButtonPos()
    };
    this.unload = function () {
        m.unload();
        r.visible = !1;
        t.unload();
        if (!1 ===
            DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            p.unload(), p = null;
        y && screenfull.isEnabled && x.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.refreshButtonPos = function () {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(d - s_iOffsetX, s_iOffsetY + e);
        y && screenfull.isEnabled && x.setPosition(c + s_iOffsetX, f + s_iOffsetY);
        t.setPosition(a - s_iOffsetX, b + s_iOffsetY)
    };
    this.resetFullscreenBut = function () {
        y && screenfull.isEnabled && x.setActive(s_bFullscreen)
    };
    this._onFullscreen =
    function () {
        s_bFullscreen ? v.call(window.document) : y.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function () {
        new CCreditsPanel
    };
    this._onChangeLang = function (z) {
        s_iCurLang = z;
        refreshLanguage()
    };
    this._onButLocalRelease = function () {
        s_oMenu.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoSelectPlayers()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function CSelectPlayers() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k,
    g,
    n,
    m,
    r,
    p,
    h,
    t,
    x = null,
    y = null,
    v,
    z;
    this._init = function () {
        var l = createBitmap(s_oSpriteLibrary.getSprite("bg_select_players"));
        s_oStage.addChild(l);
        l = s_oSpriteLibrary.getSprite("but_p2");
        n = new CGfxButton(CANVAS_WIDTH / 2 - 450, CANVAS_HEIGHT - 500, l, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onButP2, this);
        l = s_oSpriteLibrary.getSprite("but_p3");
        m = new CGfxButton(CANVAS_WIDTH / 2 + 10, CANVAS_HEIGHT - 500, l, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButP3, this);
        l = s_oSpriteLibrary.getSprite("but_p4");
        r = new CGfxButton(CANVAS_WIDTH / 2 + 450, CANVAS_HEIGHT - 500, l, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onButP4, this);
        h = new CTLText(s_oStage, CANVAS_WIDTH / 2 - 500, 300, 1E3, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SELECT_PLAYERS, !0, !0, !0, !1);
        l = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - l.height / 2 - 10;
        f = l.height / 2 + 10;
        z = new CGfxButton(c, f, l, s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onExit, this);
        k = CANVAS_WIDTH - l.width / 2 - 100;
        g = l.height / 2 + 10;
        var E = s_oSpriteLibrary.getSprite("but_lang");
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (l = s_oSpriteLibrary.getSprite("audio_icon"), v = new CToggle(k, g, l, s_bAudioActive, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), a = k - E.width / NUM_LANGUAGES - 10, b = g - 6) : (a = CANVAS_WIDTH - l.width / 4 - 10, b = l.height / 2 + 10);
        p = new CButLang(a, b, NUM_LANGUAGES, s_iCurLang, E, s_oStage);
        p.addEventListener(ON_SELECT_LANG, this._onChangeLang, this);
        l = window.document;
        E = l.documentElement;
        x = E.requestFullscreen || E.mozRequestFullScreen || E.webkitRequestFullScreen || E.msRequestFullscreen;
        y = l.exitFullscreen || l.mozCancelFullScreen || l.webkitExitFullscreen || l.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (x = !1);
        x && screenfull.isEnabled && (l = s_oSpriteLibrary.getSprite("but_fullscreen"), d = l.width / 4 + 10, e = l.height / 2 + 10, t = new CToggle(d, e, l, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        this.refreshButtonPos()
    };
    this._onButP2 = function () {
        NUM_PLAYERS = 2;
        this.unload();
        $(s_oMain).trigger("select_players", 2);
        s_oMain.gotoGame()
    };
    this._onButP3 = function () {
        NUM_PLAYERS = 3;
        this.unload();
        $(s_oMain).trigger("select_players", 3);
        s_oMain.gotoGame()
    };
    this._onButP4 = function () {
        NUM_PLAYERS = 4;
        this.unload();
        $(s_oMain).trigger("select_players", 4);
        s_oMain.gotoGame()
    };
    this.unload = function () {
        p.unload();
        z.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            v.unload(), v = null;
        x && screenfull.isEnabled && t.unload();
        n.unload();
        m.unload();
        r.unload();
        s_oStage.removeAllChildren();
        s_oSelectPlayers = null
    };
    this.refreshButtonPos = function () {
        z.setPosition(c - s_iOffsetX, s_iOffsetY + f);
        !1 !== DISABLE_SOUND_MOBILE &&
        !1 !== s_bMobile || v.setPosition(k - s_iOffsetX, s_iOffsetY + g);
        x && screenfull.isEnabled && t.setPosition(d + s_iOffsetX, e + s_iOffsetY);
        p.setPosition(a - s_iOffsetX, b + s_iOffsetY)
    };
    this.resetFullscreenBut = function () {
        x && screenfull.isEnabled && t.setActive(s_bFullscreen)
    };
    this._onFullscreen = function () {
        s_bFullscreen ? y.call(window.document) : x.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function () {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onChangeLang = function (l) {
        s_iCurLang = l;
        refreshLanguage();
        h.refreshText(TEXT_SELECT_PLAYERS)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    s_oSelectPlayers = this;
    this._init()
}
var s_oSelectPlayers = null;
function CCard(a, b, c, f, d, e, k, g) {
    var n,
    m,
    r,
    p,
    h,
    t,
    x,
    y,
    v,
    z,
    l,
    E,
    F;
    this._init = function (u, D, A, K, L, M, Q, U) {
        E = A;
        p = L;
        h = M;
        r = K;
        this.setEffect(K);
        n = !1;
        F = Q;
        m = 0 === h || 2 === h ? "red" : "black";
        x = 0;
        U && (x = U);
        l = new createjs.Container;
        l.x = u;
        l.y = D;
        l.rotation = x;
        E.addChild(l);
        u = {
            images: [s_oSpriteLibrary.getSprite("cards")],
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: {
                card_0_0: [0],
                card_0_1: [1],
                card_0_2: [2],
                card_0_3: [3],
                card_0_4: [4],
                card_0_5: [5],
                card_0_6: [6],
                card_0_7: [7],
                card_0_8: [8],
                card_0_9: [9],
                card_0_10: [10],
                card_0_11: [11],
                card_0_12: [12],
                card_1_0: [13],
                card_1_1: [14],
                card_1_2: [15],
                card_1_3: [16],
                card_1_4: [17],
                card_1_5: [18],
                card_1_6: [19],
                card_1_7: [20],
                card_1_8: [21],
                card_1_9: [22],
                card_1_10: [23],
                card_1_11: [24],
                card_1_12: [25],
                card_2_0: [26],
                card_2_1: [27],
                card_2_2: [28],
                card_2_3: [29],
                card_2_4: [30],
                card_2_5: [31],
                card_2_6: [32],
                card_2_7: [33],
                card_2_8: [34],
                card_2_9: [35],
                card_2_10: [36],
                card_2_11: [37],
                card_2_12: [38],
                card_3_0: [39],
                card_3_1: [40],
                card_3_2: [41],
                card_3_3: [42],
                card_3_4: [43],
                card_3_5: [44],
                card_3_6: [45],
                card_3_7: [46],
                card_3_8: [47],
                card_3_9: [48],
                card_3_10: [49],
                card_3_11: [50],
                card_3_12: [51],
                color: [52],
                draw_four: [53],
                back: [54],
                tutorial: {
                    frames: [20, 5, 47, 31],
                    speed: .1
                },
                draw2tutorial: {
                    frames: [12, 25, 38, 51],
                    speed: .1
                },
                stopTurnTutorial: {
                    frames: [10, 23, 36, 49],
                    speed: .1
                },
                changeClockWiseTutorial: {
                    frames: [11, 24, 37, 50],
                    speed: .1
                }
            }
        };
        u = new createjs.SpriteSheet(u);
        z = createSprite(u, "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        z.stop();
        l.addChild(z);
        z.on("mousedown", this._mouseDown);
        y = [];
        v = []
    };
    this.getCardSprite = function () {
        return z
    };
    this.setEffect = function (u) {
        switch (u) {
        case 52:
            t = EFFECT_SELECT_COLOR;
            break;
        case 53:
            t = EFFECT_DRAW_FOUR;
            break;
        default:
            switch (p) {
            case 10:
                t = EFFECT_STOP;
                break;
            case 11:
                t = EFFECT_INVERT_TURN;
                break;
            case 12:
                t = EFFECT_DRAW_TWO_COLORED;
                break;
            default:
                t = u === FOTOGRAM_COLOR ? EFFECT_SELECT_COLOR : u === FOTOGRAM_DRAW_FOUR ? EFFECT_DRAW_FOUR : EFFECT_NORMAL_CARD
            }
        }
    };
    this.setAnimTutorial = function (u) {
        z.gotoAndPlay(u)
    };
    this.unload = function () {
        z.off("mousedown", this._mouseDown);
        E.removeChild(l)
    };
    this.unloadEvent = function () {
        z.off("mousedown", this._mouseDown)
    };
    this.saveInfo = function () {
        return {
            szFotogram: r,
            iRank: p,
            iSuit: h,
            bValue: !0
        }
    };
    this.instantShow = function () {
        z.gotoAndStop(r)
    };
    this.setValue = function () {
        z.gotoAndStop(r);
        playSound("card", 1, !1);
        createjs.Tween.get(l).to({
            scaleX: 1
        }, 200)
    };
    this.setActive = function (u) {
        u ? l.addChild(void 0) : l.removeChild(void 0)
    };
    this.setVisible = function (u) {
        l.visible = !0 === u ? !0 : !1
    };
    this.onSetTurned = function () {
        n = !0
    };
    this.offSetTurned = function () {
        n = !1
    };
    this.moveCard = function (u,
        D, A, K, L) {
        var M = this;
        createjs.Tween.get(l).wait(L).to({
            x: u,
            y: D,
            rotation: A
        }, K, createjs.Ease.linear).call(function () {
            s_oGame.playedCard(M)
        })
    };
    this.moveCardFirstHand = function (u, D, A, K, L) {
        var M = this;
        createjs.Tween.get(l).wait(L).to({
            x: u,
            y: D,
            rotation: A
        }, K, createjs.Ease.cubicOut).call(function () {
            playSound("card_dealing", 1, !1);
            s_oGame.onCardDealed(M)
        })
    };
    this.moveFirstLastCard = function (u, D, A, K) {
        var L = this;
        createjs.Tween.get(l).wait(K).to({
            x: u,
            y: D
        }, A, createjs.Ease.linear).call(function () {
            s_oGame.onFirstLastCardDealed(L)
        })
    };
    this.dispose = function (u, D, A, K, L) {
        return new Promise(function (M, Q) {
            createjs.Tween.get(l).wait(L).to({
                x: u,
                y: D,
                rotation: A
            }, K, createjs.Ease.linear).call(function () {
                M()
            })
        })
    };
    this.setOnTop = function () {
        E.addChildAt(l, E.numChildren)
    };
    this.stackAndDeactive = function (u, D, A) {
        createjs.Tween.get(l).to({
            x: u,
            y: D
        }, A, createjs.Ease.cubicOut)
    };
    this._mouseDown = function (u) {
        !1 !== n && s_oGame.playCard(w, u)
    };
    this.showCard = function (u, D) {
        var A = this;
        createjs.Tween.get(l).wait(u).to({
            scaleX: .1
        }, 200).call(function () {
            A.setValue(D)
        }).call(function () {})
    };
    this.showCardNoInput = function (u, D) {
        var A = this;
        createjs.Tween.get(l).wait(u).to({
            scaleX: .1
        }, 200).call(function () {
            A.setValue(D)
        }).call(function () {
            n = !1
        })
    };
    this.hideCard = function () {
        var u = this;
        createjs.Tween.get(l).to({
            scaleX: .1
        }, 200).call(function () {
            u.setBack()
        })
    };
    this.jumpAnim = function () {
        var u = 1E3 * Math.random(),
        D = 1E3 * Math.random();
        createjs.Tween.get(l, {
            loop: !0
        }).wait(u).to({
            y: b - 20
        }, 200, createjs.Ease.cubicOut).to({
            y: b
        }, 200, createjs.Ease.cubicIn).wait(D)
    };
    this.stopAllAnim = function () {
        l.y = b;
        createjs.Tween.removeTweens(l)
    };
    this.setPos = function (u, D) {
        l.x = u;
        l.y = D
    };
    this.setBack = function () {
        n = !1;
        z.gotoAndStop("back");
        var u = this;
        createjs.Tween.get(l).to({
            scaleX: 1
        }, 200).call(function () {
            u.cardHidden()
        })
    };
    this.cardHidden = function () {
        y[ON_CARD_HIDE] && y[ON_CARD_HIDE].call(v[ON_CARD_HIDE], this)
    };
    this.getEffect = function () {
        return t
    };
    this.getRank = function () {
        return p
    };
    this.getSuit = function () {
        return h
    };
    this.getColor = function () {
        return m
    };
    this.getFotogram = function () {
        return r
    };
    this.getPos = function () {
        return {
            x: l.x,
            y: l.y
        }
    };
    this.getSprite = function () {
        return l
    };
    this.getLogicRect = function () {
        return new createjs.Rectangle(l.x - CARD_WIDTH / 2, l.y - CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT)
    };
    this.getTurned = function () {
        return n
    };
    this.getGlobalToLocal = function (u, D) {
        return z.globalToLocal(u / s_oStage.scaleX, D / s_oStage.scaleY)
    };
    this.getUniqueID = function () {
        return F
    };
    this.getRot = function () {
        return l.rotation
    };
    var w = this;
    this._init(a, b, c, f, d, e, k, g)
}
function CDeckDisplayer(a, b, c, f) {
    var d,
    e,
    k,
    g,
    n,
    m,
    r;
    this._init = function () {
        n = c;
        d = [];
        e = new createjs.Container;
        e.x = a;
        e.y = b;
        e.on("mousedown", this.onDraw, this);
        n.addChild(e);
        if (f) {
            g = new createjs.Container;
            g.x = a;
            g.y = b;
            g.visible = !1;
            n.addChild(g);
            var p = s_oSpriteLibrary.getSprite("finger"),
            h = p.width / 5,
            t = p.height / 2;
            p = new createjs.SpriteSheet({
                images: [p],
                frames: {
                    width: h,
                    height: t,
                    regX: h / 2,
                    regY: t / 2
                },
                animations: {
                    idle: {
                        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        speed: .9
                    }
                }
            });
            m = createSprite(p, "idle", h / 2, t / 2, h, t);
            m.scaleX = .5;
            m.scaleY =
                .5;
            m.x = -100;
            m.y = -100;
            g.addChild(m)
        }
        k = !1
    };
    this.initializeDeck = function () {
        for (var p, h = 0, t, x = 0; 4 > x; x++)
            for (var y = 0; 10 > y; y++)
                p = y, t = 13 * x + p, d.push(new CCard(0, 0, e, t, p, x, h++, 0));
        for (x = 0; 4 > x; x++)
            for (y = 0; 9 > y; y++)
                p = y + 1, t = 13 * x + p, d.push(new CCard(0, 0, e, t, p, x, h++, 0));
        for (x = 0; 4 > x; x++)
            for (y = 0; 2 > y; y++)
                d.push(new CCard(0, 0, e, 13 * x + 10, 10, x, h++, 0)), d.push(new CCard(0, 0, e, 13 * x + 11, 11, x, h++, 0)), d.push(new CCard(0, 0, e, 13 * x + 12, 12, x, h++, 0));
        for (x = 0; 4 > x; x++)
            d.push(new CCard(0, 0, e, FOTOGRAM_COLOR, 13, 4, h++, 0)), d.push(new CCard(0,
                    0, e, FOTOGRAM_DRAW_FOUR, 14, 4, h++, 0))
    };
    this.initializeFromData = function (p) {
        for (var h, t, x = 0, y = 0; y < p.length; y++) {
            switch (p[y]) {
            case FOTOGRAM_COLOR:
                h = 13;
                t = 4;
                break;
            case FOTOGRAM_DRAW_FOUR:
                h = 14;
                t = 4;
                break;
            default:
                h = p[y] % 13,
                t = Math.floor(p[y] / 13)
            }
            d.push(new CCard(0, 0, e, p[y], h, t, x++))
        }
    };
    this.shuffle = function () {
        var p;
        for (p = d.length; p; p--) {
            var h = Math.floor(Math.random() * p);
            var t = d[p - 1];
            d[p - 1] = d[h];
            d[h] = t
        }
    };
    this.clearCards = function () {
        for (var p = 0; p < d.length; p++)
            d[p].unload();
        d = []
    };
    this.moveContainer = function (p, h,
        t, x) {
        createjs.Tween.get(e).wait(x).to({
            x: p,
            y: h
        }, t, createjs.Ease.linear)
    };
    this.takeFirstLastCard = function () {
        return d.pop()
    };
    this.takeLastCard = function () {
        return d.pop()
    };
    this.getLastCard = function () {
        return d[d.length - 1]
    };
    this.getCardByIndex = function (p) {
        return d[p]
    };
    this.removeCardByIndex = function (p) {
        return d.splice(p, 1)
    };
    this.pushCard = function (p) {
        d.push(p)
    };
    this.getContainer = function () {
        return e
    };
    this.getLength = function () {
        return d.length
    };
    this.onDraw = function () {
        if (!1 === k)
            s_oGame.onDraw()
    };
    this.disableInputUsedCards =
    function () {
        d[d.length - 1].offSetTurned()
    };
    this.disableInputDraw = function () {
        k = !0
    };
    this.enableInputDraw = function () {
        k = !1
    };
    this.getIndexChild = function () {
        return s_oStage.getChildIndex(e)
    };
    this.setChildDepth = function (p) {
        s_oStage.addChildAt(e, p)
    };
    this.getGlobalPosition = function () {
        return {
            x: e.x,
            y: e.y
        }
    };
    this.setOnTop = function () {
        n.addChildAt(e, n.numChildren)
    };
    this.setHelp = function () {
        n.setChildIndex(g, n.numChildren - 1);
        this.setPointer(!0);
        r = setTimeout(function () {
            g.visible = !0
        }, 5E3)
    };
    this.hideHelp = function () {
        clearTimeout(r);
        g.visible = !1;
        this.setPointer(!1)
    };
    this.setPointer = function (p) {
        e.cursor = p ? "pointer" : "default"
    };
    this.addNewCardUnderTheDeck = function (p) {
        for (var h = 0; h < p.length; h++)
            d.push(p[h])
    };
    this.removeAllCardUnderTheDeck = function () {
        for (var p = [], h = 0; h < d.length - 1; h++)
            d[h].unload(), p.push(d.shift()), h--;
        return p
    };
    this._init()
}
function CHandDisplayer(a, b, c, f, d, e, k, g) {
    var n,
    m,
    r,
    p,
    h,
    t,
    x,
    y,
    v,
    z,
    l,
    E,
    F;
    this.init = function () {
        n = !1;
        E = k;
        l = 0;
        F = d;
        h = [];
        t = new createjs.Container;
        z = e;
        z.addChild(t);
        x = new CPlayerInfo(c, f, z, k);
        y = new CInfoLabel(c, f, z);
        y.setVisible(!1);
        var w = {
            images: [s_oSpriteLibrary.getSprite("cloud_uno")],
            frames: {
                width: 261,
                height: 194,
                regX: 130.5,
                regY: 97
            },
            animations: {
                cloud1: [0],
                cloud2: [1]
            }
        };
        w = new createjs.SpriteSheet(w);
        v = new createjs.Sprite(w, "cloud1");
        v.alpha = 0;
        v.scaleX = .1;
        v.scaleY = .1;
        this.setPosition(a, b, c, f, g)
    };
    this.setPosition =
    function (w, u, D, A, K) {
        m = w;
        r = u;
        t.x = D;
        t.y = A;
        p = K;
        y.setPosition(t.x, t.y, p);
        switch (p) {
        case BOTTOM:
            var L = t.x;
            var M = t.y - 140;
            break;
        case TOP:
            m = -w;
            L = t.x;
            M = t.y + 140;
            break;
        case LEFT:
            L = t.x + 140;
            M = t.y;
            y.setPosition(t.x + 20, t.y, p);
            break;
        case RIGHT:
            r = -u,
            L = t.x - 140,
            M = t.y,
            y.setPosition(t.x - 20, t.y, p)
        }
        x.setPosition(L, M, p)
    };
    this.clearCards = function () {
        for (var w = 0; w < h.length; w++)
            h[w].unload();
        h = []
    };
    this.getGlobalPosition = function () {
        for (var w = 0, u = 0, D = 0; D < h.length; D++)
            0 !== m ? w += CARD_WIDTH / 2 : u += CARD_HEIGHT / 2;
        return {
            x: t.x + w,
            y: t.y +
            u
        }
    };
    this.getContainerPos = function () {
        return {
            x: t.x,
            y: t.y
        }
    };
    this.getCardPositionByIndex = function (w) {
        w = h[w].getPos();
        return {
            x: w.x,
            y: w.y
        }
    };
    this.searchIndexCard = function (w) {
        for (var u = 0; u < h.length; u++)
            if (w === h[u])
                return u
    };
    this.removeCardByIndex = function (w) {
        return h.splice(w, 1)
    };
    this.getPosNewCard = function () {
        var w = this.getDynamicOffset(m),
        u = this.getDynamicOffset(r);
        return {
            x: h.length * w,
            y: h.length * u
        }
    };
    this.pushCard = function (w) {
        h.push(w);
        if (0 === r && t.y > CANVAS_HEIGHT / 2)
            h[h.length - 1].getCardSprite().on("mouseover",
                this.onMouseOver)
    };
    this.getContainer = function () {
        return t
    };
    this.getLastCard = function () {
        return h[h.length - 1]
    };
    this.getLength = function () {
        return h.length
    };
    this.centerContainer = function () {
        var w = t.getBounds();
        var u =  - (w.width / 2) + CARD_WIDTH / 2;
        p === TOP && (u = w.width / 2 - CARD_WIDTH / 2);
        var D =  - (w.height / 2) + CARD_WIDTH / 2;
        p === RIGHT && (D = w.height / 2 - CARD_WIDTH / 2);
        0 !== m ? createjs.Tween.get(t).to({
            x: CANVAS_WIDTH / 2 + u
        }, 300, createjs.Ease.linear) : createjs.Tween.get(t).to({
            y: CANVAS_HEIGHT / 2 + D - 40
        }, 300, createjs.Ease.linear)
    };
    this.setOnTop =
    function () {
        z.addChildAt(t, z.numChildren)
    };
    this.setChildDepth = function (w) {
        w > t.s_oStage.numChild - 1 && (w = t.s_oStage.numChild - 1);
        s_oStage.addChildAt(w)
    };
    this.getContainerInfo = function () {
        return t.getBounds()
    };
    this.getCardByIndex = function (w) {
        return h[w]
    };
    this.organizeHand = function (w) {
        var u = this;
        if (0 !== m)
            for (w = 0; w < h.length; w++) {
                var D = this.getDynamicOffset(m);
                D *= w;
                createjs.Tween.get(h[w].getSprite()).to({
                    x: D
                }, 300, createjs.Ease.linear).call(u.centerContainer)
            }
        else
            for (w = 0; w < h.length; w++)
                D = this.getDynamicOffset(r),
                D *= w, createjs.Tween.get(h[w].getSprite()).to({
                    y: D
                }, 300, createjs.Ease.linear).call(function () {
                    u.centerContainer()
                })
    };
    this.getDynamicOffset = function (w) {
        var u = w;
        6 < h.length && (u = linearFunction(h.length, 7, 20, w, .55 * w));
        return u
    };
    this.setOnTurn = function () {
        x.highlight()
    };
    this.setOffTurn = function () {
        x.disable()
    };
    this.checkUno = function () {
        1 === h.length && (this.setOnTop(), 0 !== m ? t.y < CANVAS_HEIGHT / 2 ? (v.gotoAndStop("cloud2"), v.x = CANVAS_WIDTH / 2 - 270, v.y = CANVAS_HEIGHT / 2 - 300) : (v.gotoAndStop("cloud1"), v.x = CANVAS_WIDTH / 2 +
                    300, v.y = CANVAS_HEIGHT / 2 + 100) : t.x < CANVAS_WIDTH / 2 ? (v.gotoAndStop("cloud1"), v.x = CANVAS_WIDTH / 2 - 350, v.y = CANVAS_HEIGHT / 2 - 30) : (v.gotoAndStop("cloud2"), v.x = CANVAS_WIDTH / 2 + 350, v.y = CANVAS_HEIGHT / 2 - 200), s_oStage.addChild(v), (new createjs.Tween.get(v)).to({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 300, createjs.Ease.bounceOut).wait(1500).to({
                scaleX: .1,
                scaleY: .1
            }, 300, createjs.Ease.cubicIn).to({
                alpha: 0
            }, 20).call(function () {
                s_oStage.removeChild(v)
            }))
    };
    this.onMouseOver = function (w) {
        s_bMobile || (w.target.cursor = "pointer")
    };
    this.showAllCards =
    function () {
        for (var w = 0; w < h.length; w++)
            h[w].showCard()
    };
    this.changeName = function (w) {
        E = w;
        x.setName(w)
    };
    this.refreshScore = function () {
        x.setScore(l);
        y.setVisible(!1)
    };
    this.getCardByUniqueID = function (w) {
        for (var u = 0; u < h.length; u++)
            if (h[u].getUniqueID() === w)
                return h[u]
    };
    this.getPlayerID = function () {
        return F
    };
    this.getName = function () {
        return E
    };
    this.getSide = function () {
        return p
    };
    this.getScore = function () {
        return l
    };
    this.setScore = function (w) {
        l = w
    };
    this.showHandScore = function (w) {
        y.setVisible(!0);
        y.setTextScore(w);
        y.setOnTop()
    };
    this.hideMsgBox = function () {
        y.setVisible(!1);
        y.setTextScore("")
    };
    this.calculateHandScore = function () {
        for (var w = 0, u = 0; u < h.length; u++) {
            var D = h[u].getRank();
            w += CARD_SCORE[D]
        }
        return w
    };
    this.getAllCards = function () {
        return h
    };
    this.stopAllAnim = function () {
        for (var w = 0; w < h.length; w++)
            h[w].stopAllAnim()
    };
    this.dispose = function (w, u) {
        var D = this;
        n = !0;
        for (var A = h.length, K = 0; K < h.length; K++)
            h[K].dispose(w, u, 0, 400, 0).then(function () {
                A--;
                0 === A && D.clearCards()
            });
        this.showHandScore(TEXT_PLAYER_QUIT);
        y.stopAnim()
    };
    this.isDisposed = function () {
        return n
    };
    this.init()
}
function CGameBase(a) {
    this._iCounterDraw;
    this._oInterface;
    this._oParent;
    this._oDeck;
    this._aPlayersHand;
    this._oUsedCards;
    this._oTurnManager;
    this._iCurrentColor;
    this._bUNO;
    this._bEndGame;
    this._oAnimation;
    this._iCurPlayer;
    this._iNextPlayer;
    this._oFinger;
    this._oFade;
    this._oDecksContainer;
    this._oHandsContainer;
    this._oCardsContainer;
    this._oAIManager;
    this._oUnoController;
    this._oSummaryPanel;
    this._init()
}
CGameBase.prototype._init = function () {
    this._bEndGame = this._bUNO = !1;
    this._iCounterDraw = 0;
    this._oTurnManager = new CTurnManager;
    this._oAnimation = new CAnimation;
    var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(a);
    this._oUnoController = new CUnoController;
    this._oInterface = new CInterface;
    this._oCardsContainer = new createjs.Container;
    this._oHandsContainer = new createjs.Container;
    this._oPanelContainer = new createjs.Container;
    this._oDecksContainer = new createjs.Container;
    a = [];
    a[0] = TEXT_PLAYER_1;
    a[1] = TEXT_PLAYER_2;
    a[2] = TEXT_PLAYER_3;
    a[3] = TEXT_PLAYER_4;
    this._aPlayersHand = [];
    for (var b = 0; b < NUM_PLAYERS; b++) {
        var c = 0,
        f = 0;
        HAND_POS["num_player_" + NUM_PLAYERS][b].x === CANVAS_WIDTH / 2 ? c = CARD_WIDTH / 2 : f = CARD_HEIGHT / 4;
        this._aPlayersHand[b] = new CHandDisplayer(c, f, HAND_POS["num_player_" + NUM_PLAYERS][b].x, HAND_POS["num_player_" + NUM_PLAYERS][b].y, b, this._oHandsContainer, a[b], HAND_POS["num_player_" + NUM_PLAYERS][b].side)
    }
    this._oCardsContainer.addChild(this._oDecksContainer);
    this._oCardsContainer.addChild(this._oHandsContainer);
    s_oStage.addChild(this._oCardsContainer);
    s_oStage.addChild(this._oPanelContainer);
    this._oSummaryPanel = new CSummaryPanel(this._oPanelContainer);
    this._oSummaryPanel.addEventListener(ON_CHECK, this._onCheck, this);
    this._oMsgBox = new CMsgBox(this._oPanelContainer);
    this._oDeck = new CDeckDisplayer(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, this._oDecksContainer, !0);
    this._oUsedCards = new CDeckDisplayer(CANVAS_WIDTH / 2 + CARD_WIDTH, CANVAS_HEIGHT / 2, this._oDecksContainer, !1);
    this._oUsedCards.disableInputDraw();
    this.setOffTurn();
    this._oAIManager = new CAIManager;
    setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
};
CGameBase.prototype.reset = function () {
    this._iCounterDraw = 0;
    this._oTurnManager.setFirstPlayerToBegin();
    this._oTurnManager.resetClockWise();
    this._oDeck.clearCards();
    this._oUsedCards.clearCards();
    this._oUsedCards.disableInputDraw();
    for (var a = 0; a < this._aPlayersHand.length; a++)
        this._aPlayersHand[a].clearCards(), this._aPlayersHand[a].refreshScore();
    this._oSummaryPanel.reset();
    this.setOffTurn()
};
CGameBase.prototype.getFirstHand = function () {
    var a = this._oDeck.takeLastCard(),
    b = this._oTurnManager.getTurn(),
    c = this._aPlayersHand[b].getContainerPos(),
    f = this._aPlayersHand[b].getPosNewCard(),
    d = this._oDeck.getGlobalPosition();
    a.setOnTop();
    this._oCardsContainer.addChildAt(this._oDecksContainer, this._oCardsContainer.numChildren);
    this._oDeck.setOnTop();
    b = this._getCardRotation(b);
    a.moveCardFirstHand(c.x + f.x - d.x, c.y + f.y - d.y, b, 250)
};
CGameBase.prototype.onCardDealed = function (a) {
    var b = this._oTurnManager.getTurn(),
    c = this._getCardRotation(b);
    this._aPlayersHand[b].pushCard(new CCard(this._aPlayersHand[b].getPosNewCard().x, this._aPlayersHand[b].getPosNewCard().y, this._aPlayersHand[b].getContainer(), a.getFotogram(), a.getRank(), a.getSuit(), a.getUniqueID(), c));
    a.unload();
    a = this._aPlayersHand[b].getLastCard();
    this._aPlayersHand[b].centerContainer();
    this.canCardBeShown(b) && a.showCard();
    this._oTurnManager.nextTurn();
    this.matchCanStart() ?
    (this._oCardsContainer.addChildAt(this._oDecksContainer, this._oCardsContainer), this._oDeck.setOnTop(), a = this._oDeck.takeFirstLastCard(), a.moveFirstLastCard(CARD_WIDTH, 0, 600)) : this.getFirstHand()
};
CGameBase.prototype.onFirstLastCardDealed = function (a) {
    this._oUsedCards.pushCard(new CCard(0, 0, this._oUsedCards.getContainer(), a.getFotogram(), a.getRank(), a.getSuit(), a.getUniqueID(), 0));
    a.unload();
    this._oUsedCards.getLastCard().showCardNoInput();
    this._oDeck.moveContainer(CANVAS_WIDTH / 2 - CARD_WIDTH / 2, CANVAS_HEIGHT / 2, 400);
    this._oUsedCards.moveContainer(CANVAS_WIDTH / 2 + CARD_WIDTH / 2, CANVAS_HEIGHT / 2, 400);
    this._iCurrentColor = this._oUsedCards.getLastCard().getSuit();
    this._oInterface.refreshColor(this._iCurrentColor);
    this._iCurPlayer = this._oTurnManager.getTurn();
    this._iNextPlayer = this._oTurnManager.getNextPlayer();
    this._aPlayersHand[this._iCurPlayer].setOnTurn();
    this._oUsedCards.disableInputUsedCards();
    this._onFirstTurnStart()
};
CGameBase.prototype._onFirstTurnStart = function () {
    this._oTurnManager.prevTurn();
    this._iCurPlayer = this._oTurnManager.getTurn();
    this._iNextPlayer = this._oTurnManager.getNextPlayer();
    this.setOffTurn();
    var a = this._oUsedCards.getLastCard();
    this._checkFirstCardEffect(a.getEffect())
};
CGameBase.prototype.cpuPlayCard = function (a) {
    var b = this._iCurPlayer,
    c = this._aPlayersHand[b].getContainerPos(),
    f = this._oUsedCards.getGlobalPosition();
    this._oCardsContainer.addChildAt(this._oHandsContainer, this._oCardsContainer.numChildren);
    this._aPlayersHand[b].setOnTop();
    a.moveCard(f.x - c.x, f.y - c.y, 0, 400, 1E3);
    this._oDeck.setChildDepth(2);
    this._oUsedCards.setChildDepth(2);
    a.showCard(1E3)
};
CGameBase.prototype.checkUno = function (a) {
    var b = this._oTurnManager.getTurn();
    1 === this._aPlayersHand[b].getLength() && (this._bUNO = !0);
    this._oUnoController.check(a)
};
CGameBase.prototype.setUNO = function (a) {
    this._bUNO = a
};
CGameBase.prototype.applyPenality = function () {
    this._bUNO = !1;
    this.drawCards(this._iCurPlayer, NUM_PENALTY_CARDS, 0, DRAW_TYPE_PENALITY)
};
CGameBase.prototype._checkEffect = function (a) {
    switch (a) {
    case EFFECT_SELECT_COLOR:
        this._applySelectColor();
        break;
    case EFFECT_DRAW_FOUR:
        this._applyDrawFourEffect();
        break;
    case EFFECT_STOP:
        this._applyStopTurn();
        break;
    case EFFECT_INVERT_TURN:
        this._applyInvertTurn();
        break;
    case EFFECT_DRAW_TWO_COLORED:
        this._applyDrawTwoColored();
        break;
    default:
        this._applyNormalCardEffect()
    }
};
CGameBase.prototype.onDraw = function () {
    var a = !0;
    if (0 !== this._oUsedCards.getLength() && 0 === this._iCurPlayer) {
        for (var b = 0; b < this._aPlayersHand[0].getLength(); b++) {
            var c = this._aPlayersHand[0].getCardByIndex(b);
            this.cardMatchTheWaste(c) && (a = !1)
        }
        !0 === a && (this._oDeck.disableInputDraw(), this._oDeck.hideHelp(), this.drawCards(0, 1, 0, DRAW_TYPE_NORMAL))
    }
};
CGameBase.prototype._checkNumberCardsToDraw = function (a, b, c, f) {
    this._iCounterDraw = b;
    switch (f) {
    case DRAW_TYPE_PENALITY:
        this.drawCardsTween(a, b, c, f);
        break;
    case DRAW_TYPE_DRAW2_COLORED:
        s_oCAnimation.drawTwoAnim(a, b, c, f);
        break;
    case DRAW_TYPE_DRAW4:
        s_oCAnimation.drawFourAnim(a, b, c, f);
        break;
    default:
        this.drawCardsTween(a, b, c, f)
    }
};
CGameBase.prototype.drawCardsTween = function (a, b, c, f) {
    this._oCardsContainer.addChildAt(this._oDecksContainer, this._oCardsContainer.numChildren);
    this._oDeck.setOnTop();
    this._aPlayersHand[a].organizeHand();
    var d = this._aPlayersHand[a].getContainerPos(),
    e = this._aPlayersHand[a].getPosNewCard(),
    k = this._oDeck.getGlobalPosition(),
    g = this,
    n = this._oDeck.takeLastCard();
    n.setOnTop();
    var m = d.x + e.x - k.x;
    d = d.y + e.y - k.y;
    var r = this._getCardRotation(a);
    createjs.Tween.get(n.getSprite()).wait(c).to({
        x: m,
        y: d,
        rotation: r
    },
        400, createjs.Ease.cubicOut).call(function () {
        g._aPlayersHand[a].pushCard(new CCard(g._aPlayersHand[a].getPosNewCard().x, g._aPlayersHand[a].getPosNewCard().y, g._aPlayersHand[a].getContainer(), n.getFotogram(), n.getRank(), n.getSuit(), n.getUniqueID(), r));
        n.unload();
        var p = g._aPlayersHand[a].getLastCard();
        g.canCardBeShown(a) ? p.showCard() : playSound("card", 1, !1);
        g._aPlayersHand[a].centerContainer();
        g.checkForMoreDraws(a, b, c, f)
    })
};
CGameBase.prototype.checkForMoreDraws = function (a, b, c, f) {
    0 === this._oDeck.getLength() ? this.shuffleCards(a, b, c, f) : (this._iCounterDraw--, 0 < this._iCounterDraw ? this.drawCardsTween(a, b, c, f) : this._onAllCardsDrawCompleted(a, f))
};
CGameBase.prototype._checkEffectAfterDrawCompleted = function (a, b) {
    switch (b) {
    case DRAW_TYPE_PENALITY:
        this.applyEffectOnCard(this._oUsedCards.getLastCard().getEffect());
        break;
    case DRAW_TYPE_DRAW2_COLORED:
        this._oTurnManager.nextTurn();
        this._notifyChangeTurn();
        break;
    case DRAW_TYPE_DRAW4:
        this._oTurnManager.nextTurn();
        this._notifyChangeTurn();
        break;
    default:
        this._checkIfCanStillPlayTheTurn(a)
    }
};
CGameBase.prototype.onInputPlayer = function (a) {
    for (var b = 0; b < this._aPlayersHand[a].getLength(); b++)
        this._aPlayersHand[a].getCardByIndex(b).onSetTurned()
};
CGameBase.prototype.offInputPlayer = function (a) {
    for (var b = 0; b < this._aPlayersHand[a].getLength(); b++)
        this._aPlayersHand[a].getCardByIndex(b).offSetTurned()
};
CGameBase.prototype.setOffTurn = function () {
    for (var a = 0; a < NUM_PLAYERS; a++)
        this._aPlayersHand[a].setOffTurn(a), this.offInputPlayer(a)
};
CGameBase.prototype.prevTurn = function () {
    this._oTurnManager.prevTurn()
};
CGameBase.prototype.getPlayerTurn = function () {
    return this._iCurPlayer
};
CGameBase.prototype.getbUNO = function () {
    return this._bUNO
};
CGameBase.prototype.cardCanBePlayed = function (a, b) {
    if (a.getFotogram() === FOTOGRAM_DRAW_FOUR) {
        var c = !1;
        for (var f = 0; f < this._aPlayersHand[b].getLength(); f++) {
            var d = this._aPlayersHand[b].getCardByIndex(f);
            if (d.getFotogram() !== FOTOGRAM_DRAW_FOUR && (d.getRank() === this._oUsedCards.getLastCard().getRank() || d.getSuit() === this._iCurrentColor || d.getFotogram() === FOTOGRAM_COLOR)) {
                c = !0;
                break
            }
        }
        c = !c
    } else
        c = a.getFotogram() === FOTOGRAM_COLOR ? !0 : this.cardMatchTheWaste(a);
    return c
};
CGameBase.prototype.cardMatchTheWaste = function (a) {
    var b = !1;
    if (a.getRank() === this._oUsedCards.getLastCard().getRank() || a.getSuit() === this._iCurrentColor || a.getFotogram() === FOTOGRAM_COLOR || a.getFotogram() === FOTOGRAM_DRAW_FOUR)
        b = !0;
    return b
};
CGameBase.prototype.playerCanPlay = function (a) {
    for (var b = !1, c = 0; c < this._aPlayersHand[a].getLength(); c++) {
        var f = this._aPlayersHand[a].getCardByIndex(c);
        if (this.cardMatchTheWaste(f)) {
            b = !0;
            break
        }
    }
    return b
};
CGameBase.prototype._getCardRotation = function (a) {
    var b = 0;
    switch (this._aPlayersHand[a].getSide()) {
    case BOTTOM:
        b = 0;
        break;
    case LEFT:
        b = 90;
        break;
    case TOP:
        b = 180;
        break;
    case RIGHT:
        b = -90
    }
    return b
};
CGameBase.prototype.shuffle = function (a) {
    var b;
    for (b = a.length; b; b--) {
        var c = Math.floor(Math.random() * b);
        var f = a[b - 1];
        a[b - 1] = a[c];
        a[c] = f
    }
};
CGameBase.prototype.unload = function () {
    this._oUnoController.unload();
    this._oInterface.unload();
    this._oSummaryPanel.unload();
    this._oMsgBox.unload();
    createjs.Tween.removeAllTweens();
    s_oStage.removeAllChildren()
};
CGameBase.prototype.gameOver = function (a) {
    this.setOffTurn();
    this._showAllPlayersCards();
    this._showAllPlayersMatchScore();
    var b = this._calculateMatchScore(),
    c = this._aPlayersHand[a].getScore() + b;
    this._aPlayersHand[a].setOnTurn();
    this._aPlayersHand[a].setScore(c);
    var f = this._getPlayersRank();
    this._oSummaryPanel.setAndShow(f, a, b);
    c >= GAME_SCORE_WIN && (this._bEndGame = !0, this._oSummaryPanel.endMode(sprintf(TEXT_PLAYER_WON, this._aPlayersHand[a].getName())), $(s_oMain).trigger("share_event", c))
};
CGameBase.prototype.checkWinner = function () {
    for (var a = null, b = 0; b < this._aPlayersHand.length; b++)
        if (0 === this._aPlayersHand[b].getLength()) {
            a = b;
            break
        }
    return a
};
CGameBase.prototype._calculateMatchScore = function () {
    for (var a = 0, b = 0; b < this._aPlayersHand.length; b++)
        a += this._aPlayersHand[b].calculateHandScore();
    return a
};
CGameBase.prototype._showAllPlayersCards = function () {
    for (var a = 0; a < this._aPlayersHand.length; a++)
        this._aPlayersHand[a].getSide() !== BOTTOM && this._aPlayersHand[a].showAllCards()
};
CGameBase.prototype._showAllPlayersMatchScore = function () {
    for (var a = 0; a < this._aPlayersHand.length; a++) {
        var b = this._aPlayersHand[a].calculateHandScore();
        0 < this._aPlayersHand[a].getLength() ? this._aPlayersHand[a].showHandScore(sprintf(TEXT_PTS_TO_WINNER, b)) : this._aPlayersHand[a].showHandScore(TEXT_WINNER)
    }
};
CGameBase.prototype._getPlayersRank = function () {
    for (var a = [], b = 0; b < this._aPlayersHand.length; b++) {
        var c = this._aPlayersHand[b].getName(),
        f = this._aPlayersHand[b].getScore();
        a.push({
            name: c,
            score: f,
            index: b
        })
    }
    a.sort(function (d, e) {
        return d.score > e.score ? -1 : 1
    });
    return a
};
CGameBase.prototype.matchCanStart = function () {
    for (var a = !1, b = 0, c = 0; c < this._aPlayersHand.length; c++)
        this._aPlayersHand[c].getLength() === STARTING_NUM_CARDS && b++;
    b === NUM_PLAYERS && (a = !0);
    return a
};
CGameBase.prototype._checkUnoNotify = function (a, b, c) {
    a && (c === b ? (a = sprintf(TEXT_ALERT_1, NUM_PENALTY_CARDS), this._oUnoController.unoAnimation()) : (a = this._aPlayersHand[c].getName().toUpperCase(), a = sprintf(TEXT_ALERT_2, a, NUM_PENALTY_CARDS)), this._oUnoController.showAlertMsg(a))
};
CGameBase.prototype.canCardBeShown = function (a) {
    return this._aPlayersHand[a].getSide() === BOTTOM || DEBUG_SHOW_CARDS
};
CGameBase.prototype.getPlayersHand = function (a) {
    return this._aPlayersHand[a]
};
CGameBase.prototype.getCurColor = function (a) {
    return this._iCurrentColor
};
CGameBase.prototype.getLastCard = function (a) {
    return this._oUsedCards.getLastCard()
};
CGameBase.prototype.update = function () {};
CGameBase.prototype._onCheck = function () {
    this._oSummaryPanel.hide()
};
function CGameSingle(a) {
    CGameBase.call(this, a);
    !0 === s_bFirstGame ? new CPanelTutorial : this._startGame()
}
CGameSingle.prototype = Object.create(CGameBase.prototype);
CGameSingle.prototype._startGame = function () {
    s_bFirstGame = !1;
    this._oUnoController.setVisible(!0);
    this._oUnoController.addEventListener(ON_APPLY_EFFECT, this.applyEffectOnCard, this);
    this._oUnoController.addEventListener(ON_APPLY_PENALITY, this.applyPenality, this);
    this._oUnoController.addEventListener(ON_UNO_CLICK, this._onUnoClick, this);
    this._oSummaryPanel.addEventListener(ON_NEXT, this._onConfirmNextMatch, this);
    this._oSummaryPanel.addEventListener(ON_HOME, this.onExit, this);
    this._oMsgBox.addEventListener(ON_HOME,
        this.onExit, this);
    this._setPieces()
};
CGameSingle.prototype._setPieces = function () {
    this._oDeck.initializeDeck();
    this._oDeck.shuffle();
    this.getFirstHand()
};
CGameSingle.prototype.setNewGame = function () {
    for (var a = 0; a < this._aPlayersHand.length; a++)
        this._aPlayersHand[a].setScore(0);
    this._oTurnManager.resetFirstPlayer()
};
CGameSingle.prototype.restart = function () {
    this.reset();
    this._setPieces()
};
CGameSingle.prototype._checkFirstCardEffect = function (a) {
    switch (a) {
    case EFFECT_SELECT_COLOR:
        this._oTurnManager.nextTurn();
        this._iCurPlayer = this._oTurnManager.getTurn();
        this._iNextPlayer = this._oTurnManager.getNextPlayer();
        this._applySelectColor();
        this._oTurnManager.prevTurn();
        break;
    case EFFECT_DRAW_FOUR:
        this._oTurnManager.nextTurn();
        this._iCurPlayer = this._oTurnManager.getTurn();
        this._iNextPlayer = this._oTurnManager.getNextPlayer();
        this._iNextPlayer = this._iCurPlayer = this._oTurnManager.getTurn();
        this._applyDrawFourEffect();
        this._oTurnManager.prevTurn();
        break;
    case EFFECT_STOP:
        this._applyStopTurn();
        break;
    case EFFECT_INVERT_TURN:
        2 !== NUM_PLAYERS && this._oTurnManager.nextTurn();
        this._applyInvertTurn();
        break;
    case EFFECT_DRAW_TWO_COLORED:
        this._applyDrawTwoColored();
        break;
    default:
        this._oTurnManager.nextTurn(),
        this._iCurPlayer = this._oTurnManager.getTurn(),
        this._iNextPlayer = this._oTurnManager.getNextPlayer(),
        0 === this._iCurPlayer ? (this.onInputPlayer(this._iCurPlayer), this._oDeck.enableInputDraw()) : this._oAIManager.selectACard(this._iCurPlayer),
        this._aPlayersHand[this._iCurPlayer].setOnTurn()
    }
};
CGameSingle.prototype.onNextTurn = function () {
    this._bUNO = !1;
    var a = this.checkWinner();
    null !== a ? (this.gameOver(a), 0 === a && $(s_oMain).trigger("save_score", this._calculateMatchScore())) : (this.setOffTurn(), this._oDeck.enableInputDraw(), this._oTurnManager.nextTurn(), this._iCurPlayer = a = this._oTurnManager.getTurn(), this._iNextPlayer = this._oTurnManager.getNextPlayer(), this._aPlayersHand[a].setOnTurn(), 0 === a ? (this.onInputPlayer(a), this.playerCanPlay(a) || this._oDeck.setHelp()) : this._oAIManager.selectACard(a))
};
CGameSingle.prototype.playCard = function (a, b) {
    var c = this._oTurnManager.getTurn(),
    f = !1;
    0 === c && (f = this.cardCanBePlayed(a, c));
    f && (this._oCardsContainer.addChildAt(this._oHandsContainer, this._oCardsContainer.numChildren), this._aPlayersHand[c].setOnTop(), this._oDeck.disableInputDraw(), this.offInputPlayer(0), c = this._aPlayersHand[c].getContainerPos(), f = this._oUsedCards.getGlobalPosition(), playSound("card", 1, !1), a.moveCard(f.x - c.x, f.y - c.y, 0, 300), a.showCard(), this._oUsedCards.setChildDepth(2))
};
CGameSingle.prototype.playedCard = function (a) {
    var b = this._oTurnManager.getTurn(),
    c = this._aPlayersHand[b].searchIndexCard(a);
    this._oUsedCards.pushCard(new CCard(0, 0, this._oUsedCards.getContainer(), a.getFotogram(), a.getRank(), a.getSuit(), a.getUniqueID(), 0));
    this._oUsedCards.disableInputUsedCards();
    this._oUsedCards.getLastCard().instantShow();
    this._aPlayersHand[b].removeCardByIndex(c);
    a.unload();
    4 !== this._oUsedCards.getLastCard().getSuit() && (this._iCurrentColor = this._oUsedCards.getLastCard().getSuit(),
        this._oInterface.refreshColor(this._iCurrentColor));
    this._aPlayersHand[b].organizeHand(c);
    this.checkUno(a.getEffect());
    0 !== b && this._onUnoClick()
};
CGameSingle.prototype._onUnoClick = function () {
    !0 === this._bUNO && (this._bUNO = !1, this._aPlayersHand[this._iCurPlayer].checkUno())
};
CGameSingle.prototype.applyEffectOnCard = function (a) {
    this._checkEffect(a)
};
CGameSingle.prototype._applySelectColor = function () {
    if (0 === this._iCurPlayer)
        (new CSelectColorPanel(EFFECT_SELECT_COLOR)).addEventListener(ON_COLOR_SELECTED, function (b) {
            this._onActionSelectColor({
                colorindex: b
            })
        }, this);
    else {
        var a = {
            colorindex: this._oAIManager.onSelectColorCpu(this._iCurPlayer)
        };
        this._onActionSelectColor(a)
    }
};
CGameSingle.prototype._applyDrawFourEffect = function () {
    if (0 === this._iCurPlayer)
        (new CSelectColorPanel(EFFECT_DRAW_FOUR)).addEventListener(ON_COLOR_SELECTED, function (b) {
            this._onActionDrawFour({
                playerindex: this._iNextPlayer,
                colorindex: b
            })
        }, this);
    else {
        var a = this._oAIManager.onSelectColorCpu(this._iCurPlayer);
        this._onActionDrawFour({
            playerindex: this._iNextPlayer,
            colorindex: a
        })
    }
};
CGameSingle.prototype._applyStopTurn = function () {
    var a = this;
    this._oAnimation.stopTurn().then(function () {
        a._oTurnManager.nextTurn();
        a._notifyChangeTurn()
    })
};
CGameSingle.prototype._applyInvertTurn = function () {
    var a = this;
    this._oTurnManager.changeClockWise();
    2 === NUM_PLAYERS && this._oTurnManager.nextTurn();
    this._oAnimation.changeClockWise(s_oGame._oTurnManager.getClockWise()).then(function () {
        a._notifyChangeTurn()
    })
};
CGameSingle.prototype._applyDrawTwoColored = function () {
    this.drawCards(this._iNextPlayer, 2, 0, DRAW_TYPE_DRAW2_COLORED)
};
CGameSingle.prototype._applyNormalCardEffect = function () {
    this._notifyChangeTurn()
};
CGameSingle.prototype.drawCards = function (a, b, c, f) {
    this._checkUnoNotify(f === DRAW_TYPE_PENALITY ? !0 : !1, 0, a);
    this._checkNumberCardsToDraw(a, b, c, f)
};
CGameSingle.prototype._notifyChangeTurn = function () {
    s_oGame.onNextTurn()
};
CGameSingle.prototype.shuffleCards = function (a, b, c, f) {
    for (var d = this, e = this._oUsedCards.removeAllCardUnderTheDeck(), k = [], g = 0; g < e.length; g++)
        k.push(e[g].getFotogram());
    this._oAnimation.shuffleAnimation().then(function () {
        shuffle(k);
        d._oDeck.clearCards();
        d._oDeck.initializeFromData(k);
        d.checkForMoreDraws(a, b, c, f)
    })
};
CGameSingle.prototype._onAllCardsDrawCompleted = function (a, b) {
    this._checkEffectAfterDrawCompleted(a, b)
};
CGameSingle.prototype._checkIfCanStillPlayTheTurn = function (a) {
    this.playerCanPlay(a) ? (this.onInputPlayer(a), 0 !== this._iCurPlayer && this._oAIManager.selectACard(this._iCurPlayer)) : (this._aPlayersHand[a].centerContainer(), this._notifyChangeTurn())
};
CGameSingle.prototype._onActionDrawFour = function (a) {
    var b = this;
    this._iCurrentColor = a.colorindex;
    this._oAnimation.changeColor(this._iCurrentColor).then(function () {
        b._oInterface.refreshColor(b._iCurrentColor);
        b.drawCards(a.playerindex, NUM_WILD_CARDS, 0, DRAW_TYPE_DRAW4)
    })
};
CGameSingle.prototype._onActionSelectColor = function (a) {
    var b = this;
    this._iCurrentColor = a.colorindex;
    this._oAnimation.changeColor(this._iCurrentColor).then(function () {
        b._oInterface.refreshColor(b._iCurrentColor);
        b._notifyChangeTurn()
    })
};
CGameSingle.prototype._onConfirmNextMatch = function () {
    $(s_oMain).trigger("show_interlevel_ad");
    this._bEndGame && (this._bEndGame = !1, this.setNewGame());
    this.restart()
};
CGameSingle.prototype.onExit = function () {
    s_oGame.unload();
    s_oMain.gotoMenu();
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("show_interlevel_ad")
};
function CInterface() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k,
    g,
    n,
    m,
    r,
    p,
    h = null,
    t = null,
    x;
    this._init = function () {
        x = new createjs.Container;
        var y = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - y.height / 2 - 10;
        e = y.height / 2 + 10;
        m = new CGfxButton(d, e, y, x);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        c = CANVAS_WIDTH - y.width / 2 - 100;
        f = y.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            y = s_oSpriteLibrary.getSprite("audio_icon"), n = new CToggle(c, f, y, s_bAudioActive, x), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
                this);
        y = window.document;
        var v = y.documentElement;
        h = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        t = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (h = !1);
        h && screenfull.isEnabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), a = y.width / 4 + 10, b = y.height / 2 + 10, r = new CToggle(a, b, y, s_bFullscreen, x), r.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        y = s_oSpriteLibrary.getSprite("colors");
        y = new createjs.SpriteSheet({
            images: [y],
            frames: {
                width: 103,
                height: 102,
                regX: 51.5,
                regY: 51
            },
            animations: {
                red: [0],
                green: [1],
                blue: [2],
                yellow: [3]
            }
        });
        k = CANVAS_WIDTH / 2 + 220;
        g = CANVAS_HEIGHT / 2 - 60;
        p = new createjs.Sprite(y, 0);
        p.stop();
        p.x = k;
        p.y = g;
        s_oStage.addChild(x);
        this.refreshButtonPos()
    };
    this.refreshColor = function (y) {
        p.gotoAndStop(y);
        s_oStage.addChildAt(p, 1)
    };
    this.unload = function () {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            n.unload(), n = null;
        m.unload();
        h && screenfull.isEnabled && r.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function () {
        m.setPosition(d -
            s_iOffsetX, s_iOffsetY + e);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(c - s_iOffsetX, s_iOffsetY + f);
        h && screenfull.isEnabled && r.setPosition(a + s_iOffsetX, b + s_iOffsetY)
    };
    this.setOnTop = function () {
        s_oStage.addChildAt(x, s_oStage.numChildren)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function () {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this._onRestart = function () {
        s_oGame.restart()
    };
    this.resetFullscreenBut = function () {
        h && screenfull.isEnabled &&
        r.setActive(s_bFullscreen)
    };
    this._onFullscreen = function () {
        s_bFullscreen ? t.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;
function CCreditsPanel() {
    var a,
    b,
    c,
    f,
    d,
    e,
    k,
    g;
    this._init = function () {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        b = f.on("mousedown", function () {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
        }, 500);
        d = new createjs.Container;
        s_oStage.addChild(d);
        var n = s_oSpriteLibrary.getSprite("credits_panel");
        g = createBitmap(n);
        g.regX = n.width / 2;
        g.regY = n.height / 2;
        c = g.on("click", () => {});
        d.addChild(g);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT +
            n.height / 2;
        a = d.y;
        (new createjs.Tween.get(d)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);
        var m = new createjs.Text(TEXT_DEVELOPED, "20px " + PRIMARY_FONT, "#ffffff");
        m.y = -n.height / 2 + 110;
        m.textAlign = "center";
        m.textBaseline = "middle";
        m.lineWidth = 300;
        d.addChild(m);
        n = s_oSpriteLibrary.getSprite("ctl_logo");
        k = createBitmap(n);
        k.regX = n.width / 2;
        k.regY =
            n.height / 2;
        d.addChild(k);
        n = s_oSpriteLibrary.getSprite("but_exit");
        e = new CGfxButton(230, -107, n, d);
        e.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function () {
        e.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(d)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(f);
            s_oStage.removeChild(d);
            e.unload()
        });
        f.off("mousedown", b);
        g.off("mousedown", c)
    };
    this._init()
}
function CSelectColorPanel(a) {
    var b,
    c,
    f,
    d,
    e,
    k,
    g = this,
    n,
    m,
    r,
    p;
    this._init = function () {
        c = [];
        f = [];
        a === EFFECT_SELECT_COLOR && playSound("special_card", .5, !1);
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        d.on("mousedown", function () {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d, {
                override: !0
            })).to({
            alpha: .7
        }, 500);
        e = new createjs.Container;
        s_oStage.addChild(e);
        k = new createjs.Container;
        e.addChild(k);
        var h = s_oSpriteLibrary.getSprite("select_color_panel"),
        t =
            createBitmap(h);
        t.regX = h.width / 2;
        t.regY = h.height / 2;
        e.addChildAt(t, 0);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + h.height / 2;
        b = e.y;
        (new createjs.Tween.get(e, {
                override: !0
            })).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 600, createjs.Ease.backOut);
        new CTLText(e, -250, -h.height / 2 + 10, 500, 110, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SELECT_COLOR, !0, !0, !0, !1);
        k.y = e.getBounds().height / 5;
        h = s_oSpriteLibrary.getSprite("but_red");
        n = new CGfxButton(-190, -20, h, k);
        n.addEventListener(ON_MOUSE_UP, function () {
            g.onSelectColor(0);
            k
        });
        h = s_oSpriteLibrary.getSprite("but_green");
        m = new CGfxButton(-65, -20, h, k);
        m.addEventListener(ON_MOUSE_UP, function () {
            g.onSelectColor(1);
            k
        });
        h = s_oSpriteLibrary.getSprite("but_blue");
        r = new CGfxButton(65, -20, h, k);
        r.addEventListener(ON_MOUSE_UP, function () {
            g.onSelectColor(2);
            k
        });
        h = s_oSpriteLibrary.getSprite("but_yellow");
        p = new CGfxButton(190, -20, h, k);
        p.addEventListener(ON_MOUSE_UP, function () {
            g.onSelectColor(3);
            k
        })
    };
    this.unload = function () {
        s_oStage.removeChild(d);
        s_oStage.removeChild(e);
        n.unload();
        m.unload();
        r.unload();
        p.unload();
        d.off("mousedown",
            function () {})
    };
    this.disableButtons = function () {
        n.setClickable(!1);
        m.setClickable(!1);
        r.setClickable(!1);
        p.setClickable(!1)
    };
    this.addEventListener = function (h, t, x) {
        c[h] = t;
        f[h] = x
    };
    this.onSelectColor = function (h) {
        (new createjs.Tween.get(d, {
                override: !0
            })).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(e, {
                override: !0
            })).to({
            y: b
        }, 400, createjs.Ease.backIn);
        g.disableButtons();
        c[ON_COLOR_SELECTED] && c[ON_COLOR_SELECTED].call(f[ON_COLOR_SELECTED], h, a)
    };
    g = this;
    this._init()
}
function CAreYouSurePanel(a) {
    var b,
    c,
    f,
    d,
    e;
    this._init = function (g) {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        d.on("mousedown", function () {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({
            alpha: .7
        }, 500);
        e = new createjs.Container;
        s_oStage.addChildAt(e, s_oStage.numChildren);
        g = s_oSpriteLibrary.getSprite("credits_panel");
        var n = createBitmap(g);
        n.regX = g.width / 2;
        n.regY = g.height / 2;
        e.addChild(n);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + g.height / 2;
        b = e.y;
        (new createjs.Tween.get(e)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn).call(function () {});
        (new CTLText(e, -250, -130, 500, 150, 50, "center", "#000000", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_SURE, !0, !0, !0, !1)).setOutline(5);
        new CTLText(e, -250, -130, 500, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_ARE_SURE, !0, !0, !0, !1);
        c = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes_big"), e);
        c.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        f = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_exit_big"),
                e);
        f.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this._onButYes = function () {
        f.setClickable(!1);
        c.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(e)).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function () {
            a();
            k.unload()
        })
    };
    this._onButNo = function () {
        f.setClickable(!1);
        c.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(e)).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function () {
            k.unload()
        })
    };
    this.unload = function () {
        f.unload();
        c.unload();
        s_oStage.removeChild(d);
        s_oStage.removeChild(e);
        d.off("mousedown", function () {})
    };
    var k = this;
    this._init(a)
}
function CAIManager() {
    this._init = function () {};
    this.unload = function () {};
    this.onSelectColorCpu = function (a) {
        a = s_oGame.getPlayersHand(a);
        for (var b, c = [{
                    iColor: 0,
                    iPoints: 0
                }, {
                    iColor: 1,
                    iPoints: 0
                }, {
                    iColor: 2,
                    iPoints: 0
                }, {
                    iColor: 3,
                    iPoints: 0
                }
            ], f = 0; f < a.getLength(); f++) {
            b = a.getCardByIndex(f);
            for (var d = 0; d < c.length; d++)
                b.getSuit() === d && c[d].iPoints++
        }
        c.sort(function (e, k) {
            return parseFloat(k.iPoints) - parseFloat(e.iPoints)
        });
        return c[0].iColor
    };
    this.selectACard = function (a) {
        for (var b = s_oGame.getPlayersHand(a), c = s_oGame.getCurColor(),
            f = s_oGame.getLastCard(), d = [], e = 0; e < b.getLength(); e++)
            4 === b.getCardByIndex(e).getSuit() || b.getCardByIndex(e).getRank() !== f.getRank() && b.getCardByIndex(e).getSuit() !== c ? b.getCardByIndex(e).getFotogram() === FOTOGRAM_COLOR ? d.push({
                oCard: b.getCardByIndex(e),
                iValue: 2
            }) : b.getCardByIndex(e).getFotogram() === FOTOGRAM_DRAW_FOUR && d.push({
                oCard: b.getCardByIndex(e),
                iValue: 1
            }) : 12 === b.getCardByIndex(e).getRank() ? d.push({
                oCard: b.getCardByIndex(e),
                iValue: 6
            }) : 10 === b.getCardByIndex(e).getRank() ? d.push({
                oCard: b.getCardByIndex(e),
                iValue: 5
            }) : 11 === b.getCardByIndex(e).getRank() ? d.push({
                oCard: b.getCardByIndex(e),
                iValue: 4
            }) : d.push({
                oCard: b.getCardByIndex(e),
                iValue: 3
            });
        0 === d.length ? s_oGame.drawCards(a, 1, 1E3, DRAW_TYPE_NORMAL) : (d.sort(function (k, g) {
                return parseFloat(g.iValue) - parseFloat(k.iValue)
            }), s_oGame.cpuPlayCard(d[0].oCard))
    };
    this._init()
}
function CUnoController() {
    var a,
    b,
    c,
    f,
    d;
    this._init = function () {
        a = [];
        b = [];
        f = new createjs.Container;
        f.visible = !1;
        s_oStage.addChild(f);
        var k = s_oSpriteLibrary.getSprite("but_uno");
        d = new CGfxButton(CANVAS_WIDTH / 2 + 222, CANVAS_HEIGHT / 2 + 70, k, f);
        d.addEventListener(ON_MOUSE_UP, this._onButUno, this);
        c = new CTLText(f, CANVAS_WIDTH / 2 + 280, CANVAS_HEIGHT / 2, 200, 150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, sprintf(TEXT_ALERT_1, NUM_PENALTY_CARDS), !0, !0, !0, !1);
        c.setAlpha(0)
    };
    this.unload = function () {
        d.unload()
    };
    this.addEventListener =
    function (k, g, n) {
        a[k] = g;
        b[k] = n
    };
    this.setVisible = function (k) {
        f.visible = k
    };
    this.check = function (k) {
        !0 === s_oGame.getbUNO() ? setTimeout(function () {
            !0 === s_oGame.getbUNO() ? e._triggerPenality() : e._triggerEffect(k)
        }, 2E3) : e._triggerEffect(k)
    };
    this._triggerPenality = function () {
        a[ON_APPLY_PENALITY] && a[ON_APPLY_PENALITY].call(b[ON_APPLY_PENALITY])
    };
    this._triggerEffect = function (k) {
        a[ON_APPLY_EFFECT] && a[ON_APPLY_EFFECT].call(b[ON_APPLY_EFFECT], k)
    };
    this._onButUno = function () {
        a[ON_UNO_CLICK] && a[ON_UNO_CLICK].call(b[ON_UNO_CLICK])
    };
    this.showAlertMsg = function (k) {
        c.refreshText(k);
        createjs.Tween.get(c.getText()).to({
            alpha: 1
        }, 400).wait(4E3).to({
            alpha: 0
        }, 400).call(function () {
            d.removeAnimation()
        })
    };
    this.unoAnimation = function () {
        d.trembleAnimation()
    };
    var e = this;
    this._init()
}
function CSummaryPanel(a) {
    var b,
    c,
    f,
    d,
    e,
    k,
    g,
    n,
    m,
    r,
    p,
    h,
    t,
    x;
    this._init = function () {
        b = [];
        c = [];
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        e.on("mousedown", function () {});
        a.addChild(e);
        g = new createjs.Container;
        g.alpha = 0;
        g.visible = !1;
        a.addChild(g);
        var v = s_oSpriteLibrary.getSprite("msg_box");
        k = createBitmap(v);
        v = k.getBounds();
        k.regX = v.width / 2;
        k.regY = v.height / 2;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2;
        g.addChild(k);
        r = new createjs.Container;
        r.x = k.x;
        r.y =
            k.y - 10;
        g.addChild(r);
        var z = NUM_PLAYERS;
        v = 40 * z;
        d = [];
        for (var l = 0; l < z; l++)
            d[l] = new CPlayerInfo(0, 0, r, "szPlayerName"), d[l].setPosition(0, -v / 2 + v / (z - 1) * l, BOTTOM);
        f = "#35bd1b";
        m = new createjs.Text(0, " 30px " + PRIMARY_FONT, f);
        m.textBaseline = "middle";
        r.addChild(m);
        z = CANVAS_WIDTH / 2;
        l = CANVAS_HEIGHT / 2 - 185;
        v = 150;
        n = new CTLText(g, z - 250, l - v / 2, 500, v, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_SUMMARY, !0, !0, !0, !1);
        v = s_oSpriteLibrary.getSprite("cup_icon");
        p = createBitmap(v);
        p.regX = v.width / 2;
        p.regY = v.height / 2;
        p.x = -300;
        p.y =
            d[0].getTextScorePos().y;
        p.visible = !1;
        r.addChild(p);
        v = s_oSpriteLibrary.getSprite("but_home");
        h = new CGfxButton(CANVAS_WIDTH / 2 - 180, CANVAS_HEIGHT / 2 + 170, v, g);
        h.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        v = s_oSpriteLibrary.getSprite("but_show");
        t = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 170, v, g);
        t.addEventListener(ON_MOUSE_DOWN, this._onShow, this);
        v = s_oSpriteLibrary.getSprite("but_next");
        x = new CGfxButton(CANVAS_WIDTH / 2 + 180, CANVAS_HEIGHT / 2 + 170, v, g);
        x.addEventListener(ON_MOUSE_DOWN, this._onNext,
            this);
        x.pulseAnimation()
    };
    this.unload = function () {
        x.unload();
        t.unload();
        h.unload();
        e.removeAllEventListeners();
        g.removeAllEventListeners();
        a.removeChild(e);
        a.removeChild(g)
    };
    this.addEventListener = function (v, z, l) {
        b[v] = z;
        c[v] = l
    };
    this.setAndShow = function (v, z, l) {
        for (var E = 0; E < d.length; E++)
            if (d[E].setName(v[E].name), d[E].setScore(v[E].score + " /" + GAME_SCORE_WIN), v[E].index === z) {
                var F = d[E].getTextScorePos();
                m.x = F.x + 46;
                m.y = F.y + 18;
                m.text = "(+" + l + ")";
                d[E].highlight()
            }
        playSound("game_over", 1, !1);
        g.visible = !0;
        createjs.Tween.get(e).to({
            alpha: .7
        }, 500);
        createjs.Tween.get(g).to({
            alpha: 1
        }, 500)
    };
    this.reset = function () {
        g.visible = !1;
        e.alpha = 0;
        e.on("mousedown", function () {});
        p.visible = !1;
        n.setY(CANVAS_HEIGHT / 2 - 185 - 75);
        n.refreshText(TEXT_SUMMARY);
        r.visible = !0;
        h.setX(CANVAS_WIDTH / 2 - 180);
        t.setX(CANVAS_WIDTH / 2);
        x.setX(CANVAS_WIDTH / 2 + 180);
        h.setVisible(!0);
        t.setVisible(!0);
        x.setVisible(!0);
        var v = s_oSpriteLibrary.getSprite("but_next");
        x.setImage(v);
        for (v = 0; v < d.length; v++)
            d[v].enable(), d[v].setNameColor("#FFF")
    };
    this.show =
    function () {
        g.visible = !0;
        e.alpha = .7;
        e.removeAllEventListeners();
        e.on("mousedown", function () {})
    };
    this.hide = function () {
        g.visible = !1;
        e.alpha = .01;
        e.removeAllEventListeners();
        e.on("mousedown", this.show, this)
    };
    this.waitingMode = function () {
        g.visible = !0;
        g.alpha = 1;
        e.alpha = .7;
        r.visible = !1;
        n.refreshText(TEXT_WAIT_OPPONENT);
        n.setY(CANVAS_HEIGHT / 2 - 50 - 75);
        h.setX(CANVAS_WIDTH / 2 - 100);
        x.setVisible(!1);
        t.setX(CANVAS_WIDTH / 2 + 100)
    };
    this.playerQuitMode = function (v) {
        g.visible = !0;
        g.alpha = 1;
        e.alpha = .7;
        n.refreshText(v.toUpperCase());
        h.setX(CANVAS_WIDTH / 2 - 100);
        x.setVisible(!1);
        t.setX(CANVAS_WIDTH / 2 + 100)
    };
    this.endMode = function (v) {
        n.refreshText(v.toUpperCase());
        v = s_oSpriteLibrary.getSprite("but_restart");
        x.setImage(v);
        d[0].setNameColor(f);
        p.visible = !0
    };
    this.isShown = function () {
        return g.visible
    };
    this.stopTweens = function () {
        createjs.Tween.removeTweens(e);
        createjs.Tween.removeTweens(g)
    };
    this._onExit = function () {
        y.stopTweens();
        b[ON_HOME] && b[ON_HOME].call(c[ON_HOME])
    };
    this._onShow = function () {
        y.stopTweens();
        b[ON_CHECK] && b[ON_CHECK].call(c[ON_CHECK])
    };
    this._onNext = function () {
        y.stopTweens();
        b[ON_NEXT] && b[ON_NEXT].call(c[ON_NEXT])
    };
    this._init();
    var y = this;
    return this
}
function CPlayerInfo(a, b, c, f) {
    var d,
    e,
    k,
    g,
    n,
    m,
    r,
    p,
    h,
    t,
    x;
    this._init = function (y, v, z, l) {
        d = l;
        e = 10;
        m = new createjs.Container;
        m.x = y;
        m.y = v;
        z.addChild(m);
        r = new createjs.Container;
        m.addChild(r);
        y = s_oSpriteLibrary.getSprite("line_player");
        k = y.width / 2;
        g = y.height;
        y = new createjs.SpriteSheet({
            images: [y],
            frames: {
                width: k,
                height: g,
                regX: k / 2,
                regY: g / 2
            },
            animations: {
                off: [0],
                on: [1],
                idle: {
                    frames: [0, 1],
                    speed: .1
                }
            }
        });
        p = createSprite(y, "off", k / 2, g / 2, k, g);
        p.stop();
        m.addChild(p);
        n = 40;
        h = new CTLText(r, 0, 0, 340, n, 30, "left", "#fff", PRIMARY_FONT,
                1, 0, 0, d, !0, !0, !1, !1);
        y = s_oSpriteLibrary.getSprite("score_icon");
        x = createBitmap(y);
        x.regX = y.width / 2;
        x.regY = y.height / 2;
        r.addChild(x);
        t = new CTLText(r, 0, 0, 100, n, 30, "left", "#fff", PRIMARY_FONT, 1, 0, 0, "0", !0, !0, !1, !1)
    };
    this.unload = function () {
        c.removeChild(m)
    };
    this.highlight = function () {
        p.gotoAndStop("on");
        r.alpha = 1;
        createjs.Tween.get(h.getText(), {
            override: !0,
            loop: !0
        }).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).wait(500)
    };
    this.enable = function () {
        p.gotoAndStop("on");
        h.setAlpha(1);
        r.alpha = 1;
        createjs.Tween.removeTweens(h.getText())
    };
    this.disable = function () {
        p.gotoAndStop("off");
        h.setAlpha(1);
        r.alpha = .15;
        createjs.Tween.removeTweens(h.getText())
    };
    this.setScore = function (y) {
        t.refreshText(y)
    };
    this.setName = function (y) {
        h.refreshText(y)
    };
    this.setPosition = function (y, v, z) {
        m.x = y;
        m.y = v;
        switch (z) {
        case BOTTOM:
            this._setBottom();
            break;
        case TOP:
            this._setTop();
            break;
        case LEFT:
            this._setLeft();
            break;
        case RIGHT:
            this._setRight()
        }
    };
    this._setBottom = function () {
        this._setNormalDir();
        m.rotation = 0
    };
    this._setTop =
    function () {
        this._setInverseDir();
        m.rotation = 0
    };
    this._setLeft = function () {
        this._setNormalDir();
        m.rotation = 90
    };
    this._setRight = function () {
        this._setInverseDir();
        m.rotation = 90
    };
    this._setNormalDir = function () {
        h.setAlign("left");
        h.setPos(-k / 2 + e, -n);
        x.x = k / 2 - e - x.getBounds().width / 2;
        x.y = h.getY() + n / 2 - 2;
        t.setAlign("right");
        t.setPos(x.x - x.getBounds().width / 2 - 2, h.getY())
    };
    this._setInverseDir = function () {
        h.setAlign("right");
        h.setPos(k / 2 - e, 4);
        x.x = -k / 2 + e + x.getBounds().width / 2;
        x.y = h.getY() + n / 2 - 2;
        t.setAlign("left");
        t.setPos(x.x +
            x.getBounds().width / 2 + 2, h.getY())
    };
    this.getTextScorePos = function () {
        return {
            x: m.x + t.getX(),
            y: m.y + t.getY()
        }
    };
    this.setNameColor = function (y) {
        h.setColor(y)
    };
    this._init(a, b, c, f)
}
function CInfoLabel(a, b, c) {
    var f,
    d;
    this._init = function (e, k, g) {
        f = new createjs.Container;
        f.x = e;
        f.y = k;
        g.addChild(f);
        e = s_oSpriteLibrary.getSprite("info_label");
        k = createBitmap(e);
        k.regX = e.width / 2;
        k.regY = e.height / 2;
        f.addChild(k);
        e = e.width - 20;
        d = new CTLText(f,  - (e / 2), -40, e, 80, 30, "center", "#fff", PRIMARY_FONT, 1.2, 0, 0, sprintf(TEXT_PTS_TO_WINNER, 0), !0, !0, !0, !1);
        this.pulseAnimation()
    };
    this.setOnTop = function () {
        c.setChildIndex(f, c.numChildren - 1)
    };
    this.setPosition = function (e, k, g) {
        f.x = e;
        f.y = k
    };
    this.setTextScore = function (e) {
        d.refreshText(e)
    };
    this.setVisible = function (e) {
        (f.visible = e) ? this.pulseAnimation() : createjs.Tween.removeTweens(f)
    };
    this.pulseAnimation = function () {
        createjs.Tween.get(f, {
            loop: -1
        }).to({
            scaleX: .9,
            scaleY: .9
        }, 850, createjs.Ease.quadOut).to({
            scaleX: 1,
            scaleY: 1
        }, 650, createjs.Ease.quadIn)
    };
    this._init(a, b, c)
}
function CMsgBox(a) {
    var b,
    c,
    f,
    d,
    e,
    k,
    g;
    this._init = function (n) {
        b = [];
        c = [];
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function () {});
        n.addChild(f);
        d = new createjs.Container;
        d.alpha = 0;
        d.visible = !1;
        n.addChild(d);
        n = s_oSpriteLibrary.getSprite("msg_box");
        e = createBitmap(n);
        n = e.getBounds();
        e.regX = n.width / 2;
        e.regY = n.height / 2;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        d.addChild(e);
        k = new CTLText(d, CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 - 50 - 75, 500,
                150, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
        n = s_oSpriteLibrary.getSprite("but_home");
        g = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 170, n, d);
        g.addEventListener(ON_MOUSE_DOWN, this._onExit, this)
    };
    this.unload = function () {
        g.unload();
        f.removeAllEventListeners();
        d.removeAllEventListeners();
        a.removeChild(f);
        a.removeChild(d)
    };
    this.addEventListener = function (n, m, r) {
        b[n] = m;
        c[n] = r
    };
    this.show = function (n) {
        playSound("game_over", 1, !1);
        d.visible = !0;
        k.refreshText(n.toUpperCase());
        createjs.Tween.get(f).to({
            alpha: .7
        },
            500);
        createjs.Tween.get(d).to({
            alpha: 1
        }, 500)
    };
    this._onExit = function () {
        b[ON_HOME] && b[ON_HOME].call(c[ON_HOME])
    };
    this.isShown = function () {
        return d.visible
    };
    this._init(a)
}
function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}
function extractRootDomain(a) {
    a = extractHostname(a);
    var b = a.split("."),
    c = b.length;
    2 < c && (a = b[c - 2] + "." + b[c - 1]);
    return a
}
var getClosestTop = function () {
    var a = window,
    b = !1;
    try {
        for (; a.parent.document !== a.document; )
            if (a.parent.document)
                a = a.parent;
            else {
                b = !0;
                break
            }
    } catch (c) {
        b = !0
    }
    return {
        topFrame: a,
        err: b
    }
}, getBestPageUrl = function (a) {
    var b = a.topFrame,
    c = "";
    if (a.err)
        try {
            try {
                c = window.top.location.href
            } catch (d) {
                var f = window.location.ancestorOrigins;
                c = f[f.length - 1]
            }
        } catch (d) {
            c = b.document.referrer
        }
    else
        c = b.location.href;
    return c
}, TOPFRAMEOBJ = getClosestTop(), PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), b = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], c = 0; c < b.length; c++)
        if (b[c] === a)
            return !0;
    return !0
};