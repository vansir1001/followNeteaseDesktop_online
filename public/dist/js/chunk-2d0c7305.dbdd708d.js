(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-2d0c7305"],
	{
		"500d": function (t, e, i) {
			"use strict";
			i.r(e);
			var n = i("7a23"),
				a = { class: "h-100 w-100 d-flex flex-column py-4" },
				c = { id: "discoverMusicList", class: "flex-grow-1 position-relative px-5" },
				s = { class: "container h-100" },
				l = { class: "row d-flex flex-column align-items-center h-100" },
				o = { class: "col-xxl-10 containerCol h-100" };
			function r(t, e, i, r, d, v) {
				var u = Object(n["B"])("HorizontalNav"),
					b = Object(n["B"])("router-view");
				return (
					Object(n["t"])(),
					Object(n["f"])("div", a, [
						Object(n["i"])(
							u,
							{
								class: "mx-5",
								navs: t.navs,
								"onUpdate:navs":
									e[1] ||
									(e[1] = function (e) {
										return (t.navs = e);
									}),
							},
							null,
							8,
							["navs"]
						),
						Object(n["i"])("div", c, [
							Object(n["i"])("div", s, [Object(n["i"])("div", l, [Object(n["i"])("div", o, [Object(n["i"])(b)])])]),
						]),
					])
				);
			}
			var d = i("5530"),
				v = i("0613"),
				u = Object(n["j"])({
					setup: function () {
						var t = Object(n["x"])({
							navs: [
								{ title: "个性推荐", active: !0, path: "personalizedRec" },
								{ title: "歌单", path: "songList" },
								{ title: "排行榜", path: "rankingList" },
								{ title: "主播电台", path: "" },
								{ title: "歌手", path: "artist" },
								{ title: "最新音乐", path: "" },
							],
							isLoading: Object(n["d"])(function () {
								return v["a"].state.isLoading;
							}),
						});
						return Object(d["a"])({}, Object(n["F"])(t));
					},
				}),
				b = i("6b0d"),
				p = i.n(b);
			const j = p()(u, [["render", r]]);
			e["default"] = j;
		},
	},
]);
//# sourceMappingURL=chunk-2d0c7305.dbdd708d.js.map
