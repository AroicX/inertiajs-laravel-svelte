(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/About copy.svelte":
/*!**********************************************!*\
  !*** ./resources/js/Pages/About copy.svelte ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout.svelte */ "./resources/js/Shared/Layout.svelte");
/* resources/js/Pages/About copy.svelte generated by Svelte v3.7.1 */



// (5:0) <Layout title="Welcome">
function create_default_slot(ctx) {
	var h1, t_1, p;

	return {
		c() {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = "Welcome";
			t_1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			p.textContent = "Welcome to my first Inertia.js app!";
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t_1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t_1);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var layout = new _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: {
		title: "Welcome",
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});

	return {
		c() {
			layout.$$.fragment.c();
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(layout, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var layout_changes = {};
			if (changed.$$scope) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(layout.$$.fragment, local);

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(layout.$$.fragment, local);
			current = false;
		},

		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(layout, detaching);
		}
	};
}

class About_copy extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (About_copy);


/***/ }),

/***/ "./resources/js/Shared/Layout.svelte":
/*!*******************************************!*\
  !*** ./resources/js/Shared/Layout.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inertia-svelte */ "./node_modules/inertia-svelte/src/index.js");
/* resources/js/Shared/Layout.svelte generated by Svelte v3.7.1 */



// (13:4) <InertiaLink href="/">
function create_default_slot_2(ctx) {
	var t;

	return {
		c() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Home");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			}
		}
	};
}

// (14:4) <InertiaLink href="/about">
function create_default_slot_1(ctx) {
	var t;

	return {
		c() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("About");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			}
		}
	};
}

// (15:4) <InertiaLink href="/contact">
function create_default_slot(ctx) {
	var t;

	return {
		c() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Contact");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			}
		}
	};
}

function create_fragment(ctx) {
	var title_value, t0, main, header, t1, t2, t3, article, current;

	document.title = title_value = ctx.title;

	var inertialink0 = new inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
		props: {
		href: "/",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	}
	});

	var inertialink1 = new inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
		props: {
		href: "/about",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	}
	});

	var inertialink2 = new inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
		props: {
		href: "/contact",
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	}
	});

	const default_slot_template = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, null);

	return {
		c() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");
			header = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("header");
			inertialink0.$$.fragment.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			inertialink1.$$.fragment.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			inertialink2.$$.fragment.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			article = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("article");

			if (default_slot) default_slot.c();
		},

		l(nodes) {
			if (default_slot) default_slot.l(article_nodes);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, header);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink0, header, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(header, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink1, header, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(header, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink2, header, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, article);

			if (default_slot) {
				default_slot.m(article, null);
			}

			current = true;
		},

		p(changed, ctx) {
			if ((!current || changed.title) && title_value !== (title_value = ctx.title)) {
				document.title = title_value;
			}

			var inertialink0_changes = {};
			if (changed.$$scope) inertialink0_changes.$$scope = { changed, ctx };
			inertialink0.$set(inertialink0_changes);

			var inertialink1_changes = {};
			if (changed.$$scope) inertialink1_changes.$$scope = { changed, ctx };
			inertialink1.$set(inertialink1_changes);

			var inertialink2_changes = {};
			if (changed.$$scope) inertialink2_changes.$$scope = { changed, ctx };
			inertialink2.$set(inertialink2_changes);

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, ctx, changed, null),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_template, ctx, null)
				);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink0.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink1.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink2.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink2.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink0);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink1);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink2);

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { title, $$slots, $$scope };
}

class Layout extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["title"]);
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ })

}]);