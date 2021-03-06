(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-2d21ae99"],
	{
		be11: function (e, t, n) {
			"use strict";
			n.r(t);
			var c = n("5530"),
				r = (n("d81d"), n("b0c0"), n("4d90"), n("caad"), n("2532"), n("7a23")),
				a = { class: "px-5 py-4" },
				i = { class: "text-muted me-3" },
				o = { class: "me-3" };
			function u(e, t, n, u, s, d) {
				var l,
					b = Object(r["B"])("HorizontalNav"),
					f = Object(r["B"])("LikedIcon"),
					j = Object(r["B"])("HaveLikedIcon"),
					O = Object(r["B"])("DownloadMusicIcon"),
					p = Object(r["B"])("musicList"),
					m = Object(r["B"])("CommonToast");
				return (
					Object(r["t"])(),
					Object(r["f"])(
						r["a"],
						null,
						[
							Object(r["i"])("div", a, [
								Object(r["i"])(b, { navs: e.navs }, null, 8, ["navs"]),
								Object(r["i"])(
									p,
									{
										columns: e.columns,
										dataSource:
											null === (l = e.dataSource) || void 0 === l
												? void 0
												: l.map(function (e, t) {
														return Object(c["a"])(Object(c["a"])({}, e), {}, { index: t });
												  }),
										emptyText: "暂无搜索结果，搜搜其他关键词吧~",
									},
									{
										toolBar: Object(r["N"])(function (t) {
											var n = t.id,
												c = t.index,
												a = t.name;
											return [
												Object(r["i"])("span", i, Object(r["E"])(String(c + 1).padStart(2, "0")), 1),
												Object(r["i"])("span", o, [
													e.likedMusicList.includes(n)
														? (Object(r["t"])(),
														  Object(r["f"])(
																j,
																{
																	key: 1,
																	class: "cursor-pointer",
																	onClick: function (t) {
																		return e.collectMusic(!1, n);
																	},
																	width: "15",
																	height: "15",
																},
																null,
																8,
																["onClick"]
														  ))
														: (Object(r["t"])(),
														  Object(r["f"])(
																f,
																{
																	key: 0,
																	class: "cursor-pointer",
																	onClick: function (t) {
																		return e.collectMusic(!0, n);
																	},
																	width: "15",
																	height: "15",
																},
																null,
																8,
																["onClick"]
														  )),
												]),
												Object(r["i"])(
													O,
													{
														onClick: function (t) {
															return e.handleDownloadMusic({ id: n, name: a });
														},
														class: "cursor-pointer",
														width: "15",
														height: "15",
													},
													null,
													8,
													["onClick"]
												),
											];
										}),
										_: 1,
									},
									8,
									["columns", "dataSource"]
								),
							]),
							Object(r["i"])(m, { ref: "toastRef" }, null, 512),
						],
						64
					)
				);
			}
			var s = n("1da1"),
				d = (n("96cf"), n("a15b"), n("b137")),
				l = n("6c02"),
				b = n("5502"),
				f = n("42ba"),
				j = n("d4c0"),
				O = n("54ba"),
				p = n("3c08"),
				m = n("6e21"),
				h = Object(r["j"])({
					components: { MusicList: f["default"] },
					setup: function () {
						var e = Object(l["c"])(),
							t = Object(b["b"])(),
							n = Object(r["x"])({
								navs: [{ title: "单曲", active: !0 }],
								keywords: Object(r["d"])(function () {
									return e.query.keyword;
								}),
								songs: [],
								columns: [
									{ title: "", span: 1, dataIndex: "toolBar", slots: { customRender: "toolBar" } },
									{ title: "音乐标题", dataIndex: "name", span: 3, slots: { customRender: "name" } },
									{
										title: "歌手",
										dataIndex: "ar",
										span: 3,
										render: function (e) {
											return e
												.map(function (e) {
													return e.name;
												})
												.join("、");
										},
									},
									{
										title: "专辑",
										dataIndex: "al",
										span: 2,
										render: function (e) {
											return e.name;
										},
									},
									{
										title: "时长",
										dataIndex: "dt",
										span: 1,
										render: function (e) {
											return Object(j["g"])(e);
										},
									},
								],
								dataSource: [],
								likedMusicList: Object(r["d"])(function () {
									return t.state.likedMusicList;
								}),
								toastRef: Object(r["y"])(null),
							});
						Object(r["L"])(
							function () {
								return n.keywords;
							},
							(function () {
								var e = Object(s["a"])(
									regeneratorRuntime.mark(function e(c) {
										return regeneratorRuntime.wrap(function (e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														if (!c) {
															e.next = 4;
															break;
														}
														return (
															Object(d["a"])({ keywords: c, type: 1 }).then(
																(function () {
																	var e = Object(s["a"])(
																		regeneratorRuntime.mark(function e(t) {
																			return regeneratorRuntime.wrap(function (e) {
																				while (1)
																					switch ((e.prev = e.next)) {
																						case 0:
																							if (200 !== t.code) {
																								e.next = 4;
																								break;
																							}
																							return (e.next = 3), Object(j["b"])(t.result.songs || []);
																						case 3:
																							n.dataSource = e.sent;
																						case 4:
																						case "end":
																							return e.stop();
																					}
																			}, e);
																		})
																	);
																	return function (t) {
																		return e.apply(this, arguments);
																	};
																})()
															),
															(e.next = 4),
															t.dispatch("getLikedMusicList")
														);
													case 4:
													case "end":
														return e.stop();
												}
										}, e);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
							{ immediate: !0 }
						);
						var a = function (e, c) {
								Object(O["h"])({ id: c, like: e })
									.then(
										(function () {
											var c = Object(s["a"])(
												regeneratorRuntime.mark(function c(r) {
													return regeneratorRuntime.wrap(function (c) {
														while (1)
															switch ((c.prev = c.next)) {
																case 0:
																	if (200 !== r.code) {
																		c.next = 6;
																		break;
																	}
																	return (c.next = 3), t.dispatch("getLikedMusicList");
																case 3:
																	n.toastRef.success(e ? "已添加到我喜欢的音乐" : "取消喜欢成功"), (c.next = 7);
																	break;
																case 6:
																	n.toastRef.error(e ? "添加失败" : "取消喜欢失败");
																case 7:
																case "end":
																	return c.stop();
															}
													}, c);
												})
											);
											return function (e) {
												return c.apply(this, arguments);
											};
										})()
									)
									.catch(function (e) {
										n.toastRef.error("请求失败");
									});
							},
							i = function (e) {
								var t = e.id,
									c = e.name;
								Object(m["c"])({ id: t }).then(function (e) {
									if (200 === e.code) {
										var t = e.data;
										t && t.length
											? Object(p["c"])(t[0].url, c)
													.then(function () {
														n.toastRef.success("已添加至下载");
													})
													.catch(function () {
														n.toastRef.warn("下载失败");
													})
											: n.toastRef.warn("获取音乐链接失败");
									}
								});
							};
						return Object(c["a"])(Object(c["a"])({}, Object(r["F"])(n)), {}, { collectMusic: a, handleDownloadMusic: i });
					},
				}),
				k = n("6b0d"),
				w = n.n(k);
			const v = w()(h, [["render", u]]);
			t["default"] = v;
		},
	},
]);
//# sourceMappingURL=chunk-2d21ae99.67f08e51.js.map
