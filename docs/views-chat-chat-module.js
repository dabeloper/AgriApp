(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chat-chat-module"],{

/***/ "./src/app/views/chat/chat-contents/chat-contents.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/chat/chat-contents/chat-contents.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContentsComponent", function() { return ChatContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/views/chat/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};











var _c0 = ["msgForm"];
var _c1 = ["msgInput"];
function ChatContentsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r228.activeContact == null ? null : ctx_r228.activeContact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r228.activeContact == null ? null : ctx_r228.activeContact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r228.activeContact == null ? null : ctx_r228.activeContact.name);
} }
function ChatContentsComponent_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r235.user == null ? null : ctx_r235.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r235.user == null ? null : ctx_r235.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r235.user == null ? null : ctx_r235.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, chat_r234.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r234.text);
} }
function ChatContentsComponent_div_5_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r236.activeContact == null ? null : ctx_r236.activeContact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, chat_r234.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r234.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r236.activeContact == null ? null : ctx_r236.activeContact.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r236.activeContact == null ? null : ctx_r236.activeContact.name);
} }
function ChatContentsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentsComponent_div_5_div_1_div_1_Template, 11, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatContentsComponent_div_5_div_1_div_2_Template, 11, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r234 = ctx.$implicit;
    var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r234.contactId !== ctx_r233.activeContact.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r234.contactId === ctx_r233.activeContact.id);
} }
var _c2 = function () { return { suppressScrollX: true }; };
function ChatContentsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentsComponent_div_5_div_1_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r229.chatCollection == null ? null : ctx_r229.chatCollection.chats);
} }
function ChatContentsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatContentsComponent_div_6_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242); var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r241.sendMessage($event); })("keyup.enter", function ChatContentsComponent_div_6_Template_form_keyup_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242); var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r243.sendMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatContentsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 35);
} }
var _c3 = function () { return { scale: ".2", delay: "400ms", duration: "400ms" }; };
var _c4 = function (a1) { return { value: "*", params: a1 }; };
var _c5 = function () { return { y: "120px", delay: "600ms", duration: "400ms" }; };
function ChatContentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select a contact and start chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5)));
} }
var ChatContentsComponent = /** @class */ (function () {
    function ChatContentsComponent(chatService) {
        this.chatService = chatService;
        this.user = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.activeContact = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ChatContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for user update
        this.userUpdateSub = this.chatService.onUserUpdated.subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        // Listen for contact change
        this.chatSelectSub = this.chatService.onChatSelected.subscribe(function (res) {
            if (res) {
                _this.chatCollection = res.chatCollection;
                _this.activeContact = res.contact;
                _this.initMsgForm();
            }
        });
        // Listen for chat update
        this.chatUpdateSub = this.chatService.onChatsUpdated.subscribe(function (chat) {
            _this.chatCollection.chats.push(chat);
            _this.scrollToBottom();
        });
    };
    ChatContentsComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub) {
            this.userUpdateSub.unsubscribe();
        }
        if (this.chatSelectSub) {
            this.chatSelectSub.unsubscribe();
        }
        if (this.chatUpdateSub) {
            this.chatUpdateSub.unsubscribe();
        }
    };
    ChatContentsComponent.prototype.sendMessage = function (e) {
        var _this = this;
        var chat = {
            contactId: this.chatService.user.id,
            text: this.msgForm.form.value.message,
            time: new Date().toISOString()
        };
        this.chatCollection.chats.push(chat);
        this.chatService
            .updateChats(this.chatCollection.id, __spread(this.chatCollection.chats))
            .subscribe(function (res) {
            _this.initMsgForm();
        });
        // Only for demo purpose
        this.chatService.autoReply({
            contactId: this.activeContact.id,
            text: "Hi, I'm " + this.activeContact.name + ". Your imaginary friend.",
            time: new Date().toISOString()
        });
    };
    ChatContentsComponent.prototype.initMsgForm = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgForm.reset();
            _this.msgInput.first.nativeElement.focus();
            _this.scrollToBottom();
        });
    };
    ChatContentsComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.psContainer.update();
            _this.psContainer.scrollToBottom(0, 400);
        });
    };
    ChatContentsComponent.ɵfac = function ChatContentsComponent_Factory(t) { return new (t || ChatContentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
    ChatContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatContentsComponent, selectors: [["app-chat-contents"]], viewQuery: function ChatContentsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.psContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgForm = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.msgInput = _t);
        } }, inputs: { matSidenav: "matSidenav" }, decls: 9, vars: 5, consts: [[1, "d-flex", "pl-3", "pr-3", "pt-2", "pb-2", "o-hidden", "box-shadow-1", "chat-topbar"], ["appSidebarToggler", "chat-sidebar", 1, "link-icon", "d-md-none"], [1, "icon-regular", "i-Right", "ml-0", "mr-3"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "chat-content rtl-ps-none", 3, "perfectScrollbar", 4, "ngIf"], ["class", "pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area", 4, "ngIf"], ["class", "spinner-glow spinner-glow-warning", 4, "ngIf"], ["class", "app-inro-circle", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "avatar-sm", "rounded-circle", "mr-2", 3, "src", "alt"], [1, "m-0", "text-title", "text-16", "flex-grow-1"], [1, "chat-content", "rtl-ps-none", 3, "perfectScrollbar"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], ["class", "d-flex user", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex", "user"], [1, "avatar-sm", "rounded-circle", "mr-3", 3, "src", "alt"], [1, "message", "flex-grow-1"], [1, "d-flex"], [1, "mb-1", "text-title", "text-16", "flex-grow-1"], [1, "text-small", "text-muted"], [1, "m-0"], [1, "avatar-sm", "rounded-circle", "ml-3", 3, "src", "alt"], [1, "pl-3", "pr-3", "pt-3", "pb-3", "box-shadow-1", "chat-input-area"], [1, "inputForm", 3, "ngSubmit", "keyup.enter"], ["msgForm", "ngForm"], [1, "form-group"], ["ngModel", "", "placeholder", "Type your message", "name", "message", "id", "message", "cols", "30", "rows", "3", 1, "form-control", "form-control-rounded"], ["msgInput", ""], [1, "flex-grow-1"], [1, "btn", "btn-icon", "btn-rounded", "btn-primary", "mr-2"], [1, "i-Paper-Plane"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-primary"], [1, "i-Add-File"], [1, "spinner-glow", "spinner-glow-warning"], [1, "app-inro-circle"], [1, "border", "rounded-circle", "big-bubble"], [1, "i-Speach-Bubbles"], [1, "text-16"]], template: function ChatContentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatContentsComponent_div_4_Template, 4, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatContentsComponent_div_5_Template, 2, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatContentsComponent_div_6_Template, 12, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatContentsComponent_div_7_Template, 1, 0, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatContentsComponent_div_8_Template, 5, 8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeContact == null ? null : ctx.activeContact.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chatService.loadingCollection && ctx.chatCollection);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatCollection && !ctx.chatService.loadingCollection);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatService.loadingCollection);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chatCollection && !ctx.chatService.loadingCollection);
        } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_5__["SidebarTogglerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYXQvY2hhdC1jb250ZW50cy9jaGF0LWNvbnRlbnRzLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]] } });
    return ChatContentsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-contents',
                templateUrl: './chat-contents.component.html',
                styleUrls: ['./chat-contents.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]]
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, { matSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSidenav']
        }], psContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]]
        }], msgInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['msgInput']
        }], msgForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['msgForm']
        }] }); })();


/***/ }),

/***/ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChatLeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLeftSidebarComponent", function() { return ChatLeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/views/chat/chat.service.ts");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_pipes_get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/get-value-by-key.pipe */ "./src/app/shared/pipes/get-value-by-key.pipe.ts");








var _c0 = function (a0, a1) { return { "border-bottom": a0, "online": a1 }; };
function ChatLeftSidebarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLeftSidebarComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224); var info_r221 = ctx.$implicit; var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r223.getChatByContact(info_r221.contactId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "getValueByKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "getValueByKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var info_r221 = ctx.$implicit;
    var i_r222 = ctx.index;
    var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, i_r222 != (ctx_r219.currentUser == null ? null : ctx_r219.currentUser.chatInfo.length) - 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, ctx_r219.contacts, info_r221.contactId, "status") === "online"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 8, ctx_r219.contacts, info_r221.contactId, "avatar"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r221.contactName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, info_r221.lastChatTime));
} }
var _c1 = function (a0) { return { online: a0 }; };
function ChatLeftSidebarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLeftSidebarComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); var contact_r225 = ctx.$implicit; var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r226.getChatByContact(contact_r225.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r225 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, contact_r225.status === "online"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", contact_r225.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r225.name);
} }
var _c2 = function () { return { suppressScrollX: true }; };
var ChatLeftSidebarComponent = /** @class */ (function () {
    function ChatLeftSidebarComponent(chatService) {
        this.chatService = chatService;
        this.isSidenavOpen = true;
        this.currentUser = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ChatLeftSidebarComponent.prototype.ngOnInit = function () {
        // this.chatService.onChatsUpdated
        //   .subscribe(updatedChats => {
        //     this.chats = updatedChats;
        //   });
        var _this = this;
        this.userUpdateSub = this.chatService.onUserUpdated
            .subscribe(function (updatedUser) {
            _this.currentUser = updatedUser;
        });
        this.loadDataSub = this.chatService.loadChatData()
            .subscribe(function (res) {
            _this.currentUser = _this.chatService.user;
            // this.chats = this.chatService.chats;
            _this.contacts = _this.chatService.contacts;
        });
    };
    ChatLeftSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub) {
            this.userUpdateSub.unsubscribe();
        }
        if (this.loadDataSub) {
            this.loadDataSub.unsubscribe();
        }
    };
    ChatLeftSidebarComponent.prototype.getChatByContact = function (contactId) {
        this.chatService.getChatByContact(contactId)
            .subscribe(function (res) {
            console.log('from sub', res);
        }, function (err) {
            console.log(err);
        });
    };
    ChatLeftSidebarComponent.ɵfac = function ChatLeftSidebarComponent_Factory(t) { return new (t || ChatLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
    ChatLeftSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatLeftSidebarComponent, selectors: [["app-chat-left-sidebar"]], decls: 13, vars: 4, consts: [[1, "border-right"], [1, "pt-2", "pb-2", "pl-3", "pr-3", "d-flex", "align-items-center", "o-hidden", "box-shadow-1", "chat-topbar"], ["appSidebarToggler", "chat-sidebar", 1, "link-icon", "d-md-none"], [1, "icon-regular", "ml-0", "mr-3", "i-Left"], [1, "form-group", "m-0", "flex-grow-1"], ["type", "text", "id", "search", "placeholder", "Search contacts", 1, "form-control", "form-control-rounded"], [1, "contacts-scrollable", "rtl-ps-none", 3, "perfectScrollbar"], [1, "mt-4", "pb-2", "pl-3", "pr-3", "font-weight-bold", "text-muted", "border-bottom"], ["class", "p-3 d-flex align-items-center contact", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-3", "pb-2", "pl-3", "pr-3", "font-weight-bold", "text-muted", "border-bottom"], ["class", "p-3 d-flex border-bottom align-items-center contact", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "p-3", "d-flex", "align-items-center", "contact", 3, "ngClass", "click"], ["alt", "", 1, "avatar-sm", "rounded-circle", "mr-3", 3, "src"], [1, "m-0"], [1, "text-muted", "text-small"], [1, "p-3", "d-flex", "border-bottom", "align-items-center", "contact", 3, "ngClass", "click"], [1, ""]], template: function ChatLeftSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatLeftSidebarComponent_div_9_Template, 10, 17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatLeftSidebarComponent_div_12_Template, 4, 5, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentUser == null ? null : ctx.currentUser.chatInfo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
        } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarTogglerDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_shared_pipes_get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_5__["GetValueByKeyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYXQvY2hhdC1sZWZ0LXNpZGViYXIvY2hhdC1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ChatLeftSidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatLeftSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-left-sidebar',
                templateUrl: './chat-left-sidebar.component.html',
                styleUrls: ['./chat-left-sidebar.component.scss']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/chat/chat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/views/chat/chat/chat.component.ts");





var routes = [
    {
        path: '',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
    ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ChatRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/views/chat/chat-routing.module.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/views/chat/chat/chat.component.ts");
/* harmony import */ var _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-left-sidebar/chat-left-sidebar.component */ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts");
/* harmony import */ var _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-contents/chat-contents.component */ "./src/app/views/chat/chat-contents/chat-contents.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");











var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
    ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]
            ]] });
    return ChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ChatLeftSidebarComponent"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
        src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                    src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]
                ],
                declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ChatLeftSidebarComponent"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/chat/chat.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: User, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ChatService.prototype.loadChatData = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.getAllContacts(), this.getAllChats(), this.getCurrentUser(), function (contacts, chats, user) {
            _this.contacts = contacts;
            _this.chats = chats;
            _this.user = user;
            // console.log('next.willCall')
            _this.onUserUpdated.next(user);
            // console.log('next.called')
            // console.log(
            //   "contacts:",
            //   contacts,
            //   "\n chats:",
            //   chats,
            //   "\n currUser:",
            //   user
            // );
        });
    };
    ChatService.prototype.getChatByContact = function (contactId) {
        var _this = this;
        this.loadingCollection = true;
        var chatInfo = this.user.chatInfo.find(function (chat) { return chat.contactId === contactId; });
        if (!chatInfo) {
            return this.createChatCollection(contactId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (chatColl) {
                return _this.getChatByContact(contactId);
            }));
        }
        return this.getAllChats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (chats) {
            var chatCollection = chats.find(function (chat) { return chat.id === chatInfo.chatId; });
            var contact = _this.contacts.find(function (contact) { return contact.id === contactId; });
            _this.onChatSelected.next({
                chatCollection: chatCollection,
                contact: contact
            });
            _this.loadingCollection = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(chatCollection);
        }));
    };
    ChatService.prototype.createChatCollection = function (contactId) {
        var _this = this;
        var contact = this.contacts.find(function (contact) { return contact.id === contactId; });
        var chatId = (Math.random() * 1000000000).toString();
        var chatCollection = {
            id: chatId,
            chats: []
        };
        var chatInfo = {
            chatId: chatId,
            lastChatTime: new Date(),
            contactId: contact.id,
            contactName: contact.name,
            unread: null
        };
        return this.http
            .post('api/chat-collections', __assign({}, chatCollection))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (updatedChatCollection) {
            _this.user.chatInfo.push(chatInfo);
            return _this.updateUser(_this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
                return _this.getCurrentUser()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                    _this.user = user;
                    // console.log(user)
                    _this.onUserUpdated.next(user);
                }));
                // return updatedChatCollection
            }));
        }));
    };
    ChatService.prototype.getAllContacts = function () {
        return this.http.get('api/contacts');
    };
    ChatService.prototype.getAllChats = function () {
        return this.http.get('api/chat-collections');
    };
    ChatService.prototype.getCurrentUser = function () {
        return this.http.get('api/chat-user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res[0]; }));
    };
    ChatService.prototype.updateUser = function (user) {
        return this.http.put("api/chat-user/" + user.id, __assign({}, user));
    };
    ChatService.prototype.updateChats = function (chatId, chats) {
        var chatCollection = {
            id: chatId,
            chats: chats
        };
        return this.http.put('api/chat-collections', chatCollection);
    };
    ChatService.prototype.autoReply = function (chat) {
        var _this = this;
        setTimeout(function () {
            _this.onChatsUpdated.next(chat);
        }, 1500);
    };
    ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
    return ChatService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/chat/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/chat/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-contents/chat-contents.component */ "./src/app/views/chat/chat-contents/chat-contents.component.ts");
/* harmony import */ var _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-left-sidebar/chat-left-sidebar.component */ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts");





var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 5, vars: 0, consts: [["appSidebarContainer", "", 1, "card", "chat-sidebar-container"], ["appSidebarContent", "", 1, "chat-content-wrap"], ["appSidebar", "chat-sidebar", 1, "chat-sidebar-wrap"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat-contents");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat-left-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarContainerDirective"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarContentDirective"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_2__["ChatContentsComponent"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ChatLeftSidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYXQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ChatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-chat-chat-module.js.map