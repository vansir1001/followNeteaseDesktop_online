(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-2d0d65df"],
	{
		"71f5": function (t, n, e) {
			"use strict";
			e.r(n);
			var i = e("7a23"),
				o = { class: "videos w-100 h-100 d-flex flex-column px-5 py-4" },
				c = { class: "flex-grow-1" },
				r = { class: "container h-100" },
				u = { class: "h-100 row d-flex flex-column align-items-center" },
				a = { class: "h-100 col-xxl-10 containerCol" };
			function s(t, n, e, s, d, l) {
				var p = Object(i["B"])("HorizontalNav"),
					b = Object(i["B"])("VideoGroupPanel"),
					f = Object(i["B"])("VideosGroupRow"),
					O = Object(i["B"])("VideoList");
				return (
					Object(i["t"])(),
					Object(i["f"])("div", o, [
						Object(i["i"])(
							p,
							{
								navs: t.navs,
								"onUpdate:navs":
									n[1] ||
									(n[1] = function (n) {
										return (t.navs = n);
									}),
							},
							null,
							8,
							["navs"]
						),
						Object(i["i"])(
							f,
							{
								empty: "全部视频",
								categoryList: t.categoryList,
								onOnClickCurrent:
									n[5] ||
									(n[5] = function (n) {
										return (t.groupVisible = !t.groupVisible);
									}),
								onOnClickCat:
									n[6] ||
									(n[6] = function (n) {
										t.groupId = n.id;
									}),
							},
							{
								panel: Object(i["N"])(function () {
									return [
										Object(i["i"])(
											b,
											{
												onConfirm: t.confirmGroup,
												onClick: n[2] || (n[2] = Object(i["Q"])(function () {}, ["stop"])),
												groupId: t.groupId,
												"onUpdate:groupId":
													n[3] ||
													(n[3] = function (n) {
														return (t.groupId = n);
													}),
												visible: t.groupVisible,
												"onUpdate:visible":
													n[4] ||
													(n[4] = function (n) {
														return (t.groupVisible = n);
													}),
											},
											null,
											8,
											["onConfirm", "groupId", "visible"]
										),
									];
								}),
								_: 1,
							},
							8,
							["categoryList"]
						),
						Object(i["i"])("div", c, [
							Object(i["i"])("div", r, [
								Object(i["i"])("div", u, [
									Object(i["i"])("div", a, [
										Object(i["i"])(
											O,
											{
												style: { "max-height": "calc(100vh - 75px - 60px - 38px - 40px - 3.3rem)" },
												class: "pt-5",
												id: t.groupId,
												"onUpdate:id":
													n[7] ||
													(n[7] = function (n) {
														return (t.groupId = n);
													}),
											},
											null,
											8,
											["id"]
										),
									]),
								]),
							]),
						]),
					])
				);
			}
			var d = e("5530"),
				l = (e("d81d"), e("99af"), e("c5e7")),
				p = e("f7cc"),
				b = Object(i["j"])({
					setup: function () {
						var t = Object(i["x"])({
							navs: [{ title: "视频", active: !0 }, { title: "MV" }],
							categoryList: [],
							groupId: 0,
							groupVisible: !1,
							groupList: [{ name: "全部视频", id: 0 }],
						});
						t.navs = t.navs.map(function (t, n) {
							return Object(d["a"])(Object(d["a"])({}, t), {}, { key: n });
						});
						var n = function () {
							Object(l["b"])().then(function (n) {
								200 === n.code && (t.categoryList = n.data);
							}),
								Object(l["d"])().then(function (n) {
									200 === n.code && (t.groupList = [{ name: "全部视频", id: 0 }].concat(n.data));
								});
						};
						n(),
							Object(p["a"])(function () {
								t.groupVisible = !1;
							});
						var e = function (n) {
							t.groupId = n.id;
						};
						return Object(d["a"])(Object(d["a"])({}, Object(i["F"])(t)), {}, { confirmGroup: e });
					},
				}),
				f = e("6b0d"),
				O = e.n(f);
			const j = O()(b, [["render", s]]);
			n["default"] = j;
		},
	},
]);
//# sourceMappingURL=chunk-2d0d65df.7ca108af.js.map
