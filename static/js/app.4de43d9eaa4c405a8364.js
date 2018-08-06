webpackJsonp([0],{

/***/ "+eqk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingStateStore__ = __webpack_require__("SCW7");


const accountStore = {
  data: {
    loggedIn: false,
    account: null
  },
  methods: {
    logout: function () {
      localStorage.setItem("token", null);
      accountStore.data.account = null;
      console.log("logged OUT!");
    },
    login: function (token) {
      localStorage.setItem("token", token);
      accountStore.methods.refreshAccount();
      console.log("logged IN!");
    },
    refreshAccount: function (callback) {
      if (!localStorage.getItem("token")) {
        accountStore.data.account = null;
        return;
      }
      __WEBPACK_IMPORTED_MODULE_1__LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getAccountInfo", { token: localStorage.getItem("token") }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1__LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        accountStore.data.account = response.data;
        if (callback) {
          callback();
        }
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_1__LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        //this.errors.push(e)
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (accountStore);

/***/ }),

/***/ "/oiM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "0Y9C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PayReceipt_vue__ = __webpack_require__("RpFm");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d1ede62_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PayReceipt_vue__ = __webpack_require__("fRqY");
function injectStyle (ssrContext) {
  __webpack_require__("Wlz4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PayReceipt_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d1ede62_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PayReceipt_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "0tJt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChangePassword_vue__ = __webpack_require__("Wda3");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10808f90_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChangePassword_vue__ = __webpack_require__("X9pr");
function injectStyle (ssrContext) {
  __webpack_require__("unqF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChangePassword_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10808f90_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChangePassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "0x4Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"tutor-search",attrs:{"onSubmit":"console.log('rhfghfg')"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subjectVal),expression:"subjectVal"}],staticClass:"search-input",attrs:{"placeholder":"Subject","id":"subject"},domProps:{"value":(_vm.subjectVal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.subjectVal=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.zipCodeVal),expression:"zipCodeVal"}],staticClass:"search-input",attrs:{"placeholder":"Zip Code","id":"zipCode"},domProps:{"value":(_vm.zipCodeVal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.zipCodeVal=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.distanceVal),expression:"distanceVal"}],staticClass:"search-input",attrs:{"type":"number","placeholder":"distance","min":"1","max":"5","id":"distance"},domProps:{"value":(_vm.distanceVal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.distanceVal=$event.target.value}}}),_c('div',{staticClass:"miles-desc"},[_vm._v("miles away")]),_vm._v(" "),_c('router-link',{staticClass:"color-button",attrs:{"id":"search-button","to":'Tutors'+ _vm.requestString}},[_vm._v("Find Tutors")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "3997":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3f0r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const SubjectTypesStore = {
    data: {
        subjects: {
            subject: "",
            sublist: [{
                subject: "Mathematics",
                sublist: [{
                    subject: "Elementary"
                }, {
                    subject: "Pre Algebra"
                }, {
                    subject: "Algebra 1"
                }, {
                    subject: "Algebra 2 - including trigonometry"
                }, {
                    subject: "Geometry"
                }, {
                    subject: "Pre Calculus"
                }, {
                    subject: "AP Calculus AB"
                }, {
                    subject: "AP Calculus BC"
                }, {
                    subject: "AP Statistics"
                }]
            }, {
                subject: "Applied Mathematics",
                sublist: [{
                    subject: "Computer Programming - Python & Java"
                }, {
                    subject: "AP Computer Science A"
                }, {
                    subject: "AP Computer Science Principles"
                }, {
                    subject: "Mobile App Development and Programming"
                }, {
                    subject: "PLTW Introduction to Engineering Design"
                }, {
                    subject: "PLTW Principles of Engineering Honors"
                }, {
                    subject: "PLTW Digital Electronics Honors"
                }, {
                    subject: "Architecture"
                }, {
                    subject: "PLTW Civil Engineering and Architecture Honors"
                }, {
                    subject: "PLTW Engineering Design and Development Honors"
                }, {
                    subject: "Web Development"
                }, {
                    subject: "Game Development"
                }]
            }, {
                subject: "English/Language Arts",
                sublist: [{
                    subject: "Elementary"
                }, {
                    subject: "Intermediate"
                }, {
                    subject: "High School - including AP Language and Literature"
                }, {
                    subject: "Journalism"
                }, {
                    subject: "Acting"
                }, {
                    subject: "College Essay Writing"
                }]
            }, {
                subject: "Social Studies",
                sublist: [{
                    subject: "Elementary"
                }, {
                    subject: "Intermediate"
                }, {
                    subject: "World History"
                }, {
                    subject: "AP World History"
                }, {
                    subject: "Geography"
                }, {
                    subject: "AP Human Geography"
                }, {
                    subject: "European History"
                }, {
                    subject: "AP United States History"
                }, {
                    subject: "Government"
                }, {
                    subject: "AP Government/AP Comparative Government"
                }, {
                    subject: "Psychology"
                }, {
                    subject: "AP Psychology"
                }, {
                    subject: "Sociology (Honors)"
                }, {
                    subject: "Philosophy (Honors)"
                }, {
                    subject: "Constitutional Law"
                }, {
                    subject: "AP Microeconomics"
                }, {
                    subject: "AP Macroeconomics"
                }, {
                    subject: "World Religions"
                }, {
                    subject: "Native World Cultures"
                }, {
                    subject: "Global Relations"
                }, {
                    subject: "Political Thought and Its Literature"
                }]
            }, {
                subject: "Applied Science",
                sublist: [{
                    subject: "Introduction to Business"
                }, {
                    subject: "Business Applications and Technology 1"
                }, {
                    subject: "Business Applications and Technology 2"
                }, {
                    subject: "Accounting 1"
                }, {
                    subject: "Accounting 2 Honors"
                }, {
                    subject: "Advanced Accounting Honors"
                }, {
                    subject: "Marketing"
                }, {
                    subject: "Entrepreneurship"
                }, {
                    subject: "Business Law"
                }, {
                    subject: "Investment Management"
                }, {
                    subject: "Personal Finance"
                }, {
                    subject: "Entrepreneurial Tactics Accelerated"
                }]
            }, {
                subject: "Science",
                sublist: [{
                    subject: "Elementary"
                }, {
                    subject: "Intermediate"
                }, {
                    subject: "Chemistry"
                }, {
                    subject: "AP Chemistry"
                }, {
                    subject: "Biology"
                }, {
                    subject: "AP Biology"
                }, {
                    subject: "Human Anatomy and Physiology"
                }, {
                    subject: "Physics"
                }, {
                    subject: "AP Physics 1"
                }, {
                    subject: "AP Physics 2"
                }, {
                    subject: "AP Physics C"
                }, {
                    subject: "AP Environmental Science"
                }, {
                    subject: "Earth Science"
                }]
            }, {
                subject: "World Languages",
                sublist: [{
                    subject: "Spanish",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "Spanish 1"
                    }, {
                        subject: "Spanish 2"
                    }, {
                        subject: "Spanish 3"
                    }, {
                        subject: "Spanish 4"
                    }, {
                        subject: "AP Spanish 5 Language and Culture"
                    }, {
                        subject: "AP Spanish 6 Literature and Culture"
                    }]
                }, {
                    subject: "French",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "French 1"
                    }, {
                        subject: "French 2"
                    }, {
                        subject: "French 3"
                    }, {
                        subject: "French 4"
                    }, {
                        subject: "AP French 5"
                    }]
                }, {
                    subject: "Chinese",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "Chinese 1"
                    }, {
                        subject: "Chinese 2"
                    }, {
                        subject: "AP Chinese"
                    }]
                }, {
                    subject: "German",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "German 1"
                    }, {
                        subject: "German 2"
                    }, {
                        subject: "German 3"
                    }, {
                        subject: "AP German"
                    }]
                }, {
                    subject: "Hebrew",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "Hebrew 1"
                    }, {
                        subject: "Hebrew 2"
                    }, {
                        subject: "Hebrew 3"
                    }, {
                        subject: "Hebrew 4"
                    }]
                }, {
                    subject: "Latin",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "Latin 1"
                    }, {
                        subject: "Latin 2"
                    }, {
                        subject: "Latin 3"
                    }, {
                        subject: "AP Latin Vergil"
                    }]
                }, {
                    subject: "Italian",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "High School/AP"
                    }]
                }, {
                    subject: "Japanese",
                    sublist: [{
                        subject: "Elementary"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "High School/AP"
                    }]
                }]
            }, {
                subject: "Fine Arts - Music",
                sublist: [{
                    subject: "Orchestra",
                    sublist: [{
                        subject: "Violin",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Cello",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Viola",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Bass",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Harp",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }]
                }, {
                    subject: "Band",
                    sublist: [{
                        subject: "Trumpet",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Trombone",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "French Horn",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Saxophone",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Oboe",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Bassoon",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Clarinet",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Bass Clarinet",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Baritone",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Tuba",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Flute",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Piccolo",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Percussion",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }, {
                        subject: "Piano",
                        sublist: [{
                            subject: "Beginner"
                        }, {
                            subject: "Intermediate"
                        }, {
                            subject: "Advanced"
                        }]
                    }]
                }, {
                    subject: "Acoustic/Electric Guitar",
                    sublist: [{
                        subject: "Beginner"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "Advanced"
                    }]
                }, {
                    subject: "Bass Guitar",
                    sublist: [{
                        subject: "Beginner"
                    }, {
                        subject: "Intermediate"
                    }, {
                        subject: "Advanced"
                    }]
                }, {
                    subject: "Chorus - vocal lessons"
                }, {
                    subject: "Music Theory - including AP"
                }, {
                    subject: "Indian Classical Carnatic Music"
                }]
            }, {
                subject: "Fine Arts - Art",
                sublist: [{
                    subject: "Drawing"
                }, {
                    subject: "Painting"
                }, {
                    subject: "Studio Art"
                }, {
                    subject: "Computer Art"
                }, {
                    subject: "Ceramics"
                }, {
                    subject: "Sculpture"
                }, {
                    subject: "Metals and Jewelry"
                }, {
                    subject: "AP Art: Drawing, 2D and 3D design"
                }, {
                    subject: "Photography - including AP Photography & Digital Design"
                }, {
                    subject: "AP Art History"
                }]
            }, {
                subject: "Standardized Testing",
                sublist: [{
                    subject: "ACT",
                    sublist: [{
                        subject: "Plan"
                    }, {
                        subject: "Explore"
                    }]
                }, {
                    subject: "PSAT/SAT"
                }, {
                    subject: "SAT Subject Tests",
                    sublist: [{
                        subject: "SAT Subject Test Literature"
                    }, {
                        subject: "SAT Subject Test United States History"
                    }, {
                        subject: "SAT Subject Test World History"
                    }, {
                        subject: "SAT Subject Test in Mathematics Level 1"
                    }, {
                        subject: "SAT Subject Test in Mathematics Level 2"
                    }, {
                        subject: "SAT Subject Test in Biology E/M"
                    }, {
                        subject: "SAT Subject Test in Chemistry"
                    }, {
                        subject: "SAT Subject Test in Physics"
                    }, {
                        subject: "SAT Subject Test in Physics"
                    }, {
                        subject: "SAT Subject Test in Chinese with Listening"
                    }, {
                        subject: "SAT Subject Test in French"
                    }, {
                        subject: "SAT Subject Test in French with Listening"
                    }, {
                        subject: "SAT Subject Test in German"
                    }, {
                        subject: "SAT Subject Test in German with Listening"
                    }, {
                        subject: "SAT Subject Test in Modern Hebrew"
                    }, {
                        subject: "SAT Subject Test in Italian"
                    }, {
                        subject: "SAT Subject Test in Japanese with Listening"
                    }, {
                        subject: "SAT Subject Test in Korean with Listening"
                    }, {
                        subject: "SAT Subject Test in Latin"
                    }, {
                        subject: "SAT Subject Test in Spanish"
                    }, {
                        subject: "SAT Subject Test in Spanish with Listening"
                    }, {
                        subject: ""
                    }]
                }]
            }]
        }

    }
};

/* harmony default export */ __webpack_exports__["a"] = (SubjectTypesStore);

/***/ }),

/***/ "3zb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// Create a Stripe client.
var stripe = Stripe("pk_test_gheuGNTfHiHL1ULiFHNPxlzm");

// Create an instance of Elements.
var elements = stripe.elements();

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      rate: 2499,
      numLessons: 5,
      AccountStore: __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data,
      sources: { data: [] },
      saveCard: true,
      selectedSource: "new",
      sourceToConfirm: null,
      viewConfirmation: false,
      card: elements.create("card", {
        style: {
          base: {
            color: "#32325d",
            lineHeight: "18px",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      })
    };
  },
  created: function () {
    if (!__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account.emailVertified) {
      this.$router.push({ path: "/VertifyEmail/Pay" });
    }
    document.title = "Pay - Owl Tutoring";
    this.getSources();
  },
  mounted: function () {
    var _this = this;
    this.card.mount("#card-element");

    // Handle real-time validation errors from the card Element.
    this.card.addEventListener("change", function (event) {
      if (event.error) {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(event.error.message, true);
      }
      _this.changeToNewSource();
    });

    this.card.on("focus", function (event) {
      _this.changeToNewSource();
    });
  },
  beforeDestroy: function () {
    this.card.unmount();
    this.card.destroy();
  },
  computed: {
    lessonString: function () {
      return this.numLessons + (this.numLessons > 1 ? " Lessons" : " Lesson");
    },
    cost: function () {
      if (this.numLessons * this.rate >= 2499 * 5) {
        return Math.round(this.numLessons * this.rate * .9);
      }
      return this.numLessons * this.rate;
    },
    value: function () {
      return this.numLessons * this.rate;
    }
  },
  methods: {
    changeToNewSource: function () {
      this.selectedSource = "new";
    },
    hideConfirmation: function () {
      this.viewConfirmation = false;
    },
    showConfirmation: function () {
      var _this = this;

      // if new create source with stripe to get info to confirm
      if (_this.selectedSource == "new") {
        var ownerInfo = {
          owner: {
            name: _this.AccountStore.account.firstName + _this.AccountStore.account.lastName,
            email: _this.AccountStore.account.email
          }
        };
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
        stripe.createSource(_this.card, ownerInfo).then(function (result) {
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
          if (result.error) {
            // Inform the user if there was an error.
            __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(result.error.message, true);
          } else {
            // Send the token to your server.
            console.log(result.source);

            // save source locally so that user can then confirm
            _this.sourceToConfirm = result.source;
            _this.viewConfirmation = true;
          }
        });
      } else {
        this.sourceToConfirm = this.selectedSource;
        this.viewConfirmation = true;
      }
    },
    submitPayment: function () {
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      var _this = this;
      if (_this.selectedSource == "new") {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/pay", {
          source: _this.sourceToConfirm,
          token: localStorage.getItem("token"),
          amount: _this.value,
          rate: _this.rate,
          saveCard: _this.saveCard,
          isNew: true
        }).then(function (response) {
          // JSON responses are automatically parsed.
          console.log(response);
          __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
          _this.$router.push({ name: "payReceipt", params: { charge: response.data.charge } });
        }).catch(function (e) {
          console.log(e);
          __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
          //this.errors.push(e)
        });
      } else {
        console.log("using saved source");
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/pay", {
          source: _this.sourceToConfirm,
          token: localStorage.getItem("token"),
          amount: this.value,
          rate: this.rate,
          saveCard: true,
          isNew: false
        }).then(function (response) {
          // JSON responses are automatically parsed.
          console.log(response);
          __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message);
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
          _this.$router.push({ name: "payReceipt", params: { charge: response.data.charge } });
        }).catch(function (e) {
          console.log(e);
          __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
          //this.errors.push(e)
        });
      }
    },
    getSources: function () {
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/savedPayOptions", {
        token: localStorage.getItem("token")
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        //MessageStore.methods.showMessage(response.data.message);
        _this.sources = response.data.sources;
        if (_this.sources.data.length > 0) {
          _this.selectedSource = _this.sources.data[0].id;
        }
        console.log(_this.selectedSource);
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    },
    handleSubmit: function () {
      console.log("bla");
    },
    deleteCard: function (sourceID) {
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/deleteCard", {
        token: localStorage.getItem("token"),
        sourceID: sourceID
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        _this.sources = response.data.sources;
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    }
  }
});

/***/ }),

/***/ "4i+9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account"},[_c('h1',[_vm._v("Account")]),_vm._v(" "),(_vm.AccountStore.account != null)?_c('div',[_c('h1',[_vm._v(_vm._s(_vm.AccountStore.account.firstName)+" "+_vm._s(_vm.AccountStore.account.lastName))]),_vm._v(" "),_c('h4',[_vm._v("Phone: "+_vm._s(_vm.formatedPhone))]),_vm._v(" "),_c('h4',[_vm._v("Email: "+_vm._s(_vm.AccountStore.account.email))]),_vm._v(" "),_c('h4',[_vm._v("Balance: "+_vm._s("$" + _vm.AccountStore.account.balance/100))]),_vm._v(" "),_c('router-link',{attrs:{"to":"changePassword"}},[_vm._v("Change Password")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),(!_vm.AccountStore.account.emailVertified)?_c('div',[_c('router-link',{staticClass:"color-button",attrs:{"to":"VertifyEmail"}},[_vm._v("Vertify Email")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br')],1):_vm._e(),_vm._v(" "),(_vm.AccountStore.account.accountType == 'Tutor')?_c('div',[_c('router-link',{staticClass:"color-button",attrs:{"to":"tutorProfile"}},[_vm._v("Edit Tutor Profile")])],1):_c('div',[_c('router-link',{staticClass:"color-button",attrs:{"to":"pay"}},[_vm._v("Buy More Lessons")])],1)],1):_c('div',[_vm._v("\n    Please Login\n    "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"login"}},[_vm._v("Login")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "4oiV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_SubjectTypesStore__ = __webpack_require__("3f0r");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








__WEBPACK_IMPORTED_MODULE_4_vue__["a" /* default */].component("subject-select", {
  props: ["subjectObj", "selectedSubjects", "parent"],
  template: "<div><div v-for=\"subject in subjectObj.sublist\"><input type=\"checkbox\" :id=\"parent + subject.subject\"  v-model=\"selectedSubjects[parent +':'+ subject.subject.toLowerCase()]\"><label :for=\"parent + subject.subject.toLowerCase()\">{{subject.subject}}</label><div class=\"sub-list\" v-if=\"subject.sublist != null && selectedSubjects[parent +':'+ subject.subject.toLowerCase()]\"><subject-select :subjectObj=\"subject\" :selectedSubjects=\"selectedSubjects\" :parent=\"parent +':'+ subject.subject.toLowerCase()\"/></div></div></div>"
});

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      states: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
      refferalSource: "",
      refferalCode: "",
      bio: "",
      subjectsDesc: "",
      grade: "",
      school: "",
      town: "",
      usState: "",
      zipCode: "",
      experience: "",
      shortBio: "",
      otherInfo: "",
      selectedSubjects: {},
      subjectOptions: __WEBPACK_IMPORTED_MODULE_5__stores_SubjectTypesStore__["a" /* default */].data.subjects
    };
  },
  created: function () {
    var _this = this;
    if (__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account == null) {
      __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].methods.refreshAccount(function () {
        if (__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account && !__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account.emailVertified) {
          console.log("Account not vertified");
          _this.$router.push({ path: "/VertifyEmail/Sessions" });
        }
      });
    }
    __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getTutorProfile", {
      token: localStorage.getItem("token")
    }).then(function (response) {
      // JSON responses are automatically parsed.
      console.log(response);
      __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
      _this.refferalSource = response.data.refferalSource == "NULL" ? "" : response.data.refferalSource;
      _this.refferalCode = response.data.refferalCode == "NULL" ? "" : response.data.refferalCode;
      _this.bio = response.data.bio == "NULL" ? "" : response.data.bio;
      _this.subjectsDesc = response.data.subjectsDesc == "NULL" ? "" : response.data.subjectsDesc;
      _this.selectedSubjects = _this.parseSubjectDataString(response.data.subjects);
      _this.grade = response.data.grade == "0" ? "" : response.data.grade;
      _this.school = response.data.school == "NULL" ? "" : response.data.school;
      _this.town = response.data.town == "NULL" ? "" : response.data.town;
      _this.usState = response.data.usState;
      _this.zipCode = response.data.zipCode == "0" ? "" : response.data.zipCode;
      _this.experience = response.data.experience == "NULL" ? "" : response.data.experience;
      _this.shortBio = response.data.shortBio == "NULL" ? "" : response.data.shortBio;
      _this.otherInfo = response.data.otherInfo == "NULL" ? "" : response.data.otherInfo;
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
    }).catch(function (e) {
      console.log(e);
      __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
      //this.errors.push(e)
    });
  },
  methods: {
    parseSubjectDataString: function (string) {
      var newSubjects = {};
      if (string == null) {
        console.log("no subjects");
        return {};
      }
      var array = string.split(",");
      for (var entry in array) {
        if (array[entry] != "") {
          newSubjects[array[entry]] = true;
        }
      }
      console.log(newSubjects);
      return newSubjects;
    },
    getSubjectDataString: function () {

      console.log(this.selectedSubjects);

      // Clear hidden value that were previously selected
      for (var subject in this.selectedSubjects) {
        if (this.selectedSubjects.hasOwnProperty(subject) && this.selectedSubjects[subject] == false) {
          for (var subjectTwo in this.selectedSubjects) {
            if (this.selectedSubjects.hasOwnProperty(subjectTwo) && subjectTwo.includes(subject)) {
              console.log(subjectTwo);
              this.selectedSubjects[subjectTwo] = false;
            }
          }
        }
      }

      var res = "";
      for (var subject in this.selectedSubjects) {
        if (this.selectedSubjects.hasOwnProperty(subject) && this.selectedSubjects[subject]) {
          res += subject + ",";
        }
      }
      console.log(res);
      return res;
    },
    update: function (done) {
      var _this = this;
      console.log(this.selectedSubjects);
      this.getSubjectDataString();

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/updateTutorProfile", {
        refferalSource: _this.refferalSource,
        refferalCode: _this.refferalCode,
        bio: _this.bio,
        subjectsDesc: _this.subjectsDesc,
        grade: _this.grade,
        school: _this.school,
        town: _this.town,
        usState: _this.usState,
        zipCode: _this.zipCode,
        experience: _this.experience,
        shortBio: _this.shortBio,
        otherInfo: _this.otherInfo,
        subjects: _this.getSubjectDataString().toLowerCase(),
        token: localStorage.getItem("token"),
        done: done
      }).then(function (response) {
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
      }).catch(function (e) {
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    }
  }
});

/***/ }),

/***/ "63kq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      email: "",
      message: ""
    };
  },
  created: function () {
    document.title = "Forgot Password - Owl Tutoring";
    var _this = this;
  },
  methods: {
    sendEmail: function () {
      __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/sendRecoveryEmail", {
        email: _this.email
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        _this.message = response.data.message;
        __WEBPACK_IMPORTED_MODULE_0__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        _this.message = e.response.data.message;
        __WEBPACK_IMPORTED_MODULE_0__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    }
  }
});

/***/ }),

/***/ "97sZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tutors"},[_c('div',{staticClass:"top-info"},[_c('h1',[_vm._v("Tutors")]),_vm._v(" "),_c('Tutor-search',{attrs:{"zipCode":this.$route.query.zipCode,"distance":this.$route.query.distance,"subject":this.$route.query.subject}})],1),_vm._v(" "),_vm._l((_vm.tutors),function(tutor,i){return _c('div',[_c('Tutor',{staticClass:"tutor",attrs:{"tutor":tutor}})],1)})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ApaE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__ = __webpack_require__("SwRy");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_572fc79e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__ = __webpack_require__("u0db");
function injectStyle (ssrContext) {
  __webpack_require__("y8OE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-572fc79e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_572fc79e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "B3Ix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tutor_vue__ = __webpack_require__("D/V5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TutorSearch_vue__ = __webpack_require__("XSyJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Tutor: __WEBPACK_IMPORTED_MODULE_0__Tutor_vue__["a" /* default */],
    TutorSearch: __WEBPACK_IMPORTED_MODULE_1__TutorSearch_vue__["a" /* default */]
  },
  data: function () {
    return {
      tutors: [],
      zipCode: null,
      tutorID: null,
      distance: 0
    };
  },
  methods: {
    getTutors: function () {
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      this.zipCode = this.$route.query.zipCode;

      this.tutorID = this.$route.query.tutorID;
      this.distance = this.$route.query.distance;
      this.subject = this.$route.query.subject;

      console.log(this.zipCode);
      document.title = "Tutors - Owl Tutoring";
      var _this = this;
      var querys = [];
      if (this.tutorID != null) {
        querys.push("tutorID=" + this.tutorID);
      }
      if (this.zipCode != null) {
        querys.push("zipCode=" + this.zipCode);
      }
      if (this.distance != null) {
        querys.push("distance=" + this.distance);
      }
      if (this.subject != null) {
        querys.push("subject=" + this.subject);
      }
      var queryString = "";
      for (var i = 0; i < querys.length; i++) {
        if (i == 0) {
          queryString += "?";
        } else {
          queryString += "&";
        }
        queryString += querys[i];
      }
      console.log("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getTutors" + queryString);
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getTutors" + queryString).then(function (response) {
        // JSON responses are automatically parsed.
        console.log(response);
        _this.tutors = response.data.tutors;
        setTimeout(function () {
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        }, 1000);
      }).catch(function (e) {
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        //this.errors.push(e)
      });
    }
  },
  watch: {
    '$route.query': function () {
      this.getTutors();
    }
  },
  created: function () {
    this.getTutors();
  }
});

/***/ }),

/***/ "B9ub":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BlX+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-margin-container"},[_c('div',{staticClass:"sessions-container"},[_c('h1',[_vm._v("Sessions")]),_vm._v(" "),(_vm.AccountStore.account != null)?_c('div',[_c('div',{staticClass:"nav-grid"},[_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":{ name: 'sessions', params: { display: 'future' }}}},[_vm._v("Schedueled")]),_vm._v(" "),_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":{ name: 'sessions', params: { display: 'history' }}}},[_vm._v("History")]),_vm._v(" "),_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":{ name: 'sessions', params: { display: 'canceled' }}}},[_vm._v("Canceled")])],1),_vm._v(" "),_c('div',{staticClass:"ui-grid"},[_c('div',{staticClass:"balance"},[_vm._v(_vm._s(Math.round(parseFloat(_vm.AccountStore.account.balance)/2500*100)/100)+" Lessons Credits")]),_vm._v(" "),_c('router-link',{staticClass:"moreLessons plain-button",attrs:{"to":"pay"}},[_vm._v("Buy More Lessons")]),_vm._v(" "),_c('button',{staticClass:"makeSession color-button",on:{"click":function($event){_vm.makeSession()}}},[_vm._v("New Session")])],1),_vm._v(" "),(_vm.displaySessions == 0)?_c('div',[_c('h2',{staticClass:"list-message"},[_vm._v("No Sessions")])]):_vm._e(),_vm._v(" "),_c('div',_vm._l((_vm.displaySessions),function(session){return _c('Session',{key:session.ID,attrs:{"session":session},on:{"refresh":_vm.refresh,"cancelNew":function($event){_vm.removeSession($event)}}})}))]):_c('div',[_vm._v("\n      Please Login\n      "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"login"}},[_vm._v("Login")])],1)]),_vm._v(" "),_c('div',{staticClass:"after-margin"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "C2ed":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "C7sY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!!_vm.editing)?_c('div',{staticClass:"session-container"},[_c('div',{staticClass:"session-container-row-1"},[_c('div',{staticClass:"time"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.hour),expression:"hour",modifiers:{"lazy":true}}],staticClass:"time-input inherit-input",attrs:{"size":"2","id":"hour"},domProps:{"value":(_vm.hour)},on:{"change":function($event){_vm.hour=$event.target.value}}}),_vm._v(":"),_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.minute),expression:"minute",modifiers:{"lazy":true}}],staticClass:"inherit-input",attrs:{"size":"2","id":"minute"},domProps:{"value":(_vm.minute)},on:{"change":function($event){_vm.minute=$event.target.value}}}),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.AMPM),expression:"AMPM"}],staticClass:"inherit-input",attrs:{"id":"AMPM"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.AMPM=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{staticClass:"inherit-input",attrs:{"value":"AM"}},[_vm._v("am")]),_vm._v(" "),_c('option',{staticClass:"inherit-input",attrs:{"value":"PM"}},[_vm._v("pm")])])]),_vm._v(" "),_c('div',{staticClass:"date dateEntry"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.month),expression:"month",modifiers:{"lazy":true}}],staticClass:"inherit-input",attrs:{"id":"month","type":"number"},domProps:{"value":(_vm.month)},on:{"focus":function($event){_vm.showCalander=true},"blur":function($event){_vm.showCalander=false},"change":function($event){_vm.month=$event.target.value}}}),_vm._v("/\n        "),_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.day),expression:"day",modifiers:{"lazy":true}}],staticClass:"inherit-input",attrs:{"id":"day","type":"number"},domProps:{"value":(_vm.day)},on:{"focus":function($event){_vm.showCalander=true},"blur":function($event){_vm.showCalander=false},"change":function($event){_vm.day=$event.target.value}}}),_vm._v("/\n        "),_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.year),expression:"year",modifiers:{"lazy":true}}],staticClass:"inherit-input",attrs:{"id":"year","type":"number"},domProps:{"value":(_vm.year)},on:{"focus":function($event){_vm.showCalander=true},"blur":function($event){_vm.showCalander=false},"change":function($event){_vm.year=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"calendar-container",class:{show: _vm.showCalander}},[_c('h2',[_c('button',{on:{"focus":function($event){_vm.showCalander=true},"blur":function($event){_vm.showCalander=false},"click":function($event){_vm.backMonth()}}},[_vm._v(" < ")]),_vm._v("\n            "+_vm._s(_vm.getMonth)+"\n            "),_c('button',{on:{"focus":function($event){_vm.showCalander=true},"blur":function($event){_vm.showCalander=false},"click":function($event){_vm.forwardMonth()}}},[_vm._v(" > ")])]),_vm._v(" "),_vm._l((_vm.dayNames),function(name,i){return _c('div',{staticClass:"calendar-day"},[_vm._v(_vm._s(name))])}),_vm._v(" "),_vm._l((_vm.blankDays),function(blank,i){return _c('div',{staticClass:"calendar-day"})}),_vm._v(" "),_vm._l((_vm.days),function(day,i){return _c('div',{staticClass:"calendar-day",class:{'selectedDay':day == _vm.dayVal.toString() },on:{"click":function($event){_vm.selectDay(day)}}},[_vm._v(_vm._s(day))])})],2)]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sessionLocation),expression:"sessionLocation"}],staticClass:"location inherit-input",attrs:{"placeholder":"Location ex: Cook Library","id":"location"},domProps:{"value":(_vm.sessionLocation)},on:{"input":function($event){if($event.target.composing){ return; }_vm.sessionLocation=$event.target.value}}}),_vm._v(" "),(parseInt(_vm.length)>1)?_c('div',{staticClass:"length"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.length),expression:"length"}],staticClass:"inherit-input",attrs:{"id":"length","size":"1"},domProps:{"value":(_vm.length)},on:{"input":function($event){if($event.target.composing){ return; }_vm.length=$event.target.value}}}),_vm._v("hrs\n      ")]):_c('div',{staticClass:"length"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.length),expression:"length"}],staticClass:"inherit-input",attrs:{"id":"length","size":"1"},domProps:{"value":(_vm.length)},on:{"input":function($event){if($event.target.composing){ return; }_vm.length=$event.target.value}}}),_vm._v("hr\n      ")])]),_vm._v(" "),(_vm.session.isnew)?_c('div',{staticClass:"session-container-row-2"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.otherAccount),expression:"otherAccount"}],staticClass:"name",attrs:{"id":"tutor"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.otherAccount=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_vm._l((_vm.relatedAccounts),function(account,i){return _c('option',{domProps:{"value":account}},[_vm._v(_vm._s(account.firstName.S)+" "+_vm._s(account.lastName.S))])}),_vm._v(" "),(_vm.AccountStore.account.accountType == 'Client')?_c('option',{attrs:{"value":"findMore"}},[_vm._v("Find more Tutors")]):_vm._e()],2),_vm._v(" "),(_vm.otherAccount != null && _vm.AccountStore.account.accountType =='Tutor' && _vm.otherAccount.students.L.length > 1)?_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.studentName),expression:"studentName"}],staticClass:"name",attrs:{"id":"student"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.studentName=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.otherAccount.students.L),function(student,i){return _c('option',{domProps:{"value":student.S}},[_vm._v(_vm._s(student.S))])}))]):_vm._e(),_vm._v(" "),(_vm.AccountStore.account.accountType =='Client' && _vm.AccountStore.account.students.L.length > 1)?_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.studentName),expression:"studentName"}],staticClass:"name",attrs:{"id":"student"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.studentName=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.AccountStore.account.students.L),function(student,i){return _c('option',{domProps:{"value":student.S}},[_vm._v(_vm._s(student.S))])}))]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"button-two plain-button",on:{"click":function($event){_vm.cancelNew()}}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"button-three color-button",on:{"click":function($event){_vm.scheduleLesson()}}},[_vm._v("Schedule Lesson")])]):_c('div',{staticClass:"session-container-row-2"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.session.name))]),_vm._v(" "),(!_vm.session.canceled)?_c('button',{staticClass:"button-one plain-button",on:{"click":function($event){_vm.changeCancelState(true)}}},[_vm._v("Cancel Lesson")]):_vm._e(),_vm._v(" "),(_vm.session.canceled)?_c('button',{staticClass:"button-one plain-button",on:{"click":function($event){_vm.changeCancelState(false)}}},[_vm._v("Un Cancel Lesson")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"button-two plain-button",on:{"click":function($event){_vm.cancelEdit()}}},[_vm._v("Cancel Edit")]),_vm._v(" "),_c('button',{staticClass:"button-three color-button",on:{"click":function($event){_vm.editLesson()}}},[_vm._v("Save Changes")])])]):_c('div',{staticClass:"session-container"},[_c('div',{staticClass:"session-container-row-1"},[_c('div',{staticClass:"time"},[_vm._v(_vm._s(_vm.timeString))]),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v(_vm._s(_vm.dateString))]),_vm._v(" "),_c('div',{staticClass:"location"},[_vm._v(_vm._s(_vm.sessionLocation))]),_vm._v(" "),_c('div',{staticClass:"length"},[_vm._v(_vm._s(_vm.lengthString))])]),_vm._v(" "),_c('div',{staticClass:"session-container-row-2"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.session.name))]),_vm._v(" "),(_vm.session.studentName)?_c('div',{staticClass:"studentName"},[_vm._v(_vm._s(_vm.session.studentName))]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"button-two plain-button",on:{"click":function($event){_vm.changeToEdit()}}},[_vm._v("Edit")]),_vm._v(" "),(_vm.isConfirmed)?_c('button',{staticClass:"button-three color-button",on:{"click":function($event){_vm.confirmLesson()}}},[_vm._v("Confirm")]):_c('div',{staticClass:"button-three"},[_vm._v("Confirmed")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CgJV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-container"},[_c('div',{staticClass:"login-box"},[_c('h1',[_vm._v("Forgot Password")]),_vm._v(" "),_c('h4',{attrs:{"id":"message"}},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-field",attrs:{"placeholder":"Email","id":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_c('br'),_vm._v(" "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.sendEmail()}}},[_vm._v("Send Email")]),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"login"}},[_vm._v("Login")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "D/V5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tutor_vue__ = __webpack_require__("oq3Y");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e22c1e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tutor_vue__ = __webpack_require__("Ni8T");
function injectStyle (ssrContext) {
  __webpack_require__("B9ub")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e22c1e4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tutor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e22c1e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tutor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "E5Ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      AccountStore: __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data
    };
  },
  props: {
    nextPage: {
      type: String,
      default: null
    }
  },
  created: function () {
    document.title = "Vertify Email - Owl Tutoring";
    var _this = this;
    if (this.$route.query.key && this.$route.query.email) {
      __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/vertifyEmail?email=" + this.$route.query.email + "&key=" + this.$route.query.key, {
        token: localStorage.getItem("token")
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("Email Vertified", false);
        console.log(_this.nextPage);
        __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].methods.refreshAccount();
        if (__WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data.account != null && !__WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data.account.emailVertified) {
          __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data.account.emailVertified = true;
        }
        _this.$router.push({ path: "/" + (_this.nextPage != null ? _this.nextPage : "") + (_this.nextPage != null && _this.nextPage.toLowerCase() == "sessions" ? "?addNew=true" : "") });
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].methods.refreshAccount();
    }
    if (__WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data.account != null && __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data.account.emailVertified) {
      __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("Email Vertified", false);
      _this.$router.push({ path: "/" + (_this.nextPage != null ? _this.nextPage : "") + (_this.nextPage.toLowerCase() == "sessions" ? "?addNew=true" : "") });
    }
  },
  methods: {
    resendEmail: function () {
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/resendEmailVertification", {
        token: localStorage.getItem("token"),
        nextPage: _this.nextPage
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
      });
    }
  }
});

/***/ }),

/***/ "FnhZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Contact_vue__ = __webpack_require__("/oiM");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75f2566c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Contact_vue__ = __webpack_require__("jUw9");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Contact_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75f2566c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Contact_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Fs8J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TutorSearch_vue__ = __webpack_require__("XSyJ");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    TutorSearch: __WEBPACK_IMPORTED_MODULE_0__TutorSearch_vue__["a" /* default */]
  },
  name: 'Home',
  data: function data() {
    return {};
  },
  created: function () {
    document.title = "Owl Tutoring";
  }
});

/***/ }),

/***/ "GJFm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-margin-container"},[_c('div',{attrs:{"id":"pay"}},[_c('div',{staticClass:"nav-grid"},[_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":"pay"}},[_vm._v("Pay")]),_vm._v(" "),_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":"chargeHistory"}},[_vm._v("History")]),_vm._v(" "),_c('h2',[_vm._v("Balance: "+_vm._s("$" + _vm.AccountStore.account.balance/100))])],1),_vm._v(" "),_c('div',{attrs:{"id":"pay-row-one"}},[_c('div',{attrs:{"id":"lesson-input-container"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.numLessons),expression:"numLessons"}],attrs:{"placehoder":"#","type":"number","id":"num-lessons"},domProps:{"value":(_vm.numLessons)},on:{"input":function($event){if($event.target.composing){ return; }_vm.numLessons=$event.target.value}}}),_vm._v(" "),(_vm.numLessons > 1)?_c('div',{attrs:{"id":"lesson-word"}},[_vm._v("Lessons")]):_c('div',{attrs:{"id":"lesson-word"}},[_vm._v("Lesson")])]),_vm._v(" "),(_vm.value != _vm.cost)?_c('div',{attrs:{"id":"center-message"}},[_c('div',{staticClass:"value"},[_vm._v(_vm._s("$" + _vm.value/100))]),_vm._v(" 10% off\n      ")]):_c('div',{attrs:{"id":"center-message"}},[_vm._v("buy 5 or more lessons and get 10% off")]),_vm._v(" "),_c('div',{attrs:{"id":"cost"}},[_vm._v(_vm._s("$" + _vm.cost/100))])]),_vm._v(" "),(_vm.sources.data.length > 0)?_c('div',[_vm._v("Pay with")]):_vm._e(),_vm._v(" "),_vm._l((_vm.sources.data),function(source,i){return _c('div',{key:source.ID,staticClass:"saved-source"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedSource),expression:"selectedSource"}],attrs:{"id":'source-' + i,"type":"radio"},domProps:{"value":source,"checked":_vm._q(_vm.selectedSource,source)},on:{"change":function($event){_vm.selectedSource=source}}}),_vm._v(" "),_c('label',{staticClass:"source-label",attrs:{"for":'source-' + i}},[_vm._v(_vm._s(source.card.brand)+" **** **** **** "+_vm._s(source.card.last4)+" Exp. "+_vm._s(source.card.exp_month)+"/"+_vm._s(source.card.exp_year))]),_vm._v(" "),_c('button',{staticClass:"plain-button delete-button",on:{"click":function($event){_vm.deleteCard(source.id)}}},[_vm._v("Delete Card")])])}),_vm._v(" "),(_vm.sources.data.length > 0)?_c('div',[_vm._v("or add new card")]):_vm._e(),_vm._v(" "),_c('div',{attrs:{"id":"new-card"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedSource),expression:"selectedSource"}],attrs:{"id":"new","type":"radio","value":"new"},domProps:{"checked":_vm._q(_vm.selectedSource,"new")},on:{"change":function($event){_vm.selectedSource="new"}}}),_vm._v(" "),_c('div',{attrs:{"id":"card-element"},on:{"click":_vm.changeToNewSource}}),_vm._v(" "),_c('div',{attrs:{"id":"card-errors","role":"alert"}}),_vm._v(" "),_c('div',{attrs:{"id":"save-card-container"}},[_vm._v("\n        Save Card "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.saveCard),expression:"saveCard"}],staticClass:"form-field",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.saveCard)?_vm._i(_vm.saveCard,null)>-1:(_vm.saveCard)},on:{"change":function($event){var $$a=_vm.saveCard,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.saveCard=$$a.concat([$$v]))}else{$$i>-1&&(_vm.saveCard=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.saveCard=$$c}}}})])]),_vm._v(" "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.showConfirmation()}}},[_vm._v("Continue to Confirmation")]),_vm._v(" "),(_vm.viewConfirmation)?_c('div',{attrs:{"id":"confirm-back"}},[_c('div',{attrs:{"id":"confirm-window"}},[_c('h2',[_vm._v("\n        "+_vm._s(_vm.lessonString)),_c('br'),_vm._v("\n        $"+_vm._s(_vm.cost/100)),_c('br'),_vm._v("\n        "+_vm._s(_vm.sourceToConfirm.card.brand)+" "+_vm._s(_vm.sourceToConfirm.card.last4)+" "+_vm._s(_vm.sourceToConfirm.card.exp_month)+"/"+_vm._s(_vm.sourceToConfirm.card.exp_year.toString().substring(2,4))),_c('br')]),_vm._v(" "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.submitPayment()}}},[_vm._v("Confirm")]),_c('button',{staticClass:"light-button",on:{"click":function($event){_vm.hideConfirmation()}}},[_vm._v("Go Back")])])]):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"after-margin"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "JcqX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"head-img"},[_c('h2',{staticClass:"tag-line"},[_vm._v("Quality, Personal, and Affordable Peer to Peer Tutoring")]),_vm._v(" "),_c('Tutor-search'),_vm._v(" "),_vm._m(0)],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('h1',[_vm._v("Qualified and Trained Tutors")]),_vm._v("\n  Our tutors are well rounded and highly inteligent individuals. Many of our Highschool student tutors end up attending prestigious universities after graduation.\n  "),_vm._m(2),_vm._v(" "),_c('h1',[_vm._v("Personal and Relatable")]),_vm._v(" "),_c('div',{staticClass:"centered-margin-text"},[_vm._v(" Owl Tutoring provides student tutors who previously took the same classes as their students, allowing them to better understand how their students can effectively learn.")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('h1',[_vm._v("Find a Tutor Today")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('br'),_c('router-link',{staticClass:"color-button",attrs:{"to":"Tutors"}},[_vm._v("Find a Tutor")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('h1',[_vm._v("Become a Tutor")]),_vm._v(" "),_c('div',{staticClass:"centered-margin-text"},[_vm._v("SignUp and submit your profile for review by our team to become an Owl Tutor "),_c('router-link',{attrs:{"to":"signup/tutorProfile"}},[_vm._v("Become a Tutor")])],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',[_vm._v("need help? text "),_c('a',{attrs:{"href":"sms://2248149291"}},[_vm._v("(224) 814-9291")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"why-container"}},[_c('div',{attrs:{"id":"why"}},[_c('h1',[_vm._v("Why Owl Tutoring?")]),_vm._v("\n      Owl Tutoring provides a unique tutoring experience focused on providing trained, qualified, and experienced tutors who can realate too and mentor their students. Owl Tutoring strives to provide these services at a competitive and affordable rate.\n    ")]),_vm._v(" "),_c('div',{attrs:{"id":"why-image"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"college-container"},[_c('img',{staticClass:"college-one college-image",attrs:{"src":"https://github.com/Owltutoring/WebsiteImages/blob/master/stanford.png?raw=true"}}),_vm._v(" "),_c('img',{staticClass:"college-two college-image",attrs:{"src":"https://github.com/Owltutoring/WebsiteImages/blob/master/harvard.jpg?raw=true"}}),_vm._v(" "),_c('img',{staticClass:"college-three college-image",attrs:{"src":"https://github.com/Owltutoring/WebsiteImages/blob/master/northwestern.gif?raw=true"}}),_vm._v(" "),_c('img',{staticClass:"college-four college-image",attrs:{"src":"https://github.com/Owltutoring/WebsiteImages/blob/master/cornell.png?raw=true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"centered-margin-text"},[_vm._v("Find a tutor today on our site or text "),_c('a',{attrs:{"href":"sms://2248149291"}},[_vm._v("(224) 814-9291")]),_vm._v(" for further assistance")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M8iA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74f516e1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("Zk64");
function injectStyle (ssrContext) {
  __webpack_require__("oiAU")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74f516e1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MRDV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pay_vue__ = __webpack_require__("3zb0");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_212f701e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pay_vue__ = __webpack_require__("GJFm");
function injectStyle (ssrContext) {
  __webpack_require__("ijfL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_212f701e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pay_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_analytics__ = __webpack_require__("AYPi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_analytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_analytics__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_analytics___default.a, {
  id: 'UA-83135020-2',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "NZjL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Session_vue__ = __webpack_require__("xVQp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__ = __webpack_require__("SCW7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    display: {
      type: String,
      default: "future"
    }
  },
  components: {
    Session: __WEBPACK_IMPORTED_MODULE_0__Session_vue__["a" /* default */]
  },
  data: function () {
    return {
      sessions: [],
      AccountStore: __WEBPACK_IMPORTED_MODULE_3__stores_AccountStore__["a" /* default */].data
    };
  },
  computed: {
    displaySessions: function () {
      console.log(this.display);
      var currentTime = new Date().getTime();
      if (this.display == "future") {
        return this.sessions.filter(function (session) {
          return parseInt(session.endTime) > currentTime && session.canceled == false || session.isnew;
        });
      } else if (this.display == "history") {
        return this.sessions.filter(function (session) {
          return parseInt(session.endTime) < currentTime && session.canceled == false || session.isnew;
        });
      } else if (this.display == "canceled") {
        return this.sessions.filter(function (session) {
          return session.canceled == true || session.isnew;
        });
      }
    }
  },
  mounted: function () {
    if (this.$route.query.addNew) {
      this.makeSession();
    }
  },
  created: function () {
    document.title = "Sessions - Owl Tutoring";
    var _this = this;
    if (__WEBPACK_IMPORTED_MODULE_3__stores_AccountStore__["a" /* default */].data.account == null) {
      __WEBPACK_IMPORTED_MODULE_3__stores_AccountStore__["a" /* default */].methods.refreshAccount(function () {
        if (__WEBPACK_IMPORTED_MODULE_3__stores_AccountStore__["a" /* default */].data.account && !__WEBPACK_IMPORTED_MODULE_3__stores_AccountStore__["a" /* default */].data.account.emailVertified) {
          console.log("Account not vertified");
          _this.$router.push({ path: "/VertifyEmail/Sessions" });
        }
      });
    }
    __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getSessions", { token: localStorage.getItem("token") }).then(function (response) {
      __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
      // JSON responses are automatically parsed.
      console.log(response);
      function compare(a, b) {
        if (parseInt(a.startTime) < parseInt(b.startTime)) return -1;
        if (parseInt(a.startTime) > parseInt(b.startTime)) return 1;
        return 0;
      }
      _this.sessions = _this.sessions.concat(response.data.sessions).sort(compare);
    }).catch(function (e) {
      __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
      console.log(e);
      __WEBPACK_IMPORTED_MODULE_2__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
      //this.errors.push(e)
    });
  },
  methods: {
    refresh: function () {
      var _this = this;
      console.log("refresh sessions");
      __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getSessions", { token: localStorage.getItem("token") }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        function compare(a, b) {
          if (parseInt(a.startTime) < parseInt(b.startTime)) return -1;
          if (parseInt(a.startTime) > parseInt(b.startTime)) return 1;
          return 0;
        }
        _this.sessions = response.data.sessions.sort(compare);
        console.log(_this.sessions);
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_4__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_2__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    },
    makeSession: function () {
      this.sessions.unshift({
        ID: parseInt(Math.random() * 100000000000),
        isnew: true,
        startTime: new Date().getTime()
      });
    },
    removeSession: function (removeID) {
      this.sessions = this.sessions.filter(function (session) {
        return session.ID != removeID;
      });
    }
  }
});

/***/ }),

/***/ "Ni8T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tutor-grid"},[_c('img',{staticClass:"profile-image",attrs:{"src":_vm.tutor.imageLink},on:{"click":function($event){_vm.moreInfo()}}}),_vm._v(" "),_c('div',{staticClass:"line-one-grid",on:{"click":function($event){_vm.moreInfo()}}},[_c('h1',{staticClass:"name"},[_vm._v(_vm._s(_vm.tutor.firstName)+" "+_vm._s(_vm.tutor.lastName))]),_vm._v(" "),_c('h3',{staticClass:"grade"},[_vm._v(_vm._s(_vm.tutor.grade)+"th Grade")]),_vm._v(" "),_c('h3',{staticClass:"rate"},[_vm._v("$"+_vm._s(_vm.tutor.rate)+"/hr")])]),_vm._v(" "),_c('div',{staticClass:"short-bio",on:{"click":function($event){_vm.moreInfo()}}},[_vm._v(_vm._s(_vm.tutor.shortBio))]),_vm._v(" "),_c('h4',{staticClass:"subjects",on:{"click":function($event){_vm.moreInfo()}}},[_vm._v(_vm._s(_vm.tutor.subjectsDesc))]),_vm._v(" "),_c('h4',{staticClass:"town",on:{"click":function($event){_vm.moreInfo()}}},[_vm._v(_vm._s(_vm.tutor.town + ", " + _vm.tutor.usState))]),_vm._v(" "),(_vm.expanded)?_c('div',{staticClass:"more-info-grid"},[_c('h4',{staticClass:"phone"},[_vm._v("Phone: "),_c('a',{attrs:{"href":'sms:' + _vm.tutor.phone}},[_vm._v(_vm._s(_vm.formatedPhone))])]),_vm._v(" "),_c('h4',{staticClass:"email"},[_vm._v("Email: "),_c('a',{attrs:{"href":'mailto:' + _vm.tutor.email}},[_vm._v(_vm._s(_vm.tutor.email))])]),_vm._v(" "),_c('tutor-subjects',{staticClass:"subjects-container",attrs:{"subjectObj":_vm.subjectOptions,"selectedSubjects":_vm.subjectList,"parent":"*"}}),_vm._v(" "),_c('p',{staticClass:"experience"},[_c('b',[_vm._v("Experience:")]),_vm._v(" "+_vm._s(_vm.tutor.experience))]),_vm._v(" "),_c('p',{staticClass:"bio"},[_c('b',[_vm._v("Bio:")]),_vm._v(" "+_vm._s(_vm.tutor.bio))])],1):_vm._e(),_vm._v(" "),_c('button',{staticClass:"button-one light-button",on:{"click":function($event){_vm.toggleMore()}}},[(!_vm.expanded)?_c('div',[_vm._v("more info")]):_c('div',[_vm._v("less info")])]),_c('br'),_vm._v(" "),_c('button',{staticClass:"button-two color-button",on:{"click":function($event){_vm.chosseTutor()}}},[_vm._v("Schedule a Lesson")]),_vm._v(" "),(_vm.showLoginSignup)?_c('div',{attrs:{"id":"popup-window-back"}},[_c('div',{attrs:{"id":"popup-window"}},[_c('h2',[_vm._v("Login or SignUp to continue")]),_vm._v(" "),_c('router-link',{staticClass:"color-button",attrs:{"to":'signUp/Sessions' + _vm.nextParams}},[_vm._v("Sign Up")]),_vm._v(" "),_c('router-link',{staticClass:"color-button",attrs:{"to":'login/Sessions' + _vm.nextParams}},[_vm._v("Login")])],1)]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NpN7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "O3Ir":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tutors_vue__ = __webpack_require__("B3Ix");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b47942dc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tutors_vue__ = __webpack_require__("97sZ");
function injectStyle (ssrContext) {
  __webpack_require__("QBl3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tutors_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b47942dc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tutors_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "QBl3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QLKv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ForgotPassword_vue__ = __webpack_require__("63kq");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25ad5026_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgotPassword_vue__ = __webpack_require__("CgJV");
function injectStyle (ssrContext) {
  __webpack_require__("C2ed")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ForgotPassword_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25ad5026_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ForgotPassword_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "QuE0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const MessageStore = {
    data: {
        message: "no message",
        show: false,
        isError: true
    },
    methods: {
        showMessage: function (message, isError) {

            MessageStore.data.message = message;
            MessageStore.data.isError = isError;
            console.log(MessageStore.data.message);
            MessageStore.data.show = true;
            setTimeout(function () {
                console.log("timeout end");
                MessageStore.data.show = false;
            }, 5000);
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (MessageStore);

/***/ }),

/***/ "RpFm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    charge: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {};
  },
  created: function () {
    document.title = "Receipt - Owl Tutoring";
    var _this = this;
    console.log(this.charge);
  },
  computed: {
    dateString: function () {
      var date = new Date(this.charge.created * 1000);
      return date.getMonth().toString() + "/" + date.getDate() + "/" + date.getFullYear().toString().substring(2, 4);
    }
  },
  methods: {}
});

/***/ }),

/***/ "S4fC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SCW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LoadingStateStore = {
    data: {
        loading: 1
    },
    methods: {
        addLoading: function () {
            console.log("loading: " + LoadingStateStore.data.loading);
            console.log("add loading");
            LoadingStateStore.data.loading += 1;
        },
        removeLoading: function () {
            console.log("remove loading");
            LoadingStateStore.data.loading -= 1;
            console.log("loading: " + LoadingStateStore.data.loading);
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingStateStore);

/***/ }),

/***/ "SwRy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    nextPage: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      accountType: null,
      isParent: null,
      students: [""],
      password: "",
      confirmPassword: "",
      accountType: null,
      textNotifications: true,
      emailNotifications: true
    };
  },
  created: function () {
    document.title = "Sign Up - Owl Tutoring";
  },
  methods: {
    getStudentInputs: function () {
      var studentInput = [];
      for (var i = 0; i < this.students.length; i++) {
        studentInput.push({ S: this.students[i] });
      }
      console.log(studentInput);
      return studentInput;
    },
    removeStudent: function (index) {
      this.students.splice(index, 1);
    },
    addStudent: function () {
      this.students.push("");
    },
    signUp: function () {
      var _this = this;
      function parsePhone(numberString) {
        numberString.replace(/\D/g, '');
      }
      if (this.isParent == null && this.accountType == "Client") {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("Error, Please Select if you are a parent or student", true);
        return;
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("Error, Invalid Email", true);
        return;
      }

      //TODO: add more restrictions
      if (this.password.length < 6) {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("Password must be at least 6 charachters", true);
        return;
      }
      if (this.password != _this.confirmPassword) {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("Error, Passwords don't match", true);
        return;
      }
      if (_this.accountType == "none") {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("please select an account type", true);
        return;
      }
      if (_this.phone.replace(/\D/g, '').length < 10 || _this.phone.replace(/\D/g, '').length > 11) {
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage("please enter a valid phone number", true);
        return;
      }
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/signUp", {
        accountType: _this.accountType,
        email: _this.email,
        password: _this.password,
        firstName: _this.firstName,
        lastName: _this.lastName,
        phone: _this.phone.replace(/\D/g, ''),
        isParent: _this.isParent,
        students: _this.getStudentInputs(),
        connectAccountID: _this.$route.query.connectAccountID,
        nextPage: _this.accountType == "Tutor" ? "tutorProfile" : _this.nextPage,
        emailNotifications: _this.emailNotifications,
        textNotifications: _this.textNotifications
      }).then(function (response) {
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].methods.login(response.data.token);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        _this.$router.push({ path: "/VertifyEmail" + (_this.nextPage ? "/" + _this.nextPage : "") });
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
      }).catch(function (e) {
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        //this.errors.push(e)
      });
    }
  }
});

/***/ }),

/***/ "WQRw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wda3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      password: "",
      confirmPassword: "",
      message: ""
    };
  },
  created: function () {
    document.title = "Change Password - Owl Tutoring";
    var _this = this;
  },
  methods: {
    changePassword: function () {
      var _this = this;
      if (this.password != this.confirmPassword) {
        this.message = "Error Passwords do not match";
      }
      __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/changePassword", {
        password: _this.password,
        token: localStorage.getItem("token")
      }).then(function (response) {
        // JSON responses are automatically parsed.
        console.log(response);
        _this.message = response.data.message;
        __WEBPACK_IMPORTED_MODULE_0__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
      }).catch(function (e) {
        console.log(e);
        _this.message = e.response.data.message;
        __WEBPACK_IMPORTED_MODULE_0__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        __WEBPACK_IMPORTED_MODULE_1__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        //this.errors.push(e)
      });
    }
  }
});

/***/ }),

/***/ "Wlz4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wqxb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TutorProfile_vue__ = __webpack_require__("4oiV");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b6d52a3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TutorProfile_vue__ = __webpack_require__("nwrJ");
function injectStyle (ssrContext) {
  __webpack_require__("thhY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TutorProfile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b6d52a3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TutorProfile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "X4+h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__("7+uW");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_4_vue__["a" /* default */].component("list-charge", {
  props: ["charge"],
  template: "<div class='charge-container'><div class='charge-date'>{{dateString}}</div> <div class='charge-lessons'>{{lessonString}}</div> <div class='charge-card'>{{charge.source.card.brand}} ---- ---- ---- {{charge.source.card.last4}} {{charge.source.card.exp_month}}/{{charge.source.card.exp_year.toString().substring(2,4)}}</div> <div class='charge-amount'>${{charge.amount/100}}</div></div>",
  computed: {
    dateString: function () {
      var date = new Date(this.charge.created * 1000);
      return date.getMonth().toString() + "/" + date.getDate() + "/" + date.getFullYear().toString().substring(2, 4);
    },
    lessonString: function () {
      if (this.charge.metadata.numLessons == null) {
        return "";
      }
      return this.charge.metadata.numLessons.toString() + (this.charge.metadata.numLessons > 1 ? " Lessons" : " Lessson");
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      charges: [],
      AccountStore: __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data
    };
  },
  created: function () {
    document.title = "Charge History - Owl Tutoring";
    var _this = this;
    if (__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account == null) {
      __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].methods.refreshAccount();
    }
    __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/chargeHistory", { token: localStorage.getItem("token") }).then(function (response) {
      // JSON responses are automatically parsed.
      console.log(response);
      _this.charges = response.data.charges.data;
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
    }).catch(function (e) {
      console.log(e);
      __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
      //this.errors.push(e)
    });
  },
  methods: {}
});

/***/ }),

/***/ "X9pr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-container"},[_c('div',{staticClass:"login-box"},[_c('h1',[_vm._v("Change Password")]),_vm._v(" "),_c('h4',{attrs:{"id":"message"}},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-field",attrs:{"placeholder":"New Password","id":"password","type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmPassword),expression:"confirmPassword"}],staticClass:"form-field",attrs:{"placeholder":"Confirm Password","id":"confirmPassword","type":"password"},domProps:{"value":(_vm.confirmPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.confirmPassword=$event.target.value}}}),_c('br'),_vm._v(" "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.changePassword()}}},[_vm._v("Change Password")]),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"login"}},[_vm._v("Login")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "XSyJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TutorSearch_vue__ = __webpack_require__("wzuB");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f952c7b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TutorSearch_vue__ = __webpack_require__("0x4Q");
function injectStyle (ssrContext) {
  __webpack_require__("jXfp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TutorSearch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f952c7b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TutorSearch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__("lO7g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Account__ = __webpack_require__("uK6g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Contact__ = __webpack_require__("FnhZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Tutors__ = __webpack_require__("O3Ir");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Tutor__ = __webpack_require__("D/V5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Login__ = __webpack_require__("xJsL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_SignUp__ = __webpack_require__("ApaE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Sessions__ = __webpack_require__("nSX0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Pay__ = __webpack_require__("MRDV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_TutorProfile__ = __webpack_require__("Wqxb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ForgotPassword__ = __webpack_require__("QLKv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ChangePassword__ = __webpack_require__("0tJt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ChargeHistory__ = __webpack_require__("ZE4R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_VertifyEmail__ = __webpack_require__("ZXug");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_PayReceipt__ = __webpack_require__("0Y9C");


















__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */]
  }, {
    path: '/Tutors/',
    name: 'Tutors',
    component: __WEBPACK_IMPORTED_MODULE_5__components_Tutors__["a" /* default */]
  }, {
    path: '/contact',
    name: 'Contact',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Contact__["a" /* default */]
  }, {
    path: '/account',
    name: 'Account',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Account__["a" /* default */]
  }, {
    path: '/login/:nextPage?',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_7__components_Login__["a" /* default */],
    props: true
  }, {
    path: '/signup/:nextPage?',
    name: 'SignUp',
    component: __WEBPACK_IMPORTED_MODULE_8__components_SignUp__["a" /* default */],
    props: true
  }, {
    path: '/sessions/:display?',
    name: 'sessions',
    component: __WEBPACK_IMPORTED_MODULE_9__components_Sessions__["a" /* default */],
    props: true
  }, {
    path: '/pay',
    name: 'pay',
    component: __WEBPACK_IMPORTED_MODULE_10__components_Pay__["a" /* default */]
  }, {
    path: '/tutorProfile',
    name: 'tutorProfile',
    component: __WEBPACK_IMPORTED_MODULE_11__components_TutorProfile__["a" /* default */]
  }, {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: __WEBPACK_IMPORTED_MODULE_12__components_ForgotPassword__["a" /* default */]
  }, {
    path: '/changePassword',
    name: 'changePassword',
    component: __WEBPACK_IMPORTED_MODULE_13__components_ChangePassword__["a" /* default */]
  }, {
    path: '/chargeHistory',
    name: 'chargeHistory',
    component: __WEBPACK_IMPORTED_MODULE_14__components_ChargeHistory__["a" /* default */]
  }, {
    path: '/vertifyEmail/:nextPage?',
    name: 'vertifyEmail',
    component: __WEBPACK_IMPORTED_MODULE_15__components_VertifyEmail__["a" /* default */],
    props: true
  }, {
    path: '/payReceipt',
    name: 'payReceipt',
    component: __WEBPACK_IMPORTED_MODULE_16__components_PayReceipt__["a" /* default */],
    props: true
  }]
}));

/***/ }),

/***/ "ZE4R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChargeHistory_vue__ = __webpack_require__("X4+h");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31407756_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChargeHistory_vue__ = __webpack_require__("hIXa");
function injectStyle (ssrContext) {
  __webpack_require__("yEaH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChargeHistory_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31407756_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChargeHistory_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ZXug":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VertifyEmail_vue__ = __webpack_require__("E5Ls");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3afe4806_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VertifyEmail_vue__ = __webpack_require__("aRtP");
function injectStyle (ssrContext) {
  __webpack_require__("hKc0")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VertifyEmail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3afe4806_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VertifyEmail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Zk64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"},on:{"ma":function($event){}}},[_vm._m(0),_vm._v(" "),_c('div',{attrs:{"id":"content"},on:{"click":function($event){_vm.showPopUp = false}}},[_c('link',{attrs:{"href":"https://fonts.googleapis.com/css?family=Montserrat:400,8e 00","rel":"stylesheet"}}),_vm._v(" "),(_vm.messageStore.show)?_c('div',{class:['alert', { errorAlert: _vm.messageStore.isError }]},[_vm._v("\n      "+_vm._s(_vm.messageStore.message)+"\n    ")]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.LoadingStateStore.loading > 0)?_c('div',{attrs:{"id":"loading-book"}},[_c('div',{staticClass:"page",attrs:{"id":"page-a"}}),_vm._v(" "),_c('div',{staticClass:"page",attrs:{"id":"page-b"}}),_vm._v(" "),_c('div',{staticClass:"page",attrs:{"id":"page-c"}}),_vm._v(" "),_c('div',{staticClass:"page",attrs:{"id":"page-d"}}),_vm._v(" "),_c('div',{staticClass:"page",attrs:{"id":"page-e"}}),_vm._v(" "),_c('div',{staticClass:"cover",attrs:{"id":"cover-a"}}),_vm._v(" "),_c('div',{staticClass:"cover",attrs:{"id":"cover-b"}}),_vm._v(" "),_c('div',{attrs:{"id":"binding"}}),_vm._v(" "),_c('div',{attrs:{"id":"loading"}},[_vm._v("\n        Loading "),_c('div',{staticClass:"dot",attrs:{"id":"dot-a"}},[_vm._v(".")]),_c('div',{staticClass:"dot",attrs:{"id":"dot-b"}},[_vm._v(".")]),_c('div',{staticClass:"dot",attrs:{"id":"dot-c"}},[_vm._v(".")])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"head",attrs:{"id":"head"}},[_c('div',{staticClass:"box-shadow-menu",on:{"click":function($event){_vm.toggleMenu()}}}),_vm._v(" "),_c('router-link',{staticClass:"title-link",attrs:{"to":"/"}},[_c('div',{staticClass:"title-container"},[_c('img',{staticClass:"logo",attrs:{"id":"nav-logo","src":"https://github.com/Owltutoring/WebsiteImages/blob/master/owl.png?raw=true"}}),_vm._v(" "),_c('h1',{staticClass:"title",attrs:{"id":"nav-title"}},[_vm._v("Owl Tutoring")])])]),_vm._v(" "),(_vm.AccountStore.account != null && _vm.showMenu)?_c('div',{staticClass:"nav-grid",on:{"click":function($event){_vm.adjustSize()}}},[_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/"}},[_vm._v("Home")]),_vm._v(" "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/Tutors"}},[_vm._v("Tutors")]),_vm._v(" "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/account"}},[_vm._v("Account")]),_vm._v(" "),(_vm.AccountStore.account.accountType == 'Tutor' && !_vm.AccountStore.account.done)?_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/tutorProfile"}},[_vm._v("Apply")]):_vm._e(),_vm._v(" "),(_vm.AccountStore.account.accountType == 'Tutor' && _vm.AccountStore.account.done)?_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/tutorProfile"}},[_vm._v("Profile")]):_vm._e(),_vm._v(" "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/sessions"}},[_vm._v("Sessions")]),_vm._v(" "),_c('button',{staticClass:"nav-item color-button",on:{"click":function($event){_vm.logout()}}},[_vm._v("logout")])],1):(_vm.showMenu)?_c('div',{staticClass:"nav-grid",on:{"click":function($event){_vm.adjustSize()}}},[_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/"}},[_vm._v("Home")]),_vm._v(" "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/Tutors"}},[_vm._v("Tutors")]),_vm._v(" "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/SignUp"}},[_vm._v("Sign Up")]),_vm._v(" "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"/login"}},[_vm._v("Login")])],1):_vm._e()],1),_vm._v(" "),(_vm.showPopUp)?_c('div',{staticClass:"popUp"},[_vm._v("\n      Welcome to the new Owl Tutoring website! With our new site we hope to provide you a better experience. We are currently transitioning from our old site. If you are a customer looking to pay or schedule a lesson please use our old website "),_c('a',{attrs:{"href":"https://owltutoring.squarespace.com"}},[_vm._v("owltutoring.squarespace.com")]),_vm._v(" for the moment. If you are looking to sign up as a tutor please do so on this site. Thank You for your patience."),_c('br'),_vm._v(" -The Owl Tutoring Dev Team.\n    ")]):_vm._e(),_vm._v(" "),_c('router-view')],1),_vm._v(" "),_c('footer',[_vm._m(1),_vm._v(" "),_c('div',[_vm._v("Owl Tutoring "+_vm._s(_vm.year))]),_vm._v(" "),_vm._m(2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('head',[_c('title',[_vm._v("Owl Tutoring")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('a',{attrs:{"href":"mailto:general@owltutoring.co"}},[_vm._v("general@owltutoring.co")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" text "),_c('a',{attrs:{"href":"sms://2248149291"}},[_vm._v("(224) 814-9291")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "aRtP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-container"},[_c('div',{staticClass:"login-box"},[_c('h1',[_vm._v("Vertify Email")]),_vm._v("\n    Check your email "+_vm._s(_vm.AccountStore.account.email)+" and click the link to vertify your email.\n    "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.resendEmail()}}},[_vm._v("Resend Vertification Email")]),_c('br'),_vm._v(" "),(_vm.AccountStore.account == null)?_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.login()}}},[_vm._v("Login")]):_vm._e(),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"signUp"}},[_vm._v("Sign Up")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "fRqY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-margin-container"},[_c('div',{attrs:{"id":"receipt"}},[_c('h2',[_vm._v("\n    Payment Compleated "),_c('br'),_vm._v("\n    "+_vm._s(_vm.dateString)+" "),_c('br'),_vm._v("\n    "+_vm._s(_vm.charge.metadata.numLessons + (_vm.charge.metadata.numLessons > 1 ? " Lessons" : " Lesson"))),_c('br'),_vm._v("\n    For $"+_vm._s(_vm.charge.amount/100)),_c('br'),_vm._v("\n    at $"+_vm._s(_vm.charge.metadata.rate/100)+"/hr"),_c('br'),_vm._v(" "),(_vm.charge.metadata.discountPercent!=0)?_c('div',[_vm._v("\n      with "+_vm._s(_vm.charge.metadata.discountPercent*100)+"% off\n    ")]):_vm._e(),_vm._v("\n    Charged to "+_vm._s(_vm.charge.source.card.brand)+" "+_vm._s(_vm.charge.source.card.last4)+" "+_vm._s(_vm.charge.source.card.exp_month)+"/"+_vm._s(_vm.charge.source.card.exp_year.toString().substring(2,4))),_c('br'),_vm._v(" "),_c('br'),_vm._v("Save this Receipt for your records\n    ")]),_vm._v(" "),_c('router-link',{staticClass:"color-button",attrs:{"to":"/sessions?addNew=true"}},[_vm._v("Schedule a Lessson")])],1),_vm._v(" "),_c('div',{staticClass:"after-margin"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "hIXa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-margin-container"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"nav-grid"},[_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":"pay"}},[_vm._v("Pay")]),_vm._v(" "),_c('router-link',{staticClass:"nav-link nav-item",attrs:{"to":"chargeHistory"}},[_vm._v("History")]),_vm._v(" "),_c('h2',[_vm._v("Balance: "+_vm._s("$" + _vm.AccountStore.account.balance/100))])],1),_vm._v(" "),_c('h1',[_vm._v("Charge History")]),_vm._v(" "),(_vm.AccountStore.account != null)?_c('div',{staticClass:"list-charge-container"},[_vm._l((_vm.charges),function(charge){return _c('list-charge',{key:charge.id,attrs:{"charge":charge}})}),_vm._v(" "),(_vm.charges.length == 0)?_c('div',[_vm._v("No previous charges")]):_vm._e(),_vm._v(" "),_vm._m(0)],2):_c('div',[_vm._v("\n      Please Login\n      "),_c('router-link',{staticClass:"nav-item nav-link",attrs:{"to":"login"}},[_vm._v("Login")])],1)]),_vm._v(" "),_c('div',{staticClass:"after-margin"})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_vm._v(" Questions or concerns? text "),_c('a',{attrs:{"href":"sms://2248149291"}},[_vm._v("(224) 814-9291")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "hKc0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iE3y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    session: {
      type: Object,
      editing: false
    }
  },

  name: "Session",
  data: function () {
    var startDate = new Date(parseInt(this.session.startTime));
    return {
      AccountStore: __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data,
      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
      otherAccount: null,
      editing: false,
      showCalander: false,
      studentName: "",
      sessionLocation: this.session.isnew ? "" : this.session.sessionLocation,
      dayVal: this.session.isnew ? new Date().getDate() + 1 : startDate.getDate(),
      monthVal: this.session.isnew ? new Date().getMonth() : startDate.getMonth(),
      yearVal: this.session.isnew ? new Date().getFullYear() : startDate.getFullYear(),
      hourVal: this.session.isnew ? 4 : startDate.getHours() <= 12 ? startDate.getHours() : startDate.getHours() - 12,
      minuteVal: this.session.isnew ? 0 : startDate.getMinutes(),
      AMPM: this.session.isnew ? "PM" : startDate.getHours() <= 12 ? "AM" : "PM",
      length: 1,
      relatedAccounts: []
    };
  },
  created: function () {
    var _this = this;
    if (__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account == null) {
      __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].methods.refreshAccount();
    }
    if (this.session.isnew) {
      this.editing = true;
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getRelatedAccountInfo", {
        token: localStorage.getItem("token")
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response.data);
        _this.relatedAccounts = response.data.accounts;
        _this.otherAccount = _this.relatedAccounts[0];
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        //this.errors.push(e)
      });
    }
  },
  computed: {
    isConfirmed: function () {

      // if session hasnt started yet
      if (parseInt(this.session.startTime) < new Date().getTime) {
        if (this.AccountStore.account.accountType == "Client") {
          return this.session.clientPreConfirm;
        } else {
          return this.session.tutorPreConfirm;
        }
      } else {
        if (this.AccountStore.account.accountType == "Client") {
          return this.session.clientPostConfirm;
        } else {
          return this.session.tutorPostConfirm;
        }
      }
    },
    minute: {
      get: function () {
        return this.minuteVal < 10 ? "0" + this.minuteVal : this.minuteVal;
      },
      set: function (newVal) {
        this.minuteVal = parseInt(newVal);
      }
    },
    hour: {
      get: function () {
        return this.hourVal <= 12 ? this.hourVal : this.hourVal - 12;
      },
      set: function (newVal) {
        this.hourVal = parseInt(newVal);
      }
    },
    day: {
      get: function () {
        return this.dayVal.toString();
      },
      set: function (newVal) {
        this.dayVal = parseInt(newVal);
      }
    },
    month: {
      get: function () {
        return (this.monthVal + 1).toString();
      },
      set: function (newVal) {
        this.monthVal = parseInt(newVal) - 1;
      }
    },
    year: {
      get: function () {
        return this.yearVal.toString();
      },
      set: function (newVal) {
        this.yearVal = parseInt(newVal);
      }
    },
    blankDays: function () {
      var firstDay = new Date(this.yearVal, this.monthVal, 1);
      return firstDay.getDay();
    },
    days: function () {
      var lengths = [31, this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      console.log(lengths[this.month]);
      return lengths[this.monthVal];
    },
    getMonth: function () {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      console.log(months[this.monthVal]);
      //document.getElementById("month").value = this.calendar.month + 1;
      return months[this.monthVal];
    },
    timeString: function () {
      var date = new Date(parseInt(this.session.startTime));
      var days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
      var AMPM = "am";
      var hours = date.getHours();
      if (hours > 12) {
        AMPM = "pm";
        hours -= 12;
      }
      return hours + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + AMPM + " " + days[date.getDay()];
    },
    dateString: function () {
      var date = new Date(parseInt(this.session.startTime));
      return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    },
    lengthString: function () {
      return this.session.hours.toString() + (this.session.hours > 1 ? " hrs" : " hr");
    },
    dateTimeString: function () {
      var date = new Date(parseInt(this.session.startTime));
      var days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
      var AMPM = "am";
      var hours = date.getHours();
      if (hours > 12) {
        AMPM = "pm";
        hours -= 12;
      }
      if (hours == 0) {
        hours = 12;
      }
      // 4:30PM Monday, 4/6/2018
      return hours + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + AMPM + " " + days[date.getDay()] + " " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    }
  },
  methods: {
    confirmLesson: function () {
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/confirmSession", {
        token: localStorage.getItem("token"),
        sessionID: this.session.ID
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        console.log("refresh");
        _this.$emit("refresh");
        _this.editing = false;
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    },
    changeCancelState: function (state) {
      var _this = this;
      console.log(this.session.ID);
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/editSession", {
        token: localStorage.getItem("token"),
        sessionID: this.session.ID,
        canceled: state
      }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        console.log("refresh");
        _this.$emit("refresh");
        _this.editing = false;
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    },
    getParams: function () {
      console.log(this.length);
      return {
        token: localStorage.getItem("token"),
        otherID: this.isnew ? this.otherAccount.ID.N : null, // if not new we dont care about other account
        studentName: this.studentName == "" ? null : this.studentName,
        startTime: new Date(this.yearVal, this.monthVal, this.dayVal, this.hourVal + (this.AMPM == "AM" ? 0 : 12), this.minuteVal).getTime().toString(),
        endTime: (new Date(this.yearVal, this.monthVal, this.dayVal, this.hourVal + (this.AMPM == "AM" ? 0 : 12), this.minuteVal).getTime() + this.length * 3600000).toString(),
        sessionLocation: this.sessionLocation
      };
    },
    editLesson: function () {
      var _this = this;
      console.log(_this);
      var params = this.getParams();
      params["sessionID"] = this.session.ID;
      console.log(params);
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/editSession", params).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        console.log("refresh");
        _this.$emit("refresh");
        _this.editing = false;
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    },
    scheduleLesson: function () {
      var _this = this;
      console.log(_this);
      var params = this.getParams();
      params["otherID"] = this.otherAccount.ID.N;
      console.log(params);
      __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/createSession", params).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        console.log("refresh");
        _this.$emit("refresh");
      }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log(e);
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        //this.errors.push(e)
      });
    },
    cancelEdit: function () {
      this.editing = false;
    },
    cancelNew: function () {
      this.$emit("cancelNew", this.session.ID);
    },
    changeToEdit: function () {
      console.log(this.editing);
      this.editing = true;
      console.log(this.editing);
    },
    toggleMore: function () {
      console.log(this.expanded);
      if (this.expanded) {
        this.expanded = false;
      } else {
        this.expanded = true;
      }
    },
    selectDay: function (day) {
      console.log(day);
      this.dayVal = parseInt(day);
      document.getElementById("day").value = day;
      this.showCalander = false;
    },
    backMonth: function () {
      if (this.monthVal == 0) {
        this.monthVal = 11;
        this.yearVal--;
      } else {
        this.monthVal--;
      }
    },
    forwardMonth: function () {
      if (this.monthVal == 11) {
        this.monthVal = 0;
        this.yearVal++;
      } else {
        this.monthVal++;
      }
    }
  },
  watch: {
    otherAccount: function (val) {
      if (val == "findMore") {
        this.$router.push({ path: "Tutors" });
      }
    }
  }
});

/***/ }),

/***/ "ijfL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jUw9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._v("Contact Us")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jXfp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jZnC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-container"},[_c('div',{staticClass:"login-box"},[_c('h1',[_vm._v("Login")]),_vm._v(" "),_c('h4',{attrs:{"id":"message"}}),_vm._v(" "),_c('input',{staticClass:"form-field",attrs:{"placeholder":"Email","id":"email"}}),_c('br'),_vm._v(" "),_c('input',{staticClass:"form-field",attrs:{"placeholder":"Password","type":"password","id":"password"},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.login($event)}}}),_c('br'),_vm._v(" "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.login()}}},[_vm._v("Login")]),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"signUp"}},[_vm._v("Sign Up")]),_vm._v(" "),_c('router-link',{attrs:{"to":"forgotPassword"}},[_vm._v("Forgot Password?")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lO7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("Fs8J");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_329d2046_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("JcqX");
function injectStyle (ssrContext) {
  __webpack_require__("S4fC")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-329d2046"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_329d2046_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nKb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    nextPage: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {};
  },
  created: function () {
    document.title = "Login - Owl Tutoring";
    var _this = this;
  },
  methods: {
    login: function () {
      var _this = this;
      __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        connectAccountID: _this.$route.query.connectAccountID
      }).then(function (response) {
        // JSON responses are automatically parsed.
        console.log(response);
        __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].methods.login(response.data.token);
        document.getElementById("message").innerHTML = response.data.message;
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(response.data.message, false);
        __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        console.log("/" + (_this.nextPage != null ? _this.nextPage : ""));
        _this.$router.push({ path: "/" + (_this.nextPage != null ? _this.nextPage : "") + (_this.nextPage == "sessions" ? "?addNew=true" : "") });
      }).catch(function (e) {
        console.log(e);
        document.getElementById("message").innerHTML = e.response.data.message;
        __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
        __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        //this.errors.push(e)
      });
    }
  }
});

/***/ }),

/***/ "nSX0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sessions_vue__ = __webpack_require__("NZjL");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fab141c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sessions_vue__ = __webpack_require__("BlX+");
function injectStyle (ssrContext) {
  __webpack_require__("3997")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sessions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fab141c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sessions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nwrJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-margin-container"},[_c('div',{attrs:{"id":"tutor-profile"}},[_c('h1',[_vm._v("Tutor Profile")]),_vm._v("\n\n    Thank you for your intrest in being an Owl Tutor. After you submit this profile someone at Owl Tutoring will review your qualifications and assuming you are qualified you will be contacted and your profile will be visible on our website. We will then work to connect you with students you are qualified to teach. In a tutor we are looking for high school and college students who are knowledgeable and able to teach a variety of topics at Elementary, Middle school or High School levels. This means you can teach whatever you want and are qualified to teach from algebra or world history to violin or photography. Tutoring sessions typical occur in public places like a library. Tutors can work as many hours that are available to them but can also can have fewer students if they are busy. "),_c('br'),_vm._v("If you have any questions please text "),_c('a',{attrs:{"href":"sms://2248149291"}},[_vm._v("(224) 814-9291")]),_c('br'),_vm._v("You can submit this profile before it is compleate to save your responses."),_c('br'),_vm._v("If your profile is already live, changes you make will be active imeadiatly.\n    "),_c('h3',{staticClass:"input-title"},[_vm._v("How did you find out about Owl Tutoring?")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.refferalSource),expression:"refferalSource"}],staticClass:"line-input form-field",attrs:{"type":"text","placeholder":"Jim Bob told me I would make a great Owl Tutor","id":"refferalSource"},domProps:{"value":(_vm.refferalSource)},on:{"input":function($event){if($event.target.composing){ return; }_vm.refferalSource=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Refferal Code")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      If you heard about owl tutoring from someone else and they gave you a code provide it here\n    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.refferalCode),expression:"refferalCode"}],staticClass:"form-field",attrs:{"placeholder":"code","type":"text","id":"refferalCode"},domProps:{"value":(_vm.refferalCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.refferalCode=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Biography")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      please write a paragraph about who you are and what you know. If you are a high school student you can list what relevant classes you have taken and what qualifications you have related to them. Essentially, you should explain why you are qualified to teach what you would like to teach. This will be part of your profile on our website.\n    ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.bio),expression:"bio"}],staticClass:"form-field paragraph-input",attrs:{"placeholder":"A paragraph description of information related to your Academic knowledge and teaching abilities","id":"bio"},domProps:{"value":(_vm.bio)},on:{"input":function($event){if($event.target.composing){ return; }_vm.bio=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Subjects")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      Select all applicable subjects and their sub categories. this information will be used to provide students with accurate and detailed search results. It will also be displayed as a comprehensive list of what you are qualified to teach.\n    ")]),_vm._v(" "),_c('subject-select',{attrs:{"subjectObj":_vm.subjectOptions,"selectedSubjects":_vm.selectedSubjects,"parent":"*"}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Subject Description")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      This is a short list that you beleive best describes what you are most qualified to teach. It will be one of the first things students see when searching for a tutor. It should be a comma seperated list starting with what you think you would like to focus your tutoring on.\n    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.subjectsDesc),expression:"subjectsDesc"}],staticClass:"form-field line-input",attrs:{"type":"text","placeholder":"","id":"subjectsDesc"},domProps:{"value":(_vm.subjectsDesc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.subjectsDesc=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Grade")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      Enter a number. If you are a college student enter a number coresponding to what year in school you are. for example, a freshman in college would enter 13\n    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.grade),expression:"grade"}],staticClass:"form-field",attrs:{"type":"number","placeholder":"11","id":"grade"},domProps:{"value":(_vm.grade)},on:{"input":function($event){if($event.target.composing){ return; }_vm.grade=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("School")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      Where do you go to school?\n    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.school),expression:"school"}],staticClass:"form-field",attrs:{"type":"text","placeholder":"Vernon Hills High School","id":"school"},domProps:{"value":(_vm.school)},on:{"input":function($event){if($event.target.composing){ return; }_vm.school=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Town")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      The town you will be tutoring in\n    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.town),expression:"town"}],staticClass:"form-field",attrs:{"type":"text","placeholder":"Vernon Hills","id":"town"},domProps:{"value":(_vm.town)},on:{"input":function($event){if($event.target.composing){ return; }_vm.town=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("State")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.usState),expression:"usState"}],staticClass:"form-field",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.usState=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.states),function(state){return _c('option',{domProps:{"value":state}},[_vm._v(_vm._s(state))])})),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Zip Code")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.zipCode),expression:"zipCode"}],staticClass:"form-field",attrs:{"type":"number","placeholder":"60061","id":"zipCode"},domProps:{"value":(_vm.zipCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.zipCode=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Experience")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      Write a short description of your what experience you have. (Ex. John has helped friends and family study for test and do homework all of his life. He has been a private tutor for 2 years.) This will also be part of your public profile \n    ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.experience),expression:"experience"}],staticClass:"form-field paragraph-input",attrs:{"placeholder":"Describe what experience you have","id":"experience"},domProps:{"value":(_vm.experience)},on:{"input":function($event){if($event.target.composing){ return; }_vm.experience=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Short Bio")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      Write a one line description of yourself. This is what clients will first see along with where you're located and what you teach when looking for a tutor    \n    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.shortBio),expression:"shortBio"}],staticClass:"line-input form-field",attrs:{"type":"text","placeholder":"One Sentenece describing yourself","id":"shortBio"},domProps:{"value":(_vm.shortBio)},on:{"input":function($event){if($event.target.composing){ return; }_vm.shortBio=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Other Info")]),_vm._v(" "),_c('p',{staticClass:"input-description"},[_vm._v("\n      please write any other information you would like us to know here. This information will not be part of your public profile.\n    ")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.otherInfo),expression:"otherInfo"}],staticClass:"paragraph-input form-field",attrs:{"type":"text","placeholder":"any other information","id":"otherInfo"},domProps:{"value":(_vm.otherInfo)},on:{"input":function($event){if($event.target.composing){ return; }_vm.otherInfo=$event.target.value}}}),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Resume")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',{staticClass:"input-title"},[_vm._v("Profile Photo")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('button',{staticClass:"plain-button",on:{"click":function($event){_vm.update(false)}}},[_vm._v("Save Changes")]),_vm._v(" "),_c('button',{staticClass:"color-button",on:{"click":function($event){_vm.update(true)}}},[_vm._v("Submit Profile")])],1),_vm._v(" "),_c('div',{staticClass:"after-margin"})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"input-description"},[_vm._v("\n      If you have a resume or would like to provide us information about your qualifications and past work experience please email this information from the email you used to create your account to "),_c('a',{attrs:{"href":"mailto:general@owltutoring.co"}},[_vm._v("general@owltutoring.co")]),_vm._v(".\n    ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"input-description"},[_vm._v("\n      Please also email a photo to be used for your public profile to "),_c('a',{attrs:{"href":"mailto:general@owltutoring.co"}},[_vm._v("general@owltutoring.co")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "oiAU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oq3Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__ = __webpack_require__("SCW7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_SubjectTypesStore__ = __webpack_require__("3f0r");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








__WEBPACK_IMPORTED_MODULE_4_vue__["a" /* default */].component("tutor-subjects", {
  props: ["subjectObj", "selectedSubjects", "parent"],
  template: "<div ><div v-for=\"subject in subjectObj.sublist\">  <div v-if=\"selectedSubjects[parent +':'+ subject.subject.toLowerCase()]\">{{subject.subject}}</div>  <tutor-subjects class=\"indent-list\" v-if=\"subject.sublist != null && selectedSubjects[parent +':'+ subject.subject.toLowerCase()]\" :subjectObj=\"subject\" :selectedSubjects=\"selectedSubjects\" :parent=\"parent +':'+ subject.subject.toLowerCase()\"/></div></div>"
});

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["tutor"],
  name: "Tutor",
  data: function () {
    return {
      expanded: false,
      AccountStore: __WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data,
      showLoginSignup: false,
      subjectOptions: __WEBPACK_IMPORTED_MODULE_5__stores_SubjectTypesStore__["a" /* default */].data.subjects
    };
  },
  computed: {
    nextParams: function () {
      return "?connectAccountID=" + this.tutor.ID;
    },
    subjectList: function () {
      return this.parseSubjectDataString(this.tutor.subjects);
    },
    formatedPhone: function () {
      var phoneString = this.tutor.phone;
      return phoneString.length == "10" ? "(" + phoneString.substring(0, 3) + ") " + phoneString.substring(3, 6) + "-" + phoneString.substring(6, 10) : phoneString.substring(0, 1) + " (" + phoneString.substring(1, 4) + ") " + phoneString.substring(4, 7) + "-" + phoneString.substring(7, 11);
    }
  },
  methods: {
    parseSubjectDataString: function (string) {
      var newSubjects = {};
      if (string == null) {
        console.log("no subjects");
        return {};
      }
      var array = string.split(",");
      for (var entry in array) {
        if (array[entry] != "") {
          newSubjects[array[entry]] = true;
        }
      }
      console.log(newSubjects);
      return newSubjects;
    },
    chosseTutor: function () {
      var _this = this;

      // if logged in
      if (__WEBPACK_IMPORTED_MODULE_2__stores_AccountStore__["a" /* default */].data.account != null) {

        //conect account and redirect to sessions
        __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.addLoading();
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/connectAccounts", {
          token: localStorage.getItem("token"),
          otherID: this.tutor.ID
        }).then(function (response) {
          // JSON responses are automatically parsed.
          console.log(response);
          _this.$router.push({ path: 'Sessions', query: { addNew: true } });
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
        }).catch(function (e) {
          console.log(e);
          __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].methods.showMessage(e.response.data.message, true);
          __WEBPACK_IMPORTED_MODULE_3__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
          //this.errors.push(e)
        });
      } else {
        this.showLoginSignup = true;
      }
    },
    moreInfo: function () {
      this.expanded = true;
    },
    toggleMore: function () {
      console.log(this.expanded);
      if (this.expanded) {
        this.expanded = false;
      } else {
        this.expanded = true;
      }
    }
  }
});

function creatListString(list) {
  /*
  var listString = "";
   for (var i = 0; i < list.length; i++) {
    if (i == list.length - 1 && list.length > 1) {
      listString += "and ";
    }
    listString += list[i].S;
    if (i < list.length - 1) {
      if (list.length > 2) {
        listString += ", ";
      } else {
        listString += " ";
      }
    }
  }
  */
  return list;
}

/***/ }),

/***/ "qDI4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_AccountStore__ = __webpack_require__("+eqk");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      AccountStore: __WEBPACK_IMPORTED_MODULE_1__stores_AccountStore__["a" /* default */].data
    };
  },
  created: function () {
    document.title = "Account - Owl Tutoring";
    console.log(__WEBPACK_IMPORTED_MODULE_1__stores_AccountStore__["a" /* default */]);
    if (__WEBPACK_IMPORTED_MODULE_1__stores_AccountStore__["a" /* default */].data.account == null) {
      __WEBPACK_IMPORTED_MODULE_1__stores_AccountStore__["a" /* default */].methods.refreshAccount();
    }
  },
  computed: {
    formatedPhone: function () {
      var phoneString = __WEBPACK_IMPORTED_MODULE_1__stores_AccountStore__["a" /* default */].data.account.phone;
      return phoneString.length == "10" ? "(" + phoneString.substring(0, 3) + ") " + phoneString.substring(3, 6) + "-" + phoneString.substring(6, 10) : phoneString.substring(0, 1) + " (" + phoneString.substring(1, 4) + ") " + phoneString.substring(4, 7) + "-" + phoneString.substring(7, 11);
    }
  }
});

/***/ }),

/***/ "thhY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "u0db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-margin-container"},[_c('div',{staticClass:"signup-grid"},[_c('h1',[_vm._v("Sign Up")]),_vm._v(" "),_c('h4',{attrs:{"id":"message"}}),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.accountType),expression:"accountType"}],staticClass:"form-field",attrs:{"id":"accountType"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.accountType=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"null"}},[_vm._v("Select Account Type")]),_vm._v(" "),_c('option',{attrs:{"value":"Client"}},[_vm._v("Client")]),_vm._v(" "),_c('option',{attrs:{"value":"Tutor"}},[_vm._v("Tutor")])]),_vm._v(" "),(_vm.accountType == 'Client')?_c('div',{attrs:{"id":"parent-select"}},[_vm._v("\n      Are you a parent?\n      "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.isParent),expression:"isParent"}],staticClass:"hidden-radio",attrs:{"id":"no","name":"isParent","type":"radio"},domProps:{"value":false,"checked":_vm._q(_vm.isParent,false)},on:{"change":function($event){_vm.isParent=false}}}),_vm._v(" "),_c('label',{attrs:{"for":"no"}},[_vm._v("No")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.isParent),expression:"isParent"}],staticClass:"hidden-radio",attrs:{"id":"yes","name":"isParent","type":"radio"},domProps:{"value":true,"checked":_vm._q(_vm.isParent,true)},on:{"change":function($event){_vm.isParent=true}}}),_vm._v(" "),_c('label',{attrs:{"for":"yes"}},[_vm._v("Yes")])]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.firstName),expression:"firstName"}],staticClass:"form-field",attrs:{"placeholder":"First name","id":"firstName"},domProps:{"value":(_vm.firstName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.firstName=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.lastName),expression:"lastName"}],staticClass:"form-field",attrs:{"placeholder":"Last name","id":"lastName"},domProps:{"value":(_vm.lastName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.lastName=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-field wide-input",attrs:{"placeholder":"Email","id":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phone),expression:"phone"}],staticClass:"form-field wide-input",attrs:{"placeholder":"Phone (000) 000-0000","id":"phone","type":"phone"},domProps:{"value":(_vm.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.phone=$event.target.value}}}),_vm._v(" "),_c('label',{staticClass:"checkbox-desc wide-input",attrs:{"for":"text-notifications"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.textNotifications),expression:"textNotifications"}],attrs:{"type":"checkbox","id":"text-notifications"},domProps:{"checked":Array.isArray(_vm.textNotifications)?_vm._i(_vm.textNotifications,null)>-1:(_vm.textNotifications)},on:{"change":function($event){var $$a=_vm.textNotifications,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.textNotifications=$$a.concat([$$v]))}else{$$i>-1&&(_vm.textNotifications=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.textNotifications=$$c}}}}),_vm._v(" Receive text message session reminders")]),_vm._v(" "),_c('label',{staticClass:"checkbox-desc wide-input",attrs:{"for":"email-notifications"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.emailNotifications),expression:"emailNotifications"}],attrs:{"type":"checkbox","id":"email-notifications"},domProps:{"checked":Array.isArray(_vm.emailNotifications)?_vm._i(_vm.emailNotifications,null)>-1:(_vm.emailNotifications)},on:{"change":function($event){var $$a=_vm.emailNotifications,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.emailNotifications=$$a.concat([$$v]))}else{$$i>-1&&(_vm.emailNotifications=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.emailNotifications=$$c}}}}),_vm._v(" Receive email session reminders")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-field wide-input",attrs:{"placeholder":"Password","id":"password","type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmPassword),expression:"confirmPassword"}],staticClass:"form-field wide-input",attrs:{"placeholder":"Confirm password","id":"confirmPassword","type":"password"},domProps:{"value":(_vm.confirmPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.confirmPassword=$event.target.value}}}),_vm._v(" "),(_vm.isParent && _vm.accountType == 'Client')?_c('div',{staticClass:"wide-input"},[_vm._l((_vm.students),function(student,index){return _c('div',{staticClass:"child-grid"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.students[index]),expression:"students[index]"}],staticClass:"form-field child",attrs:{"placeholder":"Child's Name","id":"student"},domProps:{"value":(_vm.students[index])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.students, index, $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"color-button remove-button",on:{"click":function($event){_vm.removeStudent(index)}}},[_vm._v("remove")])])}),_vm._v(" "),_c('button',{staticClass:"plain-button",on:{"click":function($event){_vm.addStudent()}}},[_vm._v("Add Child")])],2):_vm._e(),_vm._v(" "),_c('button',{staticClass:"color-button wide-input",attrs:{"id":"signUp"},on:{"click":function($event){_vm.signUp()}}},[_vm._v("SignUp")])]),_vm._v(" "),_c('div',{staticClass:"after-margin"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "uK6g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Account_vue__ = __webpack_require__("qDI4");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_744091ff_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Account_vue__ = __webpack_require__("4i+9");
function injectStyle (ssrContext) {
  __webpack_require__("WQRw")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-744091ff"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Account_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_744091ff_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Account_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "unqF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wzuB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_SubjectTypesStore__ = __webpack_require__("3f0r");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Tutor-search',
  props: {
    subject: {
      default: ""
    },
    zipCode: {
      default: ""
    },
    distance: {
      default: 5
    }
  },
  data: function () {
    return {
      subjectVal: this.subject,
      zipCodeVal: this.zipCode,
      distanceVal: this.distance
    };
  },
  created: function () {
    console.log(this.$route.query.tutorID);
  },
  computed: {
    requestString: function () {
      var querys = [];
      if (this.zipCodeVal != null && this.zipCodeVal != "") {
        querys.push("zipCode=" + this.zipCodeVal);
      }
      if (this.distanceVal != null && this.distanceVal != "") {
        querys.push("distance=" + this.distanceVal);
      }
      if (this.subjectVal != null && this.subjectVal != "") {
        querys.push("subject=" + this.subjectVal.toLowerCase());
      }
      var queryString = "";
      for (var i = 0; i < querys.length; i++) {
        if (i == 0) {
          queryString += "?";
        } else {
          queryString += "&";
        }
        queryString += querys[i];
      }
      return queryString;
    }
  }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__ = __webpack_require__("+eqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__ = __webpack_require__("QuE0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__ = __webpack_require__("SCW7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





window.onscroll = function () {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  if (distanceY > 70) {
    document.getElementById("nav-logo").classList.add("small-logo");
    document.getElementById("head").classList.add("shrunk-head");
    document.getElementById("nav-title").classList.add("shrunk-title");
  }
  if (distanceY < 20) {
    document.getElementById("nav-logo").classList.remove("small-logo");
    document.getElementById("head").classList.remove("shrunk-head");
    document.getElementById("nav-title").classList.remove("shrunk-title");
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "app",
  data: function () {
    return {
      AccountStore: __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].data,
      messageStore: __WEBPACK_IMPORTED_MODULE_1__stores_MessageStore__["a" /* default */].data,
      LoadingStateStore: __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].data,
      year: new Date().getFullYear(),
      showPopUp: true,
      showMenu: true
    };
  },
  methods: {
    toggleMenu: function () {
      console.log(this.showMenu);
      if (this.showMenu) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    },
    logout: function () {
      __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].methods.logout();
    },
    adjustSize() {
      console.log("adjust");
      if (window.matchMedia("(max-device-width: 480px)").matches) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    }
  },
  created: function () {
    __WEBPACK_IMPORTED_MODULE_2__stores_LoadingStateStore__["a" /* default */].methods.removeLoading();
    __WEBPACK_IMPORTED_MODULE_0__stores_AccountStore__["a" /* default */].methods.refreshAccount();

    this.adjustSize(); // Call listener function at run time
    window.matchMedia("(max-device-width: 480px)").addListener(this.adjustSize); // Attach listener function on state changes
  }
});

/***/ }),

/***/ "xJsL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__("nKb+");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2eefa12_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__("jZnC");
function injectStyle (ssrContext) {
  __webpack_require__("M8iA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2eefa12_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xVQp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Session_vue__ = __webpack_require__("iE3y");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_391d947a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Session_vue__ = __webpack_require__("C7sY");
function injectStyle (ssrContext) {
  __webpack_require__("NpN7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-391d947a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Session_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_391d947a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Session_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "y8OE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yEaH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.4de43d9eaa4c405a8364.js.map