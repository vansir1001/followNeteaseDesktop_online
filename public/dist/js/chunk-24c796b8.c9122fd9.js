(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-24c796b8"],
	{
		"17b3": function (e, t, i) {
			"use strict";
			i.r(t);
			i("caad"), i("2532"), i("d81d"), i("b0c0"), i("fb6a");
			var n = i("7a23"),
				c = Object(n["R"])("data-v-53848d39");
			Object(n["w"])("data-v-53848d39");
			var o = { class: "videoDetail row flex-center" },
				r = { class: "h-100 pb-5 layoutWidth overflow-scroll hideScrollBar d-flex justify-content-between" },
				l = { class: "leftArea pe-5" },
				a = Object(n["i"])("span", { class: "ms-3 fs-4" }, "视频详情", -1),
				d = { class: "mt-3 d-flex align-items-center justify-content-between" },
				s = { class: "d-flex align-items-center" },
				u = { class: "text-muted canSelect" },
				b = { class: "fs-4 fw-bold mt-4" },
				f = { class: "mt-3 text-muted opacity-50" },
				p = { class: "me-5" },
				j = { key: 0 },
				O = { class: "d-flex mt-4 flex-wrap" },
				v = { class: "mt-6 d-flex justify-content-start mt-4" },
				m = { class: "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center" },
				h = { class: "mt-5" },
				x = { class: "flex-center mt-3 mb-5 cursor-pointer" },
				w = { class: "flex-center border rounded-pill moreHotComments fs-5" },
				y = Object(n["i"])("span", null, "更多精彩评论", -1),
				k = { class: "rightArea flex-grow-1 flex-shrink-0" },
				C = Object(n["i"])("div", { class: "fs-4 py-3" }, "相关推荐", -1),
				g = { class: "position-absolute top-0 end-0 pe-1 pt-1 d-flex align-items-center" },
				D = { class: "ms-1" },
				V = { class: "position-absolute bottom-0 end-0 pe-1 pb-1" },
				I = { class: "ms-3 recVideoInfo d-flex flex-column justify-content-center" },
				B = { class: "mb-2 fs-5" },
				E = { class: "text-muted opacity-75 text-ellipsis" },
				M = Object(n["i"])("div", { class: "text-center fs-5" }, "确定不再收藏该视频？", -1);
			Object(n["u"])();
			var T = c(function (e, t, i, T, R, L) {
					var U,
						Y,
						A,
						F,
						P = Object(n["B"])("arrow-left-icon"),
						_ = Object(n["B"])("PraiseIcon"),
						q = Object(n["B"])("CollectBoxIcon"),
						S = Object(n["B"])("ShareIcon"),
						$ = Object(n["B"])("ArrowRightThinIcon"),
						z = Object(n["B"])("CommonComment"),
						J = Object(n["B"])("hollow-play-icon"),
						G = Object(n["B"])("CommonModal"),
						H = Object(n["B"])("CommonToast");
					return (
						Object(n["t"])(),
						Object(n["f"])(
							n["a"],
							null,
							[
								Object(n["i"])("div", o, [
									Object(n["i"])("div", r, [
										Object(n["i"])("div", l, [
											Object(n["i"])(
												"div",
												{
													class: "d-flex align-items-center py-3 cursor-pointer",
													onClick:
														t[1] ||
														(t[1] = function (t) {
															return e.$router.back();
														}),
												},
												[Object(n["i"])(P, { color: "#000000", width: "18px", height: "18px" }), a]
											),
											Object(n["i"])("div", d, [
												Object(n["i"])("div", s, [
													Object(n["i"])(
														"div",
														{
															style: { backgroundImage: 'url("'.concat(e.videoDetail.avatarUrl, '")') },
															class: "videoAvatar rounded-pill me-3",
														},
														null,
														4
													),
													Object(n["i"])(
														"div",
														u,
														Object(n["E"])(
															null === (U = e.videoDetail) || void 0 === U || null === (Y = U.creator) || void 0 === Y
																? void 0
																: Y.nickname
														),
														1
													),
												]),
												e.userFollows
													.map(function (e) {
														return e.userId;
													})
													.includes(
														null === (A = e.videoDetail) || void 0 === A || null === (F = A.creator) || void 0 === F
															? void 0
															: F.userId
													)
													? (Object(n["t"])(),
													  Object(n["f"])(
															"div",
															{
																key: 0,
																class: "haveFocus text-muted cursor-pointer text-dark px-4 py-2 rounded-pill flex-center",
																onClick:
																	t[2] ||
																	(t[2] = function (t) {
																		return e.followUser(!1);
																	}),
															},
															" √已关注 "
													  ))
													: (Object(n["t"])(),
													  Object(n["f"])(
															"div",
															{
																key: 1,
																class: "focus cursor-pointer text-dark px-4 py-2 rounded-pill flex-center",
																onClick:
																	t[3] ||
																	(t[3] = function (t) {
																		return e.followUser(!0);
																	}),
															},
															"+ 关注"
													  )),
											]),
											Object(n["i"])("div", b, Object(n["E"])(e.videoDetail.title), 1),
											Object(n["i"])("div", f, [
												Object(n["i"])("span", p, "发布：" + Object(n["E"])(e.YYYYMMDD(e.videoDetail.publishTime)), 1),
												e.videoDetail.playCount
													? (Object(n["t"])(),
													  Object(n["f"])(
															"span",
															j,
															"播放：" + Object(n["E"])(e.playCount(e.videoDetail.playCount)) + "次",
															1
													  ))
													: Object(n["g"])("", !0),
											]),
											Object(n["i"])("div", O, [
												(Object(n["t"])(!0),
												Object(n["f"])(
													n["a"],
													null,
													Object(n["z"])(e.videoDetail.videoGroup, function (e) {
														return (
															Object(n["t"])(),
															Object(n["f"])(
																"div",
																{ class: "groupTag rounded-pill px-3", key: e.id },
																Object(n["E"])(e.name),
																1
															)
														);
													}),
													128
												)),
											]),
											Object(n["i"])("div", v, [
												e.videoDetailInfo.liked
													? (Object(n["t"])(),
													  Object(n["f"])(
															"div",
															{
																key: 0,
																onClick:
																	t[4] ||
																	(t[4] = function (t) {
																		return e.likeMV(!1);
																	}),
																class: "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
															},
															[
																Object(n["i"])(_, {
																	width: "14px",
																	height: "14px",
																	class: "me-2 translate-y--10",
																	color: "red",
																}),
																Object(n["h"])(
																	"已赞(" + Object(n["E"])(e.playCount(e.videoDetail.praisedCount)) + ") ",
																	1
																),
															]
													  ))
													: (Object(n["t"])(),
													  Object(n["f"])(
															"div",
															{
																key: 1,
																onClick:
																	t[5] ||
																	(t[5] = function (t) {
																		return e.likeMV(!0);
																	}),
																class: "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
															},
															[
																Object(n["i"])(_, { width: "14px", height: "14px", class: "me-2 translate-y--10" }),
																Object(n["h"])(
																	"赞(" + Object(n["E"])(e.playCount(e.videoDetail.praisedCount)) + ") ",
																	1
																),
															]
													  )),
												e.collectedMVList
													.map(function (e) {
														return e.vid;
													})
													.includes(e.videoDetail.vid)
													? (Object(n["t"])(),
													  Object(n["f"])(
															"div",
															{
																key: 2,
																onClick:
																	t[6] ||
																	(t[6] = function (t) {
																		return e.collectVideo(!1);
																	}),
																class: "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
															},
															[
																Object(n["i"])(q, { color: "red", width: "16px", height: "16px", class: "me-2" }),
																Object(n["h"])(
																	"已收藏(" + Object(n["E"])(e.playCount(e.videoDetail.subscribeCount)) + ") ",
																	1
																),
															]
													  ))
													: (Object(n["t"])(),
													  Object(n["f"])(
															"div",
															{
																key: 3,
																onClick:
																	t[7] ||
																	(t[7] = function (t) {
																		return e.collectVideo(!0);
																	}),
																class: "px-4 py-2 border border-1 rounded-pill cursor-pointer opBtn flex-center",
															},
															[
																Object(n["i"])(q, { width: "16px", height: "16px", class: "me-2" }),
																Object(n["h"])(
																	"收藏(" + Object(n["E"])(e.playCount(e.videoDetail.subscribeCount)) + ") ",
																	1
																),
															]
													  )),
												Object(n["i"])("div", m, [
													Object(n["i"])(S, { width: "16px", height: "16px", class: "me-2" }),
													Object(n["h"])("分享(" + Object(n["E"])(e.playCount(e.videoDetail.shareCount)) + ") ", 1),
												]),
											]),
											Object(n["i"])("div", h, [
												Object(n["i"])(
													z,
													{
														api: function () {
															return e.getVideoCommentApi({ id: e.$route.query.videoId });
														},
													},
													{
														hotCommentsBotttom: c(function () {
															return [
																Object(n["i"])("div", x, [
																	Object(n["i"])("div", w, [y, Object(n["i"])($, { width: "17", height: "17" })]),
																]),
															];
														}),
														_: 1,
													},
													8,
													["api"]
												),
											]),
										]),
										Object(n["i"])("div", k, [
											C,
											(Object(n["t"])(!0),
											Object(n["f"])(
												n["a"],
												null,
												Object(n["z"])(e.recommendVideoList.slice(0, 5), function (t, i) {
													var c, o;
													return (
														Object(n["t"])(),
														Object(n["f"])(
															"div",
															{
																key: i,
																class: "recVideoItem overflow-hidden rounded-3 mb-3 d-flex cursor-pointer",
																onClick: function (i) {
																	return e.$router.push({ name: "videoDetail", query: { videoId: t.data.vid } });
																},
															},
															[
																Object(n["i"])(
																	"div",
																	{
																		class: "recVideoCover bg-base text-white position-relative overflow-hidden rounded-3",
																		style: { backgroundImage: "url(".concat(t.data.coverUrl, ")") },
																	},
																	[
																		Object(n["i"])("div", g, [
																			Object(n["i"])(J, { width: "11px", height: "11px", class: "" }),
																			Object(n["i"])(
																				"span",
																				D,
																				Object(n["E"])(e.playCount(t.data.praisedCount)),
																				1
																			),
																		]),
																		Object(n["i"])("div", V, Object(n["E"])(e.playTime(t.data.playTime)), 1),
																	],
																	4
																),
																Object(n["i"])("div", I, [
																	Object(n["i"])("div", B, Object(n["E"])(t.data.title), 1),
																	Object(n["i"])(
																		"div",
																		E,
																		"by " +
																			Object(n["E"])(
																				null === (c = t.data) ||
																					void 0 === c ||
																					null === (o = c.creator) ||
																					void 0 === o
																					? void 0
																					: o.nickname
																			),
																		1
																	),
																]),
															],
															8,
															["onClick"]
														)
													);
												}),
												128
											)),
										]),
									]),
									Object(n["i"])(
										G,
										{
											visible: e.modalVisible,
											"onUpdate:visible":
												t[8] ||
												(t[8] = function (t) {
													return (e.modalVisible = t);
												}),
											onConfirm: e.okCollection,
										},
										{
											default: c(function () {
												return [M];
											}),
											_: 1,
										},
										8,
										["visible", "onConfirm"]
									),
								]),
								Object(n["i"])(H, { ref: "commonToast" }, null, 512),
							],
							64
						)
					);
				}),
				R = i("5530"),
				L = i("1da1"),
				U = (i("96cf"), i("d3b7"), i("6c02")),
				Y = i("c5e7"),
				A = i("17b9"),
				F = i("f727"),
				P = i("d4c0"),
				_ = Object(n["j"])({
					setup: function () {
						var e = Object(U["c"])(),
							t = Object(n["x"])({
								videoId: Object(n["d"])(function () {
									return e.query.videoId;
								}),
								videoDetail: {},
								videoUrls: [],
								commonToast: null,
								userFollows: [],
								likedMVList: [],
								modalVisible: !1,
								collectedMVList: [],
								videoDetailInfo: {},
								recommendVideoList: [],
								commentObj: {},
							}),
							i = function () {
								return new Promise(function (e, i) {
									Object(Y["h"])({ id: t.videoId }).then(
										(function () {
											var i = Object(L["a"])(
												regeneratorRuntime.mark(function i(n) {
													return regeneratorRuntime.wrap(function (i) {
														while (1)
															switch ((i.prev = i.next)) {
																case 0:
																	if (200 !== n.code) {
																		i.next = 5;
																		break;
																	}
																	return (t.videoDetail = n.data), (i.next = 4), c(n.data.vid);
																case 4:
																	e(null);
																case 5:
																case "end":
																	return i.stop();
															}
													}, i);
												})
											);
											return function (e) {
												return i.apply(this, arguments);
											};
										})()
									);
								});
							},
							c = function (e) {
								return new Promise(function (i, n) {
									Object(Y["i"])({ vid: e }).then(function (e) {
										200 === e.code && ((t.videoDetailInfo = e), i(null));
									});
								});
							},
							o = function () {
								Object(Y["j"])({ id: t.videoId }).then(function (e) {
									200 === e.code && (t.videoUrls = e.urls);
								});
							},
							r = function () {
								return new Promise(function (e, i) {
									Object(A["h"])().then(function (i) {
										200 === i.code && ((t.userFollows = i.follow), e(null));
									});
								});
							},
							l = function (e) {
								Object(F["a"])({ t: e ? 1 : 0, id: t.videoDetail.creator.userId }).then(
									(function () {
										var i = Object(L["a"])(
											regeneratorRuntime.mark(function i(n) {
												return regeneratorRuntime.wrap(function (i) {
													while (1)
														switch ((i.prev = i.next)) {
															case 0:
																if (200 !== n.code) {
																	i.next = 4;
																	break;
																}
																return (i.next = 3), r();
															case 3:
																t.commonToast.success(e ? "已关注" : "已取消关注");
															case 4:
															case "end":
																return i.stop();
														}
												}, i);
											})
										);
										return function (e) {
											return i.apply(this, arguments);
										};
									})()
								);
							},
							a = function () {
								return new Promise(function (e, i) {
									Object(Y["f"])().then(function (i) {
										200 === i.code && ((t.likedMVList = i.data.feeds), e(null));
									});
								});
							},
							d = function (e) {
								Object(Y["k"])({ id: t.videoDetail.vid, t: e ? 1 : 0 }).then(
									(function () {
										var n = Object(L["a"])(
											regeneratorRuntime.mark(function n(c) {
												return regeneratorRuntime.wrap(function (n) {
													while (1)
														switch ((n.prev = n.next)) {
															case 0:
																if (200 !== c.code) {
																	n.next = 8;
																	break;
																}
																return (n.next = 3), a();
															case 3:
																return (n.next = 5), i();
															case 5:
																t.commonToast.success(e ? "已赞" : "已取消赞"), (n.next = 9);
																break;
															case 8:
																t.commonToast.warn(c.msg);
															case 9:
															case "end":
																return n.stop();
														}
												}, n);
											})
										);
										return function (e) {
											return n.apply(this, arguments);
										};
									})()
								);
							},
							s = function () {
								Object(Y["c"])().then(function (e) {
									200 === e.code && (t.collectedMVList = e.data);
								});
							},
							u = function () {
								Object(Y["g"])().then(function (e) {
									200 === e.code && (t.recommendVideoList = e.datas);
								});
							},
							b = function (e) {
								e || (t.modalVisible = !1),
									Object(Y["a"])({ t: e ? 1 : 0, id: t.videoDetail.vid }).then(
										(function () {
											var n = Object(L["a"])(
												regeneratorRuntime.mark(function n(c) {
													return regeneratorRuntime.wrap(function (n) {
														while (1)
															switch ((n.prev = n.next)) {
																case 0:
																	if (200 !== c.code) {
																		n.next = 6;
																		break;
																	}
																	return (n.next = 3), s();
																case 3:
																	return (n.next = 5), i();
																case 5:
																	t.commonToast.success(e ? "已收藏" : "已取消收藏");
																case 6:
																case "end":
																	return n.stop();
															}
													}, n);
												})
											);
											return function (e) {
												return n.apply(this, arguments);
											};
										})()
									);
							};
						Object(n["L"])(
							function () {
								return t.videoId;
							},
							function () {
								i(), o(), r(), a(), s(), u();
							},
							{ immediate: !0 }
						);
						var f = function () {};
						return Object(R["a"])(
							Object(R["a"])({}, Object(n["F"])(t)),
							{},
							{
								followUser: l,
								playCount: P["f"],
								YYYYMMDD: P["a"],
								playTime: P["g"],
								likeMV: d,
								collectVideo: b,
								getVideoCommentApi: F["i"],
								okCollection: f,
							}
						);
					},
				}),
				q = (i("b8b3"), i("6b0d")),
				S = i.n(q);
			const $ = S()(_, [
				["render", T],
				["__scopeId", "data-v-53848d39"],
			]);
			t["default"] = $;
		},
		b1fd: function (e, t, i) {},
		b8b3: function (e, t, i) {
			"use strict";
			i("b1fd");
		},
	},
]);
//# sourceMappingURL=chunk-24c796b8.c9122fd9.js.map
